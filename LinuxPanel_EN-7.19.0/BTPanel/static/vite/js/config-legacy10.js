System.register(["./index.vue_vue_type_script_setup_true_lang-legacy6.js?v=1732601582185","./public-legacy.js?v=1732601582185","./setting-legacy.js?v=1732601582185","./vue-legacy.js?v=1732601582185","./naive-legacy.js?v=1732601582185","./page_layout-legacy.js?v=1732601582185","./common-legacy.js?v=1732601582185","./__commonjsHelpers__-legacy.js?v=1732601582185"],(function(t,e){"use strict";var a,s,n,l,i,u,c,o,g,r,f;return{setters:[t=>{a=t._},t=>{s=t.d,n=t.a},t=>{l=t.a},t=>{i=t.d,u=t.W,c=t.M,o=t.O,g=t.P,r=t.R},t=>{f=t.bo},null,null,null],execute:function(){const e={class:"p-20px"};t("default",i({__name:"config",props:{status:{type:Boolean}},emits:["refresh"],setup(t,{emit:i}){const _=t,y=i,{t:p}=u(),{table:d,columns:m}=s([{key:"title",title:p("Waf.Setting.config_129"),width:120},{key:"ps",title:p("Waf.Setting.config_130")},{key:"status",title:p("Public.Table.Status"),width:60,render:t=>c(f,{value:t.status,onUpdateValue:async e=>{e?(await l({obj:"from_data"}),t.status=e,y("refresh",e)):n({title:p("Waf.Setting.config_131"),content:p("Waf.Setting.config_132"),onConfirm:async()=>{await l({obj:"from_data"}),t.status=e,y("refresh",e)}})}},null)}]);return d.data.push({title:p("Waf.Setting.config_133"),ps:p("Waf.Setting.config_134"),status:_.status}),(t,s)=>{const n=a;return o(),g("div",e,[c(n,{"max-height":340,data:r(d).data,columns:r(m)},null,8,["data","columns"])])}}}))}}}));
