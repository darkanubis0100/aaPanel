const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/index113.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185","js/page_layout.js?v=1732601582185","js/vue.js?v=1732601582185","js/__commonjsHelpers__.js?v=1732601582185","js/naive.js?v=1732601582185","js/common.js?v=1732601582185","js/public.js?v=1732601582185","css/public.css?v=1732601582185","css/page_layout.css?v=1732601582185","css/index14.css?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185","js/index.js?v=1732601582185","css/index80.css?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang11.js?v=1732601582185","js/index102.js?v=1732601582185","css/index15.css?v=1732601582185","js/index96.js?v=1732601582185","js/index.vue_vue_type_script_setup_true_lang.js?v=1732601582185","js/theme-chrome.js?v=1732601582185","js/organization.js?v=1732601582185","js/index114.js?v=1732601582185","js/index171.js?v=1732601582185","css/index21.css?v=1732601582185","js/custom.js?v=1732601582185"])))=>i.map(i=>d[i]);
import{i as e,a8 as a,S as t,f as n,a4 as i,I as r,c as l}from"./page_layout.js?v=1732601582185";import{_ as s}from"./index.js?v=1732601582185";import{_ as o}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as d}from"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";import{_ as p}from"./index.vue_vue_type_script_setup_true_lang10.js?v=1732601582185";import{_ as c}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{_}from"./index.vue_vue_type_script_setup_true_lang11.js?v=1732601582185";import{_ as u}from"./index102.js?v=1732601582185";import{d as m,f as g,a as b,b as x,h}from"./public.js?v=1732601582185";import{_ as y}from"./index96.js?v=1732601582185";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{V as f}from"./theme-chrome.js?v=1732601582185";import{d as w,W as C,r as S,j as k,O as T,P as j,M as O,Y as P,R as U,X as E,ao as $,Q as L,Z as R,ak as D,ac as I,c as q,a6 as A}from"./vue.js?v=1732601582185";import{ad as J,bG as M,bL as z,bh as N,bJ as V,aa as F}from"./naive.js?v=1732601582185";import{g as K}from"./organization.js?v=1732601582185";const{t:W}=e.global,B=e=>a.post("/crontab/script/test_script",{data:JSON.stringify(e)},{requestOptions:{loading:W("Crontab.Api.index_4"),errorMessage:!1}}),G=e=>a.post("/crontab/script/get_script_logs",{data:JSON.stringify(e)}),Q=(e,t=!0)=>a.post("/crontab/script/remove_script",e,{requestOptions:{loading:t?W("Security.Api.Index_3"):"",successMessage:t}}),X={class:"p-20px"},Y=w({__name:"index",props:{data:{}},setup(e,{expose:t}){const{t:n}=C(),i=e,{isEdit:r,row:l,id:s,getList:o}=i.data,d=S(null),p=[{value:"string",label:n("Crontab.Script.index_9")},{value:"int",label:n("Crontab.Script.index_10")},{value:"float",label:n("Crontab.Script.index_11")}],c=[{value:"1",label:n("Crontab.Script.index_12")},{value:"0",label:n("Crontab.Script.index_13")}],_={name:{required:!0,trigger:["blur","change"],message:n("Crontab.Planned.index_49")},custom:{required:!0,trigger:["blur","change"],message:n("Crontab.arrange.index_28")},argsTitle:{required:!0,trigger:["blur","change"],message:n("Security.Conf.Index_28")},argsExplain:{required:!0,trigger:["blur","change"],message:n("Security.Conf.Index_28")}},u=k({name:"",type:"string",argsType:"0",argsTitle:"",argsExplain:"",custom:"",remark:""}),m=()=>({name:u.name,return_type:u.type,is_args:u.argsType,ps:u.remark,script:u.custom,type_id:s,args_title:u.argsTitle,args_ps:u.argsExplain,...r?{script_id:null==l?void 0:l.script_id}:null});t({onConfirm:async()=>{var e,t;await(null==(e=d.value)?void 0:e.validate()),r?await(t=m(),a.post("/crontab/script/modify_script",{data:JSON.stringify(t)},{requestOptions:{loading:W("Crontab.Api.index_5"),successMessage:!0}})):await(e=>a.post("/crontab/script/create_script",{data:JSON.stringify(e)},{requestOptions:{loading:W("Security.Api.Index_4"),successMessage:!0}}))(m()),null==o||o()}});return r&&l&&(u.name=l.name,u.type=l.return_type,u.argsType=l.is_args.toString(),u.argsTitle=l.args_title,u.argsExplain=l.args_ps,u.custom=l.script,u.remark=l.ps),(e,a)=>{const t=J,n=M,i=z,r=N,l=v,s=y;return T(),j("div",X,[O(l,{ref_key:"formRef",ref:d,model:U(u),rules:_},{default:P((()=>[O(n,{label:e.$t("Docker.Compose.form.index_3"),path:"name"},{default:P((()=>[O(t,{class:"w-360px!",value:U(u).name,"onUpdate:value":a[0]||(a[0]=e=>U(u).name=e),placeholder:e.$t("Crontab.Planned.index_49")},null,8,["value","placeholder"])])),_:1},8,["label"]),O(n,{label:e.$t("Crontab.Script.index_2")},{default:P((()=>[O(i,{class:"w-150px!",value:U(u).type,"onUpdate:value":a[1]||(a[1]=e=>U(u).type=e),options:p},null,8,["value"])])),_:1},8,["label"]),O(r,null,{default:P((()=>[O(n,{label:e.$t("Crontab.Script.index_5")},{default:P((()=>[O(i,{class:"w-80px!",value:U(u).argsType,"onUpdate:value":a[2]||(a[2]=e=>U(u).argsType=e),options:c},null,8,["value"])])),_:1},8,["label"]),"1"==U(u).argsType?(T(),E(n,{key:0,path:"argsTitle"},{default:P((()=>[O(t,{class:"w-110px!",value:U(u).argsTitle,"onUpdate:value":a[3]||(a[3]=e=>U(u).argsTitle=e),placeholder:e.$t("Crontab.Script.index_51")},null,8,["value","placeholder"])])),_:1})):$("",!0),"1"==U(u).argsType?(T(),E(n,{key:1,path:"argsExplain"},{default:P((()=>[O(t,{class:"w-145px!",value:U(u).argsExplain,"onUpdate:value":a[4]||(a[4]=e=>U(u).argsExplain=e),placeholder:e.$t("Crontab.Script.index_52")},null,8,["value","placeholder"])])),_:1})):$("",!0)])),_:1}),O(n,{label:" ",path:"custom"},{default:P((()=>[O(U(f),{theme:"chrome",value:U(u).custom,"onUpdate:value":a[5]||(a[5]=e=>U(u).custom=e),class:"w-360px border-solid h-150px border-1px border-#ccc rounded-4px leading-[1.4]"},null,8,["value"])])),_:1}),O(n,{label:e.$t("Docker.Template.add.index_3")},{default:P((()=>[O(t,{class:"w-360px!",value:U(u).remark,"onUpdate:value":a[6]||(a[6]=e=>U(u).remark=e),placeholder:e.$t("Crontab.arrange.index_27")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"]),O(s,null,{default:P((()=>[L("li",null,R(e.$t("Crontab.Script.index_6")),1),L("li",null,R(e.$t("Crontab.Script.index_7")),1),L("li",null,R(e.$t("Crontab.Script.index_8")),1)])),_:1})])}}}),Z=w({__name:"index",setup(e){const y=A((()=>l((()=>import("./index113.js?v=1732601582185")),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])))),v=A((()=>l((()=>import("./index114.js?v=1732601582185")),__vite__mapDeps([24,25,4,5,3,6,7,8,9,10,26,14,15,1,2,11,12,16,13,17,18,19,20,21,22,23])))),f=A((()=>l((()=>import("./custom.js?v=1732601582185")),__vite__mapDeps([27,21,6,4,5,7])))),w=S("1"),j=S([]),{t:$}=C(),L=()=>{H.data.isEdit=!1,H.data.id=w.value,H.show=!0},{keys:J,table:M,columns:z}=m([{type:"selection",width:40},{key:"name",title:$("Site.TableRow.index_2")},{key:"script_type",title:$("Ftp.Table.index_3")},{key:"return_type",title:$("Crontab.Script.index_2")},{key:"ps",title:$("Docker.Template.add.index_3")},{key:"name",title:$("Docker.Container.index_9"),render:e=>t(e.create_time)},{key:"name",title:$("Crontab.Planned.index_12"),render:e=>t(e.last_exec_time)},g({title:$("Public.Table.Operation"),width:240,options:e=>[{label:$("Docker.LocalImage.pull.index_12"),onClick:()=>{if(e.is_args)return te.show=!0,void(te.data.row=e);Z("",e)}},{label:$("Site.TableOP.index_7"),onClick:()=>{H.title=$("Crontab.arrange.index_38"),H.data.isEdit=!0,H.data.row=e,H.data.id=w.value,H.show=!0}},{label:$("Ftp.Table.index_15"),onClick:()=>{ee.title=$("Crontab.Planned.index_6",[e.name]),ee.data.id=e.script_id,ee.show=!0}},{label:$("Public.Btn.Del"),onClick:()=>{b({title:"".concat($("Ftp.Table.index_10")," ").concat(e.name," ").concat($("Crontab.Script.index_3")),content:$("Crontab.Script.index_4"),onConfirm:async()=>{await Q({script_id:e.script_id}),X()}})}}]})]),N=[{key:"delete",type:"confirm",label:$("Crontab.Script.index_42"),confirm:{title:$("Crontab.Planned.index_16",[$("Crontab.Script.index_42")]),desc:$("Crontab.Planned.index_17",[$("Crontab.Script.index_42")]),columns:[z.value[1]],api:e=>Q({script_id:e.script_id},!1),done:()=>{X()}}}],W=k({p:1,rows:10,search:""}),{loading:B,setLoading:G}=x(!0);(async()=>{const{message:e}=await K();r(e)&&(j.value=e.map((e=>({label:e.name,key:e.type_id.toString()}))))})();const X=async()=>{try{G(!0);const{message:t}=await(e=D({...W,type_id:w.value}),a.post("/crontab/script/get_script_list",{data:JSON.stringify(e)}));n(t)?(M.data=t.data.map((e=>({...e,id:e.script_id}))),M.total=i(t.page)):(M.data=[],M.total=0)}finally{J.value=[],G(!1)}var e};X();const Z=(e,a)=>{b({title:$("Crontab.Planned.index_13"),content:$("Crontab.arrange.index_1",[a.name]),onConfirm:()=>{ae.data.row=a,ae.data.args=e,ae.show=!0}})},H=h($("Crontab.Script.index_1"),{getList:X}),ee=h(),ae=h($("Crontab.Planned.index_23"),{getList:X}),te=h($("Crontab.Script.index_44"),{callback:Z});return(e,a)=>{const t=u,n=F,i=_,r=c,l=p,m=d,g=o,b=s,x=V;return T(),E(x,{class:"p-16px"},{default:P((()=>[O(t,{value:U(w),"onUpdate:value":[a[0]||(a[0]=e=>I(w)?w.value=e:null),X],options:U(j)},null,8,["value","options"]),O(g,null,{toolsLeft:P((()=>[O(n,{type:"primary",onClick:L},{default:P((()=>[q(R(e.$t("Crontab.Script.index_1")),1)])),_:1})])),toolsRight:P((()=>[O(i,{value:U(W).search,"onUpdate:value":a[1]||(a[1]=e=>U(W).search=e),placeholder:e.$t("WP.Sets.index_15"),onSearch:X},null,8,["value","placeholder"])])),table:P((()=>[O(r,{"checked-row-keys":U(J),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>I(J)?J.value=e:null),loading:U(B),data:U(M).data,columns:U(z)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:P((()=>[O(l,{"checked-row-keys":U(J),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>I(J)?J.value=e:null),data:U(M).data,options:N},null,8,["checked-row-keys","data"])])),pageRight:P((()=>[O(m,{page:U(W).p,"onUpdate:page":a[4]||(a[4]=e=>U(W).p=e),"page-size":U(W).rows,"onUpdate:pageSize":a[5]||(a[5]=e=>U(W).rows=e),"item-count":U(M).total,onRefresh:X},null,8,["page","page-size","item-count"])])),_:1}),O(b,{show:U(H).show,"onUpdate:show":a[6]||(a[6]=e=>U(H).show=e),title:U(H).title,data:U(H).data,width:600,footer:!0,component:Y},null,8,["show","title","data"]),O(b,{show:U(ae).show,"onUpdate:show":a[7]||(a[7]=e=>U(ae).show=e),title:U(ae).title,data:U(ae).data,width:400,"min-height":200,component:U(v)},null,8,["show","title","data","component"]),O(b,{show:U(te).show,"onUpdate:show":a[8]||(a[8]=e=>U(te).show=e),title:U(te).title,data:U(te).data,width:400,footer:!0,component:U(f)},null,8,["show","title","data","component"]),O(b,{show:U(ee).show,"onUpdate:show":a[9]||(a[9]=e=>U(ee).show=e),title:U(ee).title,data:U(ee).data,width:800,"min-height":550,footer:!1,component:U(y)},null,8,["show","title","data","component"])])),_:1})}}}),H=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{B as e,G as g,H as i};
