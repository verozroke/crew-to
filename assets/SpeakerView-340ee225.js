import{_ as l,h as p,a as c,b as _,e as n,j as m,g as a,w as r,d as u,t as d,r as f,F as y,l as h,i as w,p as $,f as I,v as V,x as C,o as L}from"./index-6ca6b2ee.js";const M={},B={class:"title"},T={class:"title__container"};function N(t,o){const s=p("v-icon");return c(),_("div",B,[n("div",T,[m("Спикеры и модераторы "),a(s,{style:{"font-size":"100px","margin-left":".2em"}},{default:r(()=>[m("mdi-account-tie")]),_:1})])])}const j=l(M,[["render",N],["__scopeId","data-v-1b4f4538"]]),z={class:"card",style:{"background-image":"url('https://v1.popcornnews.ru/k2/news/1200/upload/news/446128934473.jpg')","background-position":"center","background-repeat":"no-repeat","background-size":"cover"}},A={class:"card__box"},F={class:"card__title"},U={class:"card__occupation"},D={class:"card__text"},E={class:"card__title",style:{"margin-bottom":"10px"}},H={style:{"font-family":"'Montserrat', sans-serif","letter-spacing":".5px",color:"rgb(89, 89, 89)"}},P=u({__name:"SpeakerCard",props:{name:String,occupation:String,text:String,company:String},setup(t){return(o,s)=>(c(),_("div",z,[n("div",A,[n("div",F,d(t.name),1),n("div",U,d(t.occupation)+", "+d(t.company),1)]),n("div",D,[n("div",E,d(t.name),1),n("div",H,d(t.text),1)])]))}});const g=l(P,[["__scopeId","data-v-f9d79798"]]),R={class:"list"},q=u({__name:"SpeakerList",setup(t){const o=f([{id:1,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:2,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:3,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:4,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:5,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"}]);return(s,i)=>(c(),_("div",R,[(c(!0),_(y,null,h(o.value,e=>(c(),w(g,{key:e.id,name:e.name,occupation:e.occupation,company:e.company,text:e.text},null,8,["name","occupation","company","text"]))),128))]))}});const G=l(q,[["__scopeId","data-v-4ff5285b"]]),J={class:"list"},K=u({__name:"ModeratorList",setup(t){const o=f([{id:1,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:2,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:3,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:4,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"},{id:5,name:"Вася Пупкин",occupation:"Обзорщик аниме",company:"ООО Умных",text:"Бро, тебе надо тренироваться"}]);return(s,i)=>(c(),_("div",J,[(c(!0),_(y,null,h(o.value,e=>(c(),w(g,{key:e.id,name:e.name,occupation:e.occupation,company:e.company,text:e.text},null,8,["name","occupation","company","text"]))),128))]))}});const O=l(K,[["__scopeId","data-v-eaea7c27"]]),k=t=>($("data-v-09fb5ce8"),t=t(),I(),t),Q={class:"speaker-info"},W={class:"speaker-info__container"},X=k(()=>n("div",{class:"title"}," Наши спикеры ",-1)),Y=k(()=>n("div",{class:"title"}," Наши модераторы ",-1)),Z=u({__name:"SpeakerInfo",setup(t){const o=f(null);return(s,i)=>{const e=p("v-tab"),S=p("v-tabs"),x=p("v-window-item"),b=p("v-window");return c(),_("div",Q,[n("div",W,[a(S,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=v=>o.value=v),color:"#32cc98",style:{"font-family":"'Montserrat', sans-serif"},"align-tabs":"center"},{default:r(()=>[a(e,{density:"compact",value:"speaker",style:{"text-transform":"none","font-weight":"700 !important",width:"300px"}},{default:r(()=>[m("Спикеры")]),_:1}),a(e,{density:"compact",value:"mod",style:{"text-transform":"none","font-weight":"700 !important",width:"300px"}},{default:r(()=>[m("Модераторы")]),_:1})]),_:1},8,["modelValue"]),a(b,{modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=v=>o.value=v)},{default:r(()=>[a(x,{value:"speaker"},{default:r(()=>[X,a(G)]),_:1}),a(x,{value:"mod"},{default:r(()=>[Y,a(O)]),_:1})]),_:1},8,["modelValue"])])])}}});const ee=l(Z,[["__scopeId","data-v-09fb5ce8"]]),te={class:"speaker"},ae=u({__name:"SpeakerView",setup(t){const o=V(),s=C();return L(()=>{o.fullPath==="/crew-awards"?s.isCrewAwards=!0:s.isCrewAwards=!1,window.scrollTo(0,0)}),(i,e)=>(c(),_("div",te,[a(j),a(ee)]))}});export{ae as default};
