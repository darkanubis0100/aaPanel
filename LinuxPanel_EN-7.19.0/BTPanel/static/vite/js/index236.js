import{_ as e}from"./index.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{_ as a}from"./index96.js?v=1732601582185";import{bd as s,f as n,m as i,I as r,j as l}from"./page_layout.js?v=1732601582185";import{s as p}from"./file.js?v=1732601582185";import{bf as u,bg as o}from"./site.js?v=1732601582185";import{u as _}from"./index209.js?v=1732601582185";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang14.js?v=1732601582185";import{cb as d,bL as c,bh as v,aa as f,ad as x,bG as j}from"./naive.js?v=1732601582185";import{d as g,W as h,r as w,j as y,f as b,O as C,P as S,M as $,Y as k,Q as U,R,ac as P,Z as T,c as q,ak as E}from"./vue.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";import"./index215.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import"./index99.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang5.js?v=1732601582185";import"./index97.js?v=1732601582185";import"./index102.js?v=1732601582185";import"./index121.js?v=1732601582185";import"./refersh.js?v=1732601582185";import"./php.js?v=1732601582185";import"./form.vue_vue_type_script_setup_true_lang2.js?v=1732601582185";import"./index171.js?v=1732601582185";import"./logs.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import"./theme-chrome.js?v=1732601582185";const G={class:"w-160px"},H={class:"w-380px px-20px pt-24px pb-8px"},I={class:"w-180px"},L=g({__name:"index",setup(g,{expose:L}){const{t:M}=h(),{data:N}=_(),O=s(),Q=w(null),W=w(null),Y=w([]),Z=w("");let z="";const A=e=>{var t;Z.value=B(e),null==(t=Q.value)||t.getContent()},B=e=>{const{webserver:t}=O;if("0.Current"===e)return"apache"===t||"openlitespeed"===t?"".concat(z,"/.htaccess"):"/www/server/panel/vhost/rewrite/".concat(N.name,".conf");return"/www/server/panel/rewrite/".concat("openlitespeed"===t?"apache":t,"/").concat(W.value,".conf")},D=async()=>{const e=B("0.Current"),{message:t}=await p({path:e,data:V.data,encoding:"utf-8"});n(t)&&i.success(t.msg);const a=Y.value[0].value;W.value=a,A(a)},F=w(!1),J=()=>{F.value=!0},K=w(null),V=y({name:"",data:""}),X={name:{required:!0,trigger:["blur","change"],message:M("Site.RulesError.index_21")}},ee=async({hide:e})=>{var t;await(null==(t=K.value)?void 0:t.validate()),await u(E(V)),V.name="",te(),e()},te=async()=>{var e;const{message:t}=await o({siteName:N.name});if(n(t)){z=t.sitePath;const e=r(t.rewrite)?t.rewrite:[];Y.value=d(e).map((e=>({label:e,value:e}))),e.length&&(W.value=e[0],Z.value=B(e[0]))}null==(e=Q.value)||e.getContent()},ae=async()=>{te()};return b((()=>{ae()})),L({init:ae}),(s,n)=>{const i=c,r=l,p=v,u=f,o=a,_=x,d=j,g=t,h=e;return C(),S("div",null,[$(p,{class:"items-center mb-12px"},{default:k((()=>[U("div",G,[$(i,{value:R(W),"onUpdate:value":[n[0]||(n[0]=e=>P(W)?W.value=e:null),A],options:R(Y)},null,8,["value","options"])]),U("div",null,[U("span",null,T(s.$t("Site.Config.index_56"))+": ",1),$(r,{href:"https://winginx.com/en/htaccess",target:"_blank"},{default:k((()=>[q(T(s.$t("Site.Cert.index_42")),1)])),_:1})])])),_:1}),$(m,{ref_key:"configRef",ref:Q,path:R(Z),"onUpdate:path":n[1]||(n[1]=e=>P(Z)?Z.value=e:null),value:R(V).data,"onUpdate:value":n[2]||(n[2]=e=>R(V).data=e),height:400,"show-tips":!1},null,8,["path","value"]),$(p,{class:"items-center mt-12px"},{default:k((()=>[$(u,{type:"primary",onClick:D},{default:k((()=>[q(T(s.$t("Site.Cert.index_60")),1)])),_:1}),$(u,{onClick:J},{default:k((()=>[q(T(s.$t("Site.Cert.index_39")),1)])),_:1})])),_:1}),$(o,{class:"mt-24px"},{default:k((()=>[U("li",null,T(s.$t("Site.Config.index_57")),1),U("li",null,T(s.$t("Site.Config.index_52")),1),U("li",null,T(s.$t("Site.Config.index_58")),1)])),_:1}),$(h,{show:R(F),"onUpdate:show":n[4]||(n[4]=e=>P(F)?F.value=e:null),title:"Save as rewrite template",footer:!0,onConfirm:ee},{default:k((()=>[U("div",H,[$(g,{ref_key:"formRef",ref:K,model:R(V),rules:X},{default:k((()=>[$(d,{label:"Template name",path:"name"},{default:k((()=>[U("div",I,[$(_,{value:R(V).name,"onUpdate:value":n[3]||(n[3]=e=>R(V).name=e),placeholder:"Template name"},null,8,["value"])])])),_:1})])),_:1},8,["model"])])])),_:1},8,["show"])])}}});export{L as default};
