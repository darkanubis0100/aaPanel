const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/form.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang.js?v=1732601582185","js/naive.js?v=1732601582185","js/vue.js?v=1732601582185","js/__commonjsHelpers__.js?v=1732601582185","js/common.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang18.js?v=1732601582185","js/page_layout.js?v=1732601582185","js/public.js?v=1732601582185","css/public.css?v=1732601582185","css/page_layout.css?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang7.js?v=1732601582185","js/alarm.js?v=1732601582185","js/index96.js?v=1732601582185","css/form.css?v=1732601582185"])))=>i.map(i=>d[i]);
import{_ as e}from"./index102.js?v=1732601582185";import{i as t,I as a,k as n,S as i,a7 as l,o as s,f as o,c as r,j as d,a4 as m}from"./page_layout.js?v=1732601582185";import{_ as c}from"./index.js?v=1732601582185";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{d as _,f as g,u as f,a as x,h as C,i as h}from"./public.js?v=1732601582185";import{c as w,d as A,e as k,f as b,s as y,h as v,b as j,o as L,i as P}from"./alarm.js?v=1732601582185";import{r as z,d as M,t as R,W,e as E,M as T,O as U,P as $,Q as H,Z as B,R as I,X as O,F as D,j as S,ak as V,Y as F,c as J,o as Q,a6 as X,ad as Y,n as Z,f as q,ac as G}from"./vue.js?v=1732601582185";import{_ as K}from"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";import{bR as N,bp as ee,aa as te,bJ as ae}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";const ne=z([]),ie=new Map([["mail",t.global.t("Config.Alarm.index_3")],["feishu",t.global.t("Config.Alarm.index_4")],["dingding",t.global.t("Config.Alarm.index_5")],["weixin",t.global.t("Config.Alarm.index_6")],["tg","Telegram"]]);function le(e){const t=ne.value.find((t=>t.id===e));return t?"".concat(t.data.title," (").concat(ie.get(t.sender_type),")"):""}const se={class:"p-20px"},oe={class:"alarm-info"},re={class:"alarm-title"},de={key:1,class:"alarm-box"},me={class:"alarm-info"},ce={class:"alarm-title"},ue=["innerHTML"],pe=n(M({__name:"record-details",props:{row:{}},setup(e){const t=R(e,"row"),{t:a}=W(),n=E((()=>Object.entries(t.value.result.send_data).map((e=>{const t=le(e[0]);return{result:1===e[1],resultMsg:1===e[1]?a("Config.Alarm.index_108"):e[1],account:t}})))),i=z([{key:"account",title:a("Config.Alarm.index_106"),render:e=>e.account||"--"},{key:"resultMsg",title:a("Config.Alarm.index_107"),render:e=>T("span",{class:e.result?"text-primary":"text-error"},[e.resultMsg])}]);return(e,a)=>{const l=N;return U(),$("div",se,[H("div",oe,[H("div",re,B(e.$t("Config.Alarm.index_104")),1),I(n).length>0?(U(),O(l,{key:0,data:I(n),columns:I(i)},null,8,["data","columns"])):(U(),$("div",de,B(I(t).result.stop_msg),1))]),H("div",me,[H("div",ce,B(e.$t("Config.Alarm.index_105")),1),H("div",{class:"alarm-box",innerHTML:e.row.send_data.msg_list.join("<br />")},null,8,ue)])])}}}),[["__scopeId","data-v-23d9e8a8"]]),_e={class:"p-20px"},ge=M({__name:"record",props:{row:{}},setup(e){const t=R(e,"row"),{t:n}=W(),r=()=>{x({title:n("Config.Alarm.index_95",[t.value.title]),content:n("Config.Alarm.index_96",[t.value.title]),onConfirm:async()=>{await b({task_id:t.value.id,record_ids:[]}),y()}})},{table:d,columns:m,setLoading:c}=_([{key:"create_time",title:n("Config.Alarm.index_97"),render:e=>i(e.create_time)},{key:"do_send",title:n("Config.Alarm.index_98"),render:e=>{let t=e.result.stop_msg;if(e.do_send){const a=Object.values(e.result.send_data).reduce(((e,t)=>(l(t)&&1===t?e.success++:s(t)&&e.fail++,e)),{success:0,fail:0});t=n("Config.Alarm.index_99",[a.success,a.fail])}return T(ee,null,{trigger:()=>T("span",{class:e.do_send?"text-primary":"text-error"},[e.do_send?n("Config.Alarm.index_110"):n("Config.Alarm.index_100")]),default:()=>T(D,null,[t])})}},{key:"details",title:n("Config.Alarm.index_101"),render:e=>T("a",{class:"bt-link",href:"javascript:;",onClick:()=>{C(e)}},[n("Config.Alarm.index_109")])},g({width:100,options:e=>[{label:n("Public.Btn.Del"),onClick:()=>{h(e)}}]})]),C=e=>{f({title:n("Config.Alarm.index_101"),width:480,data:{row:e},component:pe})},h=e=>{x({title:n("Config.Alarm.index_102"),content:n("Config.Alarm.index_103"),onConfirm:async()=>{await A({task_id:t.value.id,record_ids:[e.id]}),y()}})},w=S({task_id:t.value.id,page:1,size:10}),y=async()=>{try{c(!0);const{message:e}=await k(V(w));o(e)&&(d.data=a(e.list)?e.list:[],d.total=e.count)}finally{c(!1)}};return y(),(e,t)=>{const a=te,n=p,i=K,l=u;return U(),$("div",_e,[T(l,null,{toolsLeft:F((()=>[T(a,{onClick:r},{default:F((()=>[J(B(e.$t("Config.Alarm.index_94")),1)])),_:1})])),table:F((()=>[T(n,{"max-height":382,loading:I(d).loading,data:I(d).data,columns:I(m)},null,8,["loading","data","columns"])])),pageRight:F((()=>[T(i,{page:I(w).page,"onUpdate:page":t[0]||(t[0]=e=>I(w).page=e),"page-size":I(w).size,"onUpdate:pageSize":t[1]||(t[1]=e=>I(w).size=e),"item-count":I(d).total,onRefresh:y},null,8,["page","page-size","item-count"])])),_:1})])}}}),fe=M({__name:"index",setup(e,{expose:t}){const n=X((()=>r((()=>import("./form.js?v=1732601582185")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14])))),{t:l}=W(),s=C("",{isEdit:!1,onRefresh:()=>{P()}}),o=()=>{s.data.isEdit=!1,s.title=l("Config.Alarm.index_1"),s.show=!0},{table:d,columns:m,setLoading:A}=_([{key:"title",title:l("Config.Alarm.index_7"),minWidth:140,ellipsis:{tooltip:!0}},h({minWidth:100,status:e=>({checkedValue:!0,checkedLabel:l("Config.Alarm.index_8"),uncheckedValue:!1,uncheckedLabel:l("Config.Alarm.index_9"),onClick:t=>{b(t,e)}})}),{key:"sender",title:l("Config.Alarm.index_92"),width:"14%",minWidth:140,ellipsis:{tooltip:!0},render:e=>{const{sender:t}=e,a=[];return t.forEach((e=>{const t=le(e);t&&a.push(t)})),a.join(l("Public.Punctuation.Comma"))}},{key:"view_msg",title:l("Config.Alarm.index_10"),width:"34%",minWidth:180,ellipsis:{tooltip:!0},render:e=>T("span",{innerHTML:e.view_msg},null)},{key:"last_check",title:l("Config.Alarm.index_11"),width:"14%",minWidth:140,render:e=>e.last_check?i(e.last_check):"--"},g({width:"12%",minWidth:150,options:e=>[{label:l("Config.Alarm.index_12"),onClick:()=>{k(e)}},{label:l("Public.Btn.Edit"),onClick:()=>{(e=>{s.data.row=e,s.data.isEdit=!0,s.title=l("Config.Alarm.index_2"),s.show=!0})(e)}},{label:l("Public.Btn.Del"),onClick:()=>{L(e)}}]})]),k=e=>{f({title:l("Config.Alarm.index_93",[e.title]),width:800,data:{row:e},component:ge})},b=(e,t)=>{const a=l(e?"Config.Alarm.index_18":"Config.Alarm.index_13");x({title:l("Config.Alarm.index_14",[a,t.title]),content:l("Config.Alarm.index_15",[a.toLocaleLowerCase(),t.title]),onConfirm:async()=>{await y({task_id:t.id,status:e?1:0}),t.status=e}})},L=e=>{x({title:l("Config.Alarm.index_16"),content:l("Config.Alarm.index_17"),onConfirm:async()=>{await v({task_id:e.id}),P()}})},P=async(e=!1)=>{try{A(!0),e&&await async function(){const{message:e}=await w({refresh:0});ne.value=a(e)?e:[]}();const{message:t}=await j();d.data=a(t)?t:[]}finally{A(!1)}};return P(!0),Q((()=>{ne.value=[]})),t({init:P}),(e,t)=>{const a=te,i=p,l=u,r=c;return U(),$("div",null,[T(l,null,{toolsLeft:F((()=>[T(a,{type:"primary",onClick:o},{default:F((()=>[J(B(e.$t("Config.Alarm.index_91")),1)])),_:1})])),table:F((()=>[T(i,{loading:I(d).loading,data:I(d).data,columns:I(m)},null,8,["loading","data","columns"])])),_:1}),T(r,{show:I(s).show,"onUpdate:show":t[0]||(t[0]=e=>I(s).show=e),title:I(s).title,data:I(s).data,width:860,"min-height":340,footer:!0,component:I(n)},null,8,["show","title","data","component"])])}}}),xe={class:"flex items-center"},Ce={class:"flex-1 leading-[1.5]"},he={class:"flex"},we=["href"],Ae=n(M({__name:"table-module",props:{row:{}},emits:["click"],setup(e,{emit:t}){const a=t,n=()=>{a("click")};return(e,t)=>(U(),$("div",xe,[H("div",{class:Y(["icon",e.row.name])},null,2),H("div",Ce,[H("span",{class:"text-14px font-bold cursor-pointer",onClick:n},B(e.row.title),1),H("div",he,[H("span",null,B(e.row.ps),1),H("a",{class:"bt-link",href:e.row.help,target:"_blank"},">>"+B(e.$t("Config.Alarm.index_42")),9,we)])])]))}}),[["__scopeId","data-v-70f7d608"]]),ke=M({__name:"table-config",props:{row:{}},emits:["click"],setup(e,{emit:t}){const a=t,n=R(e,"row"),{t:i}=W(),l=E((()=>n.value.list.map((e=>e.data.title)).join(i("Public.Punctuation.Comma")))),s=()=>{a("click")};return(e,t)=>{const a=d;return U(),$("div",null,[I(n).list.length<=0?(U(),O(a,{key:0,type:"error",onClick:s},{default:F((()=>[J(B(e.$t("Config.Alarm.index_40")),1)])),_:1})):(U(),$("span",{key:1,class:"cursor-pointer",onClick:s},B(e.$t("Config.Alarm.index_41",[I(l)])),1))])}}}),be=M({__name:"index",setup(e,{expose:t}){const{t:n}=W(),{table:i,columns:l,setLoading:s}=_([{key:"module",title:n("Config.Alarm.index_34"),width:"42%",minWidth:400,render:e=>T(Ae,{row:e,onClick:()=>{o(e)}},null)},{key:"config",title:n("Config.Alarm.index_35"),minWidth:320,render:e=>T(ke,{row:e,onClick:()=>{o(e)}},null)},g({width:100,options:e=>[{label:n("Public.Btn.Conf"),onClick:()=>{o(e)}}]})]),o=e=>{L({row:e,onRefresh:d})},r=[{name:"mail",title:n("Config.Alarm.index_3"),ps:n("Config.Alarm.index_36"),help:"https://www.bt.cn/bbs/thread-66183-1-1.html"},{name:"dingding",title:n("Config.Alarm.index_5"),ps:n("Config.Alarm.index_37"),help:"https://www.bt.cn/bbs/thread-108081-1-1.html"},{name:"weixin",title:n("Config.Alarm.index_6"),ps:n("Config.Alarm.index_38"),help:"https://www.bt.cn/bbs/thread-108116-1-1.html"},{name:"feishu",title:n("Config.Alarm.index_4"),ps:n("Config.Alarm.index_39"),help:"https://www.aapanel.com/forum/d/16942-aapanel-how-does-set-lark-or-feishu-notification"},{name:"tg",title:"Telegram",ps:"Use Telegram to send and receive panel notifications",help:"https://www.aapanel.com/forum/d/5115-how-to-add-telegram-to-panel-notifications"}],d=async()=>{try{s(!0);const{message:e}=await w({refresh:1});a(e)&&i.data.forEach((t=>{t.list=e.filter((e=>e.sender_type===t.name))}))}finally{s(!1)}};return i.data=r.map((e=>({...e,list:[]}))),Z((()=>{d()})),t({init:d}),(e,t)=>{const a=p;return U(),$("div",null,[T(a,{loading:I(i).loading,data:I(i).data,columns:I(l)},null,8,["loading","data","columns"])])}}}),ye=M({__name:"index",setup(e,{expose:t}){const{t:n}=W(),{table:i,columns:l,setLoading:s}=_([{key:"log",title:n("Config.Alarm.index_7"),ellipsis:{tooltip:!0},render:e=>T("span",{innerHTML:e.log},null)},{key:"addtime",title:n("Config.Alarm.index_87"),width:150}]),r=S({p:1,limit:20}),d=async()=>{try{s(!0);const{message:e}=await P(V(r));o(e)&&(i.data=a(e.data)?e.data:[],i.total=m(e.page))}finally{s(!1)}};return q((()=>{d()})),t({init:d}),(e,t)=>{const a=p,n=K,s=u;return U(),$("div",null,[T(s,null,{table:F((()=>[T(a,{loading:I(i).loading,data:I(i).data,columns:I(l)},null,8,["loading","data","columns"])])),pageRight:F((()=>[T(n,{page:I(r).p,"onUpdate:page":t[0]||(t[0]=e=>I(r).p=e),"page-size":I(r).limit,"onUpdate:pageSize":t[1]||(t[1]=e=>I(r).limit=e),"item-count":I(i).total,"store-key":"alarm-logs",onRefresh:d},null,8,["page","page-size","item-count"])])),_:1})])}}}),ve=M({__name:"index",setup(t){const{t:a}=W(),n=z("list"),i=[{key:"list",label:a("Config.Alarm.index_88"),component:fe},{key:"settings",label:a("Config.Alarm.index_89"),component:be},{key:"logs",label:a("Config.Alarm.index_90"),component:ye}];return(t,a)=>{const l=e,s=ae;return U(),O(s,{class:"p-16px"},{default:F((()=>[T(l,{value:I(n),"onUpdate:value":a[0]||(a[0]=e=>G(n)?n.value=e:null),options:i},null,8,["value"])])),_:1})}}});export{ve as default};
