import * as React from 'react';
import { VPage, Page, LMR, tv, EasyTime, UserView, FA, User, Tuid, List, SearchBox } from "tonva";
import { observer } from 'mobx-react';
import { CPage } from './CPage';
import { consts } from 'consts';

export class VPickBranch extends VPage<CPage> {

    async open() {
        this.openPage(this.page);
    }

    render(): JSX.Element {
        return <this.page />
    }

    private page = observer(() => {
        let { searchBranch, searchBranchKey } = this.controller;
        let right = <SearchBox className="w-80 mt-2 mr-2"
            size='sm'
            onSearch={(key: string) => searchBranchKey(key)}
            placeholder="模板" />;

        return <Page header="选择模板" headerClassName={consts.headerClass} back="close" right={right} onScrollBottom={this.onScrollBottom} >
            <List items={searchBranch} item={{ render: this.renderItem, onClick: this.itemClick }} />
        </Page>
    });

    private onScrollBottom = async () => {
        await this.controller.searchBranch.more();
    }

    private itemClick = (item: any) => {
        this.controller.onPickedBranch(item.id);
    };

    private renderItem = (item: any, index: number) => {
        return <this.itemRow {...item} />
    };

    private itemRow = observer((item: any) => {
        let { content } = item;

        return <div className="px-3 py-2 text-muted col-12 border bg-white">
            <div className="  " style={{ height: '50px', overflow: 'auto' }}>
                {content}
            </div>
        </div>
    });
}
