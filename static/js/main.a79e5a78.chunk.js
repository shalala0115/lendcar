(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{163:function(e,t,a){e.exports=a(309)},168:function(e,t,a){},169:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},170:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),o=a.n(r),c=(a(168),a(81)),s=a(82),m=a(92),i=a(91),g=(a(169),a(170),a(94)),p=a(24),u=(a(96),a(90)),E=a(102),d=a.n(E),h=(a(191),a(312)),w=a(70),f=a(136),v=a(161),b="init_data",N=function(){return function(e){d()("/data.json").then((function(t){var a=function(e){return{type:b,getlist:e}}(t.data);e(a)}))}},y={carlists:[],showlist:[],option:"color",condition:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=Object(v.a)({},e);if(t.type===b&&(a.carlists=t.getlist,a.showlist=t.getlist),"input-change"===t.type&&(a.condition=t.value),"select-change"===t.type&&(a.option=t.value),console.log(a.option),"submit"===t.type){var n=[];"make"===a.option&&a.carlists.map((function(e){e.make.includes(a.condition)&&n.push(e)})),"color"===a.option&&a.carlists.map((function(e){e.color.includes(a.condition)&&n.push(e)})),a.showlist=n}return a},q=Object(w.c)(_,Object(w.a)(f.a)),k=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).componentDidMount=function(){var e=N();q.dispatch(e)},e}return Object(s.a)(a,[{key:"render",value:function(){for(var e=[{title:"id",dataIndex:"id",key:"id",render:function(e){return l.a.createElement("a",null,e)}},{title:"images",dataIndex:"images",key:"images",render:function(e){return l.a.createElement("img",{src:e})}},{title:"make",dataIndex:"make",key:"make"},{title:"color",dataIndex:"color",key:"color"},{title:"price",dataIndex:"price",key:"price"}],t=[],a=0;a<this.props.carlists.length;a++){var n={};n.id=this.props.carlists[a].id,n.images=this.props.carlists[a].images,n.make=this.props.carlists[a].make,n.color=this.props.carlists[a].color,n.price=this.props.carlists[a].price,t.push(n)}return l.a.createElement("div",null,l.a.createElement(h.a,{columns:e,dataSource:t}),l.a.createElement("p",null,"\u7b5b\u9009"),l.a.createElement("select",{onChange:this.props.handleSelectChange},l.a.createElement("option",null,"color"),l.a.createElement("option",null,"make")),l.a.createElement("input",{onChange:this.props.handleInputChange}),l.a.createElement("button",{onClick:this.props.handleSubmit},"sumbit"))}}]),a}(n.Component),x=Object(u.b)((function(e){return{carlists:e.showlist}}),(function(e){return{handleInputChange:function(t){var a={type:"input-change",value:t.target.value};e(a)},handleSelectChange:function(t){var a={type:"select-change",value:t.target.value};e(a)},handleSubmit:function(){e({type:"submit"})}}}))(k);var j=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"head-container"},l.a.createElement("div",{className:"head-nav"},l.a.createElement("div",{className:"nav-left"},l.a.createElement("p",null,"logo")),l.a.createElement("div",{className:"nav-right"},l.a.createElement("a",null,"\u9996\u9875"),l.a.createElement("a",null,"\u5e93\u5b58\u9875"),l.a.createElement("a",null,"\u53ef\u79df\u8f66\u578b"),l.a.createElement("a",null,"VIN\u67e5\u8be2"),l.a.createElement("a",null,"\u5e38\u89c1\u95ee\u9898"),l.a.createElement("a",null,"\u8054\u7cfb\u6211\u4eec"),l.a.createElement("a",null,"English"))),l.a.createElement("div",{className:"head-contain"},l.a.createElement("h1",{className:"head-header"},"\u8c01\u6765\u4e3a\u60a8\u8f66\u8f86\u7684\u8d2c\u503c\u4e70\u5355"),l.a.createElement("br",null),l.a.createElement("p",{className:"head-colortext"},"\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014  LendingCar"),l.a.createElement("br",null),l.a.createElement("p",null,"lendingcar \u662f\u4f60\u6700\u597d\u7684\u51fa\u884c\u4f19\u4f34"),l.a.createElement("p",null,"\u6211\u4eec\u4e3a\u60a8\u5f00\u542f\u81ea\u7531\u51fa\u884c\u7b2c\u4e00\u6b65"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null),l.a.createElement("button",{class:"head-btn"},"\u4e0b\u8f7dApp"))))};var C=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"part1"},l.a.createElement("div",{className:"part1-topbox"}),l.a.createElement("div",null,l.a.createElement("div",{className:"center-part1"},l.a.createElement("div",{className:"part1-left"},l.a.createElement("h2",null,"\u65e0\u9996\u4ed8, \u65e0\u6708\u8d39"),l.a.createElement("div",{class:"part1-centerbox"}),l.a.createElement("p",null,"\u65e0\u9996\u4ed8\uff0c\u65e0\u6708\u8d39\u3002 \u60a8\u53ea\u9700\u8981\u652f\u4ed8\u4e00\u7b14\u53ef\u9000\u6362\u7684\u62bc\u91d1\u5373\u53ef\u901a\u8fc7"),l.a.createElement("p",null,"lending Car\u9a7e\u8f66\u51fa\u884c\uff08\u8fd9\u7b14\u62bc\u91d1\u5c06\u5728\u4e00\u5e74\u5408\u540c\u7ed3\u675f\u540e\u9000\u8fd8\u7ed9\u60a8\uff09")),l.a.createElement("div",{className:"part1-right"},l.a.createElement("img",{src:"https://cutt.ly/orra79l"})))),l.a.createElement("div",{className:"part1-bottombox"})),l.a.createElement("div",{className:"part2"},l.a.createElement("div",{className:"part2-topbox"}),l.a.createElement("div",null,l.a.createElement("div",{className:"center-part2"},l.a.createElement("div",{className:"part2-left"},l.a.createElement("img",{src:"https://cutt.ly/orra79l"})),l.a.createElement("div",{className:"part2-right"},l.a.createElement("h2",null,"\u65e0\u8f66\u8f86\u6298\u65e7\u8d39"),l.a.createElement("div",{className:"part1-centerbox"}),l.a.createElement("p",null,"\u8f66\u8f86\u6298\u65e7\u603b\u662f\u4ee4\u4eba\u70e6\u607c\uff0c LendingCar\u4e3a\u60a8\u89e3\u5fe7\u3002 LendingCar\u5c06\u5728"),l.a.createElement("p",{className:"seconetline"},"\u4e00\u5e74\u79df\u7ea6\u7ed3\u675f\u540e\u768445\u5929\u5185\u5f52\u8fd8\u5168\u989d\u62bc\u91d1")))),l.a.createElement("div",{className:"part2-bottombox"})))};var O=function(){return l.a.createElement("div",{class:"foot-container"},l.a.createElement("div",{className:"foot-contain"},l.a.createElement("h1",null,"Lending car\u6295\u8d44\u5546\u53ca\u5408\u4f5c\u8005"),l.a.createElement("p",null,"\u4ee5\u4e0b\u6392\u540d\u4e0d\u5206\u5148\u540e"),l.a.createElement("div",{className:"foot-logogroup"},l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}),l.a.createElement("img",{src:"https://www.qries.com/images/banner_logo.png",className:"foot-logo"}))))};var I=function(){return l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement(C,null),l.a.createElement(O,null))},S=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(g.a,null,l.a.createElement("p",null,"\u5bfc\u822a\u680f"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(g.b,{to:"/"},"\u9996\u9875")),l.a.createElement("li",null,l.a.createElement(g.b,{to:"/Detail"},"\u5e93\u5b58\u9875"))),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/"},l.a.createElement(I,null)),l.a.createElement(p.a,{path:"/Detail"},l.a.createElement(x,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u.a,{store:q},l.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},96:function(e,t,a){}},[[163,1,2]]]);
//# sourceMappingURL=main.a79e5a78.chunk.js.map