System.register(["./page_layout-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy10.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy11.js?v=1732601582185","./public-legacy.js?v=1732601582185","./planned-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./index-legacy96.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy5.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./utils-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./index-legacy97.js?v=1732601582185","./compiler-legacy.js?v=1732601582185"],(function(e,a){"use strict";var l,t,n,d,o,i,s,u,r,p,c,b,_,v,y,m,x,h,w,g,f,C,k,P,$,U,N,S,j,T,L,B,I,q,E,A,H,R,O,W,z,D,J,V,K,M,F,G,Q,X,Y,Z,ee,ae,le,te,ne,de,oe,ie,se,ue,re,pe,ce,be,_e,ve,ye,me,xe,he,we,ge,fe,Ce,ke,Pe,$e,Ue,Ne,Se,je;return{setters:[e=>{l=e.i,t=e.j,n=e.c,d=e.I,o=e.a9,i=e.k,s=e.m},e=>{u=e._},e=>{r=e._},e=>{p=e._},e=>{c=e._},e=>{b=e._},e=>{_=e.a,v=e._,y=e.u,m=e.b,x=e.h,h=e.d,w=e.f},e=>{g=e.s,f=e.g,C=e.e,k=e.a,P=e.b,$=e.d,U=e.c,N=e.f},e=>{S=e.M,j=e.r,T=e.c,L=e.a6,B=e.d,I=e.W,q=e.aa,E=e.O,A=e.P,H=e.Y,R=e.Z,O=e.R,W=e.ac,z=e.j,D=e.w,J=e.Q,V=e.X,K=e.ao,M=e.ak},e=>{F=e.bh,G=e._,Q=e.aa,X=e.bL,Y=e.bG,Z=e.ad,ee=e.bl,ae=e.bM,le=e.bN,te=e.bJ},e=>{ne=e._},e=>{de=e._},e=>{oe=e._},e=>{ie=e._},e=>{se=e.t,ue=e.r,re=e.u,pe=e.a,ce=e.w,be=e.b,_e=e.c,ve=e.d,ye=e.m,me=e.e,xe=e.s,he=e.f,we=e.g,ge=e.h,fe=e.p,Ce=e.i,ke=e.o,Pe=e.j,$e=e.k,Ue=e.l,Ne=e.n,Se=e.q,je=e.v},null,null,null,null,null],execute:function(){var Te=document.createElement("style");Te.textContent=".second[data-v-5a1fbeef] .n-form-item-feedback--error{position:absolute}\n",document.head.appendChild(Te);const{t:Le}=l.global,Be=e=>S(v,{onClick:a=>{const l=j(!1);_({title:Le("Crontab.Planned.index_7"),content:()=>S("div",null,[1==e.row.status?S("div",null,[S("span",null,[Le("Crontab.Planned.index_79")]),S(F,{class:"items-center mt-8px"},{default:()=>[S(G,{checked:l.value,"on-update:checked":e=>{l.value=e}},null),Le("Crontab.Planned.index_80")]})]):"",0==e.row.status?S("div",null,[Le("Crontab.Planned.index_81")]):""]),onConfirm:async()=>{await g({id:e.row.id,if_stop:l.value}),e.row.status=a}})},value:e.row.status.toString()},null),Ie=e=>{const{row:l}=e;return S("div",null,["logs"==l.sType?S("span",null,[l.save]):"","logs"!==l.sType?S("div",null,[l.save?"":S("span",null,[T("--")]),l.save>0?S(t,{type:l.save>0?"primary":"warning",onClick:()=>{y({title:`${Le("Crontab.Script.index_35")} [${l.name}]`,width:720,minHeight:200,data:{row:l},component:L((()=>n((()=>a.import("./index-legacy104.js?v=1732601582185")),void 0)))})}},{default:()=>[l.save]}):""]):""])},qe={class:"w-160px"},Ee=B({__name:"index",props:{value:{default:null}},setup(e){const{t:l}=I(),t=L((()=>n((()=>a.import("./set-legacy.js?v=1732601582185")),void 0))),o=q(e,"value"),{loading:i,setLoading:s}=m(),r=j([]),p=x(l("Crontab.Planned.index_29"),{setOptions:(e,a)=>{a===o.value&&(o.value="-1"),r.value=e.map((e=>({label:e.name,value:e.id}))),b()}}),c=()=>{p.show=!0},b=()=>{r.value.unshift({label:l("Site.PHP.index_45"),value:""},{label:l("Crontab.Planned.index_82"),value:"-1"},{label:l("Crontab.Planned.index_83"),value:"0"})};return b(),(async()=>{try{s(!0);const{message:e}=await f();d(e)?r.value=e.map((e=>({label:e.name,value:e.id}))):r.value=[],b()}finally{s(!1)}})(),(e,a)=>{const l=Q,n=X,d=u;return E(),A("div",qe,[S(n,{value:O(o),"onUpdate:value":a[0]||(a[0]=e=>W(o)?o.value=e:null),loading:O(i),options:O(r)},{action:H((()=>[S(l,{block:"",onClick:c},{default:H((()=>[T(R(e.$t("Site.PHP.index_43")),1)])),_:1})])),_:1},8,["value","loading","options"]),S(d,{show:O(p).show,"onUpdate:show":a[1]||(a[1]=e=>O(p).show=e),width:350,title:O(p).title,data:O(p).data,component:O(t)},null,8,["show","title","data","component"])])}}}),{t:Ae}=l.global,He={name:{required:!0,trigger:["blur","input"],message:Ae("Crontab.Planned.index_49")},sName:{required:!0,trigger:["blur","input"],message:Ae("Security.Conf.Index_28")},day:{trigger:["blur","input"],validator:(e,a)=>!(a>=32||a<1||""==a)||new Error(`${Ae("Site.Placeholder.Index_10")} 1-31`)},hour:{trigger:["blur","input"],validator:(e,a)=>!(a>=24||a<0||null==a)||new Error(`${Ae("Site.Placeholder.Index_10")} 0-23`)},second:{required:!0,trigger:["blur","input"],validator:(e,a)=>!(a>=60||a<1||""==a)||new Error(`${Ae("Site.Placeholder.Index_10")} 1-59`)},sBody:{required:!0,trigger:["blur","input"],message:Ae("Crontab.Planned.index_50")},save:{trigger:["blur","input"],validator:(e,a)=>!(a<=0||""==a)||new Error(Ae("Crontab.Planned.index_51"))},url:{required:!0,trigger:["blur","input"],message:Ae("Crontab.Planned.index_53")},splitValue:{trigger:["blur","input"],required:!0,type:"number",message:Ae("Site.Placeholder.Index_10")}},Re={class:"p-20px"},Oe={class:"w-250px"},We={class:"w-350px"},ze={class:"mt-8px"},De={class:"w-250px"},Je={class:"w-550px"},Ve={key:2},Ke={key:0,class:"ml-126px mb-8px mt--10px"},Me={key:0},Fe={class:"mr-10px"},Ge={class:"mr-10px text-nowrap"},Qe={key:1},Xe={class:"ml-8px color-#ef0808"},Ye=B({__name:"index",props:{data:{}},setup(e,{expose:a}){const l=e,{getList:t,isEdit:n,row:d}=l.data,{t:i}=I(),s=j(null),u=z({type:"toShell",name:"",get newName(){return`${r.value}${r.value?p.value?p.value:"[ALL]":""}${"database"!=this.type||n?"":`--${this.databaseType}`}`},time:"day",day:1,week:"1",hour:1,minute:30,second:5,user:"root",sBody:"",reminder:"0",message:"ALL",sName:"ALL",backupTo:"localhost",save:3,databaseType:"mysql",zip:"",url:"http://",agent:"",dbBackupPath:"/www/backup",id:0,region:"Asia",splitType:"",splitValue:3,backup:!0}),r=j(""),p=j(""),c=(e,a)=>{p.value=`[${a.label}]`},b=e=>{p.value=`[${e}]`},_=e=>{p.value=`[${e}]`},v=e=>{u.region=$e(e),u.sName=e,p.value=`[${$e(e)} / ${e}]`},y={...He,minute:{required:!0,trigger:["blur","input"],validator:(e,a)=>a>=60||a<0||null==a?new Error(`${i("Site.Placeholder.Index_10")} 0-59`):"hour-n"!=u.time||0!=a||0!=u.hour||new Error(i("Crontab.Script.index_60"))}},m=async()=>{await Ue(u.databaseType),u.sName="ALL",p.value=""},x=e=>{u.sName="sync_time"===e?"Aqtau":"path"===e?"/www/wwwroot":"ALL",u.url="webshell"===e?"ALL":"http://",u.save="logs"===e?180:3,u.time="day",Ne(e);const a=se.find((a=>a.value===e));r.value=a&&"toShell"!==u.type?a.label:"",p.value={path:"[/www/wwwroot]",toUrl:"[http://]",sync_time:"[Asia / Aqtau]",rememory:" "}[u.type]||""};return D((()=>u.newName),(e=>u.name=e)),a({onConfirm:async({hide:e})=>{await(s.value?.validate()),n?await C(M(Se(u))):await k(M(Se(u))),t?.(),e()}}),(async()=>{await Ne(n?d.sType:"toShell"),n&&d&&(u.type=d.sType,u.name=d.name,u.time=d.type,u.day=Number(d.where1),u.week=d.where1,u.hour=d.where_hour,u.minute=d.where_minute?d.where_minute:Number(d.where1),u.second=Number(d.second),u.user=d.user,u.sBody=d.sBody,u.reminder=d.notice.toString(),u.message=d.notice_channel,u.sName=d.sName,u.backupTo=je(d.backupTo),u.databaseType=d.db_type,u.save=Number(d.save),u.url=d.urladdress,u.agent=d.user_agent,u.dbBackupPath=d.db_backup_path,u.id=d.id,u.splitType=d.split_type,u.splitValue=Number(d.split_value),u.backup=!!d.save_local)})(),(e,a)=>{const l=X,t=Y,d=Z,i=ee,r=ae,p=le,h=F,w=ie,g=oe,f=G,C=o,k=Q,P=de,$=ne;return E(),A("div",Re,[S(P,{ref_key:"formRef",ref:s,model:O(u),rules:y},{default:H((()=>[S(t,{label:e.$t("Crontab.Planned.index_60")},{default:H((()=>[J("div",Oe,[S(l,{value:O(u).type,"onUpdate:value":[a[0]||(a[0]=e=>O(u).type=e),x],options:O(se),disabled:O(n),"render-label":O(ue)},null,8,["value","options","disabled","render-label"])])])),_:1},8,["label"]),S(t,{label:e.$t("Crontab.Planned.index_61"),path:"name"},{default:H((()=>[J("div",We,[S(d,{value:O(u).name,"onUpdate:value":a[1]||(a[1]=e=>O(u).name=e),"input-props":{name:"name"},disabled:O(re)(O(u).type),placeholder:e.$t("Crontab.Planned.index_49")},null,8,["value","disabled","placeholder"])])])),_:1},8,["label"]),S(h,null,{default:H((()=>[S(t,{label:e.$t("Crontab.Planned.index_9")},{default:H((()=>[S(l,{class:"w-105px!",value:O(u).time,"onUpdate:value":a[2]||(a[2]=e=>O(u).time=e),options:O(pe)},null,8,["value","options"])])),_:1},8,["label"]),"day-n"==O(u).time||"month"==O(u).time?(E(),V(t,{key:0,path:"day"},{default:H((()=>[S(p,{class:"w-100px!"},{default:H((()=>[S(i,{value:O(u).day,"onUpdate:value":a[3]||(a[3]=e=>O(u).day=e),"show-button":!1,placeholder:""},null,8,["value"]),S(r,null,{default:H((()=>[T(R(e.$t("Crontab.arrange.index_41")),1)])),_:1})])),_:1})])),_:1})):K("",!0),"week"==O(u).time?(E(),V(t,{key:1,path:"week"},{default:H((()=>[S(l,{class:"w-100px!",value:O(u).week,"onUpdate:value":a[4]||(a[4]=e=>O(u).week=e),options:O(ce)},null,8,["value","options"])])),_:1})):K("",!0),"hour"!==O(u).time&&"minute-n"!==O(u).time&&"second-n"!==O(u).time?(E(),V(t,{key:2,path:"hour"},{default:H((()=>[S(p,null,{default:H((()=>[S(i,{value:O(u).hour,"onUpdate:value":a[5]||(a[5]=e=>O(u).hour=e),class:"w-50px","show-button":!1,placeholder:"","input-props":{name:"hour"}},null,8,["value"]),S(r,null,{default:H((()=>[T(R(e.$t("Crontab.arrange.index_43")),1)])),_:1})])),_:1})])),_:1})):K("",!0),"second-n"!==O(u).time?(E(),V(t,{key:3,path:"minute",class:"second"},{default:H((()=>[S(p,null,{default:H((()=>[S(i,{value:O(u).minute,"onUpdate:value":a[6]||(a[6]=e=>O(u).minute=e),class:"w-50px","show-button":!1,placeholder:"","input-props":{name:"minute"}},null,8,["value"]),S(r,null,{default:H((()=>[T(R(e.$t("Crontab.arrange.index_44")),1)])),_:1})])),_:1})])),_:1})):K("",!0),"second-n"==O(u).time?(E(),V(t,{key:4,path:"second"},{default:H((()=>[S(p,null,{default:H((()=>[S(i,{value:O(u).second,"onUpdate:value":a[7]||(a[7]=e=>O(u).second=e),class:"w-50px","show-button":!1,placeholder:"","input-props":{name:"second"}},null,8,["value"]),S(r,null,{default:H((()=>[T(R(e.$t("Waf.Setting.config_53")),1)])),_:1})])),_:1})])),_:1})):K("",!0),J("span",ze,R(O(be)(O(u))),1)])),_:1}),"toShell"==O(u).type?(E(),V(t,{key:0,label:e.$t("Crontab.Planned.index_62")},{default:H((()=>[J("div",De,[S(l,{value:O(u).user,"onUpdate:value":a[8]||(a[8]=e=>O(u).user=e),options:O(_e)},null,8,["value","options"])])])),_:1},8,["label"])):K("",!0),"toShell"==O(u).type?(E(),V(t,{key:1,label:e.$t("Crontab.Planned.index_63"),path:"sBody"},{default:H((()=>[J("div",Je,[S(w,{value:O(u).sBody,"onUpdate:value":a[9]||(a[9]=e=>O(u).sBody=e),rows:8,name:"sBody",placeholder:e.$t("Crontab.Planned.index_50")},null,8,["value","placeholder"])])])),_:1},8,["label"])):K("",!0),"site"==O(u).type||"database"==O(u).type||"enterpriseBackup"==O(u).type||"path"==O(u).type?(E(),A("div",Ve,[S(h,null,{default:H((()=>[S(t,{label:e.$t("Crontab.Planned.index_64")},{default:H((()=>[S(l,{class:"w-200px!",value:O(u).reminder,"onUpdate:value":a[10]||(a[10]=e=>O(u).reminder=e),options:O(ve)},null,8,["value","options"])])),_:1},8,["label"]),"1"==O(u).reminder?(E(),V(t,{key:0,label:e.$t("Crontab.Planned.index_65")},{default:H((()=>[S(l,{class:"w-200px!",value:O(u).message,"onUpdate:value":a[11]||(a[11]=e=>O(u).message=e),options:O(ye),"render-label":O(me)},null,8,["value","options","render-label"])])),_:1},8,["label"])):K("",!0)])),_:1}),"1"==O(u).reminder?(E(),A("div",Ke,R(e.$t("Crontab.Planned.index_66")),1)):K("",!0),S(h,null,{default:H((()=>["path"==O(u).type?(E(),V(t,{key:0,label:e.$t("Crontab.Planned.index_67"),path:"sName"},{default:H((()=>[S(g,{value:O(u).sName,"onUpdate:value":a[12]||(a[12]=e=>O(u).sName=e),disabled:O(n),onChange:b},null,8,["value","disabled"])])),_:1},8,["label"])):K("",!0),"path"!==O(u).type?(E(),V(t,{key:1,label:"site"==O(u).type?e.$t("Crontab.Planned.index_68"):e.$t("Crontab.Planned.index_69")},{default:H((()=>[S(h,null,{default:H((()=>["site"==O(u).type?(E(),V(l,{key:0,class:"w-200px!",value:O(u).sName,"onUpdate:value":[a[13]||(a[13]=e=>O(u).sName=e),c],disabled:O(n),filterable:"",options:O(xe)},null,8,["value","disabled","options"])):K("",!0),"database"==O(u).type?(E(),V(l,{key:1,class:"w-120px!",value:O(u).databaseType,"onUpdate:value":[a[14]||(a[14]=e=>O(u).databaseType=e),m],disabled:O(n),options:O(he)},null,8,["value","disabled","options"])):K("",!0),"database"==O(u).type||"enterpriseBackup"==O(u).type?(E(),V(h,{key:2,class:"items-center"},{default:H((()=>["database"==O(u).type?(E(),A("div",Me,R(e.$t("Site.PHP.add_site_16")),1)):K("",!0),S(l,{class:"w-140px!",value:O(u).sName,"onUpdate:value":[a[15]||(a[15]=e=>O(u).sName=e),c],filterable:"",options:O(we),disabled:O(n)},null,8,["value","options","disabled"])])),_:1})):K("",!0)])),_:1})])),_:1},8,["label"])):K("",!0),S(t,null,{default:H((()=>[J("span",Fe,R(e.$t("Crontab.Planned.index_11")),1),S(l,{class:"w-150px!",value:O(u).backupTo,"onUpdate:value":a[16]||(a[16]=e=>O(u).backupTo=e),options:O(ge)},null,8,["value","options"])])),_:1}),S(t,{path:"save"},{default:H((()=>[J("span",Ge,R(e.$t("Docker.Container.log.index_18")),1),S(p,null,{default:H((()=>[S(i,{class:"w-50px!",value:O(u).save,"onUpdate:value":a[17]||(a[17]=e=>O(u).save=e),"show-button":!1,placeholder:""},null,8,["value"]),S(r,null,{default:H((()=>[T(R(e.$t("Crontab.Planned.index_94")),1)])),_:1})])),_:1})])),_:1})])),_:1}),"localhost"!==O(u).backupTo?(E(),A("div",Qe,[S(t,{label:e.$t("Crontab.Script.index_55")},{default:H((()=>[S(f,{checked:O(u).backup,"onUpdate:checked":a[18]||(a[18]=e=>O(u).backup=e)},{default:H((()=>[T(R(e.$t("Crontab.Script.index_56")),1)])),_:1},8,["checked"])])),_:1},8,["label"])])):K("",!0)])):K("",!0),"site"==O(u).type||"path"==O(u).type?(E(),V(t,{key:3,label:e.$t("Crontab.Planned.index_70"),path:"rules"},{default:H((()=>[S(d,{class:"w-550px!",autosize:{minRows:8},value:O(u).sBody,"onUpdate:value":a[19]||(a[19]=e=>O(u).sBody=e),type:"textarea",placeholder:O(fe)},null,8,["value","placeholder"])])),_:1},8,["label"])):K("",!0),"enterpriseBackup"==O(u).type?(E(),V(t,{key:4,label:e.$t("Crontab.Planned.index_71")},{default:H((()=>[S(d,{class:"w-250px!",value:O(u).zip,"onUpdate:value":a[20]||(a[20]=e=>O(u).zip=e),type:"text",placeholder:e.$t("Crontab.Planned.index_72")},null,8,["value","placeholder"]),J("span",Xe," *"+R(e.$t("Crontab.Planned.index_73")),1)])),_:1},8,["label"])):K("",!0),"logs"==O(u).type?(E(),V(h,{key:5},{default:H((()=>[S(t,{label:e.$t("Crontab.Planned.index_74")},{default:H((()=>[S(l,{class:"w-150px!",value:O(u).sName,"onUpdate:value":[a[21]||(a[21]=e=>O(u).sName=e),c],options:O(xe),disabled:O(n)},null,8,["value","options","disabled"])])),_:1},8,["label"]),S(t,{path:"save"},{default:H((()=>[S(p,null,{default:H((()=>[S(i,{class:"w-50px!",value:O(u).save,"onUpdate:value":a[22]||(a[22]=e=>O(u).save=e),"show-button":!1,placeholder:""},null,8,["value"]),S(r,null,{default:H((()=>[T(R(e.$t("Crontab.Planned.index_94")),1)])),_:1})])),_:1})])),_:1})])),_:1})):K("",!0),"webshell"==O(u).type?(E(),V(t,{key:6,label:e.$t("Home.index_68")},{default:H((()=>[S(l,{class:"w-150px!",value:O(u).sName,"onUpdate:value":[a[23]||(a[23]=e=>O(u).sName=e),c],options:O(xe),disabled:O(n)},null,8,["value","options","disabled"])])),_:1},8,["label"])):K("",!0),"webshell"==O(u).type?(E(),V(t,{key:7,label:e.$t("Crontab.Planned.index_65")},{default:H((()=>[S(l,{class:"w-200px!",value:O(u).url,"onUpdate:value":a[24]||(a[24]=e=>O(u).url=e),options:O(ye),"render-label":O(me)},null,8,["value","options","render-label"])])),_:1},8,["label"])):K("",!0),"sync_time"==O(u).type?(E(),V(t,{key:8,label:e.$t("Crontab.Planned.index_75")},{default:H((()=>[S(C,{class:"w-300px!",value:O(u).sName,"onUpdate:value":a[25]||(a[25]=e=>O(u).sName=e),options:O(Ce),"on-update:value":v,"check-strategy":"child"},null,8,["value","options"])])),_:1},8,["label"])):K("",!0),"toUrl"==O(u).type?(E(),V(h,{key:9},{default:H((()=>[S(t,{label:e.$t("Site.Proxy.index_11"),path:"url"},{default:H((()=>[S(d,{class:"w-350px!",value:O(u).url,"onUpdate:value":a[26]||(a[26]=e=>O(u).url=e),placeholder:"",onInput:_},null,8,["value"])])),_:1},8,["label"]),S(t,{path:"url"},{default:H((()=>[S(k,{onClick:a[27]||(a[27]=e=>O(ke)(O(u).url))},{default:H((()=>[T(R(e.$t("Crontab.Planned.index_84")),1)])),_:1})])),_:1})])),_:1})):K("",!0),"toUrl"==O(u).type?(E(),V(t,{key:10,label:e.$t("Crontab.Planned.index_76")},{default:H((()=>[S(d,{class:"w-350px!",type:"textarea",value:O(u).agent,"onUpdate:value":a[28]||(a[28]=e=>O(u).agent=e),placeholder:e.$t("Crontab.Planned.index_77")},null,8,["value","placeholder"])])),_:1},8,["label"])):K("",!0)])),_:1},8,["model"]),O(Pe)(O(u).type)?(E(),V($,{key:0},{default:H((()=>[J("li",null,R(O(Pe)(O(u).type)),1)])),_:1})):K("",!0)])}}}),Ze=i(Ye,[["__scopeId","data-v-5a1fbeef"]]);e("default",B({__name:"index",setup(e){const l=L((()=>n((()=>a.import("./index-legacy105.js?v=1732601582185")),void 0))),{t:t}=I(),o=()=>{A.title=t("Crontab.Planned.index_4"),A.data.isEdit=!1,A.show=!0},i=e=>{D.title=t("Crontab.Planned.index_6",[e.name]),D.data.id=e.id,D.show=!0},{keys:v,table:g,columns:f}=h([{type:"selection",width:40},{key:"name",title:t("Site.TableRow.index_2"),minWidth:"20%",ellipsis:{tooltip:{width:"trigger"}}},{key:"status",title:t("Public.Table.Status"),minWidth:90,render:e=>S(Be,{row:e},null)},{key:"cycle",title:t("Crontab.Planned.index_9")},{key:"save",title:t("Crontab.Planned.index_10"),align:"center",minWidth:80,render:e=>S(Ie,{row:e},null)},{key:"backupTo",title:t("Crontab.Planned.index_11"),align:"center",render:e=>e.backupTo?e.backupTo:"--"},{key:"addtime",title:t("Crontab.Planned.index_12")},w({title:t("Public.Table.Operation"),width:240,options:e=>[{label:t("Docker.LocalImage.pull.index_12"),class:"execute-btn",onClick:()=>{_({title:t("Crontab.Planned.index_13"),content:t("Crontab.Planned.index_14",[e.name]),onConfirm:async()=>{await P({id:e.id}),q(),i(e)}})}},{label:t("Public.Btn.Edit"),class:"edit-btn",onClick:()=>{A.title=t("Crontab.arrange.index_37"),A.data.isEdit=!0,A.data.row=e,A.show=!0}},{label:t("Ftp.Table.index_15"),class:"logs-btn",onClick:()=>{i(e)}},{label:t("Public.Btn.Del"),class:"delete-btn",onClick:()=>{_({title:t("Crontab.arrange.index_3",[e.name]),content:t("Crontab.Planned.index_78",[e.name]),onConfirm:async()=>{await $({id:e.id}),q()}})}}]})]),C=[{key:"execute",type:"confirm",label:t("Crontab.Planned.index_20"),confirm:{title:t("Crontab.Planned.index_16",[t("Crontab.Planned.index_20")]),desc:t("Crontab.Planned.index_17",[t("Crontab.Planned.index_20")]),columns:[f.value[1]],api:e=>P({id:e.id},!1),done:()=>{q()}}},{key:"start",label:t("Crontab.Planned.index_15"),onBatch:()=>{_({title:t("Crontab.Planned.index_16",[t("Crontab.Planned.index_15")]),content:t("Crontab.Planned.index_17",[t("Crontab.Planned.index_15")]),onConfirm:async({hide:e})=>{try{await U({id_list:JSON.stringify(v.value),type:"start",if_stop:!1}),s.success(t("Security.Compiler.Index_4"))}catch(a){console.error(a)}q(),e()}})}},{key:"stop",label:t("Crontab.Planned.index_18"),onBatch:()=>{_({title:t("Crontab.Planned.index_16",[t("Crontab.Planned.index_18")]),content:t("Crontab.Planned.index_17",[t("Crontab.Planned.index_18")]),onConfirm:async({hide:e})=>{try{await U({id_list:JSON.stringify(v.value),type:"stop",if_stop:!1}),s.success(t("Security.Compiler.Index_4"))}catch(a){console.error(a)}q(),e()}})}},{key:"category",label:t("Crontab.Planned.index_19"),onBatch:e=>{y({title:t("Crontab.Planned.index_16",[t("Crontab.Planned.index_19")]),width:350,minHeight:72,footer:!0,data:{rows:e},component:L((()=>n((()=>a.import("./batch-legacy.js?v=1732601582185")),void 0)))})}},{key:"delete",type:"confirm",label:t("Crontab.Planned.index_22"),confirm:{title:t("Crontab.Planned.index_16",[t("Crontab.Planned.index_22")]),desc:t("Crontab.Planned.index_17",[t("Crontab.Planned.index_22")]),columns:[f.value[1]],api:e=>$({id:e.id},!1),done:()=>{q()}}}],k=z({search:"",type_id:"",order_param:""}),{loading:j,setLoading:B}=m(!0),q=async()=>{try{B(!0);const{message:e}=await N(M({...k}));d(e)?g.data=e:(g.data=[],g.total=0)}finally{v.value=[],B(!1)}};q();const A=x(t("Crontab.Planned.index_4"),{getList:q}),D=x("",{getList:q});return(e,a)=>{const n=Q,d=b,i=c,s=p,_=r,y=u,m=te;return E(),V(m,null,{default:H((()=>[S(_,{class:"p-16px",feedback:!0},{toolsLeft:H((()=>[S(n,{class:"add-task-btn",type:"primary",onClick:o},{default:H((()=>[T(R(O(t)("Crontab.Planned.index_4")),1)])),_:1})])),toolsRight:H((()=>[S(Ee,{value:O(k).type_id,"onUpdate:value":[a[0]||(a[0]=e=>O(k).type_id=e),q]},null,8,["value"]),S(d,{value:O(k).search,"onUpdate:value":a[1]||(a[1]=e=>O(k).search=e),placeholder:e.$t("Crontab.Planned.index_5"),onSearch:q},null,8,["value","placeholder"])])),table:H((()=>[S(i,{"checked-row-keys":O(v),"onUpdate:checkedRowKeys":a[2]||(a[2]=e=>W(v)?v.value=e:null),loading:O(j),data:O(g).data,columns:O(f)},null,8,["checked-row-keys","loading","data","columns"])])),pageLeft:H((()=>[S(s,{"checked-row-keys":O(v),"onUpdate:checkedRowKeys":a[3]||(a[3]=e=>W(v)?v.value=e:null),data:O(g).data,options:C},null,8,["checked-row-keys","data"])])),_:1}),S(y,{show:O(A).show,"onUpdate:show":a[4]||(a[4]=e=>O(A).show=e),title:O(A).title,data:O(A).data,width:950,footer:!0,component:Ze},null,8,["show","title","data"]),S(y,{show:O(D).show,"onUpdate:show":a[5]||(a[5]=e=>O(D).show=e),title:O(D).title,data:O(D).data,width:800,"min-height":550,footer:!1,component:O(l)},null,8,["show","title","data","component"])])),_:1})}}}))}}}));
