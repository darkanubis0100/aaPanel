import{e,u as a,i as t,a as s,b as n,c as i,d as o,f as r,g as l,m as u,j as m,k as p,l as d}from"./echarts.js?v=1732601582185";import{bc as c}from"./naive.js?v=1732601582185";import{d as f,r as v,w as h,n as g,f as y,o as j,O as w,P as _,H as b,R as x,as as B}from"./vue.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";import"./common.js?v=1732601582185";a([t,s,n,i,o,r,l,u,m,p,d]);const z=f({__name:"index",props:{width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:"200px"},dataZoom:{type:Boolean,default:!1},option:{type:Object,required:!0}},setup(a){const t=a,s=v(null);function n(){if(null===s.value)return;let a=e.getInstanceByDom(s.value);null==a&&(a=e.init(s.value)),a.setOption(t.option,!0)}h((()=>t.option),(e=>{e&&g((()=>{n()}))}),{immediate:!0,deep:!0});const i=B((function(){var a;null!==s.value&&(null==(a=e.getInstanceByDom(s.value))||a.resize())}),300,{maxWait:800});return y((()=>{g((()=>{n(),window.addEventListener("resize",i)}))})),j((()=>{var a;s.value&&(null==(a=e.getInstanceByDom(s.value))||a.dispose(),window.removeEventListener("resize",i))})),(e,t)=>(w(),_("div",{ref_key:"chartRef",ref:s,style:b({width:x(c)(a.width),height:x(c)(a.height)})},null,4))}});export{z as default};
