import * as React from 'react';
import classNames from 'classnames';
import { Widget } from './widget';
import { UiIdItem, TempletType } from '../../schema';
import { observable } from 'mobx';

export class IdWidget extends Widget {
    protected get ui(): UiIdItem {return this._ui as UiIdItem};
    @observable protected value:number;
    setReadOnly(value:boolean) {this.readOnly = value}
    setDisabled(value:boolean) {this.disabled = value}    

    protected onClick = async () => {
        let pickId = this.ui && this.ui.pickId;
        if (pickId === undefined) {
            alert('no pickId defined!');
            return;
        }
        let id = await pickId(this.context, this.name, this.value);        
        this.setDataValue(id);
        this.clearError();
        this.clearContextError();
        this.checkRules();
    }

    render() {
        let placeholder:string|JSX.Element, Templet: TempletType;
        if (this.ui !== undefined) {
            placeholder = this.ui.placeholder;
            Templet = this.ui.Templet;
        }
        let cn:any = {
            'form-control': true,
            'required-item': this.itemSchema.required === true,
            'cursor-pointer': true,
            'is-invalid': this.hasError,
        };
        let content;
        if (this.value === undefined || this.value === null) {
            content = placeholder || <small className="text-muted">[无]</small>;
            cn['text-muted'] = true;
        }
        else if (Templet === undefined) {
            let c: any;
            if (this.value === null) {
                c = 'null';
            }
            else {
                switch (typeof this.value) {
                    case 'undefined': c = <small className="text-muted">[无]</small>; break;
                    case 'object': c = (this.value as any).id; break;
                    default: c = this.value; break;
                }
            }
            content = <>{c}</>;
        }
        else if (typeof Templet === 'function') {
            content = Templet(this.value);
        }
        else {
            content = Templet;
        }
        return <>
            <div className={classNames(cn)} onClick={this.onClick}>{content}</div>
            {this.renderErrors()}
        </>;
    }
}
