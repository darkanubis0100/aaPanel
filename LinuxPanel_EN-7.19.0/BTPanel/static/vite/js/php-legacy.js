System.register(["./page_layout-legacy.js?v=1732601582185"],(function(s,t){"use strict";var e,i;return{setters:[s=>{e=s.i,i=s.a8}],execute:function(){const{t:t}=e.global;s("g",(s=>i.post("/panel/public/get_soft_status",{...s}))),s("s",(s=>i.post("/system?action=ServiceAdmin",{...s},{requestOptions:{loading:t("WP.api.tamper_8"),successMessage:!0}}))),s("b",(()=>i.post("/plugin?action=a&name=security_notice&s=get_status",{},{requestOptions:{isOriginalResult:!0,prefix:""}}))),s("a",(s=>i.post("/plugin?action=a&name=security_notice&s="+(s?"start_site":"stop_site"),{requestOptions:{loading:t("WP.api.tamper_8"),successMessage:!0}})))}}}));
