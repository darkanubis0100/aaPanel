System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy14.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index-legacy97.js?v=1732601582185","./public-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./theme-chrome-legacy.js?v=1732601582185","./file-legacy.js?v=1732601582185"],(function(e,a){"use strict";var l,t,u,p,r,c,o,s,d,n,i,_,g,v,h,y,m,b,j,f;return{setters:[e=>{l=e._},e=>{t=e._},e=>{u=e._},e=>{p=e.d,r=e.W,c=e.r,o=e.j,s=e.O,d=e.P,n=e.M,i=e.Y,_=e.Q,g=e.R,v=e.k,h=e.v},e=>{y=e.ap,m=e.dh},e=>{b=e._},e=>{j=e.bL,f=e.bG},null,null,null,null,null,null],execute:function(){const a={class:"p-20px"},x={class:"w-100px mr-10px"},k={class:"w-240px"},w={class:"w-350px"},L={class:"w-350px"};e("default",p({__name:"index",setup(e,{expose:p}){const{t:D}=r(),I=y(),U=c(null),$=o({type:"path",path:"",data:"",tag:""}),R=[{label:D("Docker.LocalImage.build_1"),value:"path"},{label:D("Docker.LocalImage.build_5"),value:"data"}],E={path:{trigger:["blur","input"],validator:()=>"path"!==$.type||""!==$.path.trim()||new Error(D("Docker.LocalImage.build_6"))},data:{trigger:["blur","input"],validator:()=>"data"!==$.type||""!==$.data.trim()||new Error(D("Docker.LocalImage.build_7"))}};return p({onConfirm:async()=>{await(U.value?.validate());const e="path"===$.type?{path:$.path,tag:$.tag}:{data:$.data,tag:$.tag};await m(e),I.setRefresh(!0)}}),(e,p)=>{const r=j,c=u,o=f,y=t,m=l;return s(),d("div",a,[n(m,{ref_key:"formRef",ref:U,model:g($),rules:E},{default:i((()=>[n(o,{label:e.$t("Docker.LocalImage.build_1"),path:"path"},{default:i((()=>[_("div",x,[n(r,{value:g($).type,"onUpdate:value":p[0]||(p[0]=e=>g($).type=e),options:R},null,8,["value"])]),v(_("div",k,[n(c,{value:g($).path,"onUpdate:value":p[1]||(p[1]=e=>g($).path=e),placeholder:e.$t("Docker.LocalImage.build_2")},null,8,["value","placeholder"])],512),[[h,"path"===g($).type]])])),_:1},8,["label"]),v(n(o,{label:" ",path:"data"},{default:i((()=>[_("div",w,[n(b,{value:g($).data,"onUpdate:value":p[2]||(p[2]=e=>g($).data=e),lang:"json",theme:"monokai",height:"290","show-tips":!1},null,8,["value"])])])),_:1},512),[[h,"data"===g($).type]]),n(o,{label:e.$t("Docker.LocalImage.build_3"),"show-feedback":!1},{default:i((()=>[_("div",L,[n(y,{value:g($).tag,"onUpdate:value":p[3]||(p[3]=e=>g($).tag=e),rows:3,placeholder:e.$t("Docker.LocalImage.build_4")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));
