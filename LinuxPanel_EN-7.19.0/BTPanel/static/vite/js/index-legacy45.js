System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./public-legacy.js?v=1732601582185","./mail-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185"],(function(e,t){"use strict";var a,l,i,n,o,s,d,r,c,u,_,y,p,g,w,m,x,h,v,f,j,b,k,M,F,C;return{setters:[e=>{a=e.I,l=e.c},e=>{i=e._},e=>{n=e._},e=>{o=e._},e=>{s=e.h,d=e.d,r=e.f,c=e.a},e=>{u=e.x,_=e.y,y=e.z},e=>{p=e.bo,g=e.bJ,w=e.aa},e=>{m=e.d,x=e.W,h=e.j,v=e.M,f=e.O,j=e.X,b=e.Y,k=e.c,M=e.Z,F=e.R,C=e.a6},null,null,null],execute:function(){e("default",m({__name:"index",setup(e){const m=C((()=>l((()=>t.import("./index-legacy182.js?v=1732601582185")),void 0))),{t:E}=x(),P=h({p:1,size:10}),R=s("",{isEdit:!1,row:void 0,onRefresh:()=>{$()}}),z=()=>{R.data.isEdit=!1,R.title=E("Mail.Forward.index_1"),R.show=!0},{table:B,columns:V}=d([{key:"address",title:E("Mail.Forward.index_2"),ellipsis:{tooltip:!0}},{key:"goto",title:E("Mail.Forward.index_3"),ellipsis:{tooltip:!0}},{key:"domain",title:E("Mail.Forward.index_4"),ellipsis:{tooltip:!0}},{key:"created",title:E("Mail.Forward.index_5")},{key:"modified",title:E("Mail.Forward.index_6")},{key:"active",title:E("Public.Table.Status"),render:e=>v(p,{value:e.active,size:"small",checkedValue:1,uncheckedValue:0,onUpdateValue:async t=>{await u({user:e.address,forward_user:e.goto,active:t}),e.active=t}},null)},r({width:150,options:e=>[{label:E("Public.Btn.Edit"),onClick:()=>{S(e)}},{label:E("Public.Btn.Del"),onClick:()=>{U(e)}}]})]),S=e=>{R.data.isEdit=!0,R.data.row=e,R.title=E("Mail.Forward.index_7"),R.show=!0},U=async e=>{c({title:E("Mail.Forward.index_8"),content:E("Mail.Forward.index_9"),onConfirm:async()=>{await _({user:e.address}),$()}})},$=async()=>{try{B.loading=!0;const{message:e}=await y();B.data=a(e)?e:[]}finally{B.loading=!1}},D=()=>{P.p=1,$()};return $(),(e,t)=>{const a=w,l=o,s=n,d=i,r=g;return f(),j(r,{class:"p-16px"},{default:b((()=>[v(s,null,{toolsLeft:b((()=>[v(a,{type:"primary",onClick:z},{default:b((()=>[k(M(e.$t("Mail.Forward.index_1")),1)])),_:1})])),toolsRight:b((()=>[v(a,{onClick:D},{default:b((()=>[k(M(e.$t("Public.Btn.Refresh")),1)])),_:1})])),table:b((()=>[v(l,{loading:F(B).loading,data:F(B).data,columns:F(V)},null,8,["loading","data","columns"])])),_:1}),v(d,{show:F(R).show,"onUpdate:show":t[0]||(t[0]=e=>F(R).show=e),title:F(R).title,data:F(R).data,width:480,"min-height":236,footer:!0,component:F(m)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
