System.register(["./vue-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./index-legacy102.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./public-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./xterm-legacy.js?v=1732601582185","./xterm-addon-canvas-legacy.js?v=1732601582185"],(function(e,t){"use strict";var a,n,o,l,i,r,s,d,c,u,p,v,b,m,g,h,x,_,y,f,w,k,C,T,S,A,j,O,E,L,I,M,q,z,D,F,R,U,$,P,B,Y,H,K,W,X,G,J,N,Q,V,Z,ee,te,ae,ne,oe,le,ie,re;return{setters:[e=>{a=e.a6,n=e.d,o=e.W,l=e.M,i=e.w,r=e.O,s=e.P,d=e.Y,c=e.c,u=e.Z,p=e.R,v=e.ac,b=e.r,m=e.j,g=e.V,h=e.as,x=e.f,_=e.o,y=e.n,f=e.X,w=e.L,k=e.ad,C=e.an,T=e.Q,S=e.H,A=e.F,j=e.ao,O=e.k,E=e.v},e=>{L=e.i,I=e.a8,M=e.c,q=e.bw,z=e.I,D=e.k,F=e._,R=e.q},e=>{U=e._},e=>{$=e._},e=>{P=e._},e=>{B=e.u,Y=e.d,H=e.f,K=e.a,W=e.b,X=e.e,G=e.h,J=e.p},e=>{N=e.aa,Q=e.ad,V=e.bG,Z=e.bh,ee=e.bJ},e=>{te=e._},e=>{ae=e._},e=>{ne=e.x,oe=e.a,le=e.b,ie=e.c},e=>{re=e.x}],execute:function(){var se=document.createElement("style");se.textContent='[data-v-b79b3036] .xterm{padding:12px!important}.box[data-v-b79b3036]{height:calc(100vh - 160px)}.terminal[data-v-b0b3524c]{position:relative;height:100%}.head[data-v-b0b3524c]{position:relative;height:40px;align-items:center;--un-bg-opacity:1;background-color:rgb(241 241 241 / var(--un-bg-opacity))}.head .item[data-v-b0b3524c]{width:160px;height:100%;display:flex;cursor:pointer;align-items:center;justify-content:space-between;padding-left:8px;padding-right:8px;border-right:1px solid rgb(231,225,225)}.head .item .close-terminal[data-v-b0b3524c]{--un-text-opacity:1;color:rgb(239 8 8 / var(--un-text-opacity))}.head .item .close-terminal[data-v-b0b3524c]:hover{--un-bg-opacity:1;background-color:rgb(247 247 247 / var(--un-bg-opacity))}.head .item .text[data-v-b0b3524c]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.head .item .icon[data-v-b0b3524c]{margin-right:5px;width:10px;height:10px;--un-bg-opacity:1;background-color:rgb(32 165 58 / var(--un-bg-opacity));display:inline-block;border-radius:50%}.head .item .icon-active[data-v-b0b3524c]{--un-bg-opacity:1;background-color:rgb(247 11 60 / var(--un-bg-opacity))}.head .item[data-v-b0b3524c]:hover{--un-bg-opacity:1;background-color:rgb(218 218 218 / var(--un-bg-opacity))}.head .item-active[data-v-b0b3524c]{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity));background:#424242!important}.head .add-terminal[data-v-b0b3524c]{width:40px;height:40px;text-align:center;line-height:50px}.head .add-terminal[data-v-b0b3524c]:hover{--un-bg-opacity:1;background-color:rgb(204 204 204 / var(--un-bg-opacity))}.context-menu[data-v-b0b3524c]{position:absolute;z-index:9999;--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(102 102 102 / var(--un-text-opacity));border-radius:5px}.context-menu ul[data-v-b0b3524c]{width:150px;padding-top:5px;padding-bottom:5px;list-style:none}.context-menu ul li[data-v-b0b3524c]{cursor:pointer;padding:8px 10px}.context-menu ul li[data-v-b0b3524c]:hover{--un-bg-opacity:1;background-color:rgb(231 245 233 / var(--un-bg-opacity));--un-text-opacity:1;color:rgb(29 149 52 / var(--un-text-opacity))}.terminal-contract-tool[data-v-b0b3524c]{position:absolute;right:0;top:50%;z-index:50;height:4rem;width:2rem;display:flex;cursor:pointer;align-items:center;justify-content:center;border-bottom-left-radius:9999px;border-top-left-radius:9999px;--un-bg-opacity:1;background-color:rgb(55 65 81 / var(--un-bg-opacity));background-color:#555;transform:translateY(-50%)}.terminal-contract-tool[data-v-b0b3524c]:after{content:"";--un-border-opacity:1;border-color:rgb(255 255 255 / var(--un-border-opacity));border:2px solid rgb(255,255,255);transform:rotate(45deg);border-left-width:0;border-bottom-width:0;height:1rem;width:1rem}.terminal-contract-tool[data-v-b0b3524c]:hover{--un-bg-opacity:1;background-color:rgb(107 114 128 / var(--un-bg-opacity))}.active[data-v-b0b3524c]:after{transform:rotate(-135deg)!important}.box[data-v-932584a7]{height:calc(100vh - 52px)}\n',document.head.appendChild(se);const{t:de}=L.global,ce=(e("a",(e=>I.post("/xterm?action=create_host",e,{requestOptions:{loading:de("Security.Api.Index_4"),successMessage:!0}}))),e("g",(e=>I.post("/xterm?action=get_host_find",e))),e=>I.post("/xterm?action=remove_host",e,{requestOptions:{loading:de("Security.Api.Index_3"),successMessage:!0}})),ue=e=>I.post("/xterm?action=create_command",e,{requestOptions:{loading:de("Security.Api.Index_4"),successMessage:!0}}),pe=e=>I.post("/xterm?action=modify_command",e,{requestOptions:{loading:de("Crontab.Api.index_5"),successMessage:!0}}),ve=e=>I.post("/xterm?action=remove_command",e,{requestOptions:{loading:de("Security.Api.Index_3"),successMessage:!0}}),be=e=>{B({title:e.title,width:600,footer:!0,data:e.data,component:a((()=>M((()=>t.import("./form-legacy7.js?v=1732601582185")),void 0)))})},me=n({__name:"index",setup(e,{expose:t}){const{t:a}=o(),n=q(),{keys:b,table:m,columns:g}=Y([{key:"host",title:a("Term.index_8"),ellipsis:{tooltip:{width:"trigger"}},render:e=>l("span",{class:"cursor-pointer w-100%",onClick:()=>x(e)},[e.host])},H({width:130,options:e=>[{label:a("Site.TableOP.index_7"),onClick:()=>{const t={title:a("Term.index_22"),data:{isEdit:!0,row:e}};be(t)}},{label:a("Public.Btn.Del"),onClick:()=>{K({title:a("Term.index_6"),content:a("Term.index_7",[e.host]),onConfirm:async({hide:t})=>{await ce({host:e.host}),f(),t()}})}}]})]),h=()=>{const e={title:a("Term.index_19"),data:{isEdit:!1}};be(e)},x=e=>{n.server={...e,time:new Date}},{loading:_,setLoading:y}=W(),f=async()=>{try{y(!0);const{message:e}=await I.post("/xterm?action=get_host_list");z(e)&&(m.data=e)}finally{b.value=[],y(!1)}};return f(),i((()=>n.isRefresh),(e=>{e&&(n.setRefresh(!1),f())})),t({init:f}),(e,t)=>{const a=N,n=P,o=$;return r(),s("div",null,[l(o,null,{toolsLeft:d((()=>[l(a,{type:"primary",onClick:h},{default:d((()=>[c(u(e.$t("Term.index_19")),1)])),_:1})])),table:d((()=>[l(n,{"checked-row-keys":p(b),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>v(b)?b.value=e:null),loading:p(_),data:p(m).data,columns:p(g)},null,8,["checked-row-keys","loading","data","columns"])])),_:1})])}}}),ge={class:"p-20px"},he=n({__name:"form",props:{data:{}},setup(e,{expose:t}){const{t:a}=o(),n=e,{isEdit:i,row:c,getList:u}=n.data,v=b(null),g=m({name:"",content:""}),h={name:{required:!0,message:a("Security.Conf.Index_28"),trigger:["blur","input"]},content:{required:!0,message:a("Security.Conf.Index_28"),trigger:["blur","input"]}};return i&&c&&(g.name=c.title,g.content=c.shell),t({onConfirm:async({hide:e})=>{await(v.value?.validate()),i?await pe({shell:g.content,title:c?c.title:"",new_title:g.name}):await ue({shell:g.content,title:g.name}),u?.(),e()}}),(e,t)=>{const a=Q,n=V,o=ae;return r(),s("div",ge,[l(o,{ref_key:"formRef",ref:v,model:p(g),rules:h},{default:d((()=>[l(n,{label:e.$t("Docker.Compose.form.index_3"),path:"name"},{default:d((()=>[l(a,{class:"w-280px!",value:p(g).name,"onUpdate:value":t[0]||(t[0]=e=>p(g).name=e),placeholder:e.$t("Term.idnex_1")},null,8,["value","placeholder"])])),_:1},8,["label"]),l(n,{label:e.$t("Docker.LocalImage.build_5"),path:"content"},{default:d((()=>[l(a,{class:"w-280px!",type:"textarea",rows:6,value:p(g).content,"onUpdate:value":t[1]||(t[1]=e=>p(g).content=e),placeholder:e.$t("Term.index_2")},null,8,["value","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),xe=n({__name:"index",setup(e,{expose:t}){const{t:a}=o(),{keys:n,table:i,columns:b}=Y([{key:"title",title:a("Term.index_4"),ellipsis:{tooltip:{width:"trigger"}},render:e=>l("span",{class:"cursor-pointer w-100%",onClick:()=>{m(e.shell)}},[e.title])},H({width:130,options:e=>[{label:a("Public.Btn.Copy"),onClick:()=>{m(e.shell)}},{label:a("Public.Btn.Edit"),onClick:()=>{f(e)}},{label:a("Public.Btn.Del"),onClick:()=>{K({title:a("Term.index_20"),content:a("Term.index_21",[e.title]),onConfirm:async({hide:t})=>{await ve({title:e.title}),x(),t()}})}}]})]),m=e=>{X(e)},{loading:g,setLoading:h}=W(),x=async()=>{try{h(!0);const{message:e}=await I.post("/xterm?action=get_command_list");z(e)&&(i.data=e)}finally{n.value=[],h(!1)}},_=G(a("Term.index_3"),{isEdit:!1,getList:x}),y=()=>{_.data.isEdit=!1,_.title=a("Term.index_3"),_.show=!0},f=e=>{_.data.row=e,_.data.isEdit=!0,_.title=a("Term.index_5"),_.show=!0};return x(),t({init:x}),(e,t)=>{const a=N,o=P,m=$,h=te;return r(),s("div",null,[l(m,null,{toolsLeft:d((()=>[l(a,{type:"primary",onClick:y},{default:d((()=>[c(u(e.$t("Term.index_3")),1)])),_:1})])),table:d((()=>[l(o,{"checked-row-keys":p(n),"onUpdate:checkedRowKeys":t[0]||(t[0]=e=>v(n)?n.value=e:null),loading:p(g),data:p(i).data,columns:p(b)},null,8,["checked-row-keys","loading","data","columns"])])),_:1}),l(h,{show:p(_).show,"onUpdate:show":t[1]||(t[1]=e=>p(_).show=e),title:p(_).title,data:p(_).data,width:480,footer:!0,component:he},null,8,["show","title","data"])])}}}),_e=n({__name:"index",setup(e){const{t:t}=o(),a=b("server"),n=[{key:"server",label:t("Term.index_23"),component:me},{key:"command",label:t("Term.index_24"),component:xe}];return(e,t)=>{const o=U;return r(),s("div",null,[l(o,{class:"w-300px!",value:p(a),"onUpdate:value":t[0]||(t[0]=e=>v(a)?a.value=e:null),options:n},null,8,["value"])])}}}),ye=n({__name:"terminal",props:{data:{}},emits:["updateState"],setup(e,{emit:t}){const{t:a}=o(),n=e,{data:l}=n,d=t,c=q(),{isFull:u}=g(c),{ws:p,status:v,send:m,open:f,close:w}=J("/webssh",{verifyData:{host:l.host,port:l.port,id:l.id,ps:l.ps,sort:0},onMessage:(e,t)=>{const n=t.data;return n.indexOf("Authentication timeout.")>-1&&(T.value=!0),-1==n.indexOf("@127.0.0.1:")&&-1==n.indexOf("@localhost:")||-1==n.indexOf("Authentication failed")?"\\r\\nlogout\\r\\n"==n||"logout\\r\\n"==n||"\r\nlogout\r\n"==n||"logout\r\n"==n||n.search(/logout[\r\n]+$/)>-1?(d("updateState",l.id,!1),k.write("\r"+a("Component.Terminal.index_1")+"\r"),E(),void w()):void 0:(d("updateState",l.id,!1),w(),void E())}});let k,C;const T=b(!1),S=b(null),A=()=>{const e=p.value;e&&(k.loadAddon(C),k.loadAddon(new re.CanvasAddon),k.loadAddon(new le.WebLinksAddon),k.loadAddon(new ie.AttachAddon(e)),setTimeout((()=>{C.fit();const e=S.value;e&&(L.value=`${e.clientHeight}px`)}),100))},j=()=>{S.value&&k.open(S.value)};let O=!1;const E=()=>{O=!1},L=b(""),I=()=>{k.focus(),k.onData((e=>{const t=p.value;"\r"===e&&T.value&&(T.value=!1,k.write("\r\n"),M()),void 0!==t||"\r"!==e||O||(O=!0,k.write("\r\n"+a("Component.Terminal.index_2")+"\r\n"),M())}))},M=()=>{f(),I();const e=p.value;e&&(k.loadAddon(new ie.AttachAddon(e)),d("updateState",l.id,!0))},z=()=>{y((()=>{if(C.fit(),"CLOSED"!==v.value){d("updateState",l.id,!0);const{cols:e,rows:t}=k;m({cols:e,rows:t,resize:1})}}))};i((()=>u.value),(e=>{const t=S.value;t&&!e&&(t.style.height=L.value)}));let D=!0;const F=new ResizeObserver((()=>{h((()=>{D?D=!1:z()}),200)()}));return x((()=>{k=new ne.Terminal({cursorBlink:!0,fontSize:14,fontFamily:"Monaco, Menlo, Consolas, 'Courier New', monospace",theme:{background:"#333",foreground:"#ececec"}}),C=new oe.FitAddon,A(),j(),I(),z(),(()=>{const e=S.value;e&&F.observe(e)})()})),_((()=>{F?.disconnect()})),(e,t)=>(r(),s("div",{ref_key:"terminalRef",ref:S,class:"w-full box"},null,512))}}),fe=D(ye,[["__scopeId","data-v-b79b3036"]]),we=["onClick","onContextmenu"],ke=["title"],Ce=["onClick"],Te={class:"terminal bg-#333333"},Se=n({__name:"index",setup(e){const{t:t}=o(),a=q(),{isFull:n,server:v,isShow:m}=g(a),h=b([{id:"aaaaaaaaa",host:"127.0.0.1",port:22,ps:t("Database.form.index_12"),state:!0}]),x=["Copy session","Close session","Close to right","Close other"],_=b("aaaaaaaaa"),y=()=>{const e={title:t("Term.index_19"),data:{isEdit:!1}};be(e)},L=e=>{const t=R(9,"letter");h.value.push({id:t,host:e.host,port:e.port,ps:e.ps,state:!0}),setTimeout((()=>{I(t)}),20)},I=e=>{_.value=e},M=(e,t)=>{h.value=h.value.map((a=>a.id===e?{...a,state:t}:a))},z=e=>{h.value=h.value.filter((t=>t.id!==e)),_.value=h.value.length>0?h.value[h.value.length-1].id:"aaaaaaaaa"},D=b(!1),U=b(0),$=b(0),P=b({id:"",host:"",port:0,ps:"",state:!1});return document.addEventListener("click",(()=>{D.value=!1})),i((()=>v.value),(e=>{null!==e&&L(e)}),{deep:!0}),(e,t)=>{const a=F,o=Z;return r(),f(o,{vertical:"",class:"gap-0!"},{default:d((()=>[l(o,{class:"head gap-0!"},{default:d((()=>[(r(!0),s(A,null,w(p(h),(e=>(r(),s("div",{key:e.id,class:k(["item",{"item-active":p(_)===e.id}]),onClick:t=>I(e.id),onContextmenu:C((t=>{return a=t,n=e,P.value=n,U.value=a.clientX,$.value=a.clientY,void(D.value=!0);var a,n}),["prevent"])},[T("div",{class:"text",title:e.ps},[T("span",{class:k(["icon",{"icon-active":!e.state}])},null,2),c(u(e.ps?e.ps:e.host),1)],8,ke),l(a,{name:"base-close",class:"close-terminal",size:16,onClick:C((t=>z(e.id)),["stop"])},null,8,["onClick"]),p(D)?(r(),s("div",{key:0,class:"context-menu",style:S({top:p($)-20+"px",left:p(U)-180+"px"})},[T("ul",null,[(r(),s(A,null,w(x,((e,t)=>T("li",{key:t,onClick:t=>(e=>{if(!P.value)return;let t;switch(e){case"Copy session":L(P.value);break;case"Close session":z(P.value.id);break;case"Close to right":t=h.value.findIndex((e=>e.id===P.value.id)),-1!==t&&(h.value.splice(t+1),setTimeout((()=>{I(h.value[t]?.id||"aaaaaaaaa")}),20));break;case"Close other":h.value=h.value.filter((e=>e.id===P.value.id)),setTimeout((()=>{I(P.value.id)}),20)}D.value=!1})(e)},u(e),9,Ce))),64))])],4)):j("",!0)],42,we)))),128)),T("div",{class:"add-terminal",onClick:y},[l(a,{name:"base-add",size:24})]),T("div",{class:"absolute right-0px add-terminal",onClick:t[0]||(t[0]=e=>n.value=!p(n))},[l(a,{name:"base-full",size:24})])])),_:1}),T("div",Te,[(r(!0),s(A,null,w(p(h),(e=>O((r(),f(fe,{key:e.id,data:e,onUpdateFull:I,onUpdateState:M},null,8,["data"])),[[E,e.id===p(_)]]))),128)),T("div",{class:k(["terminal-contract-tool",{active:!p(m)}]),onClick:t[1]||(t[1]=e=>m.value=!p(m))},null,2)])])),_:1})}}}),Ae=D(Se,[["__scopeId","data-v-b0b3524c"]]),je={class:"p-16px box"},Oe=D(n({__name:"index",setup(e){const t=q(),{isShow:a,isFull:n}=g(t),o=b(null);i((()=>n.value),(e=>{e?(a.value=!1,o.value?.requestFullscreen()):document.exitFullscreen().catch((e=>{console.log(e.message)}))}));const c=()=>{document.fullscreenElement?n.value=!0:n.value=!1};return x((()=>{document.addEventListener("fullscreenchange",c)})),_((()=>{document.removeEventListener("fullscreenchange",c)})),(e,t)=>{const n=Z,i=ee;return r(),s("div",je,[l(i,{class:"p-16px h-100%"},{default:d((()=>[T("div",{class:"bg-#ffffff h-100%",ref_key:"contentRef",ref:o},[l(n,{class:"flex-nowrap! h-100%"},{default:d((()=>[l(Ae,{class:"flex-1 overflow-hidden"}),O(l(_e,null,null,512),[[E,p(a)]])])),_:1})],512)])),_:1})])}}}),[["__scopeId","data-v-932584a7"]]),Ee=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"}));e("i",Ee)}}}));
