System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./setting-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(t,e){"use strict";var n,l,i,a,s,c,u,d,o,r,g,_,f,y,p,m,x;return{setters:[t=>{n=t._},t=>{l=t._},t=>{i=t.I},t=>{a=t.d,s=t.f},t=>{c=t.T},t=>{u=t.d,d=t.W,o=t.M,r=t.O,g=t.P,_=t.R,f=t.Y,y=t.Q,p=t.Z,m=t.i},t=>{x=t._},null,null],execute:function(){const e={class:"p-20px"};t("default",u({__name:"attack",setup(t){const{t:u}=d(),{table:j,columns:W,setLoading:S}=a([{key:"url",title:u("Waf.Setting.index_27"),minWidth:100,ellipsis:{tooltip:{width:"trigger"}},render:t=>o("a",{class:"bt-link",href:t.url,target:"_blank"},[t.url])},{key:"mode",title:u("Waf.Setting.index_28"),width:"20%",minWidth:100,render:()=>{let t;return o(x,{checked:!0},"function"==typeof(e=t=u("Waf.Setting.index_30"))||"[object Object]"===Object.prototype.toString.call(e)&&!m(e)?t:{default:()=>[t]});var e}},s({width:100,options:t=>[{label:u("Waf.Setting.index_29"),onClick:()=>{window.open(t.url)}}]})]);return(async()=>{try{S(!0);const{message:t}=await c();i(t)&&(j.data=t.map((t=>({url:t}))))}finally{S(!1)}})(),(t,i)=>{const a=l,s=n;return r(),g("div",e,[o(a,{"loading-num":6,loading:_(j).loading,data:_(j).data,columns:_(W)},null,8,["loading","data","columns"]),o(s,{class:"mt-16px"},{default:f((()=>[y("li",null,p(t.$t("Waf.Setting.index_22")),1),y("li",null,p(t.$t("Waf.Setting.index_23")),1),y("li",null,p(t.$t("Waf.Setting.index_24")),1),y("li",null,p(t.$t("Waf.Setting.index_25")),1),y("li",null,p(t.$t("Waf.Setting.index_26")),1)])),_:1})])}}}))}}}));
