System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185"],(function(e,a){"use strict";var l,r,t,o,n,u,i,d,v,c,s,p,w,_,k,m,b,f,g,x,y,h,D;return{setters:[e=>{l=e._},e=>{r=e._},e=>{t=e.ap,o=e.dl,n=e.bC,u=e.dm,i=e.aw},e=>{d=e.d,v=e.W,c=e.r,s=e.j,p=e.O,w=e.P,_=e.M,k=e.Y,m=e.Q,b=e.R,f=e.ac,g=e.ak},e=>{x=e.ad,y=e.bG,h=e.bL,D=e.bo},null,null,null],execute:function(){const a={class:"p-20px"},N={class:"w-420px"},$={class:"w-420px"},j={class:"flex"},E={class:"w-150px"},U={class:"w-150px"},R={class:"w-420px"},C={class:"flex"},G={class:"w-150px"},H={class:"w-150px"},L={class:"w-420px"};e("default",d({__name:"index",setup(e,{expose:d}){const{t:M}=v(),O=t(),P=c(null),Q=c(!1),S=s({name:"",driver:"bridge",options:"",subnet:"",gateway:"",iprange:"",labels:"",subnet_v6:"",gateway_v6:"",remark:""}),W=[{label:"bridge",value:"bridge"},{label:"ipvlan",value:"ipvlan"},{label:"macvlan",value:"macvlan"},{label:"overlay",value:"overlay"}],Y=e=>{e||(S.subnet_v6="",S.gateway_v6="")},q={name:{trigger:["blur","input"],validator:()=>""!==S.name.trim()||new Error(M("Docker.Network.form.index_2"))},subnet:{trigger:["blur","input"],validator:()=>""===S.subnet.trim()?new Error(M("Docker.Network.form.index_10")):!!o(S.subnet.trim())||new Error(M("Docker.Network.form.index_11"))},gateway:{trigger:["blur","input"],validator:()=>""===S.gateway.trim()?new Error(M("Docker.Network.form.index_12")):!!n(S.gateway.trim())||new Error(M("Docker.Network.form.index_13"))},iprange:{trigger:["blur","input"],validator:()=>""===S.iprange.trim()?new Error(M("Docker.Network.form.index_14")):!!o(S.iprange.trim())||new Error(M("Docker.Network.form.index_15"))},subnet_v6:{trigger:["blur","input"],validator:()=>""!==S.subnet_v6.trim()||new Error(M("Docker.Network.form.index_19"))},gateway_v6:{trigger:["blur","input"],validator:()=>""!==S.gateway_v6.trim()||new Error(M("Docker.Network.form.index_20"))}};return d({onConfirm:async()=>{await(P.value?.validate()),await u(g(S)),O.setRefresh(!0)}}),(e,t)=>{const o=x,n=y,u=h,d=D,v=i,c=r,s=l;return p(),w("div",a,[_(s,{ref_key:"formRef",ref:P,model:b(S),rules:q},{default:k((()=>[_(n,{label:e.$t("Docker.Network.form.index_1"),path:"name"},{default:k((()=>[m("div",N,[_(o,{value:b(S).name,"onUpdate:value":t[0]||(t[0]=e=>b(S).name=e),placeholder:e.$t("Docker.Network.form.index_2")},null,8,["value","placeholder"])])])),_:1},8,["label"]),_(n,{label:e.$t("Docker.Network.form.index_21"),path:"driver"},{default:k((()=>[m("div",$,[_(u,{value:b(S).driver,"onUpdate:value":t[1]||(t[1]=e=>b(S).driver=e),options:W},null,8,["value"])])])),_:1},8,["label"]),m("div",j,[_(n,{label:e.$t("Docker.Network.form.index_3"),path:"subnet"},{default:k((()=>[m("div",E,[_(o,{value:b(S).subnet,"onUpdate:value":t[2]||(t[2]=e=>b(S).subnet=e),placeholder:e.$t("Docker.Network.form.index_4")},null,8,["value","placeholder"])])])),_:1},8,["label"]),_(n,{label:e.$t("Docker.Network.form.index_5"),path:"gateway","label-width":"120"},{default:k((()=>[m("div",U,[_(o,{value:b(S).gateway,"onUpdate:value":t[3]||(t[3]=e=>b(S).gateway=e),placeholder:e.$t("Docker.Network.form.index_6")},null,8,["value","placeholder"])])])),_:1},8,["label"])]),_(n,{label:e.$t("Docker.Network.form.index_7"),path:"iprange"},{default:k((()=>[m("div",R,[_(o,{value:b(S).iprange,"onUpdate:value":t[4]||(t[4]=e=>b(S).iprange=e),placeholder:e.$t("Docker.Network.form.index_8")},null,8,["value","placeholder"])])])),_:1},8,["label"]),_(n,{label:e.$t("Docker.Network.form.index_16")},{default:k((()=>[_(d,{value:b(Q),"onUpdate:value":[t[5]||(t[5]=e=>f(Q)?Q.value=e:null),Y]},null,8,["value"])])),_:1},8,["label"]),_(v,{show:b(Q),"display-directive":"show"},{default:k((()=>[m("div",C,[_(n,{label:e.$t("Docker.Network.form.index_17"),path:"subnet_v6"},{default:k((()=>[m("div",G,[_(o,{value:b(S).subnet_v6,"onUpdate:value":t[6]||(t[6]=e=>b(S).subnet_v6=e),placeholder:e.$t("Docker.Network.form.index_22")},null,8,["value","placeholder"])])])),_:1},8,["label"]),_(n,{label:e.$t("Docker.Network.form.index_18"),path:"gateway_v6","label-width":"120"},{default:k((()=>[m("div",H,[_(o,{value:b(S).gateway_v6,"onUpdate:value":t[7]||(t[7]=e=>b(S).gateway_v6=e),placeholder:e.$t("Docker.Network.form.index_23")},null,8,["value","placeholder"])])])),_:1},8,["label"])])])),_:1},8,["show"]),_(n,{label:e.$t("Docker.Network.form.index_9"),path:"remark","show-feedback":!1},{default:k((()=>[m("div",L,[_(c,{value:b(S).remark,"onUpdate:value":t[8]||(t[8]=e=>b(S).remark=e),rows:3,placeholder:e.$t("Docker.Network.form.index_9")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}))}}}));
