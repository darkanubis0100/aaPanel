import{_ as a}from"./index96.js?v=1732601582185";import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang5.js?v=1732601582185";import{b7 as s}from"./page_layout.js?v=1732601582185";import{r as l}from"./ftp.js?v=1732601582185";import{a as p}from"./index230.js?v=1732601582185";import{d as r,r as i,j as n,O as u,P as o,M as m,Y as d,Q as _,R as f,Z as v,ak as x}from"./vue.js?v=1732601582185";import{ad as c,bG as b,bo as j}from"./naive.js?v=1732601582185";import"./index97.js?v=1732601582185";import"./public.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const h={class:"px-20px py-24px"},y={class:"w-260px"},g={class:"w-260px"},w=r({__name:"index",props:{data:{}},setup(r,{expose:w}){const $=r,{row:F}=$.data,k=s(),U=i(null),A=n({ftp_username:F.name,path:F.path,migrate:0}),I={path:p()};return w({onConfirm:async({hide:a})=>{var e;await(null==(e=U.value)?void 0:e.validate());const t={id:F.id,...x(A)};await l(t),k.setRefresh(!0),a()}}),(s,l)=>{const p=c,r=b,i=t,n=j,x=e,w=a;return u(),o("div",h,[m(x,{ref_key:"formRef",ref:U,model:f(A),rules:I},{default:d((()=>[m(r,{label:s.$t("Public.Table.Username"),path:"ftp_username"},{default:d((()=>[_("div",y,[m(p,{value:f(A).ftp_username,"onUpdate:value":l[0]||(l[0]=a=>f(A).ftp_username=a),disabled:!0},null,8,["value"])])])),_:1},8,["label"]),m(r,{label:s.$t("Ftp.Table.index_1"),path:"path"},{default:d((()=>[_("div",g,[m(i,{value:f(A).path,"onUpdate:value":l[1]||(l[1]=a=>f(A).path=a)},null,8,["value"])])])),_:1},8,["label"]),m(r,{label:s.$t("Ftp.Table.index_7"),"show-feedback":!1},{default:d((()=>[m(n,{value:f(A).migrate,"onUpdate:value":l[2]||(l[2]=a=>f(A).migrate=a),"checked-value":1},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"]),m(w,{class:"mt-16px"},{default:d((()=>[_("li",null,v(s.$t("Ftp.Analysis.Index_33")),1),_("li",null,v(s.$t("Ftp.Analysis.Index_34")),1),_("li",null,v(s.$t("Ftp.Analysis.Index_35")),1)])),_:1})])}}});export{w as default};
