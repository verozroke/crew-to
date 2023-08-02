import{d as h,h as _,a as d,b as m,e as t,g as o,w as s,j as x,p as w,f as g,_ as f,i as y,k as v,s as k,u as j,P as Q,t as b,F as N,l as I,r as C,v as Y,x as O,o as P}from"./index-b5acaf57.js";import{u as T,T as V}from"./TicketDialog-a3740cfa.js";const A=e=>(w("data-v-262ea8c0"),e=e(),g(),e),W={class:"about",id:"about-forum"},E={class:"about__container"},R=A(()=>t("div",{class:"about__title"},"О премии",-1)),U=A(()=>t("div",{class:"about__info"},[t("div",{class:"about__text"},[t("div",null," Премия CREW Central Asia - это ежегодная профессиональная награда, предназначенная для выдающихся проектов недвижимости в регионе Центральной Азии. Она служит признанием инноваций, качества, устойчивости и социальной значимости проектов, вносящих существенный вклад в развитие отрасли. "),t("div",null," Цель премии заключается в поощрении и поддержке выдающихся достижений в области недвижимости Центральной Азии. Программа премии выделяет проекты, превосходящие стандартные показатели, и оказывающие положительное влияние на общество и окружающую среду. Она стимулирует инновационность, качество и устойчивость в создании новых пространств и инфраструктурного развития. "),t("div",null," Победители получают заслуженное признание, репутационные преимущества и возможность установления новых партнерских связей. Более того, участие в премии способствует расширению сети контактов и обмену опытом с ведущими профессионалами недвижимости Центральной Азии. ")]),t("div",{class:"about__image"},[t("iframe",{src:"https://app.vectary.com/p/02yW3ciqUKtbcXAHhIniPn",frameborder:"0",width:"100%",height:"100%"})])],-1)),Z={class:"about__buttons"},B=h({__name:"CrewAbout",setup(e){const n=()=>{const a=document.createElement("a");a.setAttribute("href","/crew-to/storage/ustav.pdf"),a.download="Устав CREW Awards.pdf",a.click()};return(a,i)=>{const c=_("v-btn");return d(),m("div",W,[t("div",E,[R,U,t("div",Z,[o(c,{size:"large",color:"#ffc14d",rounded:"0",class:"text-black","prepend-icon":"mdi-file-delimited",style:{"font-weight":"500","font-family":"'Montserrat', sans-serif"},onClick:n},{default:s(()=>[x("Устав конкурса")]),_:1})])])])}}});const G=f(B,[["__scopeId","data-v-262ea8c0"]]),H="/crew-to/awards-hero/logo.png",J=e=>(w("data-v-78b41dfb"),e=e(),g(),e),L={class:"upper"},F=J(()=>t("iframe",{width:"100%",height:"768",src:" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwNzI5MDV9CTQ4NDM3NzY3MDc2NDYJYjU3ODljZTZmMzdiODQyZGE4YWRiNzY1Yjg3MTcxODU0NzQxNmE1MjQ3NjI1NDQzZmQ3ZjA3YzdmZGQ5NTUzOQ== ",frameborder:"0"},null,-1)),q=h({__name:"PartnerDialog",setup(e){const n=T();return(a,i)=>{const c=_("v-card-title"),r=_("v-btn"),l=_("v-card"),u=_("v-dialog");return d(),y(u,{modelValue:v(n).dialog,"onUpdate:modelValue":i[1]||(i[1]=p=>v(n).dialog=p),style:{"max-width":"900px"}},{default:s(()=>[o(l,null,{default:s(()=>[t("div",L,[o(c,{class:"title"},{default:s(()=>[x(" Стать партнером")]),_:1}),t("div",{onClick:i[0]||(i[0]=p=>v(n).dialog=!1),class:"close"},[o(r,{variant:"text",icon:"mdi-close"})])]),F]),_:1})]),_:1},8,["modelValue"])}}});const K=f(q,[["__scopeId","data-v-78b41dfb"]]),X=e=>(w("data-v-1daf68e8"),e=e(),g(),e),tt={class:"hero__overlay"},et={class:"hero__container"},ot=X(()=>t("div",{class:"hero__logo"},[t("img",{src:H,alt:"Hero Logo CREW Awards Central Asia 2023"})],-1)),st={class:"hero__buttons"},nt=h({__name:"CrewHero",setup(e){const n=T(),a=k(),i=j(),c=r=>{const l=document.getElementById(r);l==null||l.scrollIntoView({behavior:"smooth",block:"start"})};return(r,l)=>{const u=_("v-btn"),p=_("CrewSteps"),M=_("v-icon"),z=_("v-parallax");return d(),y(z,{src:"https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",class:"hero"},{default:s(()=>[t("div",tt,[t("div",et,[ot,t("div",st,[o(u,{width:"250px",size:"large",variant:"outlined",color:"#ffc14d",rounded:"0",style:{"font-weight":"500","font-family":"'Montserrat', sans-serif"},onClick:l[0]||(l[0]=$=>v(n).dialog=!0)},{default:s(()=>[x("Стать партнером")]),_:1}),o(u,{width:"250px",size:"large",color:"#ffc14d",rounded:"0",class:"text-black",style:{"font-weight":"500","font-family":"'Montserrat', sans-serif"},onClick:l[1]||(l[1]=$=>v(a).dialog=!0)},{default:s(()=>[x("Купить билет")]),_:1}),o(u,{width:"250px",size:"large",variant:"outlined",color:"#ffc14d",rounded:"0",style:{"font-weight":"500","font-family":"'Montserrat', sans-serif"},onClick:l[2]||(l[2]=$=>v(i).dialog=!0)},{default:s(()=>[x("Подать заявку")]),_:1})]),o(p),o(u,{icon:"mdi-arrow-down",variant:"text",onClick:l[3]||(l[3]=$=>c("about-forum")),style:{"font-size":"24px",color:"#7a7a7a",position:"absolute",bottom:"30px"}},{default:s(()=>[o(M)]),_:1})])]),o(Q),o(V),o(K)]),_:1})}}});const it=f(nt,[["__scopeId","data-v-1daf68e8"]]),_t=e=>(w("data-v-e21ad347"),e=e(),g(),e),at={class:"item"},ct={class:"item__name"},lt={class:"item__price"},dt=_t(()=>t("div",{class:"item__service-title"},"Пакет включает:",-1)),rt={class:"item__services"},pt=h({__name:"TicketItem",props:{name:String,services:Array,price:String},setup(e){const n=k();return(a,i)=>{const c=_("v-btn");return d(),m("div",at,[t("div",ct,b(e.name),1),t("div",lt,b(e.price)+" тенге",1),dt,t("ul",rt,[(d(!0),m(N,null,I(e.services,r=>(d(),m("li",{class:"item__service",key:r},b(r),1))),128))]),o(c,{onClick:i[0]||(i[0]=r=>v(n).dialog=!0),style:{"margin-top":"20px","font-weight":"600","font-family":"'Montserrat', sans-serif",color:"#1b1a17"},rounded:"0",color:"#ffc14d",size:"large",width:"100%"},{default:s(()=>[x("Купить билет")]),_:1})])}}});const ut=f(pt,[["__scopeId","data-v-e21ad347"]]),mt=e=>(w("data-v-8c290835"),e=e(),g(),e),vt={class:"upper"},ft=mt(()=>t("iframe",{width:"100%",height:"768",src:" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwNzMwMjh9CTQ4NDM3NzY3MDc2NDYJOTQwZGM2NWNkYjFlNDU0Y2QzYzhmZDIyNDRjY2NlNDZiOGQ4M2E2YjhmZTFlNTQyMjBmNjU3NWIyOGJkNjYwOA== ",frameborder:"0"},null,-1)),ht=h({__name:"TicketDialog",setup(e){const n=k();return(a,i)=>{const c=_("v-card-title"),r=_("v-btn"),l=_("v-card"),u=_("v-dialog");return d(),y(u,{modelValue:v(n).dialog,"onUpdate:modelValue":i[1]||(i[1]=p=>v(n).dialog=p),style:{"max-width":"900px"}},{default:s(()=>[o(l,null,{default:s(()=>[t("div",vt,[o(c,{class:"title"},{default:s(()=>[x(" Купить билет ")]),_:1}),t("div",{onClick:i[0]||(i[0]=p=>v(n).dialog=!1),class:"close"},[o(r,{variant:"text",icon:"mdi-close"})])]),ft]),_:1})]),_:1},8,["modelValue"])}}});const xt=f(ht,[["__scopeId","data-v-8c290835"]]),wt=e=>(w("data-v-d005f418"),e=e(),g(),e),gt={class:"ticket"},yt={class:"ticket__container"},bt=wt(()=>t("div",{class:"ticket__title"},"Билеты",-1)),$t={class:"ticket__row"},Ct=h({__name:"СrewTicket",setup(e){const n=C([{id:1,name:"Все включено",price:"300 000",services:["Участие в конференции Central Asia Property","Кофе-брейк","Нетворкинг","Презентации спикеров","Участие в гала-ужине Central Asia Property Awards"]},{id:2,name:"Конференция",price:"150 000",services:["Кофе-брейк","Нетворкинг","Презентации спикеров"]},{id:3,name:"Гала-ужин Central Asia Property Awards",price:"250 000",services:["Фуршет","Концертная часть","Нетворкинг"]}]);return(a,i)=>(d(),m("div",gt,[o(xt),t("div",yt,[bt,t("div",$t,[(d(!0),m(N,null,I(n.value,c=>(d(),y(ut,{key:c.id,name:c.name,price:c.price,services:c.services},null,8,["name","price","services"]))),128))])])]))}});const kt=f(Ct,[["__scopeId","data-v-d005f418"]]),Nt={style:{"letter-spacing":"1px","font-weight":"700","font-size":"18px"},class:"title"},It={class:"text-inner"},St=h({__name:"NominationList",props:{items:{}},setup(e){return(n,a)=>{const i=_("v-icon"),c=_("v-expansion-panel-title"),r=_("v-expansion-panel-text"),l=_("v-expansion-panel"),u=_("v-expansion-panels");return d(),y(u,null,{default:s(()=>[(d(!0),m(N,null,I(n.items,p=>(d(),y(l,{color:"#343432",key:p.id},{default:s(()=>[o(c,{color:"#ffc14d",style:{display:"flex","align-items":"center",gap:"1em","font-family":"'Montserrat', sans-serif"}},{default:s(()=>[o(i,null,{default:s(()=>[x("mdi-trophy-award")]),_:1}),t("div",Nt,b(p.title),1)]),_:2},1024),o(r,{class:"text"},{default:s(()=>[t("div",It,b(p.text),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})}}});const D=f(St,[["__scopeId","data-v-43a7ee0a"]]),S=e=>(w("data-v-314e4ad2"),e=e(),g(),e),Dt={class:"nomination"},Tt={class:"nomination__container"},At=S(()=>t("div",{class:"nomination__title"},"Номинации",-1)),Mt={class:"nomination__box"},zt=S(()=>t("div",{class:"nomination__subtitle"}," Номинации, победители которых автоматически получают право участия в международном этапе Конкурса FIABCI Prix d’Excellence ",-1)),jt={class:"nomination__box"},Qt=S(()=>t("div",{class:"nomination__subtitle"}," Специальные номинации Конкурса CENTRAL ASIA PROPERTY AWARDS 2023 ",-1)),Yt=h({__name:"CrewNomination",setup(e){const n=C([{id:1,title:"Редевелопмент года",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Редевелопмент офисной недвижимости»;
    
● Номинация «Редевелопмент торговой недвижимости»;
    
● Номинация «Редевелопмент индустриальной недвижимости».`},{id:2,title:"Офисная недвижимость",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Лучшая офисная недвижимость класса А»;
    
● Номинация «Лучшая офисная недвижимости класса В».`},{id:3,title:"Лучший объект рекреации и отдыха",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены. Объекты рекреации и отдыха
(тематические, детские парки)`}]),a=C([{id:1,title:"Управляющая компания года",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

● Номинация «Лучшая управляющая компания – Facility Management»;

● Номинация «Лучшая управляющая компания – Property Management».`},{id:2,title:"Складская недвижимость",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Крупный складской комплекс класса А»;
    
● Номинация «Средний складской комплекс класса Б».`},{id:3,title:"Клининговая компания",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Лучшая клининговая компания».`},{id:4,title:"Коворкинг-центры",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены

    
● Коворкинг года «Лучшее agile-пространство»; 

    
● Коворкинг года «Лучшие технологические решения»; 

    
● Коворкинг года «Лучшие архитектурные решения и дизайн». `},{id:5,title:"Торговые центры",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Торговые центры: крупные (от 100,000 м2).  

● Торговые центры: средние (от 50,000 до 100,000 м2).  

● Торговые центры: малые (до 50,000 м2). `},{id:6,title:"Поставщик года",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Поставщик года».`},{id:7,title:"Брокер года",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Брокер года».`},{id:8,title:"Сделка года",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Сделка года. Купля-продажа»;
    
● Номинация «Сделка года. Аренда».`},{id:9,title:"Девелопер",text:`Лучшие проекты в каждой из нижеперечисленных категорий будут награждены.

    
● Номинация «Девелопер года - Город в городе»;
    
● Номинация «Девелопер года - Комфортная среда»;
    
● Номинация «Премьера года».`}]);return(i,c)=>(d(),m("div",Dt,[t("div",Tt,[At,t("div",Mt,[zt,o(D,{items:n.value},null,8,["items"])]),t("div",jt,[Qt,o(D,{items:a.value},null,8,["items"])])])]))}});const Ot=f(Yt,[["__scopeId","data-v-314e4ad2"]]);const Pt={},Vt={class:"timeline-unique"},Wt=t("div",{class:"timeline-text"},"Прием анкет по всем номинациям премии",-1),Et=t("div",{class:"timeline-time",style:{}},"01.07.2023 - 31.08.2023",-1),Rt=t("div",{class:"timeline-text",style:{}},"Первое заседание Конкурсной Комиссии",-1),Ut=t("div",{class:"timeline-time"},"01.09.2023- 22.09.2023",-1),Zt=t("div",{class:"timeline-text"},"Защита проектов, голосование, подведение итогов",-1),Bt=t("div",{class:"timeline-time"},"25.09.2023 - 13.10.2023",-1);function Gt(e,n){const a=_("v-timeline-item"),i=_("v-timeline");return d(),m("div",Vt,[o(i,{direction:"horizontal",side:"end","line-inset":"12"},{default:s(()=>[o(a,{"dot-color":"#ffc14d","fill-dot":""},{opposite:s(()=>[Wt]),default:s(()=>[Et]),_:1}),o(a,{"dot-color":"#ffc14d","fill-dot":""},{opposite:s(()=>[Rt]),default:s(()=>[Ut]),_:1}),o(a,{"dot-color":"#ffc14d","fill-dot":""},{opposite:s(()=>[Zt]),default:s(()=>[Bt]),_:1})]),_:1})])}const Ht=f(Pt,[["render",Gt]]),Jt={id:"Crew",class:"crew"},Lt=h({__name:"CrewView",setup(e){const n=Y(),a=O();return P(()=>{n.fullPath==="/crew-awards"&&(a.isCrewAwards=!0),window.scrollTo(0,0)}),(i,c)=>(d(),m("div",Jt,[o(it),o(Ht),o(G),o(Ot),o(kt)]))}});const Kt=f(Lt,[["__scopeId","data-v-0f52b127"]]);export{Kt as default};
