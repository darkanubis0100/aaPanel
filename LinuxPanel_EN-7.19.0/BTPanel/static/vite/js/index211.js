import{_ as e}from"./index96.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{_ as o}from"./index99.js?v=1732601582185";import{bI as a,dA as r,dB as l,f as s,dC as n,I as i,m as p,dD as d,j as _}from"./page_layout.js?v=1732601582185";import{_ as u}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1732601582185";import{v as c}from"./index230.js?v=1732601582185";import{o as m}from"./new.js?v=1732601582185";import{d as v,W as j,r as x,j as w,e as f,O as g,P as b,M as h,Y as N,Q as $,R as y,Z as k,X as C,ao as U,c as q}from"./vue.js?v=1732601582185";import{bG as D,ad as E,bL as A,bl as I}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";import"./index97.js?v=1732601582185";import"./index121.js?v=1732601582185";import"./index.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang11.js?v=1732601582185";import"./site.js?v=1732601582185";const O={class:"p-20px"},P={class:"w-360px"},R={class:"w-360px"},M={class:"w-200px"},B={class:"ml-10px text-default"},F={class:"w-440px"},G={class:"w-200px"},H={class:"ml-10px text-default"},L={class:"w-150px"},Q={class:"ml-10px text-default"},W={class:"w-150px"},X={class:"ml-10px text-default"},Y={class:"w-440px"},Z={class:"w-440px"},z=v({__name:"index",setup(v,{expose:z}){const{t:J}=j(),K=a(),S=x(null),T=x(""),V=w({project_cwd:"/www/wwwroot",project_name:"",project_script:null,project_script_two:"",port:null,run_user:"www",nodejs_version:null,project_ps:"",domains:""}),ee={project_cwd:{trigger:["blur","input"],required:!0,message:J("Node.index_28")},project_name:{trigger:["blur","input"],required:!0,message:J("Node.index_29")},project_script:{trigger:["change"],required:!0,message:J("Node.index_30")},project_script_two:{trigger:["blur","input"],required:!0,message:J("Node.index_31")},port:c(),nodejs_version:{trigger:["change"],required:!0,message:J("Node.index_32")},domains:{trigger:["blur"],validator:()=>{const e=V.domains.trim().split("\n");if(""===V.domains.trim())return!0;for(let t=0;t<e.length;t++)if(!r(e[t]))return new Error("[".concat(e[t],"] ").concat(J("Node.index_82")));return!0}}},te=()=>{const e=V.project_cwd.split("/"),t=e[e.length-1];V.project_name=t,V.project_ps=t,T.value=V.project_cwd,re()},oe=x([]),ae=f((()=>0===oe.value.length)),re=async()=>{const{message:e}=await l({project_cwd:V.project_cwd});if(s(e)){const t=Object.keys(e).map((t=>({label:"".concat(t," [").concat(e[t],"]"),value:t})));V.project_script=t.length?t[0].value:"custom",t.push({label:J("Node.index_33"),value:"custom"}),oe.value=t}},le=[{label:"www",value:"www"},{label:"root",value:"root"}],se=x([]),ne=e=>{V.project_ps=e};return(async()=>{const{message:e}=await n();i(e)&&e.length>0?(se.value=e.map((e=>({label:e,value:e}))),V.nodejs_version=e[0]):(se.value=[],V.nodejs_version=null,p.error({close:!0,content:J("Node.index_34"),onClose:()=>{m()}}))})(),z({onConfirm:async({hide:e})=>{var t;await(null==(t=S.value)?void 0:t.validate());const o=(()=>{const{project_script:e,port:t,nodejs_version:o}=V;if(null===e)throw p.error(J("Node.index_35")),new Error(J("Node.index_35"));if(null===t)throw p.error(J("Node.index_36")),new Error(J("Node.index_36"));if(null===o)throw p.error(J("Node.index_37")),new Error(J("Node.index_37"));const a=V.domains.trim()?V.domains.trim().split("\n").map((e=>e.trim())).map((e=>e.indexOf(":")>-1?e:e+":80")):[];return{project_cwd:V.project_cwd,project_name:V.project_name,project_script:"custom"===V.project_script?V.project_script_two:e,port:"".concat(t),run_user:V.run_user,nodejs_version:o,project_ps:V.project_ps,domains:a,bind_extranet:a.length?1:0,is_power_on:1,max_memory_limit:4096,project_env:""}})();await d(o),K.setRefresh(!0),e()}}),(a,r)=>{const l=u,s=D,n=E,i=A,p=I,d=_,c=o,v=t,j=e;return g(),b("div",O,[h(v,{ref_key:"formRef",ref:S,model:y(V),rules:ee},{default:N((()=>[h(s,{label:a.$t("Docker.Container.index_17"),path:"project_cwd"},{default:N((()=>[$("div",P,[h(l,{value:y(V).project_cwd,"onUpdate:value":r[0]||(r[0]=e=>y(V).project_cwd=e),readonly:!0,onChange:te},null,8,["value"])])])),_:1},8,["label"]),h(s,{label:a.$t("Config.Alarm.index_43"),path:"project_name"},{default:N((()=>[$("div",R,[h(n,{value:y(V).project_name,"onUpdate:value":[r[1]||(r[1]=e=>y(V).project_name=e),ne],placeholder:a.$t("Node.index_11")},null,8,["value","placeholder"])])])),_:1},8,["label"]),h(s,{label:a.$t("Node.index_12"),path:"project_script","show-feedback":!("custom"===y(V).project_script)},{default:N((()=>[$("div",M,[h(i,{value:y(V).project_script,"onUpdate:value":r[2]||(r[2]=e=>y(V).project_script=e),placeholder:a.$t("Node.index_13"),disabled:y(ae),options:y(oe)},null,8,["value","placeholder","disabled","options"])]),$("div",B,"* "+k(a.$t("Node.index_14")),1)])),_:1},8,["label","show-feedback"]),"custom"===y(V).project_script?(g(),C(s,{key:0,class:"mt-8px",label:" ",path:"project_script_two"},{default:N((()=>[$("div",F,[h(l,{defaultPath:y(T),"checked-type":["file"],value:y(V).project_script_two,"onUpdate:value":r[3]||(r[3]=e=>y(V).project_script_two=e)},null,8,["defaultPath","value"])])])),_:1})):U("",!0),h(s,{label:a.$t("Docker.Container.create.index_7"),path:"port"},{default:N((()=>[$("div",G,[h(p,{value:y(V).port,"onUpdate:value":r[4]||(r[4]=e=>y(V).port=e),min:1,max:65535,"show-button":!1,placeholder:a.$t("Node.index_15")},null,8,["value","placeholder"])]),$("div",H,"* "+k(a.$t("Node.index_15")),1)])),_:1},8,["label"]),h(s,{label:a.$t("Ftp.Analysis.Index_27")},{default:N((()=>[$("div",L,[h(i,{value:y(V).run_user,"onUpdate:value":r[5]||(r[5]=e=>y(V).run_user=e),options:le},null,8,["value"])]),$("div",Q,"* "+k(a.$t("Node.index_16")),1)])),_:1},8,["label"]),h(s,{label:"Node",path:"nodejs_version"},{default:N((()=>[$("div",W,[h(i,{value:y(V).nodejs_version,"onUpdate:value":r[6]||(r[6]=e=>y(V).nodejs_version=e),options:y(se)},null,8,["value","options"])]),$("div",X,[$("span",null,"* "+k(a.$t("Node.index_17"))+", ",1),h(d,{onClick:y(m)},{default:N((()=>[q(k(a.$t("Node.index_18")),1)])),_:1},8,["onClick"])])])),_:1}),h(s,{label:a.$t("Docker.Container.create.index_46"),path:"project_ps"},{default:N((()=>[$("div",Y,[h(n,{value:y(V).project_ps,"onUpdate:value":r[7]||(r[7]=e=>y(V).project_ps=e),placeholder:a.$t("Node.index_19")},null,8,["value","placeholder"])])])),_:1},8,["label"]),h(s,{label:a.$t("Mail.Domain.index_3"),path:"domains"},{default:N((()=>[$("div",Z,[h(c,{value:y(V).domains,"onUpdate:value":r[8]||(r[8]=e=>y(V).domains=e),rows:5},{default:N((()=>[$("p",null,k(a.$t("Node.index_20")),1),$("p",null,k(a.$t("Node.index_21")),1),$("p",null,k(a.$t("Node.index_22")),1),$("p",null,k(a.$t("Node.index_23")),1)])),_:1},8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),h(j,{class:"mt-8px"},{default:N((()=>[$("li",null,k(a.$t("Node.index_24")),1),$("li",null,k(a.$t("Node.index_25")),1),$("li",null,k(a.$t("Node.index_26")),1),$("li",null,k(a.$t("Node.index_27")),1)])),_:1})])}}});export{z as default};
