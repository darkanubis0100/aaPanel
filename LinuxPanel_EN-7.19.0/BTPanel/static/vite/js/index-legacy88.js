System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1732601582185","./public-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy17.js?v=1732601582185","./naive-legacy.js?v=1732601582185"],(function(e,t){"use strict";var a,l,n,i,o,d,s,r,u,_,c,p,g,v,b,f,m,w,y,h,x,k,P,S,j,C,$,R,W,L,U,q,z,O,B,M,H,T,D,V,K,E;return{setters:[e=>{a=e.i,l=e.j,n=e.c,i=e.a8,o=e.k,d=e.S,s=e.f},e=>{r=e._},e=>{u=e._},e=>{_=e._},e=>{c=e._},e=>{p=e._},e=>{g=e._},e=>{v=e.u,b=e.h,f=e.d,m=e.f,w=e.a,y=e.b},e=>{h=e.M,x=e.a6,k=e.d,P=e.r,S=e.j,j=e.n,C=e.O,$=e.P,R=e.Y,W=e.R,L=e.c,U=e.Z,q=e.Q,z=e.ac,O=e.W,B=e.ak,M=e.X},e=>{H=e._},e=>{T=e._},e=>{D=e.bG,V=e.bh,K=e.bJ,E=e.aa}],execute:function(){var G=document.createElement("style");G.textContent=".text[data-v-517d771e]{width:300px;cursor:default;--un-bg-opacity:1;background-color:rgb(247 247 247 / var(--un-bg-opacity));padding-left:10px;padding-right:10px;line-height:32px}.language[data-v-517d771e]{width:300px}.language[data-v-517d771e] .n-base-loading{display:none}.language[data-v-517d771e] .n-base-selection--disabled{--n-border: none;--n-text-color-disabled: #333333}.language[data-v-517d771e] .n-base-selection.n-base-selection--disabled .n-base-selection-label .n-base-selection-input,.language[data-v-517d771e] .n-base-selection.n-base-selection--disabled .n-base-selection-label{cursor:default}\n",document.head.appendChild(G);const{t:I}=a.global,J=e=>{const{row:t}=e;return h(l,null,{default:()=>[t.site_url]})},Q=e=>{const{row:t}=e;return h(l,null,{default:()=>[t.env_info.wordpress_version?t.env_info.wordpress_version:"--"]})},X=e=>{const{row:t}=e;return h(l,null,{default:()=>[t.env_info.php_version?t.env_info.php_version:"--"]})},Y=e=>{const{row:t}=e;return h(l,null,{default:()=>[t.env_info.plugin_version?t.env_info.plugin_version:"--"]})},{t:Z}=a.global,A=(e("c",(e=>i.post("/site?action=wp_remote_add",e,{requestOptions:{loading:Z("WP.api.tamper_7"),successMessage:!0}}))),e("a",(e=>i.post("/site?action=wp_remote_add_manually",e,{requestOptions:{loading:Z("WP.api.tamper_7"),successMessage:!0}}))),(e,t=!0)=>i.post("/site?action=wp_remote_remove",e,{requestOptions:{loading:t?Z("WP.api.tamper_3"):"",successMessage:t}})),F={class:"p-20px"},N=["title"],ee=o(k({__name:"index",props:{data:{}},setup(e){const t=e,{row:a}=t.data,n=P(null),i=S({Login_url:"",wp:"",php:"",sql:"",worker:"",username:"",language:"en"});return j((()=>{i.Login_url=a.login_url,i.wp=a.env_info.wordpress_version,i.php=a.env_info.php_version,i.worker=a.env_info.plugin_version,i.username=a.username,i.language=a.env_info.locale,i.sql=a.env_info.mysql_version})),(e,t)=>{const a=l,o=D,d=V,s=H;return C(),$("div",F,[h(s,{"label-width":"160px",modelValue:W(i),"onUpdate:modelValue":t[1]||(t[1]=e=>z(i)?i.value=e:null),ref_key:"formRef",ref:n},{default:R((()=>[h(o,{label:e.$t("WP.Config.index_1")},{default:R((()=>[h(a,{href:W(i).Login_url,target:"_blank"},{default:R((()=>[L(U(W(i).Login_url),1)])),_:1},8,["href"])])),_:1},8,["label"]),h(d,null,{default:R((()=>[h(o,{label:e.$t("Site.Lable.index_23")},{default:R((()=>[h(a,null,{default:R((()=>[L(U(W(i).wp),1)])),_:1})])),_:1},8,["label"]),h(o,{label:e.$t("WP.Remote.index_17")},{default:R((()=>[h(a,null,{default:R((()=>[L(U(W(i).worker),1)])),_:1})])),_:1},8,["label"])])),_:1}),h(d,null,{default:R((()=>[h(o,{label:e.$t("Site.PHP.add_site_21")},{default:R((()=>[h(a,null,{default:R((()=>[L(U(W(i).php),1)])),_:1})])),_:1},8,["label"]),h(o,{label:e.$t("WP.Remote.index_18")},{default:R((()=>[h(a,null,{default:R((()=>[L(U(W(i).sql),1)])),_:1})])),_:1},8,["label"])])),_:1}),h(o,{label:e.$t("Site.Lable.index_24")},{default:R((()=>[q("div",{class:"text",title:W(i).username},U(W(i).username),9,N)])),_:1},8,["label"]),h(o,{label:e.$t("WP.Label.index_3")},{default:R((()=>[h(T,{class:"language",value:W(i).language,"onUpdate:value":t[0]||(t[0]=e=>W(i).language=e),disabled:""},null,8,["value"])])),_:1},8,["label"])])),_:1},8,["modelValue"])])}}}),[["__scopeId","data-v-517d771e"]]),te=k({__name:"index",setup(e){const a=x((()=>n((()=>t.import("./index-legacy229.js?v=1732601582185")),void 0))),{t:l}=O(),o=()=>{F.show=!0},k=b(),P=e=>{k.title=`${l("Site.Cert.index_58")} [${e.site_url}] -- ${l("Site.Cert.index_59")} [${d(e.create_time)}]`,k.data.row=e,k.show=!0},{keys:j,table:$,columns:q}=f([{type:"selection",width:40},{key:"name",title:l("Site.TableRow.index_1"),ellipsis:{tooltip:!0},render:e=>h(J,{row:e,onClick:()=>{P(e)}},null)},{key:"name",title:l("Site.Lable.index_23"),align:"center",render:e=>h(Q,{row:e,onClick:()=>{P(e)}},null)},{key:"name",title:l("WP.Remote.index_17"),align:"center",render:e=>h(Y,{row:e,onClick:()=>{P(e)}},null)},{key:"name",title:l("Site.PHP.add_site_21"),align:"center",render:e=>h(X,{row:e,onClick:()=>{P(e)}},null)},{key:"create_time",title:l("Docker.Container.index_9"),align:"center",render:e=>d(e.create_time)},m({title:l("Site.TableRow.index_30"),width:200,options:e=>[{label:l("Site.TableOP.index_1"),onClick:()=>{var a;a=e,v({title:I("WP.index_21"),width:420,minHeight:180,footer:!1,data:a,component:x((()=>n((()=>t.import("./index-legacy228.js?v=1732601582185")),void 0)))})}},{label:l("Public.Btn.Del"),onClick:()=>{w({title:`${l("Public.Btn.Delete")} ${e.site_url}`,content:l("WP.Remote.index_19"),onConfirm:async()=>{await A({remote_id:e.id}),Z()}})}}]})]),H=[{key:"delete",type:"confirm",label:l("Site.Batch.index_10"),confirm:{title:l("Crontab.Planned.index_16",[l("Site.Batch.index_10")]),desc:l("Crontab.Planned.index_17",[l("Site.Batch.index_10")]),columns:[q.value[1]],api:e=>A({remote_id:e.id},!1),done:()=>{Z()}}}],{loading:T,setLoading:D}=y(!0),V=S({p:1,p_size:10,keyword:""}),G=()=>{V.p=1,Z()},Z=async()=>{try{D(!0);const{message:t}=await(e=B(V),i.post("/site?action=wp_remote_sites",e));s(t)?($.data=t.list,$.total=t.total):($.data=[],$.total=0)}finally{j.value=[],D(!1)}var e},F=b(l("Site.PHP.index_4"),{getList:Z});return Z(),(e,t)=>{const l=E,n=g,i=p,d=c,s=_,v=u,b=r,f=K;return C(),M(f,null,{default:R((()=>[h(v,{class:"p-16px",feedback:!0},{toolsLeft:R((()=>[h(l,{type:"primary",onClick:o},{default:R((()=>[L(U(e.$t("WP.index_5")),1)])),_:1})])),toolsRight:R((()=>[h(n,{value:W(V).keyword,"onUpdate:value":t[0]||(t[0]=e=>W(V).keyword=e),placeholder:e.$t("WP.index_4"),onSearch:G},null,8,["value","placeholder"])])),table:R((()=>[h(i,{"checked-row-keys":W(j),"onUpdate:checkedRowKeys":t[1]||(t[1]=e=>z(j)?j.value=e:null),loading:W(T),data:W($).data,columns:W(q)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:R((()=>[h(d,{"checked-row-keys":W(j),"onUpdate:checkedRowKeys":t[2]||(t[2]=e=>z(j)?j.value=e:null),data:W($).data,options:H},null,8,["checked-row-keys","data"])])),pageRight:R((()=>[h(s,{page:W(V).p,"onUpdate:page":t[3]||(t[3]=e=>W(V).p=e),"page-size":W(V).p_size,"onUpdate:pageSize":t[4]||(t[4]=e=>W(V).p_size=e),"item-count":W($).total,"store-key":"wp-toolkit",onRefresh:Z},null,8,["page","page-size","item-count"])])),_:1}),h(b,{show:W(F).show,"onUpdate:show":t[5]||(t[5]=e=>W(F).show=e),title:W(F).title,data:W(F).data,width:550,"min-height":250,footer:!0,component:W(a)},null,8,["show","title","data","component"]),h(b,{show:W(k).show,"onUpdate:show":t[6]||(t[6]=e=>W(k).show=e),title:W(k).title,data:W(k).data,width:580,"min-height":250,component:ee},null,8,["show","title","data"])])),_:1})}}}),ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));e("i",ae)}}}));
