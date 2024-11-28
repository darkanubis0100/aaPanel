import{a8 as t,i as e,k as a,w as n,_ as i,I as s,bi as o,bj as l,bk as r,h as d,J as c,S as u,a0 as m,a7 as p,f as x,ba as y,m as v,E as A,n as f}from"./page_layout.js?v=1732601582185";import{b as h,q as g}from"./public.js?v=1732601582185";import{O as b,P as _,M,d as S,r as w,aB as C,f as I,k,v as B,R as T,ap as N,t as O,W as q,aq as W,ag as J,e as Y,aC as R,Y as z,F as U,L as E,c as Q,Z as L,ac as F,Q as G,x as P,X as j}from"./vue.js?v=1732601582185";import{D as V,bP as Z,bQ as D,aa as H,bm as K,bJ as X,bL as $,bo as tt,bl as et,bZ as at}from"./naive.js?v=1732601582185";import{j as nt,R as it,I as st}from"./common.js?v=1732601582185";import{_ as ot}from"./index.vue_vue_type_script_setup_true_lang15.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const lt=a=>t.post("/config?action=SetControl",a,{requestOptions:{loading:e.global.t("Monitor.API.system_1"),successMessage:!0}}),rt=e=>t.post("/ajax?action=GetCpuIo",e),dt={class:"flex-center h-full"};const ct=a({},[["render",function(t,e){const a=V;return b(),_("div",dt,[M(a,{size:"large"})])}]]),ut=["title"],mt=S({__name:"index",setup(t){const e=w(null),a=w(null),{isFullscreen:s,toggle:o}=C(a),l=()=>{o()};return I((()=>{e.value&&(a.value=n(e.value,"n-card"))})),(t,a)=>{const n=i;return k((b(),_("div",{ref_key:"iconRef",ref:e,class:"inline-flex cursor-pointer ml-8px",title:t.$t("Monitor.System.index_27"),onClick:l},[M(n,{ref_key:"iconRef",ref:e,name:"base-full-exit",size:"22"},null,512)],8,ut)),[[B,T(s)]])}}}),pt={class:"flex"},xt=a(S({__name:"index",props:N({day:{default:30}},{value:{default:()=>[]},valueModifiers:{}}),emits:N(["refresh"],["update:value"]),setup(t,{emit:e}){const a=O(t,"day"),n=e,{t:d}=q(),c=W(t,"value"),u=w(),m=w(),p=w("today"),x=w(null),y=w(!1),v=[{label:d("Public.Search.Yesterday"),value:"yesterday"},{label:d("Public.Search.Today"),value:"today"},{label:d("Public.Search.Last7"),value:"7"}],{x:A,y:f,width:h,height:g}=J(u),S=Y((()=>A.value+h.value)),C=Y((()=>f.value+g.value));R(m,(()=>{y.value=!1}));const I=t=>{"custom"!==t&&(x.value=null,c.value=P())},k=t=>{s(t)&&t[0]!==t[1]&&(c.value=t.map((t=>o(t))),y.value=!1)},B=()=>{y.value||(y.value=!0)},N=t=>{const e=new Date,n=nt(e,-a.value);return it(n).getTime()>=t||it(e).getTime()<t};function P(){const t=new Date;let e={start:it(t),end:t};switch(p.value){case"yesterday":e=l(nt(t,-1));break;case"7":e.start=it(nt(t,-6))}return[o(e.start),o(e.end)]}0===c.value.length&&(c.value=P());const j=()=>{n("refresh")};return(t,e)=>{const a=Z,n=D,s=i,o=H,l=r,d=K;return b(),_("div",pt,[M(n,{value:T(p),"onUpdate:value":[e[0]||(e[0]=t=>F(p)?p.value=t:null),I],size:"small"},{default:z((()=>[(b(),_(U,null,E(v,(t=>M(a,{key:t.value,value:t.value},{default:z((()=>[Q(L(t.label),1)])),_:2},1032,["value"]))),64)),M(a,{ref_key:"customRef",ref:u,value:"custom",onClick:B},{default:z((()=>[Q(L(t.$t("Public.Search.Custom")),1)])),_:1},512)])),_:1},8,["value"]),M(o,{size:"small",class:"ml-10px px-8px",onClick:j},{default:z((()=>[M(s,{name:"refresh",size:"14"})])),_:1}),M(d,{show:T(y),placement:"bottom",trigger:"manual",x:T(S),y:T(C),"show-arrow":!1,style:{padding:0}},{trigger:z((()=>e[2]||(e[2]=[G("div",{class:"hidden"},null,-1)]))),default:z((()=>[G("div",{ref_key:"popoverContentRef",ref:m},[M(l,{value:T(x),"onUpdate:value":[e[1]||(e[1]=t=>F(x)?x.value=t:null),k],type:"daterange",panel:!0,actions:null,"is-date-disabled":N},null,8,["value"])],512)])),_:1},8,["show","x","y"])])}}}),[["__scopeId","data-v-510567b2"]]),yt=["title"],vt=S({__name:"index",setup(t){const e=w(null),a=w(null),{isFullscreen:s,toggle:o}=C(a),l=()=>{o()};return I((()=>{e.value&&(a.value=n(e.value,"n-card"))})),(t,a)=>{const n=i;return k((b(),_("div",{ref_key:"iconRef",ref:e,class:"inline-flex cursor-pointer ml-8px",title:t.$t("Monitor.System.index_26"),onClick:l},[M(n,{ref_key:"iconRef",ref:e,name:"base-full",size:"22"},null,512)],8,yt)),[[B,!T(s)]])}}});function At(){const{t:t}=q();function e(t,e){let a=0;const n=(e-t)/3600/1e3,i=n/24;return a=n<=1?.02:n<=3?.5:n<=6?1:n<=12?3:n<=20?6:n<=24?8:i<=3?14:i<=7?24:168,36e5*a}return{option:P({}),getAddTime:function(t,e){const a=new Date,n=a.getMonth()+1,i=e.split(" ")[0].split("/"),s=parseInt(i[0]),o=t.split(" "),l=o[0].split("/"),r=o[1].split(":"),d=parseInt(l[0]);let c=a.getFullYear();(d>n||12==d&&d==s)&&(c-=1);const u=parseInt(l[1]),m=parseInt(r[0]),p=parseInt(r[1]);return new Date(c,d-1,u,m,p).getTime()},getInterval:e,renderTooltip:function(){return{trigger:"axis",axisPointer:{type:"cross"},padding:0,backgroundColor:"rgba(255, 255, 255, 0.95)",borderColor:"#eee",position:(t,e,a,i,s)=>function(t,e){var a;const i=e.size.contentSize[0],s=e.size.contentSize[1],o=window.innerWidth,l=window.innerHeight,r=null==(a=n(t,"n-spin-content"))?void 0:a.getBoundingClientRect(),d=e.pos[0]+((null==r?void 0:r.left)||0),c=e.pos[1]+((null==r?void 0:r.top)||0);let u=0,m=0;return m=d+i+80<o?e.pos[0]+20:e.pos[0]-i-20,u=c+s+80<l?e.pos[1]+20:e.pos[1]-s-20,c-s<0&&(u=0-((null==r?void 0:r.top)||0)+10),[m,u]}(a,{pos:t,size:s})}},renderTable:function(e,a=""){let n="",i="",s=[{title:"PID",index:1},{title:t("Monitor.System.index_28"),width:"120px",index:2},{title:t("Monitor.System.index_29"),index:0,render:t=>"".concat(t[0],"%")},{title:t("Monitor.System.index_30"),index:4}];return"memory"===a&&(s=[{title:"PID",index:1},{title:t("Monitor.System.index_28"),width:"120px",index:2},{title:t("Monitor.System.index_31"),index:0,render:t=>d(c(t[0]))},{title:t("Monitor.System.index_30"),index:4}]),"disk"===a&&(s=[{title:"PID",index:3},{title:t("Monitor.System.index_28"),width:"100px",index:4},{title:t("Monitor.System.index_32"),index:0,render:t=>d(c(t[0]))},{title:t("Monitor.System.index_18"),index:1,render:t=>d(c(t[1]))},{title:t("Monitor.System.index_19"),index:2,render:t=>d(c(t[2]))},{title:t("Monitor.System.index_30"),index:6}]),s.forEach((t=>{n+='<th style="width: '.concat(t.width||"auto",';">').concat(t.title,"</th>")})),e.forEach((t=>{let e="";s.forEach((a=>{e+='<td style="width: '.concat(a.width||"auto",';">\n\t\t\t\t\t').concat(a.render?a.render(t):t[a.index],"\n\t\t\t\t</td>")})),i+="<tr>".concat(e,"</tr>")})),'<div class="process-top5">\n\t\t\t<div class="process-header"></div>\n\t\t\t<table>\n\t\t\t\t<thead>'.concat(n,"</thead>\n\t\t\t\t<tbody>").concat(i,"</tbody>\n\t\t\t</table>\n\t\t</div>")},renderDataZoom:function(t,e){return[{type:"inside",start:0,end:100,zoomLock:!0,...t},{type:"slider",bottom:24,start:0,end:100,handleIcon:"path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",handleSize:"80%",handleStyle:{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2},...e}]},renderXAxis:function(t,a){return{type:"time",min:t,minInterval:e(t,a),axisLine:{lineStyle:{color:"#666"}},axisLabel:{formatter(t){const e=u(t,"MM-dd HH:mm").split(" ");return"".concat(e[0],"\n").concat(e[1])}}}},renderYAxis:function(t){return{name:t,scale:!0,min:0,splitLine:{show:!0,lineStyle:{color:"#ddd"}},nameTextStyle:{color:"#666",fontSize:12,align:"left"},axisLine:{lineStyle:{color:"#666"}}}},renderSeries:function(t,e){return{name:t,smooth:!0,symbol:"circle",showSymbol:!1,itemStyle:{color:e},lineStyle:{width:2,color:e}}}}}const ft={class:"flex items-center"},ht=S({__name:"system-load",props:{day:{default:30}},setup(e){const{t:a}=q(),n=new Date,i=w([o(it(n)),o(n)]),l=w(!1),{option:r,getAddTime:d,renderTooltip:x,renderTable:y,renderXAxis:v,renderYAxis:A,renderSeries:f,renderDataZoom:g}=At();const{loading:_,setLoading:S}=h(),C=async()=>{try{S(!0);const{message:n}=await(e={start:i.value[0],end:i.value[1]},t.post("/ajax?action=get_load_average",e));if(s(n)){const t=[],e=[],s=[],o=[];for(let a=0;a<n.length;a++){const i=n[a];i.time=d(i.addtime,n[n.length-1].addtime),e.push([i.time,i.pro,i]),t.push([i.time,i.one,i]),s.push([i.time,i.five,i]),o.push([i.time,i.fifteen,i])}let m=i.value[1],h=i.value[0];n.length>0?(m=n[0].time,h=st(n[n.length-1].time).getTime(),l.value=!1):l.value=!0,function(t,e,n){r.value={legend:{top:"16px",right:"16%",data:[a("Monitor.System.index_9"),a("Monitor.System.index_10"),a("Monitor.System.index_11")]},tooltip:{...x(),formatter(t){let e="",n="",i="";const s=Object.entries(t);return s.forEach((([t,o])=>{const{data:l}=o,[,r,d]=l;if(s.length>1&&"0"===t){const t=d.pro;n+='<div class="select-data">\n\t\t\t\t\t\t\t<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:rgb(255, 140, 0);"></span>\n\t\t\t\t\t\t\t<span>'.concat(a("Monitor.System.index_14")).concat(p(t)?t.toFixed(2):0,"%</span>\n\t\t\t\t\t\t</div>")}"0"===t&&(i=y(d.cpu_top)),e=o.axisValue,n+='<div class="select-data">\n\t\t\t\t\t\t'.concat(o.marker,"\n\t\t\t\t\t\t<span>").concat(o.seriesName,"：").concat(p(r)?r.toFixed(2):0,"%</span>\n\t\t\t\t\t</div>")})),'<div class="echarts-tooltip" style="width: 440px;">\n\t\t\t\t\t<div class="formatter-header">\n\t\t\t\t\t\t<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAgBJREFUWIXtWN1xgzAMlkQ3YoCaYaJji8AWPjJM3AEYCasPNT3XZ2xBk17b43uCiy190b8AOHHixN8GPkpQ3/cmfrfWukfIPUyw73vjvTci8oqIJndGRBwivk3TNPwoQWYeAOC689p4hOgugsFq971KYhBRt8f9pD3IzEOOnIg4ABiJqCOibpomBIARAMbw2xd47+/BAyqoLJiznIi4pmnGmjW2rK615IuGYEbBeLvdBs3dQALTuA0yqwZqageCYBOTOxLs8zy7tm0xltW2Lc7z7Er3qv+AmSV+DzF2GJfL5R6XpZqri0mSBjMRdd8hBwDQNM0Yv3vvTel8kaCIvEbPTpMQaUdJYa11cXbHOnIoJknsCkR8KxFbluW6WoOZi64LskyqI4dNC9YsEcN7f08VLcuy2WmIyGl1qQv1VuZuCUfEqrs1UBN8hLIVT2l1JWW5llYisqfVbRJMhZfKQVo6RMTtKUklixazOMxzJjxvloO1na1hUHNhmCE/dZTOFl0clxZN0FtrVbVSW76qBNNyUCodWqSDR62vFwkGa3zGFyKaPQGeInN3zJ2LoWr86cAAByaa3JqgGTxU8yARdYlrrsx81QydaxuEryObevBQj05bi9K6uQF8xNOaSJWNT+2BX780/a+1MwUzD5rFnYiq9fEpBGM869PHiRMn/jreAZxNPtSJHlfLAAAAAElFTkSuQmCC" alt="path" />\n\t\t\t\t\t\t<span>'.concat(a("Monitor.System.index_15")).concat(e?u(e):"--",'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="formatter-body">\n\t\t\t\t\t\t').concat(n,"\n\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>")}},dataZoom:g({xAxisIndex:[0,1]},{left:"5%",right:"5%",xAxisIndex:[0,1]}),grid:[{left:"5%",bottom:92,right:"55%",width:"40%",height:"auto"},{bottom:92,left:"55%",width:"40%",height:"auto"}],xAxis:[{...v(t,e),gridIndex:0},{...v(t,e),gridIndex:1}],yAxis:[{...A(a("Monitor.System.index_12")),gridIndex:0,max:function(t){return t.max>=100?Math.ceil(t.max):t.max>=80?100:c((t.max+10).toString().slice(0,1)+"0")}},{...A(a("Monitor.System.index_13")),gridIndex:1}],series:[{type:"line",xAxisIndex:0,yAxisIndex:0,data:n.pro,...f(a("Monitor.System.index_12"),"rgb(255, 140, 0)")},{type:"line",xAxisIndex:1,yAxisIndex:1,data:n.one,...f(a("Monitor.System.index_9"),"rgb(30, 144, 255)")},{type:"line",xAxisIndex:1,yAxisIndex:1,data:n.five,...f(a("Monitor.System.index_10"),"rgb(0, 178, 45)")},{type:"line",xAxisIndex:1,yAxisIndex:1,data:n.fifteen,...f(a("Monitor.System.index_11"),"rgb(147, 38, 255)")}]}}(h,m,{one:t,pro:e,five:s,fifteen:o})}}finally{S(!1)}var e};return C(),(t,e)=>{const a=vt,n=xt,s=mt,o=ct,d=m,c=X;return b(),j(c,{class:"h-388px"},{header:z((()=>[G("div",ft,[G("span",null,L(t.$t("Monitor.System.index_8")),1),M(a)])])),"header-extra":z((()=>[M(n,{value:T(i),"onUpdate:value":[e[0]||(e[0]=t=>F(i)?i.value=t:null),C],day:t.day,onRefresh:C},null,8,["value","day"]),M(s)])),default:z((()=>[M(d,{class:"h-full",show:T(_)},{default:z((()=>[T(l)?(b(),j(o,{key:0})):(b(),j(ot,{key:1,type:"line",height:"100%",option:T(r)},null,8,["option"]))])),_:1},8,["show"])])),_:1})}}}),gt={class:"flex items-center"},bt=S({__name:"system-cpu",props:{day:{default:30}},setup(t){const{t:e}=q(),a=new Date,n=w([o(it(a)),o(a)]),i=w(!1),{option:l,getAddTime:r,renderTooltip:d,renderTable:c,renderXAxis:x,renderYAxis:y,renderSeries:v,renderDataZoom:A}=At();const{loading:f,setLoading:g}=h(),_=async()=>{try{g(!0);const{message:t}=await rt({start:n.value[0],end:n.value[1]});if(s(t)){const a=[];for(let e=0;e<t.length;e++){const n=t[e];n.time=r(n.addtime,t[t.length-1].addtime),a.push([n.time,n.pro,n])}let s=n.value[1],o=n.value[0];t.length>0?(s=t[0].time,o=st(t[t.length-1].time).getTime(),i.value=!1):i.value=!0,function(t,a,n){l.value={tooltip:{...d(),formatter(t){let a="",n="",i="";return Object.entries(t).forEach((([t,e])=>{const{data:s}=e,[,o,l]=s;"0"===t&&(i=c(l.cpu_top)),a=e.axisValue,n+='<div class="select-data">\n\t\t\t\t\t\t'.concat(e.marker,"\n\t\t\t\t\t\t<span>").concat(e.seriesName,"：").concat(p(o)?o.toFixed(2):0,"%</span>\n\t\t\t\t\t</div>")})),'<div class="echarts-tooltip" style="width: 440px;">\n\t\t\t\t\t<div class="formatter-header">\n\t\t\t\t\t\t<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAgBJREFUWIXtWN1xgzAMlkQ3YoCaYaJji8AWPjJM3AEYCasPNT3XZ2xBk17b43uCiy190b8AOHHixN8GPkpQ3/cmfrfWukfIPUyw73vjvTci8oqIJndGRBwivk3TNPwoQWYeAOC689p4hOgugsFq971KYhBRt8f9pD3IzEOOnIg4ABiJqCOibpomBIARAMbw2xd47+/BAyqoLJiznIi4pmnGmjW2rK615IuGYEbBeLvdBs3dQALTuA0yqwZqageCYBOTOxLs8zy7tm0xltW2Lc7z7Er3qv+AmSV+DzF2GJfL5R6XpZqri0mSBjMRdd8hBwDQNM0Yv3vvTel8kaCIvEbPTpMQaUdJYa11cXbHOnIoJknsCkR8KxFbluW6WoOZi64LskyqI4dNC9YsEcN7f08VLcuy2WmIyGl1qQv1VuZuCUfEqrs1UBN8hLIVT2l1JWW5llYisqfVbRJMhZfKQVo6RMTtKUklixazOMxzJjxvloO1na1hUHNhmCE/dZTOFl0clxZN0FtrVbVSW76qBNNyUCodWqSDR62vFwkGa3zGFyKaPQGeInN3zJ2LoWr86cAAByaa3JqgGTxU8yARdYlrrsx81QydaxuEryObevBQj05bi9K6uQF8xNOaSJWNT+2BX780/a+1MwUzD5rFnYiq9fEpBGM869PHiRMn/jreAZxNPtSJHlfLAAAAAElFTkSuQmCC" alt="path" />\n\t\t\t\t\t\t<span>'.concat(e("Monitor.System.index_15")).concat(a?u(a):"--",'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="formatter-body">\n\t\t\t\t\t\t').concat(n,"\n\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>")}},grid:{bottom:92},dataZoom:A(),xAxis:{...x(t,a)},yAxis:{...y("CPU"),max:100},series:[{type:"line",data:n.cpu,...v("CPU","rgb(0, 153, 238)")}]}}(o,s,{cpu:a})}}finally{g(!1)}};return _(),(t,e)=>{const a=vt,s=xt,o=mt,r=ct,d=m,c=X;return b(),j(c,{class:"h-388px"},{header:z((()=>[G("div",gt,[e[1]||(e[1]=G("span",null,"CPU",-1)),M(a)])])),"header-extra":z((()=>[M(s,{value:T(n),"onUpdate:value":[e[0]||(e[0]=t=>F(n)?n.value=t:null),_],day:t.day,onRefresh:_},null,8,["value","day"]),M(o)])),default:z((()=>[M(d,{class:"h-full",show:T(f)},{default:z((()=>[T(i)?(b(),j(r,{key:0})):(b(),j(ot,{key:1,type:"line",height:"100%",option:T(l)},null,8,["option"]))])),_:1},8,["show"])])),_:1})}}}),_t={class:"flex items-center"},Mt=S({__name:"system-memory",props:{day:{default:30}},setup(t){const{t:e}=q(),a=new Date,n=w([o(it(a)),o(a)]),i=w(!1),{option:l,getAddTime:r,renderTooltip:d,renderTable:c,renderXAxis:x,renderYAxis:y,renderSeries:v,renderDataZoom:A}=At();const{loading:f,setLoading:g}=h(),_=async()=>{try{g(!0);const{message:t}=await rt({start:n.value[0],end:n.value[1]});if(s(t)){const a=[];for(let e=0;e<t.length;e++){const n=t[e];n.time=r(n.addtime,t[t.length-1].addtime),a.push([n.time,n.mem,n])}let s=n.value[1],o=n.value[0];t.length>0?(s=t[0].time,o=st(t[t.length-1].time).getTime(),i.value=!1):i.value=!0,function(t,a,n){l.value={tooltip:{...d(),formatter(t){let a="",n="",i="";return Object.entries(t).forEach((([t,e])=>{const{data:s}=e,[,o,l]=s;"0"===t&&(i=c(l.memory_top,"memory")),a=e.axisValue,n+='<div class="select-data">\n\t\t\t\t\t\t'.concat(e.marker,"\n\t\t\t\t\t\t<span>").concat(e.seriesName,"：").concat(p(o)?o.toFixed(2):0,"%</span>\n\t\t\t\t\t</div>")})),'<div class="echarts-tooltip" style="width: 480px;">\n\t\t\t\t\t<div class="formatter-header">\n\t\t\t\t\t\t<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAgBJREFUWIXtWN1xgzAMlkQ3YoCaYaJji8AWPjJM3AEYCasPNT3XZ2xBk17b43uCiy190b8AOHHixN8GPkpQ3/cmfrfWukfIPUyw73vjvTci8oqIJndGRBwivk3TNPwoQWYeAOC689p4hOgugsFq971KYhBRt8f9pD3IzEOOnIg4ABiJqCOibpomBIARAMbw2xd47+/BAyqoLJiznIi4pmnGmjW2rK615IuGYEbBeLvdBs3dQALTuA0yqwZqageCYBOTOxLs8zy7tm0xltW2Lc7z7Er3qv+AmSV+DzF2GJfL5R6XpZqri0mSBjMRdd8hBwDQNM0Yv3vvTel8kaCIvEbPTpMQaUdJYa11cXbHOnIoJknsCkR8KxFbluW6WoOZi64LskyqI4dNC9YsEcN7f08VLcuy2WmIyGl1qQv1VuZuCUfEqrs1UBN8hLIVT2l1JWW5llYisqfVbRJMhZfKQVo6RMTtKUklixazOMxzJjxvloO1na1hUHNhmCE/dZTOFl0clxZN0FtrVbVSW76qBNNyUCodWqSDR62vFwkGa3zGFyKaPQGeInN3zJ2LoWr86cAAByaa3JqgGTxU8yARdYlrrsx81QydaxuEryObevBQj05bi9K6uQF8xNOaSJWNT+2BX780/a+1MwUzD5rFnYiq9fEpBGM869PHiRMn/jreAZxNPtSJHlfLAAAAAElFTkSuQmCC" alt="path" />\n\t\t\t\t\t\t<span>'.concat(e("Monitor.System.index_15")).concat(a?u(a):"--",'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="formatter-body">\n\t\t\t\t\t\t').concat(n,"\n\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>")}},grid:{bottom:92},dataZoom:A(),xAxis:{...x(t,a)},yAxis:{...y(e("Monitor.System.index_16")),max:100},series:[{type:"line",data:n.memory,...v("CPU","rgb(0, 153, 238)")}]}}(o,s,{memory:a})}}finally{g(!1)}};return _(),(t,e)=>{const a=vt,s=xt,o=mt,r=ct,d=m,c=X;return b(),j(c,{class:"h-388px"},{header:z((()=>[G("div",_t,[G("span",null,L(t.$t("Monitor.System.index_16")),1),M(a)])])),"header-extra":z((()=>[M(s,{value:T(n),"onUpdate:value":[e[0]||(e[0]=t=>F(n)?n.value=t:null),_],day:t.day,onRefresh:_},null,8,["value","day"]),M(o)])),default:z((()=>[M(d,{class:"h-full",show:T(f)},{default:z((()=>[T(i)?(b(),j(r,{key:0})):(b(),j(ot,{key:1,type:"line",height:"100%",option:T(l)},null,8,["option"]))])),_:1},8,["show"])])),_:1})}}}),St={class:"flex items-center"},wt="KB",Ct=S({__name:"system-disk",props:{day:{default:30}},setup(e){const{t:a}=q(),n=new Date,i=w([o(it(n)),o(n)]),l=w(!1),{option:r,getAddTime:x,renderTooltip:y,renderTable:v,renderXAxis:A,renderYAxis:f,renderSeries:g,renderDataZoom:_}=At();const{loading:S,setLoading:C}=h(),I=t=>c(d(t,!1,3,wt)),k=async()=>{try{C(!0);const{message:n}=await(e={start:i.value[0],end:i.value[1]},t.post("/ajax?action=GetDiskIo",e));if(s(n)){const t=[],e=[],s=[],o=[];for(let i=0;i<n.length;i++){const o=n[i],l=I(o.read_bytes),r=I(o.write_bytes),d=o.read_time+o.write_time;o.time=x(o.addtime,n[n.length-1].addtime),t.push([o.time,l,o,"".concat(wt,"/s")]),e.push([o.time,r,o,"".concat(wt,"/s")]),s.push([o.time,d,o,"".concat(a("Public.Unit.Time",d),"/s")]),s.push([o.time,o.read_count+o.write_count,o,"ms"])}let d=i.value[1],c=i.value[0];n.length>0?(d=n[0].time,c=st(n[n.length-1].time).getTime(),l.value=!1):l.value=!0,function(t,e,n){r.value={legend:{top:"16px",data:[a("Monitor.System.index_18"),a("Monitor.System.index_19"),a("Monitor.System.index_20"),a("Monitor.System.index_21")]},tooltip:{...y(),formatter(t){let e="",n="",i="";return Object.entries(t).forEach((([t,a])=>{const{data:s}=a,[,o,l,r]=s;"0"===t&&(i=v(l.disk_top,"disk")),e=a.axisValue,n+='<div class="select-data">\n\t\t\t\t\t\t'.concat(a.marker,"\n\t\t\t\t\t\t<span>").concat(a.seriesName,"：").concat(p(o)?o.toFixed(2):0,"  ").concat(r,"</span>\n\t\t\t\t\t</div>")})),'<div class="echarts-tooltip" style="width: 560px;">\n\t\t\t\t\t<div class="formatter-header">\n\t\t\t\t\t\t<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAgBJREFUWIXtWN1xgzAMlkQ3YoCaYaJji8AWPjJM3AEYCasPNT3XZ2xBk17b43uCiy190b8AOHHixN8GPkpQ3/cmfrfWukfIPUyw73vjvTci8oqIJndGRBwivk3TNPwoQWYeAOC689p4hOgugsFq971KYhBRt8f9pD3IzEOOnIg4ABiJqCOibpomBIARAMbw2xd47+/BAyqoLJiznIi4pmnGmjW2rK615IuGYEbBeLvdBs3dQALTuA0yqwZqageCYBOTOxLs8zy7tm0xltW2Lc7z7Er3qv+AmSV+DzF2GJfL5R6XpZqri0mSBjMRdd8hBwDQNM0Yv3vvTel8kaCIvEbPTpMQaUdJYa11cXbHOnIoJknsCkR8KxFbluW6WoOZi64LskyqI4dNC9YsEcN7f08VLcuy2WmIyGl1qQv1VuZuCUfEqrs1UBN8hLIVT2l1JWW5llYisqfVbRJMhZfKQVo6RMTtKUklixazOMxzJjxvloO1na1hUHNhmCE/dZTOFl0clxZN0FtrVbVSW76qBNNyUCodWqSDR62vFwkGa3zGFyKaPQGeInN3zJ2LoWr86cAAByaa3JqgGTxU8yARdYlrrsx81QydaxuEryObevBQj05bi9K6uQF8xNOaSJWNT+2BX780/a+1MwUzD5rFnYiq9fEpBGM869PHiRMn/jreAZxNPtSJHlfLAAAAAElFTkSuQmCC" alt="path" />\n\t\t\t\t\t\t<span>'.concat(a("Monitor.System.index_15")).concat(e?u(e):"--",'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="formatter-body">\n\t\t\t\t\t\t').concat(n,"\n\t\t\t\t\t\t").concat(i,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>")}},grid:{bottom:92},dataZoom:_(),xAxis:{...A(t,e)},yAxis:{...f(a("Monitor.System.index_22",[wt]))},series:[{type:"line",data:n.read,...g(a("Monitor.System.index_18"),"rgb(255, 70, 131)")},{type:"line",data:n.write,...g(a("Monitor.System.index_19"),"rgba(46, 165, 186, .7)")},{type:"line",data:n.countTotal,...g(a("Monitor.System.index_20"),"rgba(30, 144, 255)")},{type:"line",data:n.timeTotal,...g(a("Monitor.System.index_21"),"rgba(255, 140, 0)")}]}}(c,d,{read:t,write:e,timeTotal:s,countTotal:o})}}finally{C(!1)}var e};return k(),(t,e)=>{const a=vt,n=xt,s=mt,o=ct,d=m,c=X;return b(),j(c,{class:"h-388px"},{header:z((()=>[G("div",St,[G("span",null,L(t.$t("Monitor.System.index_17")),1),M(a)])])),"header-extra":z((()=>[M(n,{value:T(i),"onUpdate:value":[e[0]||(e[0]=t=>F(i)?i.value=t:null),k],day:t.day,onRefresh:k},null,8,["value","day"]),M(s)])),default:z((()=>[M(d,{class:"h-full",show:T(S)},{default:z((()=>[T(l)?(b(),j(o,{key:0})):(b(),j(ot,{key:1,type:"line",height:"100%",option:T(r)},null,8,["option"]))])),_:1},8,["show"])])),_:1})}}}),It={class:"flex whitespace-pre-wrap items-center"},kt={class:"w-100px"},Bt="KB",Tt=S({__name:"system-network",props:{day:{default:30}},setup(e){const{t:a}=q(),n=new Date,i=w([o(it(n)),o(n)]),l=w("all"),r=w([]),x=w(!1),{option:y,getAddTime:v,renderTooltip:A,renderXAxis:f,renderYAxis:g,renderSeries:_,renderDataZoom:S}=At();const{loading:C,setLoading:I}=h(),k=t=>c(d(1024*t,!1,3,Bt)),B=t=>{r.value.length>0||(r.value=Object.keys(t).map((t=>({label:t,value:t}))),r.value.unshift({label:a("Public.All"),value:"all"}))},N=async()=>{try{I(!0);const{message:n}=await(e={start:i.value[0],end:i.value[1]},t.post("/ajax?action=GetNetWorkIo",e));if(s(n)){const t=[],e=[];for(let a=0;a<n.length;a++){const i=n[a],s="all"===l.value?i.up:i.up_packets[l.value],o="all"===l.value?i.down:i.down_packets[l.value],r=k(s),d=k(o);i.time=v(i.addtime,n[n.length-1].addtime),t.push([i.time,r,i,"".concat(Bt,"/s")]),e.push([i.time,d,i,"".concat(Bt,"/s")])}let s=i.value[1],o=i.value[0];n.length>0?(s=n[0].time,o=st(n[n.length-1].time).getTime(),x.value=!1,B(n[0].down_packets)):(x.value=!0,B({})),function(t,e,n){y.value={legend:{top:"16px",data:[a("Monitor.System.index_24"),a("Monitor.System.index_25")]},tooltip:{...A(),formatter(t){let e="",n="";return Object.entries(t).forEach((([,t])=>{const{data:a}=t,[,i,,s]=a;e=t.axisValue,n+='<div class="select-data">\n\t\t\t\t\t\t'.concat(t.marker,"\n\t\t\t\t\t\t<span>").concat(t.seriesName,"：").concat(p(i)?i.toFixed(2):0,"  ").concat(s,"</span>\n\t\t\t\t\t</div>")})),'<div class="echarts-tooltip" style="width: 280px;">\n\t\t\t\t\t<div class="formatter-header">\n\t\t\t\t\t\t<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABHNCSVQICAgIfAhkiAAAAgBJREFUWIXtWN1xgzAMlkQ3YoCaYaJji8AWPjJM3AEYCasPNT3XZ2xBk17b43uCiy190b8AOHHixN8GPkpQ3/cmfrfWukfIPUyw73vjvTci8oqIJndGRBwivk3TNPwoQWYeAOC689p4hOgugsFq971KYhBRt8f9pD3IzEOOnIg4ABiJqCOibpomBIARAMbw2xd47+/BAyqoLJiznIi4pmnGmjW2rK615IuGYEbBeLvdBs3dQALTuA0yqwZqageCYBOTOxLs8zy7tm0xltW2Lc7z7Er3qv+AmSV+DzF2GJfL5R6XpZqri0mSBjMRdd8hBwDQNM0Yv3vvTel8kaCIvEbPTpMQaUdJYa11cXbHOnIoJknsCkR8KxFbluW6WoOZi64LskyqI4dNC9YsEcN7f08VLcuy2WmIyGl1qQv1VuZuCUfEqrs1UBN8hLIVT2l1JWW5llYisqfVbRJMhZfKQVo6RMTtKUklixazOMxzJjxvloO1na1hUHNhmCE/dZTOFl0clxZN0FtrVbVSW76qBNNyUCodWqSDR62vFwkGa3zGFyKaPQGeInN3zJ2LoWr86cAAByaa3JqgGTxU8yARdYlrrsx81QydaxuEryObevBQj05bi9K6uQF8xNOaSJWNT+2BX780/a+1MwUzD5rFnYiq9fEpBGM869PHiRMn/jreAZxNPtSJHlfLAAAAAElFTkSuQmCC" alt="path" />\n\t\t\t\t\t\t<span>'.concat(a("Monitor.System.index_15")).concat(e?u(e):"--",'</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="formatter-body">\n\t\t\t\t\t\t').concat(n,"\n\t\t\t\t\t</div>\n\t\t\t\t</div>")}},grid:{bottom:92},dataZoom:S(),xAxis:{...f(t,e)},yAxis:{...g(a("Monitor.System.index_22",[Bt]))},series:[{type:"line",data:n.up,..._(a("Monitor.System.index_24"),"rgb(255, 70, 131)")},{type:"line",data:n.down,..._(a("Monitor.System.index_25"),"rgba(46, 165, 186, .7)")}]}}(o,s,{up:t,down:e})}}finally{I(!1)}var e};return N(),(t,e)=>{const a=$,n=vt,s=xt,o=mt,d=ct,c=m,u=X;return b(),j(u,{class:"h-388px"},{header:z((()=>[G("div",It,[G("span",null,L(t.$t("Monitor.System.index_23")),1),G("div",kt,[M(a,{value:T(l),"onUpdate:value":[e[0]||(e[0]=t=>F(l)?l.value=t:null),N],options:T(r),size:"small","consistent-menu-width":!1},null,8,["value","options"])]),M(n)])])),"header-extra":z((()=>[M(s,{value:T(i),"onUpdate:value":[e[1]||(e[1]=t=>F(i)?i.value=t:null),N],day:t.day,onRefresh:N},null,8,["value","day"]),M(o)])),default:z((()=>[M(c,{class:"h-full",show:T(C)},{default:z((()=>[T(x)?(b(),j(d,{key:0})):(b(),j(ot,{key:1,type:"line",height:"100%",option:T(y)},null,8,["option"]))])),_:1},8,["show"])])),_:1})}}}),Nt={class:"flex items-center flex-wrap"},Ot={class:"inline-flex items-center mr-32px"},qt={class:"mr-12px"},Wt={class:"inline-flex items-center"},Jt={class:"mr-6px"},Yt={class:"w-86px mr-12px"},Rt={class:"inline-flex mx-32px"},zt={class:"mr-16px"},Ut=S({__name:"index",setup(a){const{t:n}=q(),i=w({day:0,status:!1,size:0}),s=async t=>{await lt({type:t?1:0,day:i.value.day}),i.value.status=t},o=async()=>{i.value.day?/^-?\d+$/.test("".concat(i.value.day))?await lt({type:i.value.status?1:0,day:i.value.day}):v.error(n("Monitor.System.index_6")):v.error(n("Monitor.System.index_5"))},l=()=>{g({title:n("Monitor.System.index_4"),content:()=>M("span",{class:"text-error"},[n("Monitor.System.index_7")]),onConfirm:async()=>{await t.post("/config?action=SetControl",{type:"del"},{requestOptions:{loading:e.global.t("Monitor.API.system_2"),successMessage:!0}}),A()}})};return(async()=>{const{message:e}=await(a={type:-1},t.post("/config?action=SetControl",a));var a;x(e)&&(i.value=e)})(),(t,e)=>{const a=tt,n=et,r=H,c=f,u=X,m=at,p=y;return b(),_("div",null,[M(u,{class:"p-16px mb-16px"},{default:z((()=>[G("div",Nt,[G("div",Ot,[G("span",qt,L(t.$t("Monitor.System.index_1")),1),M(a,{value:T(i).status,"onUpdate:value":s},null,8,["value"])]),G("div",Wt,[G("span",Jt,L(t.$t("Monitor.System.index_2")),1),G("div",Yt,[M(n,{value:T(i).day,"onUpdate:value":e[0]||(e[0]=t=>T(i).day=t),min:1,"show-button":!1,placeholder:""},null,8,["value"])]),M(r,{onClick:o},{default:z((()=>[Q(L(t.$t("Monitor.System.index_3")),1)])),_:1})]),G("div",Rt,[M(c,{vertical:""})]),G("span",zt,L(t.$t("Monitor.System.index_33"))+L(T(d)(T(i).size)),1),M(r,{onClick:l},{default:z((()=>[Q(L(t.$t("Monitor.System.index_4")),1)])),_:1})])])),_:1}),M(p,{"x-gap":"16","y-gap":"16",cols:2},{default:z((()=>[M(m,{span:2},{default:z((()=>[M(ht,{day:T(i).day},null,8,["day"])])),_:1}),M(m,{span:1},{default:z((()=>[M(bt,{day:T(i).day},null,8,["day"])])),_:1}),M(m,{span:1},{default:z((()=>[M(Mt,{day:T(i).day},null,8,["day"])])),_:1}),M(m,{span:1},{default:z((()=>[M(Ct,{day:T(i).day},null,8,["day"])])),_:1}),M(m,{span:1},{default:z((()=>[M(Tt,{day:T(i).day},null,8,["day"])])),_:1})])),_:1})])}}});export{Ut as default};
