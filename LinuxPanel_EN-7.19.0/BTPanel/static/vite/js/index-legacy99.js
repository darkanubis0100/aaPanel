System.register(["./vue-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185"],(function(e,t){"use strict";var l,a,o,r,d,s,n,i,u,p,c,f,y,v,m,g,h,x,w,_,b;return{setters:[e=>{l=e.d,a=e.av,o=e.ar,r=e.x,d=e.r,s=e.e,n=e.O,i=e.P,u=e.M,p=e.Y,c=e.u,f=e.Q,y=e.m,v=e.H,m=e.R,g=e.k,h=e.v},e=>{x=e.a1,w=e.k},e=>{_=e.ad,b=e.bm}],execute:function(){var t=document.createElement("style");t.textContent=".placeholder[data-v-1d0d33d8]{position:absolute;top:0;left:0;display:flex;flex-direction:column;width:100%;height:100%;padding:12px 16px 0;color:#999;line-height:18px;cursor:text}\n",document.head.appendChild(t);const k={class:"relative w-full"},C={class:"leading-18px"},R=l({__name:"index",props:{rows:{type:Number,default:4},placeholder:{type:String,default:""},readonly:{type:Boolean,default:!1},name:{type:String,default:""}},emits:["blur"],setup(e,{emit:t}){const l=t,w=a(),R=!!o().default,j=x(),S=r(),$=()=>{S.value.focus()},z=d(!1),B=()=>{z.value=!0},E=()=>{z.value=!1,l("blur")},F=s((()=>!!R&&!w.value&&!z.value));return(t,l)=>{const a=_,o=b;return n(),i("div",k,[u(o,{trigger:"focus",placement:"top-start","display-directive":"show",disabled:!R,style:v({"--n-color":m(j).primaryColor,"--n-text-color":"#fff"})},{trigger:p((()=>[u(a,c({ref_key:"inputRef",ref:S},t.$attrs,{type:"textarea",placeholder:e.placeholder,"input-props":{name:e.name,spellcheck:!1},autosize:{minRows:e.rows,maxRows:e.rows},readonly:e.readonly,onFocus:B,onBlur:E}),null,16,["placeholder","input-props","autosize","readonly"])])),default:p((()=>[f("div",C,[y(t.$slots,"default",{},void 0,!0)])])),_:3},8,["disabled","style"]),g(f("div",{class:"placeholder",onClick:$},[y(t.$slots,"default",{},void 0,!0)],512),[[h,m(F)]])])}}});e("_",w(R,[["__scopeId","data-v-1d0d33d8"]]))}}}));
