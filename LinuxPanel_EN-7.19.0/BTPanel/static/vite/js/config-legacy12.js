System.register(["./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./setting-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(t,e){"use strict";var l,a,n,i,c,s,o,g,u,r,d,f,p,x,_,y,m,v,j,S,W,b,h;return{setters:[t=>{l=t._},t=>{a=t._},t=>{n=t.f,i=t.m},t=>{c=t.d,s=t.f},t=>{o=t.I,g=t.g,u=t.J},t=>{r=t.ad,d=t.aa},t=>{f=t.d,p=t.W,x=t.j,_=t.O,y=t.P,m=t.Q,v=t.M,j=t.R,S=t.Y,W=t.c,b=t.Z,h=t.ak},null,null],execute:function(){const e={class:"p-20px"},$={class:"flex mb-16px"},k={class:"flex-1 mr-16px"},w={class:"w-230px mr-16px"};t("default",f({__name:"config",setup(t){const{t:f}=p(),P=x({text:"",text2:""}),B=async()=>{""!==P.text.trim()&&""!==P.text2.trim()?(await u(h(P)),P.text="",P.text2="",A()):i.error(f("Waf.Setting.config_170"))},{table:C,columns:O,setLoading:U}=c([{key:"text",title:f("Waf.Setting.config_164"),ellipsis:{tooltip:!0}},{key:"text2",title:f("Waf.Setting.config_165"),ellipsis:{tooltip:!0}},s({width:80,options:t=>[{label:f("Public.Btn.Del"),onClick:async()=>{await o({body:{[t.text]:t.text2}}),A()}}]})]),A=async()=>{try{U(!0);const{message:t}=await g();n(t)&&(C.data=t.body_character_string.map((t=>{const e=Object.keys(t);return{text:e[0],text2:t[e[0]]}})))}finally{U(!1)}};return A(),(t,n)=>{const i=r,c=d,s=a,o=l;return _(),y("div",e,[m("div",$,[m("div",k,[v(i,{value:j(P).text,"onUpdate:value":n[0]||(n[0]=t=>j(P).text=t),placeholder:t.$t("Waf.Setting.config_164")},null,8,["value","placeholder"])]),m("div",w,[v(i,{value:j(P).text2,"onUpdate:value":n[1]||(n[1]=t=>j(P).text2=t),placeholder:t.$t("Waf.Setting.config_165")},null,8,["value","placeholder"])]),v(c,{type:"primary",onClick:B},{default:S((()=>[W(b(t.$t("Public.Btn.Add")),1)])),_:1})]),v(s,{"max-height":230,loading:j(C).loading,data:j(C).data,columns:j(O)},null,8,["loading","data","columns"]),v(o,{class:"mt-16px"},{default:S((()=>[m("li",null,b(t.$t("Waf.Setting.config_166")),1),m("li",null,b(t.$t("Waf.Setting.config_167")),1),m("li",null,b(t.$t("Waf.Setting.config_168")),1),m("li",null,b(t.$t("Waf.Setting.config_169")),1)])),_:1})])}}}))}}}));