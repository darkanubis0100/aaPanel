System.register(["./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index-legacy96.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./file-legacy.js?v=1732601582185","./site-legacy.js?v=1732601582185","./index-legacy209.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy14.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./index-legacy215.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1732601582185","./index-legacy97.js?v=1732601582185","./index-legacy102.js?v=1732601582185","./index-legacy121.js?v=1732601582185","./refersh-legacy.js?v=1732601582185","./php-legacy.js?v=1732601582185","./form.vue_vue_type_script_setup_true_lang-legacy2.js?v=1732601582185","./index-legacy171.js?v=1732601582185","./logs.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./theme-chrome-legacy.js?v=1732601582185"],(function(e,l){"use strict";var a,t,n,u,s,i,c,_,r,p,d,g,o,v,y,m,x,f,j,h,w,b,C,$,S,k,U,R,P,T,q,E,G,H;return{setters:[e=>{a=e._},e=>{t=e._},e=>{n=e._},e=>{u=e.bd,s=e.f,i=e.m,c=e.I,_=e.j},e=>{r=e.s},e=>{p=e.bf,d=e.bg},e=>{g=e.u},e=>{o=e._},e=>{v=e.cb,y=e.bL,m=e.bh,x=e.aa,f=e.ad,j=e.bG},e=>{h=e.d,w=e.W,b=e.r,C=e.j,$=e.f,S=e.O,k=e.P,U=e.M,R=e.Y,P=e.Q,T=e.R,q=e.ac,E=e.Z,G=e.c,H=e.ak},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"w-160px"},I={class:"w-380px px-20px pt-24px pb-8px"},L={class:"w-180px"};e("default",h({__name:"index",setup(e,{expose:h}){const{t:M}=w(),{data:N}=g(),O=u(),Q=b(null),W=b(null),Y=b([]),Z=b("");let z="";const A=e=>{Z.value=B(e),Q.value?.getContent()},B=e=>{const{webserver:l}=O;return"0.Current"===e?"apache"===l||"openlitespeed"===l?`${z}/.htaccess`:`/www/server/panel/vhost/rewrite/${N.name}.conf`:`/www/server/panel/rewrite/${"openlitespeed"===l?"apache":l}/${W.value}.conf`},D=async()=>{const e=B("0.Current"),{message:l}=await r({path:e,data:V.data,encoding:"utf-8"});s(l)&&i.success(l.msg);const a=Y.value[0].value;W.value=a,A(a)},F=b(!1),J=()=>{F.value=!0},K=b(null),V=C({name:"",data:""}),X={name:{required:!0,trigger:["blur","change"],message:M("Site.RulesError.index_21")}},ee=async({hide:e})=>{await(K.value?.validate()),await p(H(V)),V.name="",le(),e()},le=async()=>{const{message:e}=await d({siteName:N.name});if(s(e)){z=e.sitePath;const l=c(e.rewrite)?e.rewrite:[];Y.value=v(l).map((e=>({label:e,value:e}))),l.length&&(W.value=l[0],Z.value=B(l[0]))}Q.value?.getContent()},ae=async()=>{le()};return $((()=>{ae()})),h({init:ae}),(e,u)=>{const s=y,i=_,c=m,r=x,p=n,d=f,g=j,v=t,h=a;return S(),k("div",null,[U(c,{class:"items-center mb-12px"},{default:R((()=>[P("div",l,[U(s,{value:T(W),"onUpdate:value":[u[0]||(u[0]=e=>q(W)?W.value=e:null),A],options:T(Y)},null,8,["value","options"])]),P("div",null,[P("span",null,E(e.$t("Site.Config.index_56"))+": ",1),U(i,{href:"https://winginx.com/en/htaccess",target:"_blank"},{default:R((()=>[G(E(e.$t("Site.Cert.index_42")),1)])),_:1})])])),_:1}),U(o,{ref_key:"configRef",ref:Q,path:T(Z),"onUpdate:path":u[1]||(u[1]=e=>q(Z)?Z.value=e:null),value:T(V).data,"onUpdate:value":u[2]||(u[2]=e=>T(V).data=e),height:400,"show-tips":!1},null,8,["path","value"]),U(c,{class:"items-center mt-12px"},{default:R((()=>[U(r,{type:"primary",onClick:D},{default:R((()=>[G(E(e.$t("Site.Cert.index_60")),1)])),_:1}),U(r,{onClick:J},{default:R((()=>[G(E(e.$t("Site.Cert.index_39")),1)])),_:1})])),_:1}),U(p,{class:"mt-24px"},{default:R((()=>[P("li",null,E(e.$t("Site.Config.index_57")),1),P("li",null,E(e.$t("Site.Config.index_52")),1),P("li",null,E(e.$t("Site.Config.index_58")),1)])),_:1}),U(h,{show:T(F),"onUpdate:show":u[4]||(u[4]=e=>q(F)?F.value=e:null),title:"Save as rewrite template",footer:!0,onConfirm:ee},{default:R((()=>[P("div",I,[U(v,{ref_key:"formRef",ref:K,model:T(V),rules:X},{default:R((()=>[U(g,{label:"Template name",path:"name"},{default:R((()=>[P("div",L,[U(d,{value:T(V).name,"onUpdate:value":u[3]||(u[3]=e=>T(V).name=e),placeholder:"Template name"},null,8,["value"])])])),_:1})])),_:1},8,["model"])])])),_:1},8,["show"])])}}}))}}}));
