import{_ as r}from"./index96.js?v=1732601582185";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{a3 as t}from"./page_layout.js?v=1732601582185";import{f as l,h as a}from"./index55.js?v=1732601582185";import{d as o,W as s,r as i,j as p,O as _,P as d,M as u,Y as c,Q as m,R as n,Z as f}from"./vue.js?v=1732601582185";import{bL as w,bG as v,ad as F}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./public.js?v=1732601582185";import"./index121.js?v=1732601582185";import"./index102.js?v=1732601582185";import"./index.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang11.js?v=1732601582185";import"./file.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";const b={class:"p-20px"},y={class:"w-200px"},x={class:"w-200px"},j={class:"w-200px"},h={class:"w-200px"},S={class:"w-200px"},g=o({__name:"form",props:{row:{},isEdit:{type:Boolean,default:!1}},emits:["refresh"],setup(o,{expose:g,emit:$}){const P=o,E=$,{t:U}=s(),{isEdit:T,row:C}=P,k=i(null),A=p({protocol:"tcp",s_ports:"",d_address:"",d_ports:"",brief:""}),L={s_ports:{trigger:["blur","input"],validator:()=>""!==A.s_ports.trim()&&A.s_ports?!!t(A.s_ports)||new Error(U("Security.Firewall.Forward.form_12")):new Error(U("Security.Firewall.Forward.form_3"))},d_ports:{trigger:["blur","input"],validator:()=>""!==A.d_ports.trim()&&A.d_ports?!!t(A.d_ports)||new Error(U("Security.Firewall.Forward.form_12")):new Error(U("Security.Firewall.Forward.form_7"))}},R=[{label:"TCP",value:"tcp"},{label:"UDP",value:"udp"}];return T&&C&&(A.protocol=C.Protocol?C.Protocol.toLowerCase():"tcp",A.s_ports=C.S_Port||"",A.d_address=C.T_Address||"",A.d_ports=C.T_Port||"",A.brief=C.brief),g({onConfirm:async()=>{var r;await(null==(r=k.value)?void 0:r.validate());const e={protocol:A.protocol,S_Port:A.s_ports,T_Port:A.d_ports,T_Address:A.d_address,brief:A.brief};T&&C?await l({new_data:{...e,id:C.id},old_data:C}):await a(e),E("refresh")}}),(t,l)=>{const a=w,o=v,s=F,i=e,p=r;return _(),d("div",b,[u(i,{ref_key:"formRef",ref:k,model:n(A),rules:L},{default:c((()=>[u(o,{label:t.$t("Security.Firewall.Forward.form_1"),path:"protocol"},{default:c((()=>[m("div",y,[u(a,{value:n(A).protocol,"onUpdate:value":l[0]||(l[0]=r=>n(A).protocol=r),options:R},null,8,["value"])])])),_:1},8,["label"]),u(o,{label:t.$t("Security.Firewall.Forward.form_2"),path:"s_ports"},{default:c((()=>[m("div",x,[u(s,{value:n(A).s_ports,"onUpdate:value":l[1]||(l[1]=r=>n(A).s_ports=r),placeholder:t.$t("Security.Firewall.Forward.form_3")},null,8,["value","placeholder"])])])),_:1},8,["label"]),u(o,{label:t.$t("Security.Firewall.Forward.form_4"),path:"d_address"},{default:c((()=>[m("div",j,[u(s,{value:n(A).d_address,"onUpdate:value":l[2]||(l[2]=r=>n(A).d_address=r),placeholder:t.$t("Security.Firewall.Forward.form_5")},null,8,["value","placeholder"])])])),_:1},8,["label"]),u(o,{label:t.$t("Security.Firewall.Forward.form_6"),path:"d_ports"},{default:c((()=>[m("div",h,[u(s,{value:n(A).d_ports,"onUpdate:value":l[3]||(l[3]=r=>n(A).d_ports=r),placeholder:t.$t("Security.Firewall.Forward.form_7")},null,8,["value","placeholder"])])])),_:1},8,["label"]),u(o,{label:t.$t("Security.Firewall.Forward.form_8"),path:"brief","show-feedback":!1},{default:c((()=>[m("div",S,[u(s,{value:n(A).brief,"onUpdate:value":l[4]||(l[4]=r=>n(A).brief=r),placeholder:t.$t("Security.Firewall.Forward.form_9")},null,8,["value","placeholder"])])])),_:1},8,["label"])])),_:1},8,["model"]),u(p,{class:"mt-20px ml-40px"},{default:c((()=>[m("li",null,f(t.$t("Security.Firewall.Forward.form_10")),1),m("li",null,f(t.$t("Security.Firewall.Forward.form_11")),1)])),_:1})])}}});export{g as default};
