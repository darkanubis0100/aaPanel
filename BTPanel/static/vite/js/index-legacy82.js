System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy2.js?v=1723125373998","./useTableData-legacy.js?v=1723125373998","./index-legacy.js?v=1723125373998","./useLoading-legacy.js?v=1723125373998","./useTableColumns-legacy.js?v=1723125373998","./vue-legacy.js?v=1723125373998","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1723125373998","./DataTable-legacy.js?v=1723125373998","./Checkbox-legacy.js?v=1723125373998","./Ellipsis-legacy.js?v=1723125373998","./Select-legacy.js?v=1723125373998","./Tag-legacy.js?v=1723125373998","./Empty-legacy.js?v=1723125373998","./omit-legacy.js?v=1723125373998","./data-legacy.js?v=1723125373998","./Skeleton-legacy.js?v=1723125373998","./pinia-legacy.js?v=1723125373998","./Progress-legacy.js?v=1723125373998","./Switch-legacy.js?v=1723125373998"],(function(e,a){"use strict";var l,t,i,n,s,u,c,o,d,g,p,r,y,m,_,j,f,b,h,k,w,v,x,C,D,z,R;return{setters:[e=>{l=e._},e=>{t=e._},e=>{i=e.u,n=e._},e=>{s=e.u,u=e.N,c=e.h,o=e.dG,d=e.cM,g=e.dH,p=e.dI,r=e.j,y=e.k,m=e.m,_=e.t,j=e.B},e=>{f=e.u},e=>{b=e.b},e=>{h=e.l,k=e.f,w=e.t,v=e.S,x=e.Z,C=e.P,D=e.V,z=e.q,R=e.W},null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const a={class:"p-20px"};e("default",h({__name:"index",props:{data:{}},setup(e){const h=e,{row:S}=h.data,T=s(),B=async()=>{await _(T.type,{id:S.id}),U(),T.setRefresh(!0)},L=k({p:1,limit:10,search:S.id}),{table:E,columns:F}=i([{key:"filename",title:"File name",ellipsis:{tooltip:{width:"trigger"}}},{key:"size",title:"File size",width:90,render:e=>u(e.size)},{key:"addtime",title:"Backup time",width:146},b({width:154,options:e=>[{label:"Repair",onClick:()=>{c({title:"Import Database",content:"Database will be overwritten, continue?",onConfirm:async({hide:a})=>{await o(T.type,{file:e.filename,name:S.name}),T.setRefresh(!0),a()}})}},{label:"Download",onClick:()=>{d(e.filename,e.name)}},{label:"Del",onClick:()=>{c({title:"Delete backup file",content:"Are you sure to delete backup file?",onConfirm:async({hide:a})=>{await g({id:e.id}),U(),T.setRefresh(!0),a()}})}}]})]),{loading:I,setLoading:P}=f(),U=async()=>{try{P(!0);const{message:e}=await p(w(L));r(e)?(E.data=y(e.data)?e.data:[],E.total=m(e.page)):(E.data=[],E.total=0),S.backup_count=E.total}finally{P(!1)}};return U(),(e,i)=>{const s=j,u=n,c=t,o=l;return v(),x("div",a,[C(o,null,{toolsLeft:D((()=>[C(s,{type:"primary",onClick:B},{default:D((()=>[z("Backup")])),_:1})])),table:D((()=>[C(u,{loading:R(I),"loading-num":6,data:R(E).data,columns:R(F)},null,8,["loading","data","columns"])])),pageRight:D((()=>[C(c,{page:R(L).p,"onUpdate:page":i[0]||(i[0]=e=>R(L).p=e),"page-size":R(L).limit,"onUpdate:pageSize":i[1]||(i[1]=e=>R(L).limit=e),"item-count":R(E).total,onRefresh:U},null,8,["page","page-size","item-count"])])),_:1})])}}}))}}}));