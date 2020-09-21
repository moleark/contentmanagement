import * as React from 'react';
import { VPage, TabCaptionComponent, RootTabs } from 'tonva';
import { CApp } from '../CApp';
const color = (selected: boolean) => selected === true ? 'text-primary' : 'text-muted';

export class VMain extends VPage<CApp> {
    async open(param?: any) {
        this.openPage(this.render);
    }
    // opensrc = () => {
    //     window.open(setting.downloadAppurl);
    // }

    render = (param?: any): JSX.Element => {
        let { cMe, cPosts, cMedia, cPage } = this.controller;
        let faceTabs = [
            {
                name: 'home', label: this.t('post'), icon: 'tasks', content: cPosts.tab,
                onScrollBottom: cPosts.onScrollBottom,
                onShown: cPosts.loadList, notify: undefined/*store.homeCount*/
            },
            {
                name: 'picture-o', label: this.t('file'), icon: 'vcard', content: cMedia.tab,
                onScrollBottom: cMedia.onScrollBottom,
                onShown: cMedia.loadList
            },
            //{ name: 'templet', label: '模板', icon: 'vcard', content: cTemplets.tab, onShown: cTemplets.loadList },
            { name: 'page', label: this.t('page'), icon: 'tasks', content: cPage.tab, onShown: cPage.loadList },
            { name: 'me', label: this.t('me'), icon: 'user', content: cMe.tab, onShown: cMe.loadList },
        ].map(v => {
            let { name, label, icon, content, notify, onShown, onScrollBottom } = v;
            return {
                name,
                caption: (selected: boolean) => TabCaptionComponent(label, icon, color(selected)),
                content,
                notify,
                onShown,
                onScrollBottom
            }
        });
        return <RootTabs tabs={faceTabs} />;
        /*		
                <Page header={false} headerClassName={"bg-info"} tabsProps={{ tabs: faceTabs }}>
                </Page>;
        */
    }
}
