import{_ as e}from"./index102.js?v=1732601582185";import{bd as a}from"./page_layout.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang14.js?v=1732601582185";import{aa as l}from"./naive.js?v=1732601582185";import{d as n,W as s,r,f as i,O as o,P as p,M as u,R as m,ac as d,Q as v,Y as h,c,Z as _,n as w}from"./vue.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";import"./theme-chrome.js?v=1732601582185";import"./file.js?v=1732601582185";const x={class:"p-20px"},f={class:"mt-12px"},j=n({__name:"index",setup(n){const{t:j}=s(),b=a(),g=r(null),P=r("index"),y=new Map([["index",{label:j("Site.PHP.index_51"),path:"/www/server/panel/data/defaultDoc.html"}],["404",{label:j("Site.PHP.index_52"),path:"/www/server/panel/data/404.html"}],["blank",{label:j("Site.PHP.index_53"),path:"nginx"===b.web.type?"/www/server/nginx/html/index.html":"/www/server/apache/htdocs/index.html"}],["stop",{label:j("Site.PHP.index_54"),path:"/www/server/stop/index.html"}]]),k=(()=>{const e=[];return y.forEach(((a,t)=>{e.push({key:t,label:a.label})})),e})(),C=()=>{var e;return(null==(e=y.get(P.value))?void 0:e.path)||""},H=r(C()),S=()=>{H.value=C()},M=()=>{w((()=>{var e;null==(e=g.value)||e.getContent()}))},R=async()=>{var e;null==(e=g.value)||e.saveFile()};return i((()=>{var e;null==(e=g.value)||e.getContent()})),(a,n)=>{const s=e,r=l;return o(),p("div",x,[u(s,{value:m(P),"onUpdate:value":[n[0]||(n[0]=e=>d(P)?P.value=e:null),S],options:m(k),onClick:M},null,8,["value","options"]),u(t,{ref_key:"configRef",ref:g,path:m(H),"onUpdate:path":n[1]||(n[1]=e=>d(H)?H.value=e:null),height:440,"show-encoding":!0},null,8,["path"]),v("div",f,[u(r,{type:"primary",onClick:R},{default:h((()=>[c(_(a.$t("Site.Cert.index_60")),1)])),_:1})])])}}});export{j as default};
