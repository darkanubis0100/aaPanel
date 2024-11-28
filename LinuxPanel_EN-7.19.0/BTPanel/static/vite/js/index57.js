import{_ as e}from"./index102.js?v=1732601582185";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang.js?v=1732601582185";import{i as a,a8 as i,f as n,n as s,I as l,a4 as o,_ as r,k as u}from"./page_layout.js?v=1732601582185";import{bO as c,bo as p,bl as d,bG as _,ad as y,_ as m,aa as f,bh as h,bL as x,bJ as g}from"./naive.js?v=1732601582185";import{d as b,W as v,r as S,j as k,O as I,P as w,Q as $,c as C,Z as U,F as H,L as j,R as L,ao as R,M as P,Y as O,X as q,ac as z,ak as M}from"./vue.js?v=1732601582185";import{_ as T}from"./index96.js?v=1732601582185";import{b as W,f as A,a as F,d as B}from"./public.js?v=1732601582185";import{_ as J}from"./index.vue_vue_type_script_setup_true_lang8.js?v=1732601582185";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang9.js?v=1732601582185";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang6.js?v=1732601582185";import{_ as G}from"./index.vue_vue_type_script_setup_true_lang11.js?v=1732601582185";import{T as Q}from"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./index.vue_vue_type_script_setup_true_lang4.js?v=1732601582185";const{t:X}=a.global,Y=()=>i.post("/breaking_through?action=get_config"),Z=e=>i.post("/breaking_through?action=set_config",e,{requestOptions:{loading:X("Security.Api.Index_6"),successMessage:!0}}),D=e=>i.post("/breaking_through?action=panel_ip_white",e,{requestOptions:{loading:X("Security.Api.Index_4"),successMessage:!0}}),K=e=>i.post("/breaking_through?action=get_black_white",e),V=e=>i.post("/breaking_through?action=add_black_white",e,{requestOptions:{loading:X("Security.Api.Index_6"),successMessage:!0}}),ee={class:"pl-5px"},te={key:0},ae={class:"mb-15px"},ie={class:"mr-10px"},ne={key:0},se={class:"mr-10px"},le=b({__name:"index",setup(e,{expose:a}){const{t:l}=v(),o=S(null),r=S(null),u=S(null),h=k({protectionUsername:!0,minutes:5,failures:5,radio:0,check:!1}),x=k({protectionIP:!0,minutes:15,failures:5,ip:"1s",check:!1}),g=k({failures:360}),b=k({user:["aapanel"],ip:["ssh"]}),z=async e=>{await Z({username_status:e})},M=async e=>{await Z({ip_status:e})},T=async()=>{var e;g.failures&&await(e={history_limit:g.failures},i.post("/breaking_through?action=set_history_record_limit",e,{requestOptions:{loading:X("Security.Api.Index_6"),successMessage:!0}}))},W={minutes:{trigger:["blur","change"],validator:(e,t)=>null!==t&&0!==t||new Error(l("Security.Conf.Index_27"))},failures:{required:!0,type:"number",trigger:["blur","change"],message:l("Security.Conf.Index_28")}},A={minutes:{trigger:["blur","change"],validator:(e,t)=>null!==t&&0!==t||new Error(l("Security.Conf.Index_27"))},failures:{required:!0,type:"number",trigger:["blur","change"],message:l("Security.Conf.Index_28")}},F={failures:{required:!0,type:"number",trigger:["blur","change"],message:l("Security.Conf.Index_28")}},B=async()=>{var e,t,a;await(null==(e=o.value)?void 0:e.validate()),await(null==(t=r.value)?void 0:t.validate()),await(null==(a=u.value)?void 0:a.validate()),await Z({username_limit:h.minutes,username_count:h.failures,username_type:h.radio,username_limit_root:h.check,ip_limit:x.minutes,ip_count:x.failures,ip_command:x.ip,ip_ipset_filter:x.check,history_limit:g.failures}),J()},J=async()=>{const{message:e}=await Y();n(e)&&(h.protectionUsername=e.username_status,h.minutes=e.based_on_username.limit,h.failures=e.based_on_username.count,h.radio=e.based_on_username.type,h.check=e.based_on_username.limit_root,x.protectionIP=e.ip_status,x.minutes=e.based_on_ip.limit,x.failures=e.based_on_ip.count,x.ip=e.based_on_ip.command,x.check=e.based_on_ip.ipset_filter,g.failures=e.history_limit);const{message:t}=await i.post("/breaking_through?action=get_protected_services");n(t)&&(b.user=t.based_on_username,b.ip=t.based_on_ip)};return J(),a({init:J}),(e,a)=>{const i=c,n=p,l=d,v=_,S=t,k=s,J=y,E=m,N=f;return I(),w("div",ee,[$("h3",null,[C(U(e.$t("Security.Conf.Index_5"))+" ("+U(e.$t("Security.Conf.Index_37"))+" ",1),(I(!0),w(H,null,j(L(b).user,((e,t)=>(I(),w("span",{key:t},[C(U(e),1),t<L(b).user.length-1?(I(),w("span",te,"、")):R("",!0)])))),128)),a[9]||(a[9]=C(") "))]),P(i,{"show-icon":!1,class:"my-15px"},{default:O((()=>[C(U(e.$t("Security.Conf.Index_6")),1)])),_:1}),$("div",ae,[$("span",ie,U(e.$t("Site.TableRow.index_14")),1),P(n,{size:"small",value:L(h).protectionUsername,"onUpdate:value":[a[0]||(a[0]=e=>L(h).protectionUsername=e),z]},null,8,["value"])]),L(h).protectionUsername?(I(),q(S,{key:0,ref_key:"userFormRef",ref:o,"label-placement":"top",model:L(h),rules:W},{default:O((()=>[P(v,{label:e.$t("Security.Conf.Index_7"),path:"minutes"},{default:O((()=>[P(l,{"show-button":!1,value:L(h).minutes,"onUpdate:value":a[1]||(a[1]=e=>L(h).minutes=e)},null,8,["value"])])),_:1},8,["label"]),P(v,{label:e.$t("Security.Conf.Index_8"),path:"failures"},{default:O((()=>[P(l,{"show-button":!1,value:L(h).failures,"onUpdate:value":a[2]||(a[2]=e=>L(h).failures=e)},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["model"])):R("",!0),P(k,{class:"mb-20px!"}),$("h3",null,[C(U(e.$t("Security.Conf.Index_12"))+" ("+U(e.$t("Security.Conf.Index_37"))+" ",1),(I(!0),w(H,null,j(L(b).ip,((e,t)=>(I(),w("span",{key:t},[C(U(e),1),t<L(b).ip.length-1?(I(),w("span",ne,"、")):R("",!0)])))),128)),a[10]||(a[10]=C(") "))]),P(i,{"show-icon":!1,class:"my-15px"},{default:O((()=>[C(U(e.$t("Security.Conf.Index_13")),1)])),_:1}),$("span",se,U(e.$t("Site.TableRow.index_14")),1),P(n,{size:"small",value:L(x).protectionIP,"onUpdate:value":[a[3]||(a[3]=e=>L(x).protectionIP=e),M]},null,8,["value"]),L(x).protectionIP?(I(),q(S,{key:1,ref_key:"ipFormRef",ref:r,"label-placement":"top",model:L(x),rules:A,class:"pt-15px"},{default:O((()=>[P(v,{label:e.$t("Security.Conf.Index_14"),path:"minutes"},{default:O((()=>[P(l,{"show-button":!1,value:L(x).minutes,"onUpdate:value":a[4]||(a[4]=e=>L(x).minutes=e)},null,8,["value"])])),_:1},8,["label"]),P(v,{label:e.$t("Security.Conf.Index_15"),path:"failures"},{default:O((()=>[P(l,{"show-button":!1,value:L(x).failures,"onUpdate:value":a[5]||(a[5]=e=>L(x).failures=e)},null,8,["value"])])),_:1},8,["label"]),P(v,{label:e.$t("Security.Conf.Index_16")},{default:O((()=>[P(J,{class:"w-150px!",value:L(x).ip,"onUpdate:value":a[6]||(a[6]=e=>L(x).ip=e),placeholder:e.$t("Security.Conf.Index_38")},null,8,["value","placeholder"])])),_:1},8,["label"]),P(E,{checked:L(x).check,"onUpdate:checked":a[7]||(a[7]=e=>L(x).check=e)},{default:O((()=>[C(U(e.$t("Security.Conf.Index_17")),1)])),_:1},8,["checked"])])),_:1},8,["model"])):R("",!0),P(k,{class:"my-20px!"}),$("h3",null,U(e.$t("Security.Conf.Index_22")),1),P(S,{"label-placement":"top",model:L(g),rules:F,ref_key:"historyFormRef",ref:u,class:"pt-15px"},{default:O((()=>[P(v,{label:e.$t("Security.Conf.Index_23"),path:"failures"},{default:O((()=>[P(l,{"show-button":!1,placeholder:e.$t("Site.Placeholder.Index_10"),value:L(g).failures,"onUpdate:value":a[8]||(a[8]=e=>L(g).failures=e),onBlur:T},null,8,["placeholder","value"])])),_:1},8,["label"])])),_:1},8,["model"]),P(k,{class:"mb-20px!"}),P(N,{type:"primary",onClick:B},{default:O((()=>[C(U(e.$t("Site.Cert.index_60")),1)])),_:1})])}}}),oe={class:"pl-5px"},re=b({__name:"index",setup(e,{expose:t}){const a=S(""),{loading:i,setLoading:n}=W(!0),s=async()=>{const e=JSON.stringify(a.value);await V({ips:e.replace(/^"|"$/g,""),types:"white",hand:!0}),o()},o=async()=>{try{n(!0);const{message:e}=await K({types:"white"});l(e)&&(a.value=e.map((e=>"".concat(e.ip," # ").concat(e.ps))).join("\n"))}finally{n(!1)}};return o(),t({init:o}),(e,t)=>{const n=c,l=y,o=T,r=h,u=f;return I(),w("div",oe,[P(n,{"show-icon":!1},{default:O((()=>[C(U(e.$t("Security.WhiteList.Index_1")),1)])),_:1}),P(r,{class:"items-center my-15px"},{default:O((()=>[P(l,{class:"w-500px!",type:"textarea",loading:L(i),value:L(a),"onUpdate:value":t[0]||(t[0]=e=>z(a)?a.value=e:null),autosize:{minRows:10},placeholder:e.$t("Ftp.Placeholder.Index_3")},null,8,["loading","value","placeholder"]),P(o,null,{default:O((()=>[$("li",null,U(e.$t("Security.WhiteList.Index_2")),1),$("li",null,U(e.$t("Security.WhiteList.Index_3")),1),$("li",null,U(e.$t("Security.WhiteList.Index_4")),1)])),_:1})])),_:1}),P(u,{type:"primary",onClick:s},{default:O((()=>[C(U(e.$t("Site.Cert.index_60")),1)])),_:1})])}}}),ue={class:"pl-5px"},ce=b({__name:"index",setup(e,{expose:t}){const a=S(""),{loading:i,setLoading:n}=W(!0),s=async()=>{const e=JSON.stringify(a.value);await V({ips:e.replace(/^"|"$/g,""),types:"black",hand:!0}),o()},o=async()=>{try{n(!0);const{message:e}=await K({types:"black"});l(e)&&(a.value=e.map((e=>"".concat(e.ip," # ").concat(e.ps))).join("\n"))}finally{n(!1)}};return o(),t({init:o}),(e,t)=>{const n=c,l=y,o=T,r=h,u=f;return I(),w("div",ue,[P(n,{"show-icon":!1},{default:O((()=>[C(U(e.$t("Security.BlackList.Index_1")),1)])),_:1}),P(r,{class:"items-center my-15px"},{default:O((()=>[P(l,{class:"w-500px!",type:"textarea",loading:L(i),value:L(a),"onUpdate:value":t[0]||(t[0]=e=>z(a)?a.value=e:null),autosize:{minRows:10},placeholder:e.$t("Ftp.Placeholder.Index_3")},null,8,["loading","value","placeholder"]),P(o,null,{default:O((()=>[$("li",null,U(e.$t("Security.WhiteList.Index_2")),1),$("li",null,U(e.$t("Security.WhiteList.Index_3")),1),$("li",null,U(e.$t("Security.WhiteList.Index_4")),1)])),_:1})])),_:1}),P(u,{type:"primary",onClick:s},{default:O((()=>[C(U(e.$t("Site.Cert.index_60")),1)])),_:1})])}}}),pe=b({__name:"index",setup(e,{expose:t}){const{t:a}=v(),s=k({p:1,limit:10,keyword:"",types:"login"}),l=[{key:"user",title:a("Security.History.Index_7"),width:"15%"},{key:"ip",title:a("Security.History.Index_8"),width:"15%"},{key:"service",title:a("Security.History.Index_10"),width:"15%"},{key:"logintime",title:a("Security.History.Index_11"),align:"center",width:"10%"}],u=[{key:"ip",title:a("Security.History.Index_8"),width:"15%"},{key:"lock_status",title:a("Home.index_66"),width:"20%"},{key:"block_reason",title:a("Security.Anti.Index_21"),width:"20%"},{key:"exptime",title:a("Security.History.index_20"),width:"20%"},{key:"timeleft",title:a("Security.History.index_21"),width:"20%",align:"center"},A({title:a("Public.Table.Action"),align:"right",options:e=>[{label:a("Security.History.Index_16"),onClick:async()=>{F({title:"".concat(a("Security.History.Index_16")," [").concat(e.ip,"]"),content:a("Security.History.Index_17"),onConfirm:async()=>{await D({ip:e.ip,hand:!0,ps:"Manually add",clear_black:1}),S()}})}}]})],{keys:c,table:p,columns:d}=B(l),_=[{label:a("Security.History.Index_3"),value:"login"},{label:a("Security.History.Index_5"),value:"ip"}],y=async()=>{s.keyword="",s.p=1,p.data=[],d.value="ip"===s.types?u:l,S()},m=async()=>{F({title:a("Security.History.Index_1"),content:a("Security.History.Index_18"),onConfirm:async()=>{await i.post("/breaking_through?action=clear_history_record_limit",{},{requestOptions:{loading:X("Security.Api.Index_7"),successMessage:!0}}),S()}})},{loading:g,setLoading:b}=W(!0),S=async()=>{try{b(!0);const{message:t}=await(e=M(s),i.post("/breaking_through?action=get_history_record",e));n(t)?(p.data=t.data,p.total=o(t.page)):(p.data=[],p.total=0)}finally{c.value=[],b(!1)}var e};return S(),t({init:S}),(e,t)=>{const a=r,i=f,n=x,l=G,o=h,u=N,c=E,b=J,v=T;return I(),w(H,null,[P(b,{class:"pl-5px"},{toolsLeft:O((()=>[P(i,{type:"primary",onClick:S},{icon:O((()=>[P(a,{name:"refresh",size:"14"})])),default:O((()=>[C(" "+U(e.$t("Public.Btn.Refresh")),1)])),_:1}),P(i,{onClick:m},{default:O((()=>[C(U(e.$t("Security.History.Index_1")),1)])),_:1})])),toolsRight:O((()=>[C(U(e.$t("Security.History.Index_2"))+" ",1),P(o,{class:"flex-nowrap!"},{default:O((()=>[P(n,{value:L(s).types,"onUpdate:value":[t[0]||(t[0]=e=>L(s).types=e),y],options:_,class:"w-200px"},null,8,["value"]),P(l,{value:L(s).keyword,"onUpdate:value":t[1]||(t[1]=e=>L(s).keyword=e),placeholder:e.$t("Security.History.Index_14"),onSearch:S},null,8,["value","placeholder"])])),_:1})])),table:O((()=>[P(u,{loading:L(g),data:L(p).data,columns:L(d)},null,8,["loading","data","columns"])])),pageRight:O((()=>[P(c,{page:L(s).p,"onUpdate:page":t[2]||(t[2]=e=>L(s).p=e),"page-size":L(s).limit,"onUpdate:pageSize":t[3]||(t[3]=e=>L(s).limit=e),"item-count":L(p).total,onRefresh:S},null,8,["page","page-size","item-count"])])),_:1}),"ip"===L(s).types?(I(),q(v,{key:0},{default:O((()=>[$("li",null,U(e.$t("Security.History.Index_19")),1)])),_:1})):R("",!0)],64)}}}),de=b({__name:"index",setup(t){const{t:a}=v(),i=S("config"),n=[{key:"config",label:a("Security.Tabs.Index_1"),component:le},{key:"white",label:a("Security.Tabs.Index_2"),component:re},{key:"black",label:a("Security.Tabs.Index_3"),component:ce},{key:"history",label:a("Security.Tabs.Index_4"),component:pe}];return(t,a)=>{const s=e;return I(),q(s,{value:L(i),"onUpdate:value":a[0]||(a[0]=e=>z(i)?i.value=e:null),options:n},null,8,["value"])}}}),_e={class:"mr-15px"},ye=u(b({__name:"index",setup(e){const{t:t}=v(),a=k({address:"",show:!1}),s=S(!1),l=async e=>{s.value=!e;const a=t("Security.Conf.Index_1"),i=t("Security.Conf.Index_4");F({title:a,content:i,onConfirm:async({hide:t})=>{await Z({global_status:e}),s.value=e,t()}})},o=async()=>{await D({ip:a.address,hand:!0}),d()},{loading:r,setLoading:u}=W(!0),d=async()=>{u(!0);const{message:e}=await Y();if(n(e)&&(s.value=e.global_status,u(!1),!e.global_status))return;const{data:t}=await Q.get("https://api.ipify.org?format=json");a.address=t.ip;try{await(e=>i.post("/breaking_through?action=check_local_ip_white",e,{requestOptions:{loading:"",successMessage:!1,errorMessage:!1}}))({ip:t.ip}),a.show=!1}catch(l){a.show=!0,console.error(l)}};return d(),(e,t)=>{const i=f,n=c,u=p,d=h,_=g;return I(),w(H,null,[L(a).show&&L(s)?(I(),q(n,{key:0,class:"py-10px",type:"warning",bordered:!1},{default:O((()=>[$("span",_e,U(e.$t("Security.Conf.Index_2",[L(a).address])),1),P(i,{text:"",type:"primary",onClick:o},{default:O((()=>[C(" ["+U(e.$t("Security.Conf.Index_3"))+"] ",1)])),_:1})])),_:1})):R("",!0),P(_,{class:"my-15px"},{default:O((()=>[P(d,{class:"p-15px items-center"},{default:O((()=>[$("span",null,U(e.$t("Security.Conf.Index_1")),1),P(u,{value:L(s),"onUpdate:value":[t[0]||(t[0]=e=>z(s)?s.value=e:null),l],"rubber-band":!1,loading:L(r),size:"small"},null,8,["value","loading"])])),_:1})])),_:1}),L(s)?(I(),q(_,{key:1,class:"p-15px"},{default:O((()=>[P(de)])),_:1})):R("",!0)],64)}}}),[["__scopeId","data-v-88b60c14"]]);export{ye as default};
