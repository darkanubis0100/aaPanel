System.register(["./page_layout-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(e,t){"use strict";var l,a,n,o,i,s,r,c,u,d,p,f,v,h,m,g,_,x,w,b,y,F,k,C,$,U,W,j,E,O,I,B,M,P,R,z,L,q,A,D,N,S,G,H;return{setters:[e=>{l=e.bD,a=e.k,n=e.o,o=e.I,i=e._,s=e.m,r=e.dy,c=e.bF},e=>{u=e.d,d=e.aq,p=e.r,f=e.O,v=e.X,h=e.Y,m=e.M,g=e.c,_=e.Z,x=e.u,w=e.R,b=e.P,y=e.Q,F=e.ap,k=e.e,C=e.F,$=e.ao,U=e.ax,W=e.L,j=e.aD,E=e.t,O=e.W,I=e.j,B=e.ac,M=e.k,P=e.v,R=e.n},e=>{z=e.aa,L=e.bU,q=e.bL,A=e.bK,D=e.ad,N=e.bk,S=e.bG,G=e.bV},e=>{H=e.e},null,null],execute:function(){var t=document.createElement("style");t.textContent=".seg[data-v-7ea28fa1]{width:1px;height:8px;margin:0 auto;border-left:1px solid #ccc}.tips[data-v-c8f1f83a]{position:absolute;top:32px;left:0;width:100%;padding-top:2px;padding-left:2px;color:#999}.rows[data-v-b5148f31]{display:flex}.rows .field[data-v-b5148f31]{width:140px;margin-right:8px}.rows .condition[data-v-b5148f31]{width:160px;margin-right:8px}.rows .content[data-v-b5148f31]{display:flex;flex:1;width:0;flex-shrink:0}.rows .rows-btn[data-v-b5148f31]{display:flex;align-items:center;margin-left:8px}.rows .rows-btn .close[data-v-b5148f31]{display:flex;align-items:center;justify-content:center;width:24px;height:32px;margin-left:8px;color:#666;cursor:pointer;transition:opacity .3s}.rows .rows-btn .close[data-v-b5148f31]:hover{opacity:.8}.rows.rows-tit>div[data-v-b5148f31]{padding-bottom:8px}.form-title[data-v-b93aa8ab]{margin-bottom:20px;font-size:16px}\n",document.head.appendChild(t);const K=u({__name:"site-select",props:{value:{},valueModifiers:{}},emits:["update:value"],setup(e){const t=d(e,"value"),a=l(),n=p([]),o=()=>{t.value=n.value.map((e=>e.value))},i=()=>{t.value=[]};return(async()=>{n.value=Object.entries(a.config.sitemap).map((([e,t])=>({label:e,value:t})))})(),(e,l)=>{const a=z,s=L,r=q;return f(),v(r,x(e.$attrs,{value:t.value,"onUpdate:value":l[0]||(l[0]=e=>t.value=e),multiple:"",filterable:"",options:w(n),"max-tag-count":"responsive","consistent-menu-width":!1,placeholder:e.$t("Waf.Custom.index_25")}),{header:h((()=>[m(s,{class:"w-full"},{default:h((()=>[m(a,{class:"flex-1",onClick:o},{default:h((()=>[g(_(e.$t("Public.All")),1)])),_:1}),m(a,{class:"flex-1",onClick:i},{default:h((()=>[g(_(e.$t("Public.Btn.Cancel")),1)])),_:1})])),_:1})])),_:1},16,["value","options","placeholder"])}}}),Q={class:"my-18px"},V=a({},[["render",function(e,t){const l=A;return f(),b("div",Q,[m(l,{class:"w-38px justify-center"},{default:h((()=>[g(_(e.$t("Waf.Custom.index_31")),1)])),_:1})])}]]),X={class:"flex flex-center flex-col w-38px"},Y=a({},[["render",function(e,t){const l=A;return f(),b("div",X,[t[0]||(t[0]=y("div",{class:"seg"},null,-1)),m(l,{class:"w-38px justify-center"},{default:h((()=>[g(_(e.$t("Waf.Custom.index_30")),1)])),_:1}),t[1]||(t[1]=y("div",{class:"seg"},null,-1))])}],["__scopeId","data-v-7ea28fa1"]]),Z={class:"relative flex items-center w-full h-full"},J={class:"tips"},T=a(u({__name:"content",props:F({condition:{default:null},factor:{},type:{default:"right"}},{input:{},inputModifiers:{},select:{default:()=>null},selectModifiers:{}}),emits:["update:input","update:select"],setup(e){const t=e,l=d(e,"input"),a=d(e,"select"),i=k((()=>null===t.condition)),s=["in","not_in"],r=k((()=>{const{factor:e}=t;return"text"===e.widget.type})),c=["select","area_select","mult"],u=k((()=>{const{factor:e}=t;return c.includes(e.widget.type)})),x=k((()=>"left"!==t.type&&("mult"===t.factor.widget.type||s.includes(t.condition||"")))),F=k((()=>{const{factor:e}=t,{widget:l}=e;return l.value.map((e=>({label:n(e)?e:e.label,value:n(e)?e:e.key})))})),W=()=>{a.value=F.value.map((e=>e.value))},j=()=>{a.value=[]},E=p(""),O=e=>{E.value=e},I=()=>{""!==E.value&&(o(a.value)?o(a.value)&&!a.value.includes(E.value)&&a.value.push(E.value):a.value=[E.value],E.value="")};return(e,t)=>{const n=D,o=q,s=z,c=L;return f(),b("div",Z,[w(r)?(f(),b(C,{key:0},[w(x)?(f(),v(o,{key:1,value:a.value,"onUpdate:value":t[1]||(t[1]=e=>a.value=e),tag:"",multiple:"",filterable:"","show-arrow":!1,show:!1,"max-tag-count":"responsive","consistent-menu-width":!1,placeholder:e.factor.widget.placeholder,onSearch:O,onBlur:I},null,8,["value","placeholder"])):(f(),v(n,{key:0,value:l.value,"onUpdate:value":t[0]||(t[0]=e=>l.value=e),spellcheck:"false",disabled:w(i),placeholder:e.factor.widget.placeholder},null,8,["value","disabled","placeholder"])),y("div",J,_(e.factor.widget.hint?`${e.factor.widget.hint}${w(x)?e.$t("Waf.Custom.index_29"):""}`:""),1)],64)):$("",!0),w(u)?(f(),v(o,{key:1,value:a.value,"onUpdate:value":t[2]||(t[2]=e=>a.value=e),options:w(F),disabled:w(i),filterable:!0,"consistent-menu-width":!1,multiple:w(x),"max-tag-count":"responsive",placeholder:e.factor.widget.placeholder},U({_:2},[w(x)?{name:"header",fn:h((()=>[m(c,{class:"w-full"},{default:h((()=>[m(s,{class:"flex-1",onClick:W},{default:h((()=>[g(_(e.$t("Public.All")),1)])),_:1}),m(s,{class:"flex-1",onClick:j},{default:h((()=>[g(_(e.$t("Public.Btn.Cancel")),1)])),_:1})])),_:1})])),key:"0"}:void 0]),1032,["value","options","disabled","multiple","placeholder"])):$("",!0)])}}}),[["__scopeId","data-v-c8f1f83a"]]),ee={class:"rows rows-tit"},te={class:"field"},le={class:"condition"},ae={class:"content"},ne={class:"rows"},oe={class:"field"},ie={class:"condition"},se={class:"content"},re={key:0,class:"w-140px mr-8px"},ce={class:"flex-1 w-0"},ue={class:"rows-btn"},de=["onClick"],pe=u({__name:"index",props:F({isInit:{type:Boolean,default:!0}},{value:{default:()=>[]},valueModifiers:{}}),emits:["update:value"],setup(e,{expose:t}){const a=e,n=d(e,"value"),s=l(),r={type:"or",children:[]},c={input:"",select:null,show:!1,widget:{hint:"",placeholder:"",type:"text",value:[]}},u={type:"and",field:null,condition:null,conOptions:[],leftFactor:N(c),rightFactor:N(c)},p=["select","area_select"],F=["in","not_in"],U=k((()=>s.config.options.map((e=>({label:e.text,value:e.type,data:e}))))),E=(e,t)=>(l,a)=>{const o=n.value[e].children[t],i=a.data;o.conOptions=i.operators.map((e=>({label:s.getOperatorName(e),value:e}))),o.condition=i.operators[0]||null,o.leftFactor=N(c),o.rightFactor=N(c),i.left_factor_enabled&&(o.leftFactor.show=i.left_factor_enabled,o.leftFactor.widget=i.left_widget),i.right_factor_enabled&&(o.rightFactor.widget=i.right_widget,o.rightFactor.show=i.right_factor_enabled)},O=(e,t)=>l=>{const a=n.value[e].children[t],{rightFactor:i}=a,{widget:s}=i;if(p.includes(s.type)){if(null===i.select)return;F.includes(l||"")?i.select=o(i.select)?i.select:[i.select]:i.select=o(i.select)?i.select[0]:i.select}"text"===s.type&&(F.includes(l||"")&&""!==i.input&&(i.select=[i.input],i.input=""),null!==i.select&&(i.input=o(i.select)?i.select[0]:i.select))},I=k((()=>n.value.map((e=>e.children.length)).reduce(((e,t)=>e+t))>1)),B=(e,t)=>t===n.value.length-1&&e===n.value[t].children.length-1,M=(e,t=0)=>{n.value[t].children.splice(e+1,0,N(u))},P=()=>{n.value.push(N(r)),M(0,n.value.length-1)},R=(e,t,l)=>"text"!==l.widget.type||F.includes(t)?"":e,L=(e,t,l)=>F.includes(t)?e?e.split(","):[]:p.includes(l.widget.type)&&e||null;return a.isInit&&0===n.value.length&&P(),t({setRules:e=>{const t=[];e.children.forEach((e=>{const l=N(r);e.children.forEach((e=>{const{option:t}=e;if(!t)return;const a=N(u);a.field=t.type,a.condition=t.operator,((e,t)=>{const{options:l}=s.config;for(let a=0;a<l.length;a++)if(l[a].type===e){t(l[a]);break}})(t.type,(e=>{if(e.left_factor_enabled){const l=t?.left_factor||"";a.leftFactor.show=e.left_factor_enabled,a.leftFactor.widget=e.left_widget,a.leftFactor.input=R(l,t.operator,a.leftFactor),a.leftFactor.select=L(l,t.operator,a.leftFactor)}if(e.right_factor_enabled){const l=t?.right_factor||"";a.rightFactor.show=e.right_factor_enabled,a.rightFactor.widget=e.right_widget,a.rightFactor.input=R(l,t.operator,a.rightFactor),a.rightFactor.select=L(l,t.operator,a.rightFactor)}a.conOptions=e.operators.map((e=>({label:s.getOperatorName(e),value:e})))})),l.children.push(a)})),t.push(l)})),t.length>0?n.value=t:P()}}),(e,t)=>{const l=q,a=z,o=i;return f(),b("div",null,[y("div",ee,[y("div",te,_(e.$t("Waf.Custom.index_26")),1),y("div",le,_(e.$t("Waf.Custom.index_27")),1),y("div",ae,_(e.$t("Waf.Custom.index_28")),1),t[0]||(t[0]=y("div",{class:"btn"},null,-1))]),(f(!0),b(C,null,W(n.value,((t,i)=>(f(),b("div",{key:`${i+1}`},[0!==i?(f(),v(V,{key:0})):$("",!0),(f(!0),b(C,null,W(t.children,((t,s)=>(f(),b("div",{key:`${s+1}`},[0!==s?(f(),v(Y,{key:0})):$("",!0),y("div",ne,[y("div",oe,[m(l,x({value:t.field,"onUpdate:value":e=>t.field=e,options:w(U),"consistent-menu-width":!1},j({"update:value":E(i,s)})),null,16,["value","onUpdate:value","options"])]),y("div",ie,[t.leftFactor.show?(f(),v(T,{key:0,input:t.leftFactor.input,"onUpdate:input":e=>t.leftFactor.input=e,select:t.leftFactor.select,"onUpdate:select":e=>t.leftFactor.select=e,type:"left",condition:t.condition,factor:t.leftFactor},null,8,["input","onUpdate:input","select","onUpdate:select","condition","factor"])):(f(),v(l,x({key:1,value:t.condition,"onUpdate:value":e=>t.condition=e,disabled:null===t.field,options:t.conOptions,"consistent-menu-width":!1},j({"update:value":O(i,s)})),null,16,["value","onUpdate:value","disabled","options"]))]),y("div",se,[t.leftFactor.show?(f(),b("div",re,[m(l,x({value:t.condition,"onUpdate:value":e=>t.condition=e,disabled:null===t.field,options:t.conOptions,"consistent-menu-width":!1},j({"update:value":O(i,s)})),null,16,["value","onUpdate:value","disabled","options"])])):$("",!0),y("div",ce,[m(T,{input:t.rightFactor.input,"onUpdate:input":e=>t.rightFactor.input=e,select:t.rightFactor.select,"onUpdate:select":e=>t.rightFactor.select=e,type:"right",condition:t.condition,factor:t.rightFactor},null,8,["input","onUpdate:input","select","onUpdate:select","condition","factor"])])]),y("div",ue,[m(a,{onClick:e=>M(s,i)},{default:h((()=>[g(_(e.$t("Waf.Custom.index_30")),1)])),_:2},1032,["onClick"]),B(s,i)?(f(),v(a,{key:0,class:"ml-8px",onClick:P},{default:h((()=>[g(_(e.$t("Waf.Custom.index_31")),1)])),_:1})):$("",!0),w(I)?(f(),b("div",{key:1,class:"close",onClick:e=>((e,t)=>{const l=n.value[t];l.children.length>1?l.children.splice(e,1):n.value.splice(t,1)})(s,i)},[m(o,{name:"base-close",size:"16"})],8,de)):$("",!0)])])])))),128))])))),128)),t[1]||(t[1]=y("div",null,null,-1))])}}}),fe=a(pe,[["__scopeId","data-v-b5148f31"]]),ve={class:"p-24px"},he={class:"form-title"},me={class:"w-320px"},ge={class:"w-320px"},_e={class:"form-title mt-8px"},xe={class:"flex-1"},we={class:"form-title mt-8px"},be={class:"w-320px"},ye={class:"w-320px"},Fe=u({__name:"index",props:{isEdit:{type:Boolean},row:{}},emits:["refresh"],setup(e,{expose:t,emit:a}){const n=e,u=a,d=E(n,"isEdit"),{t:v}=O(),g=l(),x=I({name:"",server:[],action:"deny",response:null}),F={name:{trigger:["blur","input"],validator:()=>""!==x.name||new Error(v("Waf.Custom.index_18"))},rules:{validator:()=>{for(let e=0;e<k.value.length;e++){const t=k.value[e];for(let e=0;e<t.children.length;e++){const l=t.children[e];if(null===l.field||null===l.condition)return new Error(v("Waf.Custom.index_22"));const{leftFactor:a,rightFactor:n}=l;if(a.show&&""===a.input&&null===a.select)return new Error(v("Waf.Custom.index_22"));if(n.show&&""===n.input&&null===n.select)return new Error(v("Waf.Custom.index_22"))}}return!0}}},k=p([]),C=p(null),$=p(),U=p([]),W=p([]),j=()=>{x.server.length>0?H(x.server.join("\n")):s.error(v("Waf.Custom.index_24"))},L=(e,t)=>{const{data:l}=t,{response:a}=l;W.value=a.map((e=>({label:e.text,value:e.type}))),a.length>0?x.response=a[0].type:x.response=null},A=()=>{const e=N();return k.value.forEach((t=>{const l=N("and");t.children.forEach((e=>{null===e.field&&null===e.condition||l.children.push(Q(e))})),e.children.push(l)})),e},N=(e="or")=>({logic:e,type:"block",option:null,children:[]}),Q=e=>({type:"option",logic:"",children:[],option:{type:e.field||"",operator:e.condition||"",left_factor:X(e.condition,e.leftFactor),right_factor:X(e.condition,e.rightFactor)}}),V=["in","not_in"],X=(e,t)=>{const{widget:l}=t;return"text"!==l.type||V.includes(e||"")?o(t.select)?t.select.join(","):t.select||"":t.input};return U.value=g.config.action.map((e=>({label:e.text,value:e.type,data:e}))),(()=>{const{data:e}=U.value.find((e=>e.value===x.action)),{response:t}=e;W.value=t.map((e=>({label:e.text,value:e.type}))),t.length>0&&null===x.response&&(x.response=t[0].type)})(),(()=>{if(!d.value)return;const{row:e}=n;e&&(x.name=e.name,x.server=e.servers||null,x.action=e.action.type,x.response=e.action.response.type,R((()=>{$.value.setRules(e.root)})))})(),t({onConfirm:async()=>{await(C.value?.validate());const e=(()=>{const{action:e,response:t}=x;return"allow"===e&&null===t&&(x.response="black_page"),{name:x.name,servers:x.server?x.server:[],status:1,is_global:0,priority:0,root:A(),action:{type:x.action,response:{type:x.response||"",response_id:0,status:0,headers:{},body:""}}}})(),{row:t}=n;d.value&&t?await r({infos:e,id:t.id}):await c(e),u("refresh")}}),(e,t)=>{const l=i,a=z,n=S,o=D,s=q,r=G;return f(),b("div",ve,[m(r,{ref_key:"formRef",ref:C,model:w(x),rules:F,"label-width":"140px","label-placement":"left","require-mark-placement":"left"},{default:h((()=>[y("div",he,_(e.$t("Waf.Custom.index_15")),1),m(n,{label:e.$t("Waf.Custom.index_16")},{default:h((()=>[y("div",me,[m(K,{value:w(x).server,"onUpdate:value":t[0]||(t[0]=e=>w(x).server=e)},null,8,["value"])]),m(a,{class:"ml-16px",onClick:j},{default:h((()=>[m(l,{name:"common-copy",class:"mr-6px",size:"14"}),y("span",null,_(e.$t("Waf.Custom.index_23")),1)])),_:1})])),_:1},8,["label"]),m(n,{label:e.$t("Waf.Custom.index_17"),path:"name"},{default:h((()=>[y("div",ge,[m(o,{value:w(x).name,"onUpdate:value":t[1]||(t[1]=e=>w(x).name=e),spellcheck:"false",placeholder:e.$t("Waf.Custom.index_18")},null,8,["value","placeholder"])])])),_:1},8,["label"]),y("div",_e,_(e.$t("Waf.Custom.index_19")),1),m(n,{label:"",class:"pl-36px",path:"rules"},{default:h((()=>[y("div",xe,[m(fe,{ref_key:"ruleListRef",ref:$,value:w(k),"onUpdate:value":t[2]||(t[2]=e=>B(k)?k.value=e:null),"is-init":!w(d)},null,8,["value","is-init"])])])),_:1}),y("div",we,_(e.$t("Waf.Custom.index_10")),1),m(n,{label:e.$t("Waf.Custom.index_20")},{default:h((()=>[y("div",be,[m(s,{value:w(x).action,"onUpdate:value":[t[3]||(t[3]=e=>w(x).action=e),L],options:w(U)},null,8,["value","options"])])])),_:1},8,["label"]),M(m(n,{label:e.$t("Waf.Custom.index_21"),"show-feedback":!1},{default:h((()=>[y("div",ye,[m(s,{value:w(x).response,"onUpdate:value":t[4]||(t[4]=e=>w(x).response=e),options:w(W)},null,8,["value","options"])])])),_:1},8,["label"]),[[P,"deny"===w(x).action]])])),_:1},8,["model"])])}}});e("default",a(Fe,[["__scopeId","data-v-b93aa8ab"]]))}}}));
