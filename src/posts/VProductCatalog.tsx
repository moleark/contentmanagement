import * as React from "react";
import { observer } from "mobx-react";
import { VPage, Page, List } from "tonva";
import { consts } from "consts";
import { CPosts } from "./CPosts";
import { observable } from "mobx";

export class VProductCatalog extends VPage<CPosts> {

    @observable caption: any;
    @observable pageProductCatalog: any;

    async open(param: any) {
        this.pageProductCatalog = param.data;
        this.caption = param.name;
        this.openPage(this.page);
    }

    private page = observer(() => {
        return (
            <Page header={this.caption} headerClassName={consts.headerClass} >
                <List before={""} none="无" items={this.pageProductCatalog} item={{ render: this.renderItem }} />
            </Page>
        );
    });


    private renderItem = (model: any, index: number) => {
        let { showProductCatalogDetil, searchProductCatalogChildrenKeys, renderProductCatalogPostCount } = this.controller;
        let { name, productCategory } = model;
        let counts = renderProductCatalogPostCount(productCategory.id);
        return (
            <div className="pl-2 pl-sm-3 pr-2 pr-sm-3 py-3 d-flex justify-content-between">
                <div className="mx-2  small" >
                    <span>{name}</span>
                </div>
                <div className="d-flex">
                    <div className="w-7c mr-3  text-primary text-center cursor-pointer" onClick={() => showProductCatalogDetil(model)} >
                        {counts}
                    </div>

                    <div className="w-7c ml-3" onClick={() => searchProductCatalogChildrenKeys(model)} >
                        <span className="p-2 small pl-4 text-primary cursor-pointer iconfont icon-jiantouyou" style={{ fontSize: "12px" }}>
                        </span>
                    </div>
                </div>
            </div >
        );
    };
}