System.register(["./index-legacy102.js?v=1732601582185","./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./setting-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(e,t){"use strict";var l,a,n,i,s,o,u,c,d,_,p,g,f,y,r,h,b,v,m,x,w,S,W,k,$,j,z,E,U,L,C,P,B,A,H,R;return{setters:[e=>{l=e._},e=>{a=e._},e=>{n=e._},e=>{i=e.f,s=e.J,o=e.m},e=>{u=e.d,c=e.f},e=>{d=e.w,_=e.g,p=e.x,g=e.y,f=e.z,y=e.A},e=>{r=e.d,h=e.W,b=e.M,v=e.O,m=e.P,x=e.R,w=e.Y,S=e.Q,W=e.Z,k=e.j,$=e.r,j=e.F,z=e.n,E=e.c,U=e.ak,L=e.ac},e=>{C=e.bo,P=e.bl,B=e.ad,A=e.aa,H=e.bG},e=>{R=e._},null,null],execute:function(){const t=r({__name:"type",setup(e,{expose:t}){const{t:l}=h(),{table:s,columns:o,setLoading:c}=u([{key:"type",title:l("Waf.Setting.config_93")},{key:"status",title:l("Public.Table.Status"),align:"right",width:100,render:e=>b(C,{value:e.status,size:"small",onUpdateValue:async t=>{await d({method_type:e.type,check:t?1:0}),e.status=t}},null)}]),p=async()=>{try{c(!0);const{message:e}=await _();i(e)&&(s.data=e.method_type.map((e=>({type:e[0],status:e[1]}))))}finally{c(!1)}};return p(),t({init:p}),(e,t)=>{const l=n,i=a;return v(),m("div",null,[b(l,{"max-height":400,loading:x(s).loading,data:x(s).data,columns:x(o)},null,8,["loading","data","columns"]),b(i,{class:"mt-16px"},{default:w((()=>[S("li",null,W(e.$t("Waf.Setting.config_91")),1),S("li",null,W(e.$t("Waf.Setting.config_92")),1)])),_:1})])}}}),V={class:"flex mb-12px"},D={class:"flex-1 mr-12px"},F={class:"w-100px mr-12px"},G=r({__name:"header",setup(e,{expose:t}){const{t:l}=h(),d=k({type:"",length:null}),y=async()=>{d.type?d.length?(await f({header_type:d.type,header_type_len:d.length}),M(),d.type="",d.length=null):o.error(l("Waf.Setting.config_99")):o.error(l("Waf.Setting.config_98"))},r=$(null),{table:U,columns:L,setLoading:C}=u([{key:"type",title:"Header"},{key:"len",title:l("Waf.Setting.config_95"),width:100,render:e=>b(j,null,[e.isEdit?b(P,{ref:r,value:e.editLen,min:1,size:"small",showButton:!1,placeholder:"",onUpdateValue:t=>{e.editLen=t||1}},null):e.len])},c({width:100,options:e=>e.isEdit?[{label:l("Public.Btn.Save"),onClick:()=>{R(e)}},{label:l("Public.Btn.Cancel"),onClick:()=>{G(e)}}]:[{label:l("Public.Btn.Edit"),show:!e.isEdit,onClick:()=>{H(e)}},{label:l("Public.Btn.Del"),show:!e.isEdit,onClick:()=>{J(e)}}]})]),H=e=>{e.isEdit=!0,z((()=>{r.value?.focus()}))},R=async e=>{await p({header_type:e.type,header_type_len:e.editLen}),e.isEdit=!1,e.len=e.editLen},G=e=>{e.isEdit=!1,e.editLen=e.len},J=async e=>{await g({header_type:e.type,header_type_len:e.len}),M()},M=async()=>{try{C(!0);const{message:e}=await _();i(e)&&(U.data=e.header_len.map((e=>({type:e[0],len:s(e[1]),editLen:s(e[1]),isEdit:!1}))))}finally{C(!1)}};return M(),t({init:M}),(e,t)=>{const l=B,i=A,s=n,o=a;return v(),m("div",null,[S("div",V,[S("div",D,[b(l,{value:x(d).type,"onUpdate:value":t[0]||(t[0]=e=>x(d).type=e),placeholder:e.$t("Waf.Setting.config_94")},null,8,["value","placeholder"])]),S("div",F,[b(x(P),{value:x(d).length,"onUpdate:value":t[1]||(t[1]=e=>x(d).length=e),"show-button":!1,placeholder:e.$t("Waf.Setting.config_95")},null,8,["value","placeholder"])]),b(i,{type:"primary",onClick:y},{default:w((()=>[E(W(e.$t("Public.Btn.Add")),1)])),_:1})]),b(s,{"max-height":380,loading:x(U).loading,data:x(U).data,columns:x(L)},null,8,["loading","data","columns"]),b(o,{class:"mt-16px"},{default:w((()=>[S("li",null,W(e.$t("Waf.Setting.config_96")),1),S("li",null,W(e.$t("Waf.Setting.config_97")),1)])),_:1})])}}}),J={class:"p-20px"},M={class:"w-200px"},O={class:"w-200px"},Q={class:"w-200px"},T=r({__name:"count",setup(e,{expose:t}){const l=$(null),a=k({base64:1,body_size:8e5,post_count:1e3,get_count:1e3}),n={},s=async()=>{await(l.value?.validate()),await y(U(a))};return t({init:async()=>{const{message:e}=await _();i(e)&&(a.base64=e.http_config.base64?1:0,a.body_size=e.http_config.body_size,a.post_count=e.http_config.post_count,a.get_count=e.http_config.get_count)}}),(e,t)=>{const i=C,o=H,u=P,c=A,d=R;return v(),m("div",J,[b(d,{ref_key:"formRef",ref:l,model:x(a),rules:n,"label-width":"150"},{default:w((()=>[b(o,{label:e.$t("Waf.Setting.config_100"),path:"base64"},{default:w((()=>[b(i,{value:x(a).base64,"onUpdate:value":t[0]||(t[0]=e=>x(a).base64=e),"checked-value":1,"unchecked-value":0},null,8,["value"])])),_:1},8,["label"]),b(o,{label:e.$t("Waf.Setting.config_101"),path:"body_size"},{default:w((()=>[S("div",M,[b(u,{value:x(a).body_size,"onUpdate:value":t[1]||(t[1]=e=>x(a).body_size=e),min:1,"show-button":!1},null,8,["value"])])])),_:1},8,["label"]),b(o,{label:e.$t("Waf.Setting.config_102"),path:"post_count"},{default:w((()=>[S("div",O,[b(u,{value:x(a).post_count,"onUpdate:value":t[2]||(t[2]=e=>x(a).post_count=e),min:1,"show-button":!1},{suffix:w((()=>[S("span",null,W(e.$t("Waf.Setting.config_103")),1)])),_:1},8,["value"])])])),_:1},8,["label"]),b(o,{label:e.$t("Waf.Setting.config_104"),path:"get_count"},{default:w((()=>[S("div",Q,[b(u,{value:x(a).get_count,"onUpdate:value":t[3]||(t[3]=e=>x(a).get_count=e),min:1,"show-button":!1},{suffix:w((()=>[S("span",null,W(e.$t("Waf.Setting.config_103")),1)])),_:1},8,["value"])])])),_:1},8,["label"]),b(o,{label:" "},{default:w((()=>[b(c,{type:"primary",onClick:s},{default:w((()=>[E(W(e.$t("Waf.Setting.config_105")),1)])),_:1})])),_:1})])),_:1},8,["model"])])}}}),Y={class:"p-20px"};e("default",r({__name:"index",setup(e){const{t:a}=h(),n=$("type"),i=[{key:"type",label:a("Waf.Setting.config_88"),component:t},{key:"header",label:a("Waf.Setting.config_89"),component:G},{key:"count",label:a("Waf.Setting.config_90"),component:T}];return(e,t)=>{const a=l;return v(),m("div",Y,[b(a,{value:x(n),"onUpdate:value":t[0]||(t[0]=e=>L(n)?n.value=e:null),options:i},null,8,["value"])])}}}))}}}));
