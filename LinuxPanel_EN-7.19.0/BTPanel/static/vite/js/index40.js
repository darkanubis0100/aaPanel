const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index172.js?v=1732601582185","js/index96.js?v=1732601582185","js/page_layout.js?v=1732601582185","js/vue.js?v=1732601582185","js/__commonjsHelpers__.js?v=1732601582185","js/naive.js?v=1732601582185","js/common.js?v=1732601582185","js/public.js?v=1732601582185","css/public.css?v=1732601582185","css/page_layout.css?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang.js?v=1732601582185","js/index99.js?v=1732601582185","css/index11.css?v=1732601582185","js/mail.js?v=1732601582185","js/index173.js?v=1732601582185","js/index174.js?v=1732601582185","js/index102.js?v=1732601582185","css/index15.css?v=1732601582185","css/index66.css?v=1732601582185","js/index175.js?v=1732601582185","css/index67.css?v=1732601582185"])))=>i.map(i=>d[i]);
import{h as a,j as t,f as i,I as o,a4 as e,c as n}from"./page_layout.js?v=1732601582185";import{_ as s}from"./index.js?v=1732601582185";import{_ as l}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as d}from"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{h as _,d as p,f as r,a as u}from"./public.js?v=1732601582185";import{s as h,b as c,d as w,f as x}from"./mail.js?v=1732601582185";import{bo as f,bJ as g,aa as D}from"./naive.js?v=1732601582185";import{d as y,W as M,j,M as b,ak as k,O as E,X as R,Y as v,c as C,Z as z,R as L,a6 as S}from"./vue.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";const U=y({__name:"index",setup(y){const U=S((()=>n((()=>import("./index172.js?v=1732601582185")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])))),P=S((()=>n((()=>import("./index173.js?v=1732601582185")),__vite__mapDeps([14,10,5,3,4,6,13,2,7,8,9])))),A=S((()=>n((()=>import("./index174.js?v=1732601582185")),__vite__mapDeps([15,16,3,4,5,6,2,7,8,9,17,1,11,12,13,18])))),I=S((()=>n((()=>import("./index175.js?v=1732601582185")),__vite__mapDeps([19,7,2,3,4,5,6,9,8,13,20])))),{t:O}=M(),V=j({p:1,size:10}),q=_("",{isEdit:!1,onRefresh:()=>{K()}}),T=()=>{q.data.isEdit=!1,q.title=O("Mail.Domain.index_1"),q.show=!0},{table:B,columns:N}=p([{key:"domain",title:O("Mail.Domain.index_3"),ellipsis:{tooltip:!0}},{key:"quota",title:O("Mail.Domain.index_4"),render:t=>a(t.quota)},{key:"mailboxes",title:O("Mail.Domain.index_5")},{key:"mailbox_quota",title:O("Mail.Domain.index_6"),render:t=>a(t.mailbox_quota)},{key:"domain",title:O("Mail.Domain.index_7"),render:a=>b(f,{size:"small",value:a.catch_all,onUpdateValue:t=>{t?H(a):J(a)}},null)},{key:"domain",title:"SSL",render:a=>b(t,{type:a.ssl_status?"primary":"warning",onClick:()=>{X(a)}},{default:()=>[a.ssl_status?O("Mail.Domain.index_8",[a.ssl_info.notAfter]):O("Mail.Domain.index_9")]})},r({width:200,options:a=>[{label:O("Mail.Domain.index_10",["DNS"]),onClick:()=>{Z(a)}},{label:O("Public.Btn.Edit"),onClick:()=>{F(a)}},{label:O("Public.Btn.Del"),onClick:()=>{G(a)}}]})]),$=_(O("Mail.Domain.index_11"),{onRefresh:()=>{K()}}),H=a=>{$.data.row=a,$.show=!0},J=a=>{u({title:O("Mail.Domain.index_11"),content:O("Mail.Domain.index_12"),onConfirm:async()=>{await h({domain:a.domain,email:""}),K()}})},W=_(O("Mail.Domain.index_13",["SSL"]),{onRefresh:()=>{K()}}),X=a=>{W.data.row=a,W.show=!0},Y=_("",{onRefresh:()=>{K()}}),Z=async a=>{Y.data.row=a,Y.title=O("Mail.Domain.index_14",["DNS",a.domain]),Y.show=!0},F=a=>{q.data.row=a,q.data.isEdit=!0,q.title=O("Mail.Domain.index_15",[a.domain]),q.show=!0},G=async a=>{u({title:O("Mail.Domain.index_16"),content:O("Mail.Domain.index_17",[a.domain]),onConfirm:async()=>{await w({domain:a.domain}),K()}})},K=async()=>{try{B.loading=!0;const{message:a}=await c(k(V));i(a)&&(B.data=o(a.data)?a.data:[],B.total=e(a.page))}finally{B.loading=!1}},Q=async()=>{try{B.loading=!0,await x({domain:"all"}),V.p=1,K()}finally{B.loading=!1}};return K(),(a,t)=>{const i=D,o=m,e=d,n=l,_=s,p=g;return E(),R(p,{class:"p-16px"},{default:v((()=>[b(n,null,{toolsLeft:v((()=>[b(i,{type:"primary",onClick:T},{default:v((()=>[C(z(a.$t("Mail.Domain.index_1")),1)])),_:1})])),toolsRight:v((()=>[b(i,{onClick:Q},{default:v((()=>[C(z(a.$t("Mail.Domain.index_2")),1)])),_:1})])),table:v((()=>[b(o,{loading:L(B).loading,data:L(B).data,columns:L(N)},null,8,["loading","data","columns"])])),pageRight:v((()=>[b(e,{page:L(V).p,"onUpdate:page":t[0]||(t[0]=a=>L(V).p=a),"page-size":L(V).size,"onUpdate:pageSize":t[1]||(t[1]=a=>L(V).size=a),"item-count":L(B).total,onRefresh:K},null,8,["page","page-size","item-count"])])),_:1}),b(_,{show:L(q).show,"onUpdate:show":t[2]||(t[2]=a=>L(q).show=a),title:L(q).title,data:L(q).data,width:540,"min-height":388,footer:!0,component:L(U)},null,8,["show","title","data","component"]),b(_,{show:L($).show,"onUpdate:show":t[3]||(t[3]=a=>L($).show=a),title:L($).title,data:L($).data,width:480,"min-height":72,footer:!0,component:L(P)},null,8,["show","title","data","component"]),b(_,{show:L(W).show,"onUpdate:show":t[4]||(t[4]=a=>L(W).show=a),title:L(W).title,data:L(W).data,width:650,height:628,component:L(A)},null,8,["show","title","data","component"]),b(_,{show:L(Y).show,"onUpdate:show":t[5]||(t[5]=a=>L(Y).show=a),title:L(Y).title,data:L(Y).data,width:750,"min-height":652,component:L(I)},null,8,["show","title","data","component"])])),_:1})}}});export{U as default};
