(this["webpackJsonpweb-builder"]=this["webpackJsonpweb-builder"]||[]).push([[3],{82:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},84:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(2),i=n(4),s=n(5),o=n(3),u=n(10),l=n(6),m=n(0),p=n(8),h=n(13),d=(n(56),{_:{a:"d"}}),b={_:{a:"d"}},f=n(82);function v(){return p.y.loginTop(m.createElement("div",{className:"d-flex align-items-center"},m.createElement("img",{className:"App-logo h-3c position-absolute",src:f,alt:"img"}),m.createElement("div",{className:"h3 flex-fill text-center"},m.createElement("span",{className:"text-primary mr-3"},"\u540c"),m.createElement("span",{className:"text-danger"},"\u82b1"))))}var y=[{type:"mobile",caption:"\u624b\u673a\u53f7",regex:p.x},{type:"email",caption:"\u90ae\u7bb1",regex:p.w}];function g(e){return y.find((function(t){return!0===t.regex.test(e)}))}var w=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function i(e){try{o(r.next(e))}catch(t){c(t)}}function s(e){try{o(r.throw(e))}catch(t){c(t)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}o((r=r.apply(e,t||[])).next())}))},x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).accountPageCaption="\u6ce8\u518c\u8d26\u53f7",e.accountLabel="\u6ce8\u518c\u8d26\u53f7",e.accountSubmitCaption="\u6ce8\u518c\u65b0\u8d26\u53f7",e.passwordPageCaption="\u8d26\u53f7\u5bc6\u7801",e.passwordSubmitCaption="\u6ce8\u518c\u65b0\u8d26\u53f7",e.successText="\u6ce8\u518c\u6210\u529f",e.login=function(t){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.r.login({user:t||this.account,pwd:this.password,guest:p.y.guest});case 2:if(void 0!==(n=e.sent)){e.next=6;break}return alert("something wrong!"),e.abrupt("return");case 6:return e.next=8,p.y.logined(n);case 8:case"end":return e.stop()}}),e,this)})))},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"internalStart",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.openVPage(E);case 1:case"end":return e.stop()}}),e,this)})))}},{key:"toVerify",value:function(e){this.account=e,this.openVPage(j)}},{key:"toPassword",value:function(){this.openVPage(O)}},{key:"toSuccess",value:function(e){this.openVPage(N,e)}},{key:"regReturn",value:function(e){var t;switch(e){default:return"\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef";case 4:return"\u9a8c\u8bc1\u7801\u9519\u8bef";case 0:return;case 1:t="\u7528\u6237\u540d "+this.account;break;case 2:t="\u624b\u673a\u53f7 +"+this.account;break;case 3:t="\u90ae\u7bb1 "+this.account}return t+" \u5df2\u7ecf\u88ab\u6ce8\u518c\u8fc7\u4e86"}},{key:"checkAccount",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.r.isExists(this.account);case 2:if(t=e.sent,void 0===(n=this.accountError(t))){e.next=6;break}return e.abrupt("return",n);case 6:return e.next=8,h.r.sendVerify(this.account,this.type,p.y.oem);case 8:return t=e.sent,this.toVerify(this.account),e.abrupt("return");case 11:case"end":return e.stop()}}),e,this)})))}},{key:"accountError",value:function(e){if(e>0)return"\u5df2\u7ecf\u88ab\u6ce8\u518c\u4f7f\u7528\u4e86"}},{key:"execute",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={nick:void 0,user:this.account,pwd:this.password,country:void 0,mobile:void 0,mobileCountry:void 0,email:void 0,verify:this.verify},e.t0=this.type,e.next="mobile"===e.t0?4:"email"===e.t0?7:9;break;case 4:return t.mobile=Number(this.account),t.mobileCountry=86,e.abrupt("break",9);case 7:return t.email=this.account,e.abrupt("break",9);case 9:return e.next=11,h.r.register(t);case 11:if(0!==(n=e.sent)){e.next=16;break}return p.y.clear(),this.toSuccess(),e.abrupt("return");case 16:return r=this.regReturn(n),e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,this)})))}}]),t}(p.a),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).accountPageCaption="\u5bc6\u7801\u627e\u56de",e.accountLabel="\u8d26\u53f7",e.accountSubmitCaption="\u6ce8\u518c\u65b0\u8d26\u53f7",e.passwordPageCaption="\u91cd\u7f6e\u5bc6\u7801",e.passwordSubmitCaption="\u63d0\u4ea4",e.successText="\u6210\u529f\u4fee\u6539\u5bc6\u7801",e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"execute",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.r.resetPassword(this.account,this.password,this.verify,this.type);case 2:return t=e.sent,p.y.clear(),this.toSuccess(t),e.abrupt("return",void 0);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"accountError",value:function(e){if(0===e)return"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8d26\u53f7"}}]),t}(x),E=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).schema=[{name:"user",type:"string",required:!0,maxLength:100},{name:"verify",type:"submit"}],e.res=Object(p.z)(b),e.page=function(){return m.createElement(p.n,{header:e.controller.accountPageCaption},m.createElement("div",{className:"w-max-20c my-5 py-5",style:{marginLeft:"auto",marginRight:"auto"}},v(),m.createElement("div",{className:"h-3c"}),m.createElement(p.f,{schema:e.schema,uiSchema:e.uiSchema,onButtonClick:e.onSubmit,onEnter:e.onEnter,requiredFlag:!1}),p.y.privacyEntry()))},e.onSubmit=function(t,n){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){var t,r,c,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.clearContextErrors(),t="user",r=n.getValue(t),void 0!==(c=g(r))){e.next=7;break}return n.setError(t,"\u5fc5\u987b\u662f\u624b\u673a\u53f7\u6216\u90ae\u7bb1"),e.abrupt("return");case 7:if("mobile"!==(i=c.type)){e.next=12;break}if(11===r.length&&"1"===r[0]){e.next=12;break}return n.setError(t,"\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u53f7"),e.abrupt("return");case 12:return this.controller.account=r,this.controller.type=i,e.next=16,this.controller.checkAccount();case 16:void 0!==(s=e.sent)&&n.setError(t,s);case 18:case"end":return e.stop()}}),e,this)})))},e.onEnter=function(t,n){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("user"!==t){e.next=4;break}return e.next=3,this.onSubmit("verify",n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"open",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.uiSchema={items:{user:{widget:"text",label:this.controller.accountLabel,placeholder:"\u624b\u673a\u53f7\u6216\u90ae\u7bb1"},verify:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u53d1\u9001\u9a8c\u8bc1\u7801"}}},this.openPage(this.page);case 2:case"end":return e.stop()}}),e,this)})))}}]),t}(p.t),j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).schema=[{name:"verify",type:"number",required:!0,maxLength:6},{name:"submit",type:"submit"}],e.onVerifyChanged=function(e,t,n){e.setDisabled("submit",!t||6!==t.length)},e.uiSchema={items:{verify:{widget:"text",label:"\u9a8c\u8bc1\u7801",placeholder:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",onChanged:e.onVerifyChanged},submit:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u4e0b\u4e00\u6b65 >",disabled:!0}}},e.onSubmit=function(t,n){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.controller.verify=n.getValue("verify"),e.next=3,h.r.checkVerify(this.controller.account,t);case 3:if(0!==e.sent){e.next=7;break}return n.setError("verify","\u9a8c\u8bc1\u7801\u9519\u8bef"),e.abrupt("return");case 7:this.controller.toPassword();case 8:case"end":return e.stop()}}),e,this)})))},e.onEnter=function(t,n){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("verify"!==t){e.next=4;break}return e.next=3,this.onSubmit("submit",n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))},e.page=function(){var t,n;switch(e.controller.type){case"mobile":t="\u624b\u673a\u53f7";break;case"email":t="\u90ae\u7bb1",n=m.createElement(m.Fragment,null,m.createElement("span",{className:"text-danger"},"\u6ce8\u610f"),": \u6709\u53ef\u80fd\u8bef\u4e3a\u5783\u573e\u90ae\u4ef6\uff0c\u8bf7\u68c0\u67e5",m.createElement("br",null))}return m.createElement(p.n,{header:"\u9a8c\u8bc1\u7801"},m.createElement("div",{className:"w-max-20c my-5 py-5",style:{marginLeft:"auto",marginRight:"auto"}},"\u9a8c\u8bc1\u7801\u5df2\u7ecf\u53d1\u9001\u5230",t,m.createElement("br",null),m.createElement("div",{className:"py-2 px-3 my-2 text-primary bg-light"},m.createElement("b",null,e.controller.account)),n,m.createElement("div",{className:"h-1c"}),m.createElement(p.f,{schema:e.schema,uiSchema:e.uiSchema,onButtonClick:e.onSubmit,onEnter:e.onEnter,requiredFlag:!1})))},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"open",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.openPage(this.page);case 1:case"end":return e.stop()}}),e,this)})))}}]),t}(p.t),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).schema=[{name:"pwd",type:"string",required:!0,maxLength:100},{name:"rePwd",type:"string",required:!0,maxLength:100},{name:"submit",type:"submit"}],e.onSubmit=function(t,n){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){var t,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.form.data,r=t.pwd,c=t.rePwd,r&&r===c){e.next=9;break}n.setValue("pwd",""),n.setValue("rePwd",""),i="\u5bc6\u7801\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165\u5bc6\u7801\uff01",n.setError("pwd",i),e.next=14;break;case 9:return this.controller.password=r,e.next=12,this.controller.execute();case 12:void 0!==(i=e.sent)&&p.y.push(m.createElement(p.n,{header:"\u6ce8\u518c\u4e0d\u6210\u529f"},m.createElement("div",{className:"p-5 text-danger"},i)));case 14:return e.abrupt("return",i);case 15:case"end":return e.stop()}}),e,this)})))},e.onEnter=function(t,n){return w(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("rePwd"!==t){e.next=4;break}return e.next=3,this.onSubmit("submit",n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))},e.page=function(){return m.createElement(p.n,{header:e.controller.passwordPageCaption},m.createElement("div",{className:"w-max-20c my-5 py-5",style:{marginLeft:"auto",marginRight:"auto"}},"\u6ce8\u518c\u8d26\u53f7",m.createElement("br",null),m.createElement("div",{className:"py-2 px-3 my-2 text-primary bg-light"},m.createElement("b",null,e.controller.account)),m.createElement("div",{className:"h-1c"}),m.createElement(p.f,{schema:e.schema,uiSchema:e.uiSchema,onButtonClick:e.onSubmit,onEnter:e.onEnter,requiredFlag:!1})))},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"open",value:function(){return w(this,void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.uiSchema={items:{pwd:{widget:"password",placeholder:"\u5bc6\u7801",label:"\u5bc6\u7801"},rePwd:{widget:"password",placeholder:"\u91cd\u590d\u5bc6\u7801",label:"\u91cd\u590d\u5bc6\u7801"},submit:{widget:"button",className:"btn btn-primary btn-block mt-3",label:this.controller.passwordSubmitCaption}}},this.openPage(this.page);case 2:case"end":return e.stop()}}),e,this)})))}}]),t}(p.t),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).page=function(t){var n=t.users,r=e.controller,a=r.account,c=r.successText,i=r.login;return void 0===n?m.createElement(p.n,{header:!1},m.createElement("div",{className:"container w-max-30c"},m.createElement("div",{className:"my-5"},m.createElement("div",{className:"py-5"},"\u8d26\u53f7 ",m.createElement("strong",{className:"text-primary"},a," ")," ",c,"\uff01"),m.createElement("button",{className:"btn btn-success btn-block",type:"button",onClick:function(){return i(void 0)}},"\u76f4\u63a5\u767b\u5f55")))):m.createElement(p.n,{header:!1},m.createElement("div",{className:"container w-max-30c"},m.createElement("div",{className:"my-5"},m.createElement("div",{className:"py-5 text-success"},c),n.map((function(e){var t=e.name;return m.createElement("div",{className:"py-2 cursor-pointer",onClick:function(){return i(t)}},"\u767b\u5f55\u8d26\u53f7 ",m.createElement("strong",{className:"text-primary"},t," "))})))))},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"open",value:function(e){return w(this,void 0,void 0,a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.openPage(this.page,{users:e});case 1:case"end":return t.stop()}}),t,this)})))}}]),t}(p.t);n.d(t,"default",(function(){return P}));var S=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function i(e){try{o(r.next(e))}catch(t){c(t)}}function s(e){try{o(r.throw(e))}catch(t){c(t)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}o((r=r.apply(e,t||[])).next())}))},C=[{name:"username",type:"string",required:!0,maxLength:100},{name:"password",type:"string",required:!0,maxLength:100},{name:"login",type:"submit"}],P=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(o.a)(t).apply(this,arguments))).res=Object(p.z)(d),e.uiSchema={items:{username:{placeholder:"\u624b\u673a/\u90ae\u7bb1/\u7528\u6237\u540d",label:"\u767b\u5f55\u8d26\u53f7"},password:{widget:"password",placeholder:"\u5bc6\u7801",label:"\u5bc6\u7801"},login:{widget:"button",className:"btn btn-primary btn-block mt-3",label:"\u767b\u5f55"}}},e.onSubmit=function(t,n){return S(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){var t,r,c,i,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.form.data,r=t.username,void 0!==(c=t.password)){e.next=5;break}return e.abrupt("return","something wrong, pwd is undefined");case 5:return e.next=7,h.r.login({user:r,pwd:c,guest:p.y.guest});case 7:if(void 0!==(i=e.sent)){e.next=12;break}return s=g(r),o=void 0!==s?s.caption:"\u7528\u6237\u540d",e.abrupt("return",o+"\u6216\u5bc6\u7801\u9519\uff01");case 12:return console.log("onLoginSubmit: user=%s pwd:%s",i.name,i.token),e.next=15,p.y.logined(i,this.props.callback);case 15:case"end":return e.stop()}}),e,this)})))},e.onEnter=function(t,n){return S(Object(u.a)(e),void 0,void 0,a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("password"!==t){e.next=4;break}return e.next=3,this.onSubmit("login",n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)})))},e.clickReg=function(){new x(void 0).start()},e.clickForget=function(){new k(void 0).start()},e}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=m.createElement("div",null,m.createElement("div",{className:"d-block"},m.createElement("div",{className:"text-center"},m.createElement("button",{className:"btn btn-link",style:{margin:"0px auto"},onClick:this.clickReg},"\u6ce8\u518c\u8d26\u53f7")),p.y.privacyEntry())),n=!1;return!0===this.props.withBack&&(n="\u767b\u5f55"),m.createElement(p.n,{header:n,footer:t},m.createElement("div",{className:"d-flex h-100 flex-column justify-content-center align-items-center"},m.createElement("div",{className:"flex-fill"}),m.createElement("div",{className:"w-20c"},v(),m.createElement("div",{className:"h-2c"}),m.createElement(p.f,{schema:C,uiSchema:this.uiSchema,onButtonClick:this.onSubmit,onEnter:this.onEnter,requiredFlag:!1}),m.createElement("button",{className:"btn btn-link btn-block",onClick:function(){return e.clickForget()}},"\u5fd8\u8bb0\u5bc6\u7801")),m.createElement("div",{className:"flex-fill"}),m.createElement("div",{className:"flex-fill"})))}}]),t}(m.Component)}}]);
//# sourceMappingURL=3.1e655d63.chunk.js.map