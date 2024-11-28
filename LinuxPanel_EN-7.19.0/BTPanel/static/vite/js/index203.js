import{h as e,f as t,_ as a,k as l,a1 as i,bd as s}from"./page_layout.js?v=1732601582185";import{b4 as n,b5 as o}from"./site.js?v=1732601582185";import{u as d}from"./public.js?v=1732601582185";import{a as r,_ as u}from"./index.vue_vue_type_script_setup_true_lang13.js?v=1732601582185";import{e as p}from"./file.js?v=1732601582185";import{d as c,W as m,r as x,e as v,O as _,P as S,Q as f,M as h,Z as g,F as b,L as y,Y as w,c as D,R as C,ao as $,ad as T,ac as P,H as k,as as j}from"./vue.js?v=1732601582185";import{bq as H,bm as M,_ as z,bh as R,c0 as I,bl as U}from"./naive.js?v=1732601582185";import"./common.js?v=1732601582185";import"./__commonjsHelpers__.js?v=1732601582185";const O={class:"p-24px"},q={class:"flex"},F={class:"flex-1 ml-14px pt-6px"},L={class:"text-19px font-bold text-#111"},Q={class:"site-content mt-24px"},W={class:"site-size"},Y={class:"site-title"},Z={class:"site-path"},A={class:"value"},B={class:"font-bold text-error"},E={key:1},G={key:0},J={class:"site-time"},K={key:0,class:"site-db"},N={class:"db-name"},V={class:"db-size"},X={class:"db-time"},ee={class:"mt-24px text-13px text-error"},te={key:0},ae={key:1,class:"mt-6px"},le={key:2,class:"mt-6px text-#333"},ie={class:"text-error font-bold"},se={key:3,class:"mt-6px"},ne=l(c({__name:"verify",props:{data:{}},emits:["setConfirm"],setup(l,{expose:i,emit:s}){const{t:o}=m(),d=l,r=s,{rows:u,type:c,delSite:P}=d.data,k=x(!0),j=x(!0),z=v((()=>!!c.find((e=>"database"===e)))),R=v((()=>!!c.find((e=>"path"===e)))),I=x([]),U=x(5);return(()=>{r("setConfirm",{type:"error",disabled:!0,text:o("Site.DelSite.ContentText16",[U.value])});const e=setInterval((()=>{U.value--,r("setConfirm",{text:o("Site.DelSite.ContentText16",[U.value])}),0===U.value&&(clearInterval(e),r("setConfirm",{disabled:!1,text:o("Site.DelSite.ContentText16")}))}),1e3)})(),(async()=>{const{message:e}=await n({ids:u.map((e=>e.id))});t(e)&&(I.value=e.data.map((e=>{const{database:a}=e;return t(a)&&(a.addtime_show=a.addtime.split(" ")[0],a.is_time_rule=Math.round(Date.now()/1e3)-a.st_time>2592e3&&a.total>10240),{...e,addtime_show:e.addtime.split(" ")[0],is_time_rule:Math.round(Date.now()/1e3)-e.st_time>2592e3&&e.total>10240}})))})(),(async()=>{const{message:e}=await p();t(e)&&(k.value=e.status,j.value=e.status_db)})(),i({onConfirm:async({hide:e})=>{await(null==P?void 0:P(e))}}),(l,i)=>{const s=a,n=H,o=M;return _(),S("div",O,[f("div",q,[h(s,{name:"base-warning",size:"34",color:"#f0a020"}),f("div",F,[f("div",L,g(l.$t("Site.DelSite.ContentText7")),1)])]),f("div",Q,[(_(!0),S(b,null,y(C(I),(a=>(_(),S("div",{key:a.name,class:"content-item"},[f("div",W,[f("div",Y,[h(n,null,{default:w((()=>[D(g(l.$t("Site.DelSite.index_3"))+": "+g(a.name),1)])),_:2},1024)]),h(o,{trigger:"hover"},{trigger:w((()=>[f("div",Z,[f("div",null,g(l.$t("Site.DelSite.index_2"))+":",1),f("div",A,g(a.path),1),f("div",null,[i[1]||(i[1]=f("span",null,"(",-1)),a.limit?(_(),S(b,{key:0},[f("span",B,g(l.$t("Site.DelSite.index_9")),1),i[0]||(i[0]=f("span",{class:"glyphicon glyphicon-info-sign text-error"},null,-1))],64)):(_(),S("span",E,g(C(e)(a.total)),1)),i[2]||(i[2]=f("span",null,")",-1))])])])),default:w((()=>[f("div",null,[a.limit?(_(),S("p",G,g(l.$t("Site.DelSite.ContentText8")),1)):$("",!0),f("p",null,[f("span",null,g(l.$t("Site.DelSite.index_4"))+": "+g(a.path),1),f("span",null," ("+g((a.limit?"greater than ":"")+C(e)(a.total))+")",1)])])])),_:2},1024),f("div",J,[h(o,{trigger:"hover",disabled:!a.is_time_rule},{trigger:w((()=>[f("div",null,[f("span",null,g(l.$t("Site.DelSite.index_5"))+": ",1),f("span",{class:T({"text-error":a.is_time_rule})},g(a.addtime_show),3)])])),default:w((()=>[f("div",null,[f("p",null,g(l.$t("Site.DelSite.ContentText9")),1),f("p",null,g(l.$t("Site.DelSite.index_6"))+": "+g(a.addtime_show),1)])])),_:2},1032,["disabled"])])]),C(z)&&C(t)(a.database)?(_(),S("div",K,[f("div",N,[h(n,null,{default:w((()=>[D(g(l.$t("Home.index_70"))+": "+g(a.name),1)])),_:2},1024)]),f("div",V,[h(o,{trigger:"hover"},{trigger:w((()=>[D(g(l.$t("Site.DelSite.index_8"))+": "+g(C(e)(a.database.total)),1)])),default:w((()=>[f("div",null,[f("p",null,g(l.$t("Site.DelSite.ContentText10")),1),f("p",null,g(l.$t("Site.PHP.add_site_16"))+": "+g(C(e)(a.database.total)),1)])])),_:2},1024)]),f("div",X,[h(o,{trigger:"hover",disabled:!a.database.is_time_rule},{trigger:w((()=>[f("div",null,[f("span",null,g(l.$t("Site.DelSite.index_5"))+": ",1),f("span",{class:T({"text-error":a.database.is_time_rule})},g(a.addtime_show),3)])])),default:w((()=>[f("div",null,[f("p",null,g(l.$t("Site.DelSite.ContentText11")),1),f("p",null,g(l.$t("Site.DelSite.index_6"))+": "+g(a.database.addtime_show),1)])])),_:2},1032,["disabled"])])])):$("",!0)])))),128))]),f("div",ee,[C(z)&&!C(j)?(_(),S("div",te,[i[3]||(i[3]=f("span",{class:"glyphicon glyphicon-info-sign"},null,-1)),f("span",null,g(l.$t("Site.DelSite.ContentText12")),1)])):$("",!0),C(R)&&!C(k)?(_(),S("div",ae,[i[4]||(i[4]=f("span",{class:"glyphicon glyphicon-info-sign"},null,-1)),f("span",null,g(l.$t("Site.DelSite.ContentText13")),1)])):$("",!0),C(U)>0?(_(),S("div",le,[f("span",null,g(l.$t("Site.DelSite.ContentText14")),1),f("span",ie,g(C(U)),1),f("span",null,g(l.$t("Site.DelSite.index_1")),1)])):(_(),S("div",se,g(l.$t("Site.DelSite.ContentText15")),1))])])}}}),[["__scopeId","data-v-cda00a56"]]),oe={class:"p-24px"},de={class:"flex pl-12px"},re={class:"flex-1 ml-14px pt-8px"},ue={class:"text-16px font-bold text-#111"},pe={class:"mt-20px"},ce={class:"mr-8px"},me={class:"confirm-calc-box flex items-center h-40px mt-24px mx-12px pl-48px bg-#f0f0f0 text-14px"},xe={class:"confirm-calc-num mx-12px"},ve={class:"w-80px ml-12px"},_e=c({__name:"index",props:{data:{}},setup(e,{expose:t}){const{t:l}=m(),n=e,{rows:p}=n.data,c=i(),b=s(),y=x(null),$=x([]),T=v((()=>1===$.value.length&&"ftp"===$.value[0])),H=x(0),O=x(0),q=x(null),F=x(!1),L=x("");let Q=null;const W=e=>{j((()=>{(e=>{var t;L.value=e,F.value=!0,null==(t=y.value)||t.focus(),Q&&clearTimeout(Q),Q=window.setTimeout((()=>{F.value=!1}),3e3)})(e)}))()},Y=async e=>{1===p.length?(await Z(p[0],!0),b.setRefresh(!0),null==e||e()):A(e)},Z=async(e,t=!1)=>{const a=$.value.reduce(((e,t)=>(e[t]=1,e)),{});return await o(Object.assign({id:e.id,webname:e.name},a),t)},A=e=>{d({title:l("Site.Cert.index_56"),hideClose:!0,component:r,data:{title:l("Site.Cert.index_56"),api:Z,data:p,callback:t=>{e(),B(t)}}})},B=e=>{b.setRefresh(!0),d({title:l("Site.DelSite.index_11"),width:440,footer:!0,component:u,data:{title:l("Site.Cert.index_56"),data:e,status:"done",columns:[{key:"name",title:l("Site.TableRow.index_1"),ellipsis:{tooltip:{width:"trigger"}}}]}})};return q.value=null,H.value=Math.round(9*Math.random()+1),O.value=Math.round(9*Math.random()+1),t({onConfirm:async({hide:e})=>null==q.value||null==q.value?(W(l("Site.DelSite.ContentText5")),!1):q.value!==H.value+O.value?(W(l("Site.DelSite.ContentText6")),!1):void(0===$.value.length||T.value?await Y(e):(d({title:1===p.length?"".concat(l("Site.DelSite.ContentText3")," [").concat(p[0].name,"]"):l("Site.DelSite.ContentText4"),width:740,footer:!0,data:{rows:p,type:$.value,delSite:Y},component:ne}),e()))}),(e,t)=>{const l=a,i=z,s=R,n=I,o=U,d=M;return _(),S("div",oe,[f("div",de,[h(l,{name:"base-warning",size:"34",color:"#f0a020"}),f("div",re,[f("div",ue,[f("div",null,g(e.$t("Site.PHP.index_59")),1),f("div",pe,g(e.$t("Site.PHP.index_60")),1)]),h(n,{value:C($),"onUpdate:value":t[0]||(t[0]=e=>P($)?$.value=e:null)},{default:w((()=>[h(s,{size:32,class:"items-center h-24px mt-24px"},{default:w((()=>[h(i,{value:"ftp"},{default:w((()=>[D(g(e.$t("Site.PHP.add_site_10")),1)])),_:1}),h(i,{value:"database"},{default:w((()=>[f("span",ce,g(e.$t("Site.PHP.add_site_16")),1),t[3]||(t[3]=f("span",{class:"glyphicon glyphicon-info-sign text-error"},null,-1))])),_:1}),h(i,{value:"path"},{default:w((()=>[D(g(e.$t("Site.PHP.index_20")),1)])),_:1})])),_:1})])),_:1},8,["value"])])]),f("div",me,[f("span",null,g(e.$t("Site.DelSite.index_10"))+":",1),f("span",xe,g(C(H))+" + "+g(C(O)),1),t[4]||(t[4]=f("span",null,"=",-1)),f("div",ve,[h(d,{show:C(F),"onUpdate:show":t[2]||(t[2]=e=>P(F)?F.value=e:null),trigger:"manual",placement:"top-start","arrow-point-to-center":!0,style:k({"--n-color":C(c).errorColor,"--n-text-color":"#fff"})},{trigger:w((()=>[h(o,{ref_key:"inputRef",ref:y,value:C(q),"onUpdate:value":t[1]||(t[1]=e=>P(q)?q.value=e:null),size:"small",placeholder:"","show-button":!1,inputProps:{name:"sum"}},null,8,["value"])])),default:w((()=>[f("div",null,g(C(L)),1)])),_:1},8,["show","style"])])])])}}});export{_e as default};
