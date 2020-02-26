import * as React from 'react';
import _ from 'lodash';
import {nav} from './nav';
import {Page} from './page';
import { User, env } from '../tool';
import { resOptions } from './res';

export interface ConfirmOptions {
    caption?: string;
    message: string | JSX.Element;
    classNames?: string;
    ok?: string;
    yes?: string;
    no?: string;
}

export abstract class Controller {
    readonly res: any;
	readonly x: any;
	private _t: any = {};
	readonly t: (str:string)=>any;
    icon: string|JSX.Element;
    label:string;
    readonly isDev:boolean = env.isDevelopment;
    get user():User {return nav.user}
    get isLogined():boolean {
        let {user} = nav;
        if (user === undefined) return false;
        return user.id > 0;
    }
    constructor(res:any) {
        this.res = res || {};
		this.x = this.res.x || {};
		this.t = (str:string):any => this.internalT(str) || str;
	}

	internalT(str:string):any {
		return this._t[str];
	}
	
	protected setRes(res:any) {
		if (res === undefined) return;
		let {$lang, $district} = resOptions;
		_.merge(this._t, res);
		if ($lang !== undefined) {
			let l = res[$lang];
			if (l !== undefined) {
				_.merge(this._t, l);
				let d = l[$district];
				if (d !== undefined) {
					_.merge(this._t, d);
				}
			}
		}		
	}

    private receiveHandlerId:number;
    private disposer:()=>void;

    private dispose() {
        // message listener的清理
        nav.unregisterReceiveHandler(this.receiveHandlerId);
        this.onDispose();
    }

    protected onDispose() {
    }

    protected async openVPage<C extends Controller>(vp: new (controller: C)=>VPage<C>, param?:any):Promise<void> {
        await (new vp((this as any) as C)).open(param);
    }

    protected renderView<C extends Controller>(view: new (controller: C)=>View<C>, param?:any) {
        return (new view((this as any) as C)).render(param);
    }

    async event(type:string, value:any) {
        await this.onEvent(type, value);
    }

    protected async onEvent(type:string, value:any) {
    }

    protected msg(text:string) {
        alert(text);
    }
    protected errorPage(header:string, err:any) {
        this.openPage(<Page header="App error!">
            <pre>
                {typeof err === 'string'? err : err.message}
            </pre>
        </Page>);
    }

    protected onMessage(message:any):Promise<void> {
        return;
    }

    private onMessageReceive = async (message:any):Promise<void> => {
        await this.onMessage(message);
    }

    protected async beforeStart():Promise<boolean> {
        /*
        console.log('this.receiveHandlerId = nav.registerReceiveHandler(this.onMessageReceive);');
        this.receiveHandlerId = nav.registerReceiveHandler(this.onMessageReceive);
        console.log('return true');
        */
        return true;
    }
    protected registerReceiveHandler() {
        this.receiveHandlerId = nav.registerReceiveHandler(this.onMessageReceive);
    }

    protected abstract internalStart(param?:any, ...params:any[]):Promise<void>;
    async start(param?:any, ...params:any[]):Promise<void> {
        this.disposer = this.dispose.bind(this);
        this.registerReceiveHandler();
        let ret = await this.beforeStart();
        if (ret === false) return;
        await this.internalStart(param, ...params);
    }

    get isCalling():boolean {return this._resolve_$ !== undefined}

    private _resolve_$:((value:any) => void)[];
    async call<T>(param?:any, ...params:any[]):Promise<T> {
        if (this._resolve_$ === undefined) this._resolve_$ = [];
        return new Promise<T> (async (resolve, reject) => {
            this._resolve_$.push(resolve);
            await this.start(param, ...params);
        });
    }

    async vCall<C extends Controller>(vp: new (controller: C)=>VPage<C>, param?:any):Promise<any> {
        if (this._resolve_$ === undefined) this._resolve_$ = [];
        return new Promise<any> (async (resolve, reject) => {
            this._resolve_$.push(resolve);
            await (new vp(this as any)).open(param);
        });
    }

    returnCall(value:any) {
        if (this._resolve_$ === undefined) return;
        let resolve = this._resolve_$.pop();
        if (resolve === undefined) {
            alert('the Controller call already returned, or not called');
            return;
        }
        resolve(value);
    }

    openPage(page:JSX.Element) {
        nav.push(page, this.disposer);
        this.disposer = undefined;
    }

