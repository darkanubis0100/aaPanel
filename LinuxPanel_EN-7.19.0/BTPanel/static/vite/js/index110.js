import{_ as e}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{d as a,W as l,r as t,j as r,O as s,P as u,M as o,Y as i,R as n,ak as p}from"./vue.js?v=1732601582185";import{ad as d,bG as m}from"./naive.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./common.js?v=1732601582185";const _={class:"p-20px"},c=a({__name:"index",props:{data:{}},setup(a,{expose:c}){const{t:f}=l(),v=a,{callback:x,api:b,url:g}=v.data,j=t(null),y=r({title:"",url:"",atall:!0}),h={title:{required:!0,message:f("Security.Conf.Index_28"),trigger:["blur","input"]},url:{required:!0,message:f("Security.Conf.Index_28"),trigger:["blur","input"]}};return c({onConfirm:async({hide:e})=>{var a;await(null==(a=j.value)?void 0:a.validate()),await b(p(y),g),null==x||x(),e()}}),(a,l)=>{const t=d,r=m,p=e;return s(),u("div",_,[o(p,{ref_key:"formRef",ref:j,model:n(y),rules:h},{default:i((()=>[o(r,{label:a.$t("Docker.Compose.form.index_3"),path:"title"},{default:i((()=>[o(t,{class:"w-250px!",type:"text",value:n(y).title,"onUpdate:value":l[0]||(l[0]=e=>n(y).title=e),placeholder:" "},null,8,["value"])])),_:1},8,["label"]),o(r,{label:a.$t("WP.TableRow.index_7"),path:"url"},{default:i((()=>[o(t,{class:"w-250px!",type:"text",value:n(y).url,"onUpdate:value":l[1]||(l[1]=e=>n(y).url=e),placeholder:" "},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])])}}});export{c as default};
