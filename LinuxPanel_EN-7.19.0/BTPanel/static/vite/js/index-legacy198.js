System.register(["./index.vue_vue_type_script_setup_true_lang-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./index-legacy70.js?v=1732601582185","./common-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185","./index-legacy.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy8.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy4.js?v=1732601582185","./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./useModal-legacy3.js?v=1732601582185"],(function(e,a){"use strict";var l,t,s,n,o,i,r,d,u,c,p,v,b,f,m,_,x,g,y,h,k,w,j,C,A,$,L,W,U,I,M,P,R,E,z,D,H,O,Z,q,B,F,G,K,Q,S;return{setters:[e=>{l=e._},e=>{t=e.aa,s=e.bU,n=e.bL,o=e.bZ,i=e.ad,r=e.bn,d=e.bK,u=e.bH,c=e.bI,p=e.bG,v=e.bh},e=>{b=e.d,f=e.ap,m=e.aq,_=e.O,x=e.X,g=e.Y,y=e.M,h=e.c,k=e.Z,w=e.u,j=e.ar,C=e.P,A=e.F,$=e.L,L=e.Q,W=e.ad,U=e.ao,I=e.m,M=e.r,P=e.x,R=e.e,E=e.R,z=e.ac,D=e.W,H=e.j},e=>{O=e.ba,Z=e.k,q=e.f,B=e.a0,F=e.I},e=>{G=e.g,K=e.a},e=>{Q=e.T},e=>{S=e.b},null,null,null,null,null,null],execute:function(){var a=document.createElement("style");a.textContent=".area-item[data-v-f119016e]{display:flex;align-items:center;width:100%;height:32px;padding:0 8px;border:1px solid transparent;border-radius:2px;transition:all .3s;cursor:pointer}.area-item.active[data-v-f119016e],.area-item[data-v-f119016e]:hover{border-color:rgba(32,165,58,.3);background-color:#f1f9f3;color:#20a53a}.area-item .area-name[data-v-f119016e]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.area-tabs[data-v-219b3335]{--n-tab-padding: 8px 16px 6px;--n-pane-padding-top: 16px;--n-pane-padding-left: 16px;--n-pane-padding-right: 16px;--n-pane-padding-bottom: 16px}.area-tabs .n-tab-pane[data-v-219b3335]{border:1px solid var(--n-tab-border-color);border-top:none;border-bottom-left-radius:var(--n-tab-border-radius);border-bottom-right-radius:var(--n-tab-border-radius)}.area-input[data-v-219b3335]{--n-height: 26px}.area-tit[data-v-219b3335]{margin-bottom:10px;font-weight:700}\n",document.head.appendChild(a);const T=b({__name:"index",props:f({options:{default:()=>[]},placeholder:{}},{value:{type:Array,default:()=>[]},valueModifiers:{}}),emits:["update:value"],setup(e){const a=e,l=m(e,"value"),o=()=>{const{options:e}=a;l.value=e.map((e=>e.value))},i=()=>{l.value=[]};return(e,a)=>{const r=t,d=s,u=n;return _(),x(u,w({value:l.value,"onUpdate:value":a[0]||(a[0]=e=>l.value=e)},e.$attrs,{multiple:!0,filterable:!0,options:e.options,placeholder:e.placeholder,"max-tag-count":"responsive"}),{header:g((()=>[y(d,{class:"w-full"},{default:g((()=>[y(r,{class:"flex-1",onClick:o},{default:g((()=>[h(k(e.$t("Public.All")),1)])),_:1}),y(r,{class:"flex-1",onClick:i},{default:g((()=>[h(k(e.$t("Public.Btn.Cancel")),1)])),_:1})])),_:1})])),_:1},16,["value","options","placeholder"])}}}),X=["title","onClick"],Y={key:0,class:"area-name"},J=Z(b({__name:"area-list",props:{data:{default:()=>[]},selectData:{default:()=>[]}},emits:["click"],setup(e,{emit:a}){const l=e,t=a,s=!!j().label;return(e,a)=>{const n=o,i=O;return _(),x(i,{cols:6,"x-gap":6,"y-gap":6},{default:g((()=>[(_(!0),C(A,null,$(e.data,(a=>(_(),x(n,{key:a.code},{default:g((()=>{return[L("div",{class:W(["area-item",{active:(n=a.code,l.selectData.some((e=>e.code===n)))}]),title:a.label,onClick:e=>(e=>{t("click",e)})(a)},[s?U("",!0):(_(),C("span",Y,k(a.label),1)),I(e.$slots,"label",{data:a},void 0,!0)],10,X)];var n})),_:2},1024)))),128))])),_:3})}}}),[["__scopeId","data-v-f119016e"]]),N={class:"flex-1"},V={class:"w-200px h-full"},ee={class:"area-tit"},ae={class:"area-tit"},le={class:"max-w-100% truncate"},te={class:"min-h-244px"},se=Z(b({__name:"area",props:{value:{default:()=>[]},valueModifiers:{}},emits:["update:value"],setup(e){const a=m(e,"value"),l=M("all"),t=M([]),s=P({list:{},relations:{},category:{district:[],provinces:[],continents:[],hotRegion:[]}}),n=M([]),o=M([]),p=M(""),v=M([]),b=e=>{if(""===e.trim())return void(v.value=[]);const{list:a}=s.value;v.value=Object.keys(a).filter((l=>a[l][1].includes(e))).map((e=>({key:e,label:a[e][1],props:{onClick:()=>{f(e,a[e][1])}}}))).splice(0,11)},f=(e,l)=>{const{category:t}=s.value,{continents:n}=t;n.includes(e)?I({code:e,label:l}):a.value.some((a=>a.code===e))||W({code:e,label:l})},w=R((()=>{const e={},{category:l,relations:t}=s.value,{continents:n}=l;return n.forEach((l=>{e[l]=t[l].filter((e=>a.value.some((a=>a.code===e)))).length})),e})),j=e=>{"all"===e&&(t.value=[])},W=e=>{a.value.some((a=>a.code===e.code))?a.value=a.value.filter((a=>a.code!==e.code)):a.value.push(e)},I=e=>{const{list:a,relations:n}=s.value,o=n[e.code].map((e=>({code:e,label:a[e][1]})));t.value.push({name:e.code,tab:e.label,areaList:o}),l.value=e.code},{loading:D,setLoading:H}=S(),O=()=>{const{list:e,category:a}=s.value,{hotRegion:l}=a;n.value=l.map((a=>({code:a,label:e[a][1]})))},Z=()=>{const{list:e,category:a}=s.value,{continents:l}=a;o.value=l.map((a=>({code:a,label:e[a][1]})))};return(async()=>{try{H(!0);const{data:e}=await Q.get("/static/vite/data/area.json");q(e)&&(s.value=e,O(),Z())}finally{H(!1)}})(),(e,s)=>{const f=i,m=r,M=d,P=B,R=u,H=c;return _(),C("div",N,[y(H,{value:E(l),"onUpdate:value":[s[1]||(s[1]=e=>z(l)?l.value=e:null),j],type:"card",class:"area-tabs"},{suffix:g((()=>[L("div",V,[y(m,{trigger:"focus",style:{width:"200px"},options:E(v)},{default:g((()=>[y(f,{value:E(p),"onUpdate:value":s[0]||(s[0]=e=>z(p)?p.value=e:null),class:"area-input",size:"small",placeholder:e.$t("Waf.Area.index_19"),onInput:b},null,8,["value","placeholder"])])),_:1},8,["options"])])])),default:g((()=>[y(R,{name:"all",tab:e.$t("Public.All")},{default:g((()=>[y(P,{class:"min-h-244px",show:E(D)},{default:g((()=>[L("div",ee,k(e.$t("Waf.Area.index_21")),1),y(J,{class:"mb-16px",data:E(n),"select-data":a.value,onClick:W},null,8,["data","select-data"]),L("div",ae,k(e.$t("Waf.Area.index_22")),1),y(J,{data:E(o),onClick:I},{label:g((e=>[L("div",le,k(e.data.label),1),E(w)[e.data.code]>0?(_(),x(M,{key:0,type:"primary",class:"ml-4px px-5px h-18px"},{default:g((()=>[h(k(E(w)[e.data.code]),1)])),_:2},1024)):U("",!0)])),_:1},8,["data"])])),_:1},8,["show"])])),_:1},8,["tab"]),(_(!0),C(A,null,$(E(t),(e=>(_(),x(R,{key:e.name,name:e.name,tab:e.tab},{default:g((()=>[L("div",te,[y(J,{data:e.areaList,"select-data":a.value,onClick:W},null,8,["data","select-data"])])])),_:2},1032,["name","tab"])))),128))])),_:1},8,["value"])])}}}),[["__scopeId","data-v-219b3335"]]),ne={class:"py-24px px-32px"},oe={class:"mr-20px"},ie={class:"w-220px"},re={class:"w-240px"};e("default",b({__name:"index",emits:["refresh"],setup(e,{expose:a,emit:t}){const s=t,{t:o}=D(),i=M(null),r=H({types:"refuse",site:[],areaList:[]}),u={site:{trigger:"change",validator:()=>0!==r.site.length||new Error(o("Waf.Area.index_17"))}},c=[{label:o("Waf.Area.index_15"),value:"refuse"},{label:o("Waf.Area.index_14"),value:"accept"}],b=M([]);return(async()=>{const{message:e}=await G();F(e)&&(b.value=e.map((e=>({label:e.name,value:e.name}))))})(),a({onConfirm:async()=>{await(i.value?.validate());const e={region:r.areaList.map((e=>e.label)).join(","),types:r.types,site:r.site.join(",")};await K(e),s("refresh")}}),(e,a)=>{const t=n,s=p,o=T,f=v,m=d,w=l;return _(),C("div",ne,[y(w,{ref_key:"formRef",ref:i,model:E(r),rules:u},{default:g((()=>[y(f,{class:"mb-4px"},{default:g((()=>[y(s,null,{default:g((()=>[L("span",oe,k(e.$t("Waf.Area.index_13")),1),L("div",ie,[y(t,{value:E(r).types,"onUpdate:value":a[0]||(a[0]=e=>E(r).types=e),options:c},null,8,["value"])])])),_:1}),y(s,{label:e.$t("Waf.Area.index_11"),"label-width":"80"},{default:g((()=>[L("div",re,[y(o,{value:E(r).site,"onUpdate:value":a[1]||(a[1]=e=>E(r).site=e),options:E(b),placeholder:e.$t("Waf.Area.index_17")},null,8,["value","options","placeholder"])])])),_:1},8,["label"])])),_:1}),y(f,{class:"min-h-28px mb-10px items-center",size:[10,4]},{default:g((()=>[L("div",null,k(e.$t("Waf.Area.index_18")),1),(_(!0),C(A,null,$(E(r).areaList,((e,a)=>(_(),x(m,{key:e.code,type:"primary",round:!0,closable:!0,onClose:e=>(e=>{r.areaList.splice(e,1)})(a)},{default:g((()=>[h(k(e.label),1)])),_:2},1032,["onClose"])))),128))])),_:1}),y(se,{value:E(r).areaList,"onUpdate:value":a[2]||(a[2]=e=>E(r).areaList=e)},null,8,["value"])])),_:1},8,["model"])])}}}))}}}));