    replacePage(page:JSX.Element) {
        nav.replace(page, this.disposer);
        this.disposer = undefined;
    }

    backPage() {
        nav.back();
    }

    closePage(level?:number) {
        nav.pop(level);
    }

    ceasePage(level?:number) {
        nav.ceaseTop(level);
    }

    removeCeased() {
        nav.removeCeased();
    }

    regConfirmClose(confirmClose: ()=>Promise<boolean>) {
        nav.regConfirmClose(confirmClose);
    }

    async confirm(options: ConfirmOptions): Promise<'ok'|'yes'|'no'|undefined> {
        return new Promise<'ok'|'yes'|'no'|undefined> (async (resolve, reject) => {
            let {caption, message, ok, yes, no, classNames} = options;
            let close = (res:'ok'|'yes'|'no'|undefined) => {
                this.closePage();
                resolve(res);
            }
            let buttons:any[] = [];
            if (ok !== undefined) {
                buttons.push(<button key="ok" className="btn btn-primary mr-3" onClick={()=>close('ok')}>{ok}</button>);
            }
            if (yes !== undefined) {
                buttons.push(<button key="yes" className="btn btn-success mr-3" onClick={()=>close('yes')}>{yes}</button>);
            }
            if (no !== undefined) {
                buttons.push(<button key="no" className="btn btn-outline-danger mr-3" onClick={()=>close('no')}>{no}</button>);
            }
            this.openPage(<Page header={caption || '请确认'} back="close">
                <div className={classNames || "rounded bg-white m-5 p-3 border"}>
                    <div className="d-flex align-items-center justify-content-center">
                        {message}
                    </div>
                    <div className="mt-3 d-flex align-items-center justify-content-center">
                        {buttons}
                    </div>
                </div>
            </Page>);
            nav.regConfirmClose(async ():Promise<boolean> => {
                resolve(undefined);
                return true;
            });
        });
    }
}

export abstract class View<C extends Controller> {
    protected controller: C;
    protected readonly res: any;
	protected readonly x: any;
	protected readonly t: (str:string)=>any;

    constructor(controller: C) {
        this.controller = controller;
        this.res = controller.res;
		this.x = controller.x;
		this.t = controller.t;
    }

    protected get isDev() {return  env.isDevelopment}

    abstract render(param?:any): JSX.Element;

    protected renderVm(vm: new (controller: C)=>View<C>, param?:any) {
        return (new vm(this.controller)).render(param);
    }

    protected async openVPage(vp: new (controller: C)=>VPage<C>, param?:any):Promise<void> {
        await (new vp(this.controller)).open(param);
    }

    protected async event(type:string, value?:any) {
        /*
        if (this._resolve_$_ !== undefined) {
            await this._resolve_$_({type:type, value:value});
            return;
        }*/
        await this.controller.event(type, value);
    }

    async vCall<C extends Controller>(vp: new (controller: C)=>VPage<C>, param?:any):Promise<any> {
        return await this.controller.vCall(vp, param);
    }

    protected returnCall(value:any) {
        this.controller.returnCall(value);
    }

    protected openPage(view: React.StatelessComponent<any>, param?:any) {
        let type = typeof param;
        if (type === 'object' || type === 'undefined') {
            this.controller.openPage(React.createElement(view, param));
        }
        else {
            this.controller.openPage(<Page header="param type error">
                View.openPage param must be object, but here is {type}
            </Page>);
        }
    }

    protected replacePage(view: React.StatelessComponent<any>, param?:any) {
        this.controller.replacePage(React.createElement(view, param));
    }

    protected openPageElement(page: JSX.Element) {
        this.controller.openPage(page);
    }

    protected replacePageElement(page: JSX.Element) {
        this.controller.replacePage(page);
    }

    protected backPage() {
        this.controller.backPage();
    }

    protected closePage(level?:number) {
        this.controller.closePage(level);
    }

    protected ceasePage(level?:number) {
        this.controller.ceasePage(level);
    }

    protected removeCeased() {
        this.controller.removeCeased();
    }

    protected regConfirmClose(confirmClose: ()=>Promise<boolean>) {
        this.controller.regConfirmClose(confirmClose);
    }
}

export abstract class VPage<C extends Controller> extends View<C> {
    abstract open(param?:any):Promise<void>;

    render(param?:any):JSX.Element {return null;}
}

export type TypeVPage<C extends Controller> = new (controller: C)=>VPage<C>;
