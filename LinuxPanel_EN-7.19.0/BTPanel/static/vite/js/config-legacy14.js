System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./setting-legacy.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185"],(function(t,e){"use strict";var a,n,l,i,o,c,u,s,r,d,g,f,_,p,v,y,m,x,w,j,S,b,W,h,C,P,$,k,B,U,E;return{setters:[t=>{a=t._},t=>{n=t._},t=>{l=t.d,i=t.W,o=t.r,c=t.O,u=t.P,s=t.Q,r=t.M,d=t.R,g=t.ac,f=t.am,_=t.Y,p=t.c,v=t.Z},t=>{y=t.f,m=t.m,x=t.dz},t=>{w=t.d,j=t.f,S=t.u,b=t.a},t=>{W=t.P,h=t.g,C=t.Q,P=t.R,$=t.S},t=>{k=t._},t=>{B=t.ad,U=t.aa,E=t.bh},null,null],execute:function(){const e={class:"p-20px"},Q={class:"flex mb-16px"},R={class:"flex-1 mr-16px"};t("default",l({__name:"config",setup(t){const{t:l}=i(),z=o(""),A=async()=>{""!==z.value.trim()?(await C({text:z.value}),z.value="",O()):m.error(l("Waf.Setting.config_176"))},D=()=>{const t=o("");S({title:l("Waf.Setting.config_187"),width:440,footer:!0,content:()=>r("div",{class:"p-20px"},[r(k,{value:t.value,"onUpdate:value":e=>t.value=e,rows:14,placeholder:l("Waf.Setting.config_188")},null)]),onConfirm:async()=>{if(""===t.value.trim())return m.error(l("Waf.Setting.config_179")),!1;await P({text:t.value}),O()}})},H=()=>{const t=o(K.data.map((t=>t.word)).join("\n"));S({title:l("Waf.Setting.config_177"),width:440,footer:!0,content:()=>r("div",{class:"p-20px"},[r(k,{value:t.value,"onUpdate:value":e=>t.value=e,rows:14,readonly:!0},null)]),onConfirm:()=>(x(t.value,"body_intercept.json"),!1)})},I=()=>{b({title:l("Waf.Setting.config_180"),content:l("Waf.Setting.config_181"),onConfirm:async()=>{await $(),O()}})},{table:K,columns:L,setLoading:M}=w([{key:"word",title:l("Waf.Setting.config_184")},j({width:80,options:t=>[{label:l("Public.Btn.Del"),onClick:async()=>{await W({text:t.word}),O()}}]})]),O=async()=>{try{M(!0);const{message:t}=await h();y(t)&&(K.data=t.body_intercept.map((t=>({word:t}))))}finally{M(!1)}};return O(),(t,l)=>{const i=B,o=U,y=n,m=E,x=a;return c(),u("div",e,[s("div",Q,[s("div",R,[r(i,{value:d(z),"onUpdate:value":l[0]||(l[0]=t=>g(z)?z.value=t:null),placeholder:t.$t("Waf.Setting.config_184"),onKeyup:f(A,["enter"])},null,8,["value","placeholder"])]),r(o,{type:"primary",onClick:A},{default:_((()=>[p(v(t.$t("Public.Btn.Add")),1)])),_:1})]),r(y,{"max-height":258,loading:d(K).loading,data:d(K).data,columns:d(L)},null,8,["loading","data","columns"]),r(m,{class:"mt-16px"},{default:_((()=>[r(o,{onClick:D},{default:_((()=>[p(v(t.$t("Public.Btn.Import")),1)])),_:1}),r(o,{onClick:H},{default:_((()=>[p(v(t.$t("Public.Btn.Export")),1)])),_:1}),r(o,{onClick:I},{default:_((()=>[p(v(t.$t("Public.Btn.Empty")),1)])),_:1})])),_:1}),r(x,{class:"mt-16px"},{default:_((()=>[s("li",null,v(t.$t("Waf.Setting.config_185")),1),s("li",null,v(t.$t("Waf.Setting.config_186")),1)])),_:1})])}}}))}}}));
