System.register(["./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./mail-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(l,e){"use strict";var a,t,s,n,i,c,u,p,o,r,d,_,x,v,f,m,b,y,g,h,M,j,C,$;return{setters:[l=>{a=l.a},l=>{t=l._},l=>{s=l.f},l=>{n=l.a},l=>{i=l.al,c=l.am,u=l.an},l=>{p=l.bL,o=l.ad,r=l.bN,d=l.bG,_=l.aa},l=>{x=l.d,v=l.W,f=l.j,m=l.r,b=l.O,y=l.P,g=l.Q,h=l.M,M=l.Y,j=l.Z,C=l.R,$=l.c},null,null],execute:function(){const e={class:"px-20px pt-24px pb-8px"},w={class:"mb-20px"},P={class:"mb-20px text-desc"},k={class:"mb-6px"},z={class:"leading-18px"},D={class:"w-260px"};l("default",x({__name:"unsubscribe",emits:["close"],setup(l,{expose:x,emit:B}){const O=B,{t:U}=v(),G=f({http:"https://",url:""}),H=m(""),L=m([{label:"http://",value:"http://"},{label:"https://",value:"https://"}]),N=l=>{const{clipboardData:e}=l;if(e){const l=e.getData("text");if(l)if(-1===l.indexOf("://"))console.log(1),G.url=l;else{const e=l.split("://")[0]+"://";G.http=e,G.url=l.replace(e,"")}}l.preventDefault()},Q=async()=>{n({title:U("Mail.Mass.index_59"),content:U("Mail.Mass.index_60"),onConfirm:async()=>{await i(),R()}})},R=async()=>{const{message:l}=await c();if(s(l)){if(H.value=l.panel_url,H.value){const l=H.value.split("://")[0]+"://";G.http=l}if(l.url){const e=l.url.split("://")[0]+"://";G.http=e,G.url=l.url.replace(e,"")}}},S=()=>{O("close")},W=async()=>{await u({url:G.http+G.url}),O("close")};return R(),x({onConfirm:W}),(l,s)=>{const n=p,i=o,c=r,u=d,x=t,v=_,f=a;return b(),y("div",null,[g("div",e,[h(x,{model:C(G),"label-width":"auto"},{default:M((()=>[g("div",w,j(l.$t("Mail.Mass.index_55"))+j(C(H)||"--"),1),g("div",P,[g("div",k,j(l.$t("Mail.Mass.index_56")),1),g("div",z,j(l.$t("Mail.Mass.index_57")),1)]),h(u,{label:l.$t("Mail.Mass.index_58"),path:"url"},{default:M((()=>[g("div",D,[h(c,null,{default:M((()=>[h(n,{value:C(G).http,"onUpdate:value":s[0]||(s[0]=l=>C(G).http=l),style:{width:"90px"},options:C(L)},null,8,["value","options"]),h(i,{value:C(G).url,"onUpdate:value":s[1]||(s[1]=l=>C(G).url=l),class:"flex-1",placeholder:"",onPaste:N},null,8,["value"])])),_:1})])])),_:1},8,["label"])])),_:1},8,["model"])]),h(f,null,{default:M((()=>[h(v,{size:"small",onClick:Q},{default:M((()=>[$(j(l.$t("Mail.Mass.index_59")),1)])),_:1}),h(v,{class:"cancel-btn",size:"small",color:"#cbcbcb",onClick:S},{default:M((()=>[$(j(l.$t("Public.Btn.Cancel")),1)])),_:1}),h(v,{type:"primary",size:"small",onClick:W},{default:M((()=>[$(j(l.$t("Public.Btn.Confirm")),1)])),_:1})])),_:1})])}}}))}}}));
