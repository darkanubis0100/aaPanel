System.register(["./page_layout-legacy.js?v=1732601582185","./alarm-legacy.js?v=1732601582185","./public-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185"],(function(e,l){"use strict";var a,t,n,i,s,o,r,u,p,d,m,c,h,f,g,v;return{setters:[e=>{a=e.I},e=>{t=e.c,n=e.o},e=>{i=e.b},e=>{s=e.d,o=e.ap,r=e.W,u=e.aq,p=e.r,d=e.O,m=e.X,c=e.R,h=e.M,f=e.F,g=e.c},e=>{v=e.bL}],execute:function(){e("_",s({__name:"index",props:o({multiple:{type:Boolean,default:!0}},{value:{},valueModifiers:{}}),emits:["update:value"],setup(e){const{t:l}=r(),{loading:s,setLoading:o}=i(),w=u(e,"value"),b=p([]),_=p([{name:"mail",title:l("Config.Alarm.index_3"),ps:l("Config.Alarm.index_36"),help:"https://www.bt.cn/bbs/thread-66183-1-1.html",list:[]},{name:"dingding",title:l("Config.Alarm.index_5"),ps:l("Config.Alarm.index_37"),help:"https://www.bt.cn/bbs/thread-108081-1-1.html",list:[]},{name:"weixin",title:l("Config.Alarm.index_6"),ps:l("Config.Alarm.index_38"),help:"https://www.bt.cn/bbs/thread-108116-1-1.html",list:[]},{name:"feishu",title:l("Config.Alarm.index_4"),ps:l("Config.Alarm.index_39"),help:"https://www.aapanel.com/forum/d/16942-aapanel-how-does-set-lark-or-feishu-notification",list:[]},{name:"tg",title:"Telegram",ps:"Use Telegram to send and receive panel notifications",help:"https://www.aapanel.com/forum/d/5115-how-to-add-telegram-to-panel-notifications",list:[]}]),x=async()=>{try{o(!0);const{message:e}=await t({refresh:0});b.value=[],a(e)&&(_.value.forEach((l=>{l.list=e.filter((e=>e.sender_type===l.name))})),_.value.forEach((a=>{const t=e.filter((e=>e.used&&e.sender_type===a.name));t.length>0?t.forEach((e=>{b.value.push({label:`${e.data.title} (${a.title})`,value:e.id})})):b.value.push({label:()=>h(f,null,[a.title,g("["),h("a",{class:"bt-link",onClick:()=>{n({row:a,onRefresh:x})}},[l("Public.Btn.Conf")]),g("]")]),value:a.name,disabled:!0})})))}finally{o(!1)}};return x(),(e,l)=>{const a=v;return d(),m(a,{value:w.value,"onUpdate:value":l[0]||(l[0]=e=>w.value=e),loading:c(s),options:c(b),multiple:e.multiple,"max-tag-count":"responsive",placeholder:e.$t("Config.Alarm.index_86")},null,8,["value","loading","options","multiple","placeholder"])}}}))}}}));
