System.register(["./index-legacy102.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy14.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./theme-chrome-legacy.js?v=1732601582185","./file-legacy.js?v=1732601582185"],(function(e,l){"use strict";var t,a,n,s,u,i,c,r,p,o,d,h,v,_,g,y,w,x;return{setters:[e=>{t=e._},e=>{a=e.bd},e=>{n=e._},e=>{s=e.aa},e=>{u=e.d,i=e.W,c=e.r,r=e.f,p=e.O,o=e.P,d=e.M,h=e.R,v=e.ac,_=e.Q,g=e.Y,y=e.c,w=e.Z,x=e.n},null,null,null,null,null],execute:function(){const l={class:"p-20px"},m={class:"mt-12px"};e("default",u({__name:"index",setup(e){const{t:u}=i(),f=a(),j=c(null),b=c("index"),P=new Map([["index",{label:u("Site.PHP.index_51"),path:"/www/server/panel/data/defaultDoc.html"}],["404",{label:u("Site.PHP.index_52"),path:"/www/server/panel/data/404.html"}],["blank",{label:u("Site.PHP.index_53"),path:"nginx"===f.web.type?"/www/server/nginx/html/index.html":"/www/server/apache/htdocs/index.html"}],["stop",{label:u("Site.PHP.index_54"),path:"/www/server/stop/index.html"}]]),S=(()=>{const e=[];return P.forEach(((l,t)=>{e.push({key:t,label:l.label})})),e})(),k=()=>P.get(b.value)?.path||"",C=c(k()),H=()=>{C.value=k()},M=()=>{x((()=>{j.value?.getContent()}))},R=async()=>{j.value?.saveFile()};return r((()=>{j.value?.getContent()})),(e,a)=>{const u=t,i=s;return p(),o("div",l,[d(u,{value:h(b),"onUpdate:value":[a[0]||(a[0]=e=>v(b)?b.value=e:null),H],options:h(S),onClick:M},null,8,["value","options"]),d(n,{ref_key:"configRef",ref:j,path:h(C),"onUpdate:path":a[1]||(a[1]=e=>v(C)?C.value=e:null),height:440,"show-encoding":!0},null,8,["path"]),_("div",m,[d(i,{type:"primary",onClick:R},{default:g((()=>[y(w(e.$t("Site.Cert.index_60")),1)])),_:1})])])}}}))}}}));
