import * as React from 'react';
import { ItemSchema, UiItem, UiSelectBase } from '../schema';
import { nav } from '../nav';
import { observable } from 'mobx';
import { FieldRule } from '../form/rules';
import { Image } from '../image';

export abstract class ItemEdit {
	protected name: string;
	protected _itemSchema: ItemSchema;
    get itemSchema(): ItemSchema {return this._itemSchema}
    protected _uiItem:UiItem;
    get uiItem():UiItem {return this._uiItem}
    value: any;
    label: string;

    @observable protected error: string;
    @observable protected isChanged: boolean = false;
    protected newValue: any;

    constructor(itemSchema: ItemSchema, uiItem:UiItem, label:string, value: any) {
        this._itemSchema = itemSchema;
        this._uiItem = uiItem
        this.value = value;
        let {name} = itemSchema;
        this.name = name;
        this.label = label;
	}
	
	init() {		
	}

    async start():Promise<any> {
        return await this.internalStart();
    }

    protected abstract internalStart():Promise<any>;

    async end():Promise<any> {
        await this.internalEnd()
    }

	renderContent() {		
        let {name, type, required} = this._itemSchema;
        let divValue:any;
        let uiItem = this._uiItem;
        let label:string;
        if (uiItem === undefined) {
            label = name;
        }
        else {
            label = uiItem.label;
            let templet = uiItem.Templet;
            if (templet !== undefined) {
                if (typeof templet === 'function')
                    divValue = <b>{templet(this.value)}</b>;
                else
                    divValue = <b>{templet}</b>;
            }
            else if (this.value !== undefined) {
                switch (uiItem.widget) {
                    case 'radio':
                    case 'select':
                        let {list} = uiItem as UiSelectBase;
                        divValue = <b>{list.find(v => v.value === this.value).title}</b>;
                        break;
                    case 'id':
                        divValue = <b>no templet for {name}={this.value}</b>
                        break;
                }
            }
        }
        if (divValue === undefined) {
            switch (type) {
                default:
                    divValue = this.value? <b>{this.value}</b> : <small className="text-muted">(无)</small>;
                    break;
                case 'image':
                    divValue = <Image className="w-4c h-4c" src={this.value} />;
                    break;
            }
		}
		return divValue;
		/*
        let requireFlag = required===true && <span className="text-danger">*</span>;
		return <div className={'d-flex align-items-center' + this.rowContainerClassName} 
			onClick={async ()=>await this.rowClick(itemSchema, uiItem, label, this.value)}>
            <div>{label} {requireFlag}</div>
            <div className="flex-fill d-flex justify-content-end">{divValue}</div>
            {this.props.stopEdit!==true && <div className="w-2c text-right"><i className="fa fa-angle-right" /></div>}
        </div>;
		//return this.value? <b>{this.value}</b> : <small className="text-muted">(无)</small>;
		*/
	}

    protected async internalEnd():Promise<void> {nav.pop()}

    protected verifyValue() {
        if (this.uiItem === undefined) return;
        let {rules} = this.uiItem;
        if (rules === undefined) return;
        let nv = this.newValue;
        function verifyRule(rule:FieldRule, value: any):string {
            let error = rule(nv);
            if (error !== undefined) {
                if (typeof error !== 'object')
                    return error;
                else
                    return JSON.stringify(error);
            }
        }
        if (Array.isArray(rules)) {
            for (let rule of rules) {
                let error = verifyRule(rule as FieldRule, nv);
                if (error !== undefined) {
                    this.error = error;
                    break;
                }
            }
        }
        else {
            this.error = verifyRule(rules as FieldRule, nv);
        }
    }
}
