import{l as a,ah as e,ai as l,S as s,U as t,V as n,Z as i,ag as o,F as p,al as u,a8 as d,af as r,P as f,q as m,a3 as v}from"./vue.js?v=1723125373998";import{a as c,_ as y}from"./Tabs.js?v=1723125373998";import{_}from"./Ellipsis.js?v=1723125373998";import{a as b}from"./index.js?v=1723125373998";const k=b(a({__name:"index",props:e({data:{default:()=>[]},isEllipsis:{type:Boolean,default:!1},panePadding:{default:"16px"}},{value:{},valueModifiers:{}}),emits:e(["click-self"],["update:value"]),setup(a,{expose:e,emit:b}){const k=b,x=l(a,"value"),g={},j=()=>{var a,e;x.value&&(null==(e=null==(a=g[x.value])?void 0:a.init)||e.call(a))};return e({init:j}),(a,e)=>{const l=_,b=y,E=c;return s(),t(E,{value:x.value,"onUpdate:value":e[0]||(e[0]=a=>x.value=a),class:"bt-tabs-modal",type:"card",placement:"left","pane-style":{padding:a.panePadding}},{default:n((()=>[(s(!0),i(p,null,o(a.data,(e=>(s(),i(p,null,[!1!==e.show?(s(),t(b,{key:e.key,name:e.key,tab:e.label,"tab-props":{onClick:a=>{e.key===x.value&&(j(),k("click-self"))}}},u({default:n((()=>[e.component?(s(),t(d(e.component),{key:0,ref_for:!0,ref:a=>((a,e)=>{g[e]=a})(a,e.key)},null,512)):r("",!0)])),_:2},[a.isEllipsis?{name:"tab",fn:n((()=>[f(l,null,{default:n((()=>[m(v(e.label),1)])),_:2},1024)])),key:"0"}:void 0]),1032,["name","tab","tab-props"])):r("",!0)],64)))),256))])),_:1},8,["value","pane-style"])}}}),[["__scopeId","data-v-a1f5745f"]]);export{k as _};