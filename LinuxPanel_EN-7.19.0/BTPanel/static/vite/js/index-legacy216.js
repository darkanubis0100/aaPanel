System.register(["./vue-legacy.js?v=1732601582185","./accountState-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./disk-legacy.js?v=1732601582185"],(function(a,t){"use strict";var e,i,c,n,l,o,r,s,_,u,m,d,g,k,p,h,y,b,f,v,S;return{setters:[a=>{e=a.a3,i=a.W,c=a.j,n=a.r,l=a.M,o=a.V},a=>{r=a.q,s=a.b,_=a.u},a=>{u=a.b,m=a.a,d=a.f},a=>{g=a.bS,k=a.f,p=a.m,h=a.bY,y=a.bZ,b=a.b_,f=a.h,v=a.S},a=>{S=a.u}],execute:function(){const t=a("b",e("packageStore",(()=>{const a=w(),{t:t}=i(),e=async()=>{try{n(!0);const{message:t}=await g(a.search);k(t)&&(a.table.data=t.list,a.table.total=t.page.count)}finally{n(!1)}},{loading:c,setLoading:n}=u();function l(){const{package_name:t,disk_space_quota:e,monthly_bandwidth_limit:i,max_site_limit:c,max_database:n,php_start_children:l,php_max_children:o,remark:r}=a.formData;return{package_name:t,disk_space_quota:e.unlimited?0:String(1024*Number(e.value)*1024),monthly_bandwidth_limit:i.unlimited?0:String(1024*Number(i.value)*1024),max_site_limit:c.unlimited?0:c.value,max_database:n.unlimited?0:n.value,max_email_account:0,php_start_children:l,php_max_children:o,remark:r}}return{init:e,loading:c,setLoading:n,removePackage:async a=>{m({title:t("Account.Package.package-988835-0",[a.package_name]),content:t("Account.Package.package-988835-1"),onConfirm:async()=>{1!==a.status?(await h({package_id:a.package_id}),e()):p.error(t("Account.Package.package-988835-2"))}})},create_package:async function(){a.isEdit=!1,a.addVisible=!0,a.formData_reset()},editPackage:async function(t){!function(t){const{package_name:e,disk_space_quota:i,monthly_bandwidth_limit:c,max_site_limit:n,max_database:l,php_start_children:o,php_max_children:r,remark:s}=t;a.formData.package_name=e,a.formData.disk_space_quota=0==i?{value:"",unlimited:!0}:{value:i/1024/1024,unlimited:!1},a.formData.monthly_bandwidth_limit=0==c?{value:"",unlimited:!0}:{value:c/1024/1024,unlimited:!1},a.formData.max_site_limit=0==n?{value:"",unlimited:!0}:{value:n,unlimited:!1},a.formData.max_database=0==l?{value:"",unlimited:!0}:{value:l,unlimited:!1},a.formData.php_start_children=o,a.formData.php_max_children=r,a.formData.remark=s}(t),a.current_account_id=t.package_id,a.isEdit=!0,a.addVisible=!0},packageInfoConfirm:async function(){try{await(a.packageFormRef?.validate()),a.isEdit?(await y({package_id:a.current_account_id,...l()}),a.formData_reset(),e()):(await b(l()),a.formData_reset(),e())}catch(t){return Promise.reject(t)}}}}))),w=a("u",e("packageStateStore",(()=>{const a=t(),{t:e}=i(),o=c({data:[],total:0,loading:!1}),_=n([{title:e("Account.Package.packageState-592272-0"),key:"package_name",width:150},{title:e("Account.Package.packageState-592272-1"),key:"php_start_children",width:80,render:a=>l("div",null,[0===a.max_site_limit?l("img",{class:"icon",title:"",src:r},null):a.max_site_limit])},{title:e("Account.Account.accountState-721844-3"),key:"disk_space_quota",render:a=>l("div",null,[0===a.disk_space_quota?l("img",{class:"icon",title:"",src:r},null):f(a.disk_space_quota,!0,0)])},{title:e("Account.Package.packageState-592272-2"),key:"monthly_bandwidth_limit",render:a=>l("div",null,[0===a.monthly_bandwidth_limit?l("img",{class:"icon",title:"",src:r},null):f(a.monthly_bandwidth_limit,!0,0)])},{title:e("Account.Account.accountState-721844-14"),key:"remark",render:a=>a.remark?a.remark:"--"},{title:e("Account.Package.packageState-592272-7"),key:"create_time",render:a=>v(a.create_time)},d({title:e("Public.Table.Action"),align:"right",width:200,options:t=>[{label:e("Account.Package.packageState-592272-8"),onClick:async()=>a.editPackage(t)},{label:e("Account.Package.packageState-592272-9"),onClick:async()=>{a.removePackage(t)}}]})]),u=n([]),m=c({p:1,rows:10,search_value:""}),g=n(!1),k=n(!1),[p,h]=s(),y=n(0),b=n(0),S=n(null),w=n();return{search:m,table:o,columns:_,keys:u,addVisible:g,formData:h,PackageInfoForm:()=>p,formData_reset:function(){h.package_name="",h.disk_space_quota={value:0,unlimited:!0},h.monthly_bandwidth_limit={value:0,unlimited:!0},h.max_site_limit={value:0,unlimited:!0},h.max_database={value:0,unlimited:!0},h.php_start_children=1,h.php_max_children=3,h.remark=""},packageFormRef:w,isEdit:k,disk_space_quota_cache:y,monthly_bandwidth_limit_cache:b,current_account_id:S}}))),x=a("c",e("logsStateStore",(()=>{const{t:a}=i(),t=c({data:[],total:0,loading:!1}),e=n([{title:a("Account.Logs.logsState-131428-0"),key:"log_type",width:150},{title:a("Account.Logs.logsState-131428-1"),key:"log_level",width:100},{title:a("Account.Logs.logsState-131428-2"),key:"status",width:100,render:t=>t.log_status?l("span",{class:"text-primary"},[a("Account.Logs.logsState-456809-0")]):l("span",{class:"text-error"},[a("Account.Logs.logsState-456809-1")])},{title:a("Account.Logs.logsState-131428-3"),key:"log_body",render:t=>l("div",{class:"flex"},[t.username?l("div",{class:"text-[#909399]"},[a("Account.Account.whm_account_533924-0")+" ["+t.username+"]--\x3e"]):"",l("div",null,[t.log_body])])},{key:"log_time",align:"right",title:a("Logs.Panel.index_7"),render:a=>v(a.log_time)}]),o=n([]);return{search:c({p:1,rows:10,search:""}),table:t,columns:e,keys:o}})));a("a",e("whmStore",(()=>{const a=_(),t=o(a),e=w(),i=o(e),c=S(),l=x(),r=o(l);return{install:n(!1),account:{...t},w_package:{...i},disk:{...c},logs:{...r}}})))}}}));
