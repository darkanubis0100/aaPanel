System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./public-legacy.js?v=1732601582185","./mail-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy16.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185"],(function(e,t){"use strict";var a,l,i,n,s,u,c,o,_,d,p,r,m,g,y,h,x,j,v,f,w,b,k,M,E,C,R,W,L,U,B,S;return{setters:[e=>{a=e.S,l=e.f,i=e.I,n=e.a4,s=e.c},e=>{u=e._},e=>{c=e._},e=>{o=e._},e=>{_=e._},e=>{d=e.d,p=e.f,r=e.h},e=>{m=e.E,g=e.B,y=e.F},e=>{h=e._},e=>{x=e.d,j=e.W,v=e.r,f=e.j,w=e.M,b=e.c,k=e.f,M=e.O,E=e.X,C=e.Y,R=e.Z,W=e.R,L=e.a6},e=>{U=e.bJ,B=e.bM,S=e.bN},null,null,null],execute:function(){e("default",x({__name:"index",setup(e){const x=L((()=>s((()=>t.import("./index-legacy183.js?v=1732601582185")),void 0))),{t:D}=j(),F=v(),H=f({p:1,username:null}),{table:I,columns:J,setLoading:N}=d([{key:"from",title:D("Mail.Email.index_2"),width:"25%",minWidth:140,ellipsis:{tooltip:!0}},{key:"theme",title:D("Mail.Email.index_3"),minWidth:160,ellipsis:{tooltip:{width:"trigger"}},render:e=>{const t=e.html.replace(/[^\u4e00-\u9fa5]/g,"");return w("span",{class:"cursor-pointer",onClick:()=>{P(e)}},[w("a",{class:"bt-link"},[e.subject]),w("span",{class:"text-desc"},[b(" - "),t||e.body])])}},{key:"time",title:D("Mail.Email.index_4"),width:"12%",minWidth:140,render:e=>a(e.time)},p({width:150,options:e=>[{label:D("Mail.Email.index_5"),onClick:()=>{P(e)}},{label:D("Mail.Email.index_10"),onClick:()=>{X(e)}},{label:D("Public.Btn.Del"),onClick:()=>{Y(e)}}]})]),O=r(),P=e=>{O.data.row=e,O.title=D("Mail.Email.index_7",[e.subject]),O.show=!0},X=async e=>{await m({path:e.path,username:H.username||""}),Z()},Y=async e=>{await g({path:e.path}),Z()},Z=async()=>{try{N(!0);const{message:e}=await y({p:H.p,username:H.username||""});l(e)&&(I.data=i(e.data)?e.data:[],I.total=n(e.page))}finally{N(!1)}},$=()=>{H.p=1,Z()};return N(!0),k((async()=>{await F.value.getList()})),(e,t)=>{const a=B,l=S,i=_,n=o,s=c,d=u,p=U;return M(),E(p,{class:"p-16px"},{default:C((()=>[w(s,null,{toolsLeft:C((()=>[w(l,{class:"w-460px"},{default:C((()=>[w(a,null,{default:C((()=>[b(R(e.$t("Mail.Email.index_1")),1)])),_:1}),w(h,{ref_key:"senderRef",ref:F,value:W(H).username,"onUpdate:value":[t[0]||(t[0]=e=>W(H).username=e),$]},null,8,["value"])])),_:1})])),table:C((()=>[w(i,{loading:W(I).loading,data:W(I).data,columns:W(J)},null,8,["loading","data","columns"])])),pageRight:C((()=>[w(n,{page:W(H).p,"onUpdate:page":t[1]||(t[1]=e=>W(H).p=e),"item-count":W(I).total,onRefresh:Z},null,8,["page","item-count"])])),_:1}),w(d,{show:W(O).show,"onUpdate:show":t[2]||(t[2]=e=>W(O).show=e),title:W(O).title,data:W(O).data,width:850,height:680,component:W(x)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
