System.register(["./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./upload-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./mail-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185"],(function(e,l){"use strict";var a,t,i,n,s,c,o,u,d,r,_,p,y,m,k,v,g,w,h,x,j,f,B,b,M,$,P,C,U,D,R,S,K,L,I;return{setters:[e=>{a=e._},e=>{t=e._},e=>{i=e._},e=>{n=e._},e=>{s=e.d,c=e.W,o=e.r,u=e.j,d=e.ak,r=e.O,_=e.X,p=e.Y,y=e.M,m=e.Q,k=e.R,v=e.ac,g=e.am,w=e.c,h=e.Z},e=>{x=e.I,j=e.m,f=e.f,B=e.be},e=>{b=e.o},e=>{M=e.d,$=e.f,P=e.a},e=>{C=e.p,U=e.q,D=e.r,R=e.t,S=e.u},e=>{K=e.bJ,L=e.ad,I=e.aa},null,null,null],execute:function(){const l={class:"w-340px"};e("default",s({__name:"index",setup(e){const{t:s}=c(),q=o(""),z=async()=>{""!==q.value.trim()?(await D({emails_to_add:q.value.split(",")}),Y(),q.value=""):j.error(s("Mail.Blacklist.index_2"))},A=()=>{b({path:"/www/server/panel/data/mail/",size:5,uploadData:{accept:["json"].map((e=>`.${e}`)).join(","),multiple:!1},onUploadSuccess:async e=>{await S({file:`/www/server/panel/data/mail/${e[0].name}`}),Y()}})},E=async()=>{const{message:e}=await R();f(e)&&B(e.result)},{keys:H,table:J,columns:O,setLoading:Q}=M([{type:"selection",width:40},{key:"email",title:s("Mail.Blacklist.index_3"),ellipsis:{tooltip:!0}},$({width:80,options:e=>[{label:s("Public.Btn.Del"),onClick:async()=>{P({title:s("Mail.Blacklist.index_4",[e.email]),content:s("Mail.Blacklist.index_5"),onConfirm:async()=>{await C({emails_to_remove:[e.email]}),Y()}})}}]})]),W=[{key:"del",type:"confirm",label:s("Public.Batch.Del"),confirm:{title:s("Public.Batch.Del"),desc:s("Site.Batch.index_11"),api:e=>C({emails_to_remove:[e.email]},!1),done:()=>{Y()},columns:[{key:"email",title:s("Mail.Blacklist.index_3"),ellipsis:{tooltip:{width:"trigger"}}}]}}],X=u({keyword:""}),Y=async()=>{try{Q(!0);const{message:e}=await U(d(X));x(e)&&(J.data=e.map((e=>({email:e}))))}finally{H.value=[],Q(!1)}};return Y(),(e,s)=>{const c=L,o=I,u=n,d=i,x=t,j=a,f=K;return r(),_(f,{class:"p-16px"},{default:p((()=>[y(j,null,{toolsLeft:p((()=>[m("div",l,[y(c,{value:k(q),"onUpdate:value":s[0]||(s[0]=e=>v(q)?q.value=e:null),placeholder:e.$t("Mail.Blacklist.index_1"),onKeyup:g(z,["enter"])},null,8,["value","placeholder"])]),y(o,{type:"primary",onClick:z},{default:p((()=>[w(h(e.$t("Public.Btn.Add")),1)])),_:1}),y(o,{onClick:A},{default:p((()=>[w(h(e.$t("Public.Btn.Import")),1)])),_:1}),y(o,{onClick:E},{default:p((()=>[w(h(e.$t("Public.Btn.Export")),1)])),_:1})])),toolsRight:p((()=>[y(u,{value:k(X).keyword,"onUpdate:value":s[1]||(s[1]=e=>k(X).keyword=e),width:240,placeholder:e.$t("Mail.Blacklist.index_2"),onSearch:Y},null,8,["value","placeholder"])])),table:p((()=>[y(d,{"checked-row-keys":k(H),"onUpdate:checkedRowKeys":s[2]||(s[2]=e=>v(H)?H.value=e:null),"row-key":"email",loading:k(J).loading,data:k(J).data,columns:k(O)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:p((()=>[y(x,{"checked-row-keys":k(H),"onUpdate:checkedRowKeys":s[3]||(s[3]=e=>v(H)?H.value=e:null),"row-key":"email",data:k(J).data,options:W},null,8,["checked-row-keys","data"])])),_:1})])),_:1})}}}))}}}));
