import * as React from 'react';
import { IValuesView, IValuesViewRenderOptions } from '../../components';
import { Tag, TagValue } from './tag';

const radioStyle:React.CSSProperties = {height: 'auto'};

export class TagView implements IValuesView {
	private tag: Tag;
	constructor(tag: Tag) {
		this.tag = tag;
	}
	render(values: number|string):JSX.Element {
		let names:string[];
		if (typeof values === 'number') {
			names = [this.tag.nameFromId(values)];
		}
		else {
			names = this.tag.namesFromIds(values);
		}
		return <div className="d-flex flex-wrap ">{names.map((name, index)=>{
			return <div className="mx-2 border border-muted rounded px-3 bg-light">{name}</div>
		})}</div>;
	}
	renderRadios(value: number, options: IValuesViewRenderOptions): JSX.Element {
        let content = this.tag.values.map((item,index) => {
			return <div className="col" key={index}>{this.renderRadio(item, value, options)}</div>;
        });
		return this.renderView(options, content);
	}
	renderChecks(values: string, options: IValuesViewRenderOptions): JSX.Element {
		let arr = values?.split('|').map(v => Number(v));
		let content = this.tag.values.map((item,index) => {
			let checked: boolean = arr?.indexOf(item.id)>=0;
			return <div className="col" key={index}>{this.renderCheck(item, checked, options)}</div>
		});
		return this.renderView(options, content);
	}
	private renderView(options: IValuesViewRenderOptions, content:any) {
		let {className} = options;
		return <div className={className} style={radioStyle}>
			<div className="row row-cols-2 row-cols-sm-3 row-cols-md-4">
                {content}
			</div>
        </div>;
	}
	private renderRadio(item:TagValue, value: number, options: IValuesViewRenderOptions):JSX.Element {
		let {id, name, ext} = item;
		let {inputs, inputName, onInputChange} = options;
		let ref = inputs && ((input:HTMLInputElement)=>inputs[id]=input);
		return <label className="form-radio-inline">
			<input ref={ref} type="radio" name={inputName}
				value={id} defaultChecked={value===id}
				onChange={onInputChange} />
			{name}
		</label>;
	}

	private renderCheck(item:TagValue, checked: boolean, options: IValuesViewRenderOptions):JSX.Element {
		let {id, name, ext} = item;
		let {inputs, onInputChange} = options;
		let ref = inputs && ((input:HTMLInputElement)=>inputs[id]=input);
		return <label className="form-radio-inline">
			<input ref={ref} type="checkbox"
				value={id} defaultChecked={checked}
				onChange={onInputChange} />
			{name}
		</label>;
	}
}
