import{_ as e}from"./index215.js?v=1732601582185";import{m as a,dd as s,I as l}from"./page_layout.js?v=1732601582185";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang19.js?v=1732601582185";import{d as t,W as i,r as n,x as r,O as p,P as u,M as d,R as m,ac as _,Q as c,X as v,ao as f,n as x}from"./vue.js?v=1732601582185";import"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";import"./index.js?v=1732601582185";import"./index151.js?v=1732601582185";import"./index96.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";const j={class:"flex h-full"},g={class:"flex-1 p-16px overflow-hidden"},y=t({__name:"index",props:{id:{default:""}},emits:["close"],setup(t,{emit:y}){const k=t,h=y,{t:C}=i(),b=n(k.id),w=r([]),D=n(),P=()=>{x((()=>{var e;null==(e=D.value)||e.getContent()}))};return(async()=>{const e=a.loading(C("Public.Api.Load",[C("Docker.Container.log.index_27")]));try{const{message:e}=await s();l(e)&&e.length>0?(w.value=e.map((e=>({key:e.id,label:e.name}))),b.value||(b.value=e[0].id)):(a.error(C("Docker.Container.log.index_28")),h("close"))}finally{e.close()}})(),(a,s)=>{const l=e;return p(),u("div",j,[d(l,{value:m(b),"onUpdate:value":[s[0]||(s[0]=e=>_(b)?b.value=e:null),P],class:"w-auto h-full","pane-padding":"0px",data:m(w),onClickSelf:P},null,8,["value","data"]),c("div",g,[m(b)?(p(),v(o,{key:0,ref_key:"logRef",ref:D,id:m(b)},null,8,["id"])):f("",!0)])])}}});export{y as default};
