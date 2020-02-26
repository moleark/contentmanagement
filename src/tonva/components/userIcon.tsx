import * as React from 'react';
import classNames from 'classnames';
import { nav } from './nav';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { userApi } from '../net';
import { User } from '../tool';

export type UserLoader = (userId:number)=>Promise<any>;

export class UserCache<T> {
	private loader: UserLoader;
	private map = observable(new Map<number, T>());

	constructor(loader: UserLoader) {
		if (loader === undefined) loader = (userId:number)=>userApi.user(userId);
		this.loader = loader;
	}

	getValue(id:number|any):any {
		if (id === null) return;
		switch (typeof(id)) {
			case 'object': 
				id = id.id; 
				if (!id) return;
				break;
		}
		if (this.map.has(id) === false) {
			this.map.set(id, null);
			this.loader(id).then(v => {
				if (!v) v = null;
				this.map.set(id, v);
			}).catch(reason => {
				console.error(reason);
			});
			return undefined;
		}
		let src = this.map.get(id);
		if (src === null) return;
		return src;
	}
}

const userCache = new UserCache(undefined);

export interface UserIconProps {
    id: number;
    className?: string;
    style?: React.CSSProperties;
    altImage?: string;
    noneImage?: any;
}

export const UserIcon = observer((props: UserIconProps):JSX.Element => {
    let {className, style, id, altImage, noneImage} = props;
    let user = userCache.getValue(id);
    if (!user) {
        return <div className={classNames(className, 'image-none')} style={style}>
            {noneImage || <i className="fa fa-file-o" />}
        </div>;
    }
    let {icon} = user;
    if (!icon) {
        return <div className={classNames(className, 'image-none')} style={style}>
            <i className="fa fa-file-o" />
        </div>;
    }
    if (icon.startsWith(':') === true) {
        icon = nav.resUrl + icon.substr(1);
    }
    return <img src={icon} className={className} alt="img"
        style={style}
        onError={evt=>{
            if (altImage) evt.currentTarget.src=altImage;
            else evt.currentTarget.src = 'https://tv.jkchemical.com/imgs/0001.png';
        }} />;
});

export interface UserViewProps {
    id: number;
    render: (user:User) => JSX.Element;
}

export const UserView = observer((props: UserViewProps):JSX.Element => {
    let {id, render} = props;
    let user = userCache.getValue(id);
    if (!user) {
        return <></>;
    }
    return render(user);
});
