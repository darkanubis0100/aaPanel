import{c7 as s,f as t,m as a,E as e,c3 as n,u as l,c8 as c,_ as i,k as o}from"./page_layout.js?v=1732601582185";import{d as p,W as r,r as x,O as u,P as d,M as m,R as _,V as f,f as v,X as y,Y as g,$ as b,Q as w,Z as j,c as k}from"./vue.js?v=1732601582185";import{A as h,u as I,s as $}from"./public.js?v=1732601582185";import{N as A}from"./global.js?v=1732601582185";import{d as C}from"./utils2.js?v=1732601582185";import{_ as P}from"./index171.js?v=1732601582185";import{bJ as W,bO as T,aa as N,aW as E}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const L={class:"h-500px"},O=p({__name:"logs",setup(n){const{t:l}=r(),c=x(!1),i=x(""),{loop:o,clearTimer:p}=h((async()=>{const{message:n}=await s();t(n)&&(i.value=n.result,i.value.includes("|-Successify --- Command executed! ---")&&(p(),a.success(l("Account.Install.index_9")),e()))}),1);return o(),(s,t)=>{const a=P;return u(),d("div",L,[m(a,{loading:_(c),log:_(i)},null,8,["loading","log"])])}}}),z={class:"flex items-center py-6px px-4px"},B={class:"ml-8px text-#333"},H={class:"py-52px"},J={class:"mb-24px text-center text-24px font-bold"},M={class:"mb-16px"},Q={class:"ul-style"},R={key:0,class:"text-center mb-40px"},S={key:1,class:"text-center mb-40px"},V={key:0,class:"text-15px"},X={class:"flex justify-center"},Y={class:"w-76%"},Z=o(p({__name:"index",setup(s){const{t:a}=r(),e=n(),{isPro:o}=f(l()),p=x(""),h=()=>{$({source:301})},P=async()=>{await c(),setTimeout((()=>{L()}),1e3)},L=()=>{I({title:a("Account.Install.index_5"),width:640,component:O})},Z=()=>{C("nginx")};return(async()=>{const{message:s}=await A();t(s)&&s.web.setup&&(p.value=s.webserver)})(),v((()=>{1===e.install&&L()})),(s,t)=>{const a=i,e=T,n=N,l=b("i18n-t"),c=E,r=W;return u(),y(r,{class:"p-16px"},{default:g((()=>[m(e,{"show-icon":!1},{default:g((()=>[w("div",z,[m(a,{class:"text-warning",name:"base-warning",size:"21"}),w("span",B,j(s.$t("Waf.Install.index_1")),1)])])),_:1}),w("div",H,[w("div",J,j(s.$t("Account.Install.index_1")),1),w("div",M,[w("ul",Q,[w("li",null,j(s.$t("Account.Install.index_2")),1),w("li",null,j(s.$t("Account.Install.index_3")),1),w("li",null,j(s.$t("Account.Install.index_4")),1)])]),t[0]||(t[0]=w("div",{class:"mb-24px text-center text-14px color-desc"}," This function provides 30 sub-accounts for Pro edition . Each sub-account can independently manage the resources allocated to it. ",-1)),_(o)?(u(),d("div",S,["nginx"===_(p).toLocaleLowerCase()?(u(),y(n,{key:0,type:"primary",class:"px-20px h-38px text-15px",onClick:P},{default:g((()=>[k(j(s.$t("Waf.Install.index_8")),1)])),_:1})):(u(),y(e,{key:1,class:"install-tips inline-flex w-auto mx-auto",type:"warning","show-icon":!1},{default:g((()=>[_(p)?(u(),d("div",V,j(s.$t("Account.Install.index_7",[_(p),"Nginx"])),1)):(u(),y(l,{key:1,tag:"div",keypath:"Account.Install.index_8",scope:"global",class:"text-15px"},{link_1:g((()=>[w("a",{class:"bt-link",href:"javascript:;",onClick:Z},j(s.$t("Public.Btn.Install")+" Nginx"),1)])),_:1}))])),_:1}))])):(u(),d("div",R,[m(n,{type:"primary",class:"px-20px h-38px text-15px",onClick:h},{default:g((()=>[k(j(s.$t("WP.Transition.index_7")),1)])),_:1})])),w("div",X,[w("div",Y,[m(c,{width:"100%",src:_("/static/vite/images/1.jpg")},null,8,["src"])])])])])),_:1})}}}),[["__scopeId","data-v-d4412ea5"]]);export{Z as default};
