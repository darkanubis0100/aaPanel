System.register(["./index.vue_vue_type_script_setup_true_lang-legacy3.js?v=1732601582185","./public-legacy.js?v=1732601582185","./alarm-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy7.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./configStore-legacy.js?v=1732601582185","./open-legacy.js?v=1732601582185","./home-legacy.js?v=1732601582185","./global-legacy.js?v=1732601582185","./index-legacy96.js?v=1732601582185","./index-legacy99.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy9.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185"],(function(e,t){"use strict";var a,n,l,i,o,s,d,f,u,r,c,p,_,x,g,m,v,C,b,S,y,h,w,$,k,P,U,j,B,R,E,L,z,I,D,H,T,A,F,K,M,O,G,J,Q,W,X,Y,Z,q,N,V,ee,te,ae,ne,le,ie,oe,se,de,fe,ue,re,ce,pe,_e,xe,ge,me,ve,Ce,be,Se,ye,he,we,$e,ke,Pe,Ue,je,Be,Re,Ee,Le,ze,Ie,De,He,Te,Ae;return{setters:[e=>{a=e._,n=e.a,l=e.C},e=>{i=e.b,o=e.u,s=e.a,d=e.e,f=e.d,u=e.f},e=>{r=e.a,c=e.g,p=e.s,_=e.b},e=>{x=e._},e=>{g=e._},e=>{m=e.I,v=e.a0,C=e.a1,b=e._,S=e.f,y=e.E,h=e.a2,w=e.k,$=e.m,k=e.J,P=e.a3,U=e.D,j=e.S,B=e.a4},e=>{R=e.d,E=e.W,L=e.r,z=e.j,I=e.x,D=e.O,H=e.P,T=e.M,A=e.Y,F=e.R,K=e.Q,M=e.X,O=e.c,G=e.Z,J=e.ac,Q=e.ak,W=e.k,X=e.v,Y=e.a9,Z=e.F,q=e.an,N=e.e},e=>{V=e.bo,ee=e.bG,te=e.aa,ae=e._,ne=e.bO,le=e.ad,ie=e.bl,oe=e.bL,se=e.bP,de=e.bQ},e=>{fe=e.s,ue=e._,re=e.f,ce=e.h,pe=e.c},e=>{_e=e.O},e=>{xe=e.r},e=>{ge=e.r,me=e.t,ve=e.u,Ce=e.v,be=e.w,Se=e.x,ye=e.y,he=e.z,we=e.A,$e=e.B,ke=e.C,Pe=e.D,Ue=e.E,je=e.F,Be=e.G,Re=e.H,Ee=e.I,Le=e.J,ze=e.K},e=>{Ie=e._},e=>{De=e._},e=>{He=e._},e=>{Te=e._},e=>{Ae=e._}],execute:function(){var t=document.createElement("style");t.textContent=".bt-tips-ul[data-v-493fa0d9]{margin-top:24px;padding:24px 0;border-top:1px solid #ececec;font-size:14px}[data-v-919bcd3c] .n-input,[data-v-919bcd3c] .n-button,[data-v-919bcd3c] .n-select .n-base-selection{--n-height: 30px}[data-v-919bcd3c] .n-button.n-button--medium-type{min-width:52px}[data-v-919bcd3c] .n-switch{--n-height: max(20px, 16px)}\n",document.head.appendChild(t);const Fe={class:"p-20px pt-28px pb-8px"},Ke={class:"w-300px"},Me=R({__name:"set",props:{open:{type:Boolean,default:!1},taskList:{default:()=>[]}},emits:["refresh"],setup(e,{expose:t,emit:a}){const n=e,l=a,{t:o}=E(),s=L(null),d=z({status:!0,method:[]}),f={method:{trigger:["change"],validator:()=>0!==d.method.length||new Error(o("Config.Safe.index_7"))}},u=I([]),{loading:p,setLoading:_}=i();return(()=>{const{open:e,taskList:t}=n;t.length>0&&(d.status=e||t[0].status,d.method=t[0].sender)})(),(async()=>{try{_(!0);const{message:e}=await c();u.value=m(e)?e:[]}finally{_(!1)}})(),t({onConfirm:async()=>{await(s.value?.validate()),await r((()=>{const e=u.value.filter((e=>"panel_safe_push"===e.source))[0];return{template_id:e.id,task_data:{task_data:{tid:e.id,type:e.source,title:e.title,status:d.status,count:0,interval:600,project:"",help:600},sender:d.method,number_rule:{day_num:0,total:0},time_rule:{send_interval:0,time_range:[0,86399]}}}})()),l("refresh")}}),(e,t)=>{const a=V,n=ee,l=g,i=x,o=v;return D(),H("div",Fe,[T(o,{show:F(p)},{default:A((()=>[T(i,{ref_key:"formRef",ref:s,model:F(d),rules:f},{default:A((()=>[T(n,{label:e.$t("Config.Safe.index_5")},{default:A((()=>[T(a,{value:F(d).status,"onUpdate:value":t[0]||(t[0]=e=>F(d).status=e)},null,8,["value"])])),_:1},8,["label"]),T(n,{label:e.$t("Config.Safe.index_6"),path:"method"},{default:A((()=>[K("div",Ke,[T(l,{value:F(d).method,"onUpdate:value":t[1]||(t[1]=e=>F(d).method=e)},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])),_:1},8,["show"])])}}}),Oe=R({__name:"index",setup(e){const{t:t}=E(),n=L(!1),l=L([]),s=async e=>{e?d(!0):(await p({task_id:l.value[0].id,status:0}),n.value=!1,l.value[0].status=!1)},d=(e=!1)=>{o({title:t("Config.Safe.index_4"),width:480,footer:!0,confirmText:t("Public.Btn.Save"),data:{open:e,taskList:l.value,onRefresh:r},component:Me})},{loading:f,setLoading:u}=i(),r=async()=>{try{u(!0);const{message:e}=await _();if(m(e)){const t=e.filter((e=>"panel_safe_push"===e.keyword));t&&t.length>0?(n.value=t[0].status,l.value=t):(n.value=!1,l.value=[])}}finally{u(!1)}};return r(),(e,t)=>{const l=V,i=te,o=a;return D(),M(o,{label:e.$t("Config.Safe.index_2")},{content:A((()=>[T(l,{loading:F(f),value:F(n),"onUpdate:value":s},null,8,["loading","value"]),T(i,{class:"ml-12px h-22px px-5px",size:"small",onClick:t[0]||(t[0]=e=>d())},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_3")),1)])),_:1},8,["label"])}}}),Ge={class:"flex p-20px"},Je={class:"min-w-32px"},Qe={class:"flex-1 ml-10px text-14px leading-22px"},We={class:"flex items-center min-h-30px mb-12px text-error"},Xe=R({__name:"close",emits:["setConfirm"],setup(e,{expose:t,emit:a}){const n=a,{t:l}=E(),i=C(),o=L(!1),s=()=>{d>0||n("setConfirm",{disabled:!o.value})};let d=5;return(()=>{n("setConfirm",{text:l("Config.Safe.index_16",[d]),disabled:!0});const e=setInterval((()=>{d--,n("setConfirm",{text:l("Config.Safe.index_16",[d])}),d<=0&&(clearInterval(e),n("setConfirm",{text:l("Config.Safe.index_17"),disabled:!o.value}))}),1e3)})(),t({onConfirm:async()=>(await ge(),await xe(),setTimeout((()=>{{const e="http:"===location.protocol?"https":"http";window.location.href=`${e}://${window.location.host}${fe.value.adminPath}`}}),1500),!1)}),(e,t)=>{const a=b,n=ae;return D(),H("div",Ge,[K("div",Je,[T(a,{name:"base-warning",color:F(i).warningColor,size:"32"},null,8,["color"])]),K("div",Qe,[K("div",We,G(e.$t("Config.Safe.index_14")),1),T(n,{checked:F(o),"onUpdate:checked":[t[0]||(t[0]=e=>J(o)?o.value=e:null),s]},{default:A((()=>[O(G(e.$t("Config.Safe.index_15")),1)])),_:1},8,["checked"])])])}}}),Ye={class:"p-20px"},Ze={class:"flex flex-wrap py-2px text-primary text-12px"},qe={class:"mr-24px"},Ne={class:"mr-24px"},Ve={class:"flex gap-20px mt-16px"},et={class:"flex-1"},tt={class:"mb-8px"},at={class:"flex-1"},nt={class:"mb-8px"},lt={class:"mt-10px"},it={class:"bt-link",href:"http://www.bt.cn/bbs/thread-704-1-1.html",target:"_blank"},ot=R({__name:"set",setup(e){const t=L(""),a=L(""),n=z({subject:"--",issuer:"--",notBefore:"--",notAfter:"--"}),l=async()=>{await me({privateKey:t.value,certPem:a.value},!0),i()},i=async()=>{const{message:e}=await ve();S(e)&&(t.value=e.privateKey||"",a.value=e.certPem||"",n.subject=e.info.subject||"",n.issuer=e.info.issuer||"",n.notBefore=e.info.notBefore||"",n.notAfter=e.info.notAfter||"")};return i(),(e,i)=>{const o=ne,s=De,d=te,f=Ie;return D(),H("div",Ye,[T(o,{type:"success","show-icon":!1},{default:A((()=>[K("div",Ze,[K("div",qe,[O(G(e.$t("Config.Safe.index_37")),1),K("b",null,G(F(n).subject),1)]),K("div",Ne,[O(G(e.$t("Config.Safe.index_38")),1),K("b",null,G(F(n).issuer),1)]),K("div",null,[O(G(e.$t("Config.Safe.index_39")),1),K("b",null,G(F(n).notAfter),1)])])])),_:1}),K("div",Ve,[K("div",et,[K("div",tt,G(e.$t("Config.Safe.index_27")),1),T(s,{value:F(t),"onUpdate:value":i[0]||(i[0]=e=>J(t)?t.value=e:null),rows:14,placeholder:""},null,8,["value"])]),K("div",at,[K("div",nt,G(e.$t("Config.Safe.index_28")),1),T(s,{value:F(a),"onUpdate:value":i[1]||(i[1]=e=>J(a)?a.value=e:null),rows:14,placeholder:""},null,8,["value"])])]),K("div",lt,[T(d,{type:"primary",onClick:l},{default:A((()=>[O(G(e.$t("Public.Btn.Save")),1)])),_:1})]),T(f,{class:"mt-12px"},{default:A((()=>[K("li",null,[O(G(e.$t("Config.Safe.index_40"))+" ",1),K("a",it," ["+G(e.$t("Public.Btn.Help"))+"] ",1)]),K("li",null,G(e.$t("Config.Safe.index_42")),1),K("li",null,G(e.$t("Config.Safe.index_43")),1)])),_:1})])}}}),st={class:"bt-link",href:"https://forum.aapanel.com/d/15210-aapanel-enable-panel-ssl-use-self-signed-certificate-browser-add-secure",target:"_blank"},dt=R({__name:"index",setup(e){const{t:t}=E(),n=e=>{e?l():i()},l=()=>{o({title:t("Config.Safe.index_11"),width:600,footer:!0,component:_e})},i=()=>{o({title:t("Config.Safe.index_12"),width:400,footer:!0,confirmType:"error",component:Xe})},s=()=>{o({title:t("Config.Safe.index_13"),width:740,component:ot})};return(e,t)=>{const l=V,i=te,o=a;return D(),M(o,{label:e.$t("Config.Safe.index_8")},{content:A((()=>[T(l,{value:F(fe).panelSSL,"onUpdate:value":n},null,8,["value"]),T(i,{class:"ml-12px h-22px px-5px",size:"small",onClick:s},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_9")),1),K("a",st,G(e.$t("Public.Btn.Help")),1)])),_:1},8,["label"])}}}),ft={class:"p-20px"},ut={class:"w-280px"},rt={class:"w-280px"},ct={class:"text-error"},pt=R({__name:"config",setup(e){const{t:t}=E(),a=L(null),n=z({open:"True",basic_user:"",basic_pwd:""}),l={basic_user:{trigger:["blur","input"],validator:()=>"True"!==n.open||""!==n.basic_user.trim()||new Error(t("Config.Safe.index_56"))},basic_pwd:{trigger:["blur","input"],validator:()=>"True"!==n.open||""!==n.basic_pwd.trim()||new Error(t("Config.Safe.index_58"))}},i=async()=>{await(a.value?.validate()),await Ce(Q(n)),y()};return(e,t)=>{const o=V,s=ee,d=le,f=te,u=x,r=Ie;return D(),H("div",ft,[T(u,{ref_key:"formRef",ref:a,model:F(n),rules:l},{default:A((()=>[T(s,{label:e.$t("Config.Safe.index_54")},{default:A((()=>[T(o,{value:F(n).open,"onUpdate:value":t[0]||(t[0]=e=>F(n).open=e),"checked-value":"True","unchecked-value":"False"},null,8,["value"])])),_:1},8,["label"]),T(s,{label:e.$t("Config.Safe.index_55"),path:"basic_user"},{default:A((()=>[K("div",ut,[T(d,{value:F(n).basic_user,"onUpdate:value":t[1]||(t[1]=e=>F(n).basic_user=e),placeholder:e.$t("Config.Safe.index_56")},null,8,["value","placeholder"])])])),_:1},8,["label"]),T(s,{label:e.$t("Config.Safe.index_57"),path:"basic_pwd"},{default:A((()=>[K("div",rt,[T(d,{value:F(n).basic_pwd,"onUpdate:value":t[2]||(t[2]=e=>F(n).basic_pwd=e),placeholder:e.$t("Config.Safe.index_58")},null,8,["value","placeholder"])])])),_:1},8,["label"]),T(s,{label:" ","show-feedback":!1},{default:A((()=>[T(f,{type:"primary",onClick:i},{default:A((()=>[O(G(e.$t("Public.Btn.Save")),1)])),_:1})])),_:1})])),_:1},8,["model"]),T(r,{class:"mt-20px pl-12px"},{default:A((()=>[K("li",ct,G(e.$t("Config.Safe.index_59")),1),K("li",null,G(e.$t("Config.Safe.index_48")),1),K("li",null,G(e.$t("Config.Safe.index_49")),1),K("li",null,G(e.$t("Config.Safe.index_50")),1),K("li",null,G(e.$t("Config.Safe.index_51")),1)])),_:1})])}}}),_t={class:"p-20px"},xt={class:"text-error"},gt={class:"flex items-center justify-between"},mt={class:"bt-link",href:"https://www.bt.cn/bbs/thread-34374-1-1.html",target:"_blank"},vt=R({__name:"confirm",setup(e,{expose:t}){const{t:a}=E(),l=L();return t({onConfirm:async()=>{await l.value.validate(),o({title:a("Config.Safe.index_53"),width:500,component:pt})}}),(e,t)=>{const a=n,i=ue,o=re;return D(),H("div",_t,[T(a,{class:"mb-20px"},{default:A((()=>[O(G(e.$t("Config.Safe.index_47")),1)])),_:1}),T(i,{class:"mb-20px"},{default:A((()=>[K("li",xt,G(e.$t("Config.Safe.index_19")),1),K("li",null,G(e.$t("Config.Safe.index_48")),1),K("li",null,G(e.$t("Config.Safe.index_49")),1),K("li",null,G(e.$t("Config.Safe.index_50")),1),K("li",null,G(e.$t("Config.Safe.index_51")),1)])),_:1}),K("div",gt,[T(o,{ref_key:"riskRef",ref:l},{default:A((()=>[O(G(e.$t("Config.Safe.index_29")),1)])),_:1},512),K("a",mt,G(e.$t("Config.Safe.index_52")),1)])])}}}),Ct={class:"bt-link",href:"https://www.bt.cn/bbs/thread-34374-1-1.html",target:"_blank"},bt=R({__name:"index",setup(e){const{t:t}=E(),n=async e=>{e?o({title:t("Config.Safe.index_46"),width:650,footer:!0,component:vt}):(await Ce({open:"False",basic_user:"",basic_pwd:""}),y())};return(e,t)=>{const l=V,i=a;return D(),M(i,{label:e.$t("Config.Safe.index_44")},{content:A((()=>[T(l,{value:F(fe).basicAuth,"onUpdate:value":n},null,8,["value"])])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_45")),1),K("a",Ct,G(e.$t("Public.Btn.Help")),1)])),_:1},8,["label"])}}}),St={class:"p-20px"},yt={class:"mb-20px text-20px text-center text-#555"},ht={class:"px-36px"},wt={class:"mb-10px text-16px text-#666"},$t={class:"mb-20px px-24px py-16px bg-#f8f8f8 rounded-4px leading-24px text-14px text-#444 font-500"},kt={class:"text-#666"},Pt={class:"text-#666"},Ut={class:"mb-20px text-16px text-#666"},jt={class:"bt-link",href:"",target:"_blank"},Bt={class:"text-error"},Rt=R({__name:"config",setup(e){const t=z({key:"--",username:"--"}),a=L(""),{loading:n,setLoading:l}=i();return(async()=>{const{message:e}=await be();S(e)&&(t.key=e.key,t.username=e.username)})(),(async()=>{try{l(!0);const{message:e}=await Se({act:1});S(e)&&(a.value=e.result)}finally{l(!1)}})(),(e,l)=>{const i=h,o=v,s=Ie;return D(),H("div",St,[K("div",yt,G(e.$t("Config.Safe.index_70")),1),K("div",ht,[K("div",wt,G(e.$t("Config.Safe.index_71")),1),K("div",$t,[K("div",null,[O(G(e.$t("Config.Safe.index_72"))+" ",1),K("span",kt,G(F(t).username),1)]),K("div",null,[O(G(e.$t("Config.Safe.index_73"))+" ",1),K("span",Pt,G(F(t).key),1)]),K("div",null,[O(G(e.$t("Config.Safe.index_74"))+" ",1),l[0]||(l[0]=K("span",{class:"text-#666"},"Time based",-1))])]),K("div",Ut,G(e.$t("Config.Safe.index_75")),1),T(o,{class:"flex justify-center h-150px",show:F(n)},{default:A((()=>[W(T(i,{value:F(a),size:150,padding:0},null,8,["value"]),[[X,F(a)]])])),_:1},8,["show"]),T(s,null,{default:A((()=>[K("li",null,[O(G(e.$t("Config.Safe.index_76"))+" ",1),K("a",jt,G(e.$t("Config.Safe.index_77")),1)]),K("li",Bt,G(e.$t("Config.Safe.index_78")),1)])),_:1})])])}}}),Et=w(Rt,[["__scopeId","data-v-493fa0d9"]]),Lt={class:"p-20px"},zt={class:"text-error"},It={class:"text-error"},Dt={class:"flex items-center justify-between"},Ht={class:"bt-link",href:"https://www.aapanel.com/forum/d/357-how-to-use-google-authenticator-in-the-aapanel",target:"_blank"},Tt=R({__name:"confirm",setup(e,{expose:t}){const{t:a}=E(),l=L();return t({onConfirm:async()=>{await l.value.validate();const{message:e}=await ye({act:1});fe.value.dynamicPwd=!0,o({title:a("Config.Safe.index_62"),width:600,component:Et}),S(e)&&$.success(e.result)}}),(e,t)=>{const a=n,i=ue,o=re;return D(),H("div",Lt,[T(a,{class:"mb-20px"},{default:A((()=>[O(G(e.$t("Config.Safe.index_47")),1)])),_:1}),T(i,{class:"mb-20px"},{default:A((()=>[K("li",zt,G(e.$t("Config.Safe.index_19")),1),K("li",It,G(e.$t("Config.Safe.index_69")),1),K("li",null,G(e.$t("Config.Safe.index_66")),1),K("li",null,G(e.$t("Config.Safe.index_67")),1)])),_:1}),K("div",Dt,[T(o,{ref_key:"riskRef",ref:l},{default:A((()=>[O(G(e.$t("Config.Safe.index_68")),1)])),_:1},512),K("a",Ht,G(e.$t("Config.Safe.index_168")),1)])])}}}),At={class:"bt-link",href:"https://www.aapanel.com/forum/d/357-how-to-use-google-authenticator-in-the-aapanel",target:"_blank"},Ft=R({__name:"index",setup(e){const{t:t}=E(),n=async e=>{e?l():(await ye({act:0},!0),fe.value.dynamicPwd=!1)},l=()=>{fe.value.dynamicPwd?o({title:t("Config.Safe.index_62"),width:600,component:Et}):o({title:t("Config.Safe.index_63"),width:670,footer:!0,component:Tt})};return(e,t)=>{const i=V,o=te,s=a;return D(),M(s,{label:e.$t("Config.Safe.index_60")},{content:A((()=>[T(i,{value:F(fe).dynamicPwd,"onUpdate:value":n},null,8,["value"]),T(o,{class:"ml-12px h-22px px-5px",size:"small",onClick:l},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_61")),1),K("a",At,G(e.$t("Public.Btn.Help")),1)])),_:1},8,["label"])}}}),Kt={class:"text-error"},Mt=R({__name:"index",setup(e){const{t:t}=E(),n=async e=>{s({title:t("Config.Safe.index_82",[t(e?"Config.Safe.index_83":"Config.Safe.index_84")]),content:()=>e?T(Y,{tag:"div",scope:"global",keypath:"Config.Safe.index_85"},{tips_:()=>T("span",{class:"text-error"},[t("Config.Safe.index_86")])}):T(Z,null,[t("Config.Safe.index_87")]),onConfirm:async()=>{await he(),fe.value.pwdComplexity=e}})};return(e,t)=>{const l=V,i=a;return D(),M(i,{label:e.$t("Config.Safe.index_79")},{content:A((()=>[T(l,{value:F(fe).pwdComplexity,"onUpdate:value":n},null,8,["value"])])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_80")),1),K("span",Kt,G(e.$t("Config.Safe.index_81")),1)])),_:1},8,["label"])}}}),Ot={class:"w-260px"},Gt={class:"text-error"},Jt=R({__name:"index",setup(e){const t=async()=>{await we(ce()),y()};return(e,n)=>{const l=le,i=te,o=a;return D(),M(o,{label:e.$t("Config.Safe.index_88")},{content:A((()=>[K("div",Ot,[T(l,{value:F(fe).domain,"onUpdate:value":n[0]||(n[0]=e=>F(fe).domain=e),placeholder:""},null,8,["value"])]),T(i,{class:"ml-12px",type:"primary",onClick:t},{default:A((()=>[O(G(e.$t("Public.Btn.Save")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_89")),1),K("span",Gt,G(e.$t("Config.Safe.index_90")),1)])),_:1},8,["label"])}}}),Qt={class:"w-260px"},Wt={class:"text-error"},Xt=R({__name:"index",setup(e){const{t:t}=E(),n=async()=>{let e=/^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,a=fe.value.limitIp.split(",").join("-").split("-"),n=!0;if(a.length)for(let t=0;t<a.length;t++)0==e.test(a[t])&&(n=!1);if(!n&&fe.value.limitIp.length>0)return $.error(t("Config.Safe.index_95"));await $e(ce()),y()};return(e,t)=>{const l=le,i=te,o=a;return D(),M(o,{label:e.$t("Config.Safe.index_91")},{content:A((()=>[K("div",Qt,[T(l,{value:F(fe).limitIp,"onUpdate:value":t[0]||(t[0]=e=>F(fe).limitIp=e),placeholder:e.$t("Config.Safe.index_92")},null,8,["value","placeholder"])]),T(i,{class:"ml-12px",type:"primary",onClick:n},{default:A((()=>[O(G(e.$t("Public.Btn.Save")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_93")),1),K("span",Wt,G(e.$t("Config.Safe.index_94")),1)])),_:1},8,["label"])}}}),Yt={class:"p-20px"},Zt={class:"text-error"},qt={class:"text-error"},Nt={class:"w-210px"},Vt=R({__name:"set",setup(e,{expose:t}){const{t:a}=E(),n=L(),l=L(null),i=z({port:k(fe.value.port)}),o={port:{trigger:["blur","input"],validator:()=>!!P(i.port)||new Error(a("Config.Safe.index_104"))}};return t({onConfirm:async()=>{await n.value.validate(),await(l.value?.validate());const e=ce();e.port=`${i.port}`,await ke(e),y(`${location.protocol}//${location.hostname}:${i.port}${location.pathname}`)}}),(e,t)=>{const a=ue,s=ie,d=ee,f=x,u=re;return D(),H("div",Yt,[T(a,{class:"mb-20px"},{default:A((()=>[K("li",Zt,G(e.$t("Config.Safe.index_100")),1),K("li",qt,G(e.$t("Config.Safe.index_101")),1)])),_:1}),T(f,{ref_key:"formRef",ref:l,model:F(i),rules:o},{default:A((()=>[T(d,{label:e.$t("Config.Safe.index_96"),path:"port","label-width":"auto","label-style":{paddingLeft:"24px"}},{default:A((()=>[K("div",Nt,[T(s,{value:F(i).port,"onUpdate:value":t[0]||(t[0]=e=>F(i).port=e),min:1,max:65535,"show-button":!1,placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),T(u,{ref_key:"riskRef",ref:n},{default:A((()=>[O(G(e.$t("Config.Safe.index_102"))+" ",1),K("a",{class:"bt-link",href:"https://www.aapanel.com/forum/d/599-how-to-release-the-aapanel-port",target:"_blank",onClick:q((()=>!1),["stop"])},G(e.$t("Config.Safe.index_103")),1)])),_:1},512)])}}}),ea={class:"w-260px"},ta={class:"text-error"},aa=R({__name:"index",setup(e){const{t:t}=E(),n=async()=>{o({title:t("Config.Safe.index_99"),width:400,footer:!0,component:Vt})};return(e,t)=>{const l=le,i=te,o=a;return D(),M(o,{label:e.$t("Config.Safe.index_96")},{content:A((()=>[K("div",ea,[T(l,{value:F(fe).port,disabled:!0,placeholder:""},null,8,["value"])]),T(i,{class:"ml-12px",type:"primary",onClick:n},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_97")),1),K("span",ta,G(e.$t("Config.Safe.index_98")),1)])),_:1},8,["label"])}}}),na={class:"px-20px pt-28px pb-8px"},la={class:"w-240px"},ia=R({__name:"set",setup(e,{expose:t}){const{t:a}=E(),n=L(null),l=z({adminPath:fe.value.adminPath}),i={adminPath:{trigger:["blur","input"],validator:()=>""!==l.adminPath.trim()||new Error(a("Config.Safe.index_108"))}};return t({onConfirm:async()=>{await(n.value?.validate()),await Pe({admin_path:U(l.adminPath)}),fe.value.adminPath=l.adminPath}}),(e,t)=>{const a=le,o=ee,s=x;return D(),H("div",na,[T(s,{ref_key:"formRef",ref:n,model:F(l),rules:i},{default:A((()=>[T(o,{label:e.$t("Config.Safe.index_105"),path:"adminPath"},{default:A((()=>[K("div",la,[T(a,{value:F(l).adminPath,"onUpdate:value":t[0]||(t[0]=e=>F(l).adminPath=e),placeholder:""},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"])])}}}),oa={class:"w-260px"},sa=R({__name:"index",setup(e){const{t:t}=E(),n=async()=>{o({title:t("Config.Safe.index_107"),width:440,footer:!0,component:ia})};return(e,t)=>{const l=le,i=te,o=a;return D(),M(o,{label:e.$t("Config.Safe.index_105")},{content:A((()=>[K("div",oa,[T(l,{value:F(fe).adminPath,disabled:!0,placeholder:""},null,8,["value"])]),T(i,{class:"ml-12px",type:"primary",onClick:n},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_106")),1)])),_:1},8,["label"])}}}),da={class:"px-20px py-24px"},fa={class:"w-200px"},ua={class:"text-error"},ra=R({__name:"set",setup(e,{expose:t}){const{t:a}=E(),n=L(null),l=z({status_code:fe.value.statusCode}),i={},o=[{value:403,label:a("Config.Safe.index_111")},{value:404,label:a("Config.Safe.index_112")},{value:416,label:a("Config.Safe.index_113")},{value:408,label:a("Config.Safe.index_114")},{value:400,label:a("Config.Safe.index_115")},{value:401,label:a("Config.Safe.index_116")}];return t({onConfirm:async()=>{await(n.value?.validate()),await Ue({status_code:l.status_code}),fe.value.statusCode=l.status_code}}),(e,t)=>{const a=oe,s=ee,d=x,f=Ie;return D(),H("div",da,[T(d,{ref_key:"formRef",ref:n,model:F(l),rules:i},{default:A((()=>[T(s,{label:e.$t("Config.Safe.index_118"),path:"adminPath"},{default:A((()=>[K("div",fa,[T(a,{value:F(l).status_code,"onUpdate:value":t[0]||(t[0]=e=>F(l).status_code=e),options:o},null,8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),T(f,null,{default:A((()=>[K("li",ua,G(e.$t("Config.Safe.index_119")),1)])),_:1})])}}}),ca={class:"w-260px"},pa=R({__name:"index",setup(e){const{t:t}=E(),n=new Map([[403,t("Config.Safe.index_111")],[404,t("Config.Safe.index_112")],[416,t("Config.Safe.index_113")],[408,t("Config.Safe.index_114")],[400,t("Config.Safe.index_115")],[401,t("Config.Safe.index_116")]]),l=N((()=>n.get(fe.value.statusCode)||"--")),i=async()=>{o({title:t("Config.Safe.index_117"),width:420,footer:!0,component:ra})};return(e,t)=>{const n=le,o=te,s=a;return D(),M(s,{label:e.$t("Config.Safe.index_109")},{content:A((()=>[K("div",ca,[T(n,{value:F(l),disabled:!0,placeholder:""},null,8,["value"])]),T(o,{class:"ml-12px",type:"primary",onClick:i},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_110")),1)])),_:1},8,["label"])}}}),_a={class:"px-20px py-24px"},xa={class:"w-120px"},ga={class:"text-error"},ma=R({__name:"set",setup(e,{expose:t}){const{t:a}=E(),n=L(null),l=z({day:fe.value.pwdSetDay}),i={day:{trigger:["blur","input"],validator:()=>l.day<0?new Error(a("Config.Safe.index_128")):!(!l.day&&0!==l.day)||new Error(a("Config.Safe.index_129"))}};return t({onConfirm:async()=>{await(n.value?.validate()),await je({expire:l.day}),pe()}}),(e,t)=>{const a=ie,o=ee,s=x,d=Ie;return D(),H("div",_a,[T(s,{ref_key:"formRef",ref:n,model:F(l),rules:i},{default:A((()=>[T(o,{label:e.$t("Config.Safe.index_120"),path:"day"},{default:A((()=>[K("div",xa,[T(a,{value:F(l).day,"onUpdate:value":t[0]||(t[0]=e=>F(l).day=e),min:0,"show-button":!1,placeholder:""},{suffix:A((()=>[O(G(e.$t("Public.Unit.Day",F(l).day)),1)])),_:1},8,["value"])])])),_:1},8,["label"])])),_:1},8,["model"]),T(d,{class:"mt-4px"},{default:A((()=>[K("li",ga,G(e.$t("Config.Safe.index_126")),1),K("li",null,G(e.$t("Config.Safe.index_127")),1)])),_:1})])}}}),va={class:"w-260px"},Ca=R({__name:"index",setup(e){const{t:t}=E(),n=N((()=>{const{pwdSetDay:e,pwdExpireDay:a,pwdExpireTime:n}=fe.value;return 0===e?t("Config.Safe.index_122"):t("Config.Safe.index_123",[j(n),a])})),l=async()=>{o({title:t("Config.Safe.index_124"),width:360,footer:!0,component:ma})};return(e,t)=>{const i=le,o=te,s=a;return D(),M(s,{label:e.$t("Config.Safe.index_120")},{content:A((()=>[K("div",va,[T(i,{value:F(n),disabled:!0,placeholder:""},null,8,["value"])]),T(o,{class:"ml-12px",type:"primary",onClick:l},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_121")),1)])),_:1},8,["label"])}}}),ba={class:"p-20px"},Sa={class:"mb-12px"},ya={class:"mb-12px"},ha={class:"mb-20px"},wa=R({__name:"set-add-result",props:{address:{default:""}},setup(e){const t=e,a=()=>{d(t.address)};return(e,t)=>{const n=De,l=te,i=Ie;return D(),H("div",ba,[K("div",Sa,G(e.$t("Config.Safe.index_147")),1),K("div",ya,[T(n,{value:e.address,readonly:"",rows:2},null,8,["value"])]),K("div",ha,[T(l,{type:"primary",onClick:a},{default:A((()=>[O(G(e.$t("Public.Btn.Copy")),1)])),_:1})]),T(i,null,{default:A((()=>[K("li",null,G(e.$t("Config.Safe.index_148")),1),K("li",null,G(e.$t("Config.Safe.index_149")),1),K("li",null,G(e.$t("Config.Safe.index_150")),1)])),_:1})])}}}),$a={class:"p-20px pt-28px pb-8px"},ka={class:"flex mb-24px"},Pa={class:"min-w-32px"},Ua={class:"flex-1 ml-16px"},ja={class:"leading-24px text-error text-14px"},Ba={class:"w-160px"},Ra=R({__name:"set-add",emits:["refresh"],setup(e,{expose:t,emit:a}){const n=a,{t:l}=E(),i=C(),s=L(null),d=z({type:3,day:1}),f={day:{trigger:["blur","input"],validator:()=>0!==d.type||!(d.day<=0||d.day%1!=0)||new Error(l("Config.Safe.index_145"))}},u=e=>e%1==0,r=(e="")=>{const t=`${window.location.protocol}//${window.location.host}/login?tmp_token=${e}`;o({title:l("Config.Safe.index_146"),width:580,data:{address:t},component:wa})};return t({onConfirm:async()=>{await(s.value?.validate());const{message:e}=await Be({expire_time:60*(0===d.type?24*d.day:d.type)*60+Math.floor(Date.now()/1e3)});S(e)&&(r(e.token),$.success(e.msg),n("refresh"))}}),(e,t)=>{const a=b,n=se,l=de,o=ee,r=ie,c=x;return D(),H("div",$a,[K("div",ka,[K("div",Pa,[T(a,{name:"base-warning",size:"32",color:F(i).warningColor},null,8,["color"])]),K("div",Ua,[K("div",ja,[K("div",null,G(e.$t("Config.Safe.index_140")),1),K("div",null,G(e.$t("Config.Safe.index_141")),1)])])]),T(c,{ref_key:"formRef",ref:s,model:F(d),rules:f,"label-width":"140"},{default:A((()=>[T(o,{label:e.$t("Config.Safe.index_142")},{default:A((()=>[T(l,{value:F(d).type,"onUpdate:value":t[0]||(t[0]=e=>F(d).type=e)},{default:A((()=>[T(n,{value:3},{default:A((()=>[O("3 "+G(e.$t("Public.Unit.Hour",3)),1)])),_:1}),T(n,{value:6},{default:A((()=>[O("6 "+G(e.$t("Public.Unit.Hour",6)),1)])),_:1}),T(n,{value:9},{default:A((()=>[O("9 "+G(e.$t("Public.Unit.Hour",9)),1)])),_:1}),T(n,{value:12},{default:A((()=>[O("12 "+G(e.$t("Public.Unit.Hour",12)),1)])),_:1}),T(n,{value:0},{default:A((()=>[O(G(e.$t("Config.Safe.index_143")),1)])),_:1})])),_:1},8,["value"])])),_:1},8,["label"]),W(T(o,{label:e.$t("Config.Safe.index_144"),path:"day"},{default:A((()=>[K("div",Ba,[T(r,{value:F(d).day,"onUpdate:value":t[1]||(t[1]=e=>F(d).day=e),min:1,"show-button":!1,validator:u},{suffix:A((()=>[O(G(e.$t("Public.Unit.Day",F(d).day)),1)])),_:1},8,["value"])])])),_:1},8,["label"]),[[X,0===F(d).type]])])),_:1},8,["model"])])}}}),Ea={class:"p-20px h-500px"},La=R({__name:"set-log",props:{id:{default:0}},setup(e){const t=e,{t:a}=E(),{table:n,columns:l,setLoading:i}=f([{key:"type",title:a("Config.Safe.index_151"),width:120,ellipsis:{tooltip:!0}},{key:"addtime",title:a("Config.Safe.index_152"),width:140},{key:"log",title:a("Config.Safe.index_153"),ellipsis:{tooltip:!0}}]),o=async()=>{try{i(!0);const{message:e}=await Re({id:t.id});n.data=m(e)?e:[]}finally{i(!1)}};return o(),(e,t)=>{const a=te,i=Ae,s=He;return D(),H("div",Ea,[T(s,null,{toolsLeft:A((()=>[T(a,{onClick:o},{default:A((()=>[O(G(e.$t("Public.Btn.Refresh")),1)])),_:1})])),table:A((()=>[T(i,{"max-height":360,loading:F(n).loading,data:F(n).data,columns:F(l)},null,8,["loading","data","columns"])])),_:1})])}}}),za={class:"h-500px p-20px"},Ia=R({__name:"set",setup(e){const{t:t}=E(),a=()=>{o({title:t("Config.Safe.index_146"),width:580,footer:!0,component:Ra,data:{onRefresh:()=>{_()}}})},{table:n,columns:l,setLoading:i}=f([{key:"login_addr",title:t("Config.Safe.index_154"),ellipsis:{tooltip:!0},render:e=>e.login_addr||t("Config.Safe.index_155")},{key:"state",title:t("Config.Safe.index_156"),width:100,render:e=>-1===e.state?T("span",{class:"text-error"},[t("Config.Safe.index_166")]):1===e.state?t("Config.Safe.index_157"):T("span",{class:"text-primary"},[t("Config.Safe.index_155")])},{key:"login_time",title:t("Config.Safe.index_158"),width:140,render:e=>0===e.login_time?t("Config.Safe.index_155"):j(e.login_time)},{key:"expire",title:t("Config.Safe.index_159"),width:140,render:e=>j(e.expire)},u({width:160,options:e=>[{label:t("Config.Safe.index_160"),type:"error",show:e.online_state,onClick:()=>{r(e)}},{label:t("Config.Safe.index_161"),show:1===e.state||-1===e.state,onClick:()=>{d(e)}},{label:t("Public.Btn.Del"),onClick:()=>{c(e)}}]})]),d=e=>{o({title:t("Config.Safe.index_161"),width:700,data:{id:e.id},component:La})},r=e=>{s({title:t("Config.Safe.index_162",[e.login_addr]),content:t("Config.Safe.index_163",[e.login_addr]),onConfirm:async()=>{await Ee({id:e.id}),_()}})},c=e=>{s({title:t("Config.Safe.index_164"),content:t("Config.Safe.index_165"),onConfirm:async()=>{await Le({id:e.id}),_()}})},p=z({p:1,rows:10}),_=async()=>{try{i(!0);const{message:e}=await ze(Q(p));S(e)&&(n.data=m(e.data)?e.data:[],n.total=B(e.page))}finally{i(!1)}};return _(),(e,t)=>{const i=te,o=Ae,s=Te,d=He;return D(),H("div",za,[T(d,null,{toolsLeft:A((()=>[T(i,{type:"primary",onClick:a},{default:A((()=>[O(G(e.$t("Config.Safe.index_146")),1)])),_:1})])),table:A((()=>[T(o,{"max-height":340,loading:F(n).loading,data:F(n).data,columns:F(l)},null,8,["loading","data","columns"])])),pageRight:A((()=>[T(s,{page:F(p).p,"onUpdate:page":t[0]||(t[0]=e=>F(p).p=e),"page-size":F(p).rows,"onUpdate:pageSize":t[1]||(t[1]=e=>F(p).rows=e),"item-count":F(n).total,onRefresh:_},null,8,["page","page-size","item-count"])])),_:1})])}}}),Da=R({__name:"index",setup(e){const{t:t}=E(),n=()=>{o({title:t("Config.Safe.index_139"),width:740,component:Ia})};return(e,t)=>{const l=te,i=a;return D(),M(i,{label:e.$t("Config.Safe.index_137")},{content:A((()=>[T(l,{type:"primary",onClick:n},{default:A((()=>[O(G(e.$t("Public.Btn.Set")),1)])),_:1})])),desc:A((()=>[K("span",null,G(e.$t("Config.Safe.index_138")),1)])),_:1},8,["label"])}}});e("S",w(R({__name:"config",setup:e=>(e,t)=>(D(),H("div",null,[T(l,null,{default:A((()=>[O(G(e.$t("Config.Safe.index_1")),1)])),_:1}),T(Oe),T(dt),T(bt),T(Ft),T(Mt),T(Jt),T(Xt),T(aa),T(sa),T(pa),T(Ca),T(Da)]))}),[["__scopeId","data-v-919bcd3c"]]))}}}));
