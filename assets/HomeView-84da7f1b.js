import{d as r,r as b,c as k,o as N,a as n,b as a,e as t,t as h,p as f,f as x,_ as d,g as i,u as O,h as u,i as g,w as m,j as v,k as I,F as E,l as T,n as P,m as L,q as Q,s as V,v as q,x as Y}from"./index-dfe3fe65.js";import{u as U,T as F}from"./TicketDialog-5a9ae748.js";const C=e=>(f("data-v-68ade184"),e=e(),x(),e),Z={class:"timer"},J={class:"timer__box"},X={class:"timer__digit"},K=C(()=>t("div",{class:"timer__title"},"Дней",-1)),ee={class:"timer__box"},te={class:"timer__digit"},se=C(()=>t("div",{class:"timer__title"},"Часов",-1)),oe={class:"timer__box"},ce={class:"timer__digit"},_e=C(()=>t("div",{class:"timer__title"},"Минут",-1)),ie={class:"timer__box"},ne={class:"timer__digit"},ae=C(()=>t("div",{class:"timer__title"},"Секунд",-1)),de=r({__name:"BottomTimer",setup(e){const _=b(""),c=b(""),s=b(""),o=b(""),p=k(()=>1e3),l=k(()=>p.value*60),y=k(()=>l.value*60),$=k(()=>y.value*24),G=()=>{const B=setInterval(()=>{const j=new Date,w=new Date(2023,9,18,9,30).getTime()-j.getTime();if(w<0){clearInterval(B);return}const S=Math.floor(w/$.value),H=Math.floor(w%$.value/y.value),z=Math.floor(w%y.value/l.value),R=Math.floor(w%l.value/p.value);s.value=z<10?"0"+z:z,o.value=R<10?"0"+R:R,c.value=H<10?"0"+H:H,_.value=S<10?"0"+S:S},1e3)};return N(()=>{G()}),(B,j)=>(n(),a("div",Z,[t("div",J,[t("div",X,h(_.value),1),K]),t("div",ee,[t("div",te,h(c.value),1),se]),t("div",oe,[t("div",ce,h(s.value),1),_e]),t("div",ie,[t("div",ne,h(o.value),1),ae])]))}});const re=d(de,[["__scopeId","data-v-68ade184"]]),le=e=>(f("data-v-4500587b"),e=e(),x(),e),me={class:"bottom"},ue={class:"bottom__container bottom-timer hidden"},ve=le(()=>t("div",{class:"bottom__title"},"До начала конференции:",-1)),pe=r({__name:"HeroBottom",setup(e){const _=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});return setTimeout(()=>{[...document.querySelectorAll(".bottom-timer.hidden")].forEach(o=>{_.observe(o)})},0),(c,s)=>(n(),a("div",me,[t("div",ue,[ve,i(re)])]))}});const he=d(pe,[["__scopeId","data-v-4500587b"]]),fe=r({__name:"TextButton",setup(e){const _=O();return(c,s)=>{const o=u("v-btn");return n(),g(o,{color:"#32cc98",rounded:"0",size:"large",style:{"font-family":"'Montserrat', sans-serif","font-weight":"700",color:"#f7f7f7","text-transform":"none"},onClick:s[0]||(s[0]=p=>I(_).dialog=!0)},{default:m(()=>[v("Подать заявку")]),_:1})}}}),xe=e=>(f("data-v-eedd57a4"),e=e(),x(),e),be={class:"time hidden"},ge=xe(()=>t("div",{class:"time__numbers"},"18 октября",-1)),ye=[ge],$e=r({__name:"TitleTime",setup(e){const _=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});return setTimeout(()=>{[...document.querySelectorAll(".time.hidden")].forEach(o=>{_.observe(o)})},0),(c,s)=>(n(),a("div",be,ye))}});const we=d($e,[["__scopeId","data-v-eedd57a4"]]),Ie={class:"text-box hidden"},Ee={class:"button-row",style:{display:"flex","align-items":"center",gap:"1em"}},Te={class:"city"},Ae={class:"adress"},ke=r({__name:"HeroText",setup(e){const _=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});return setTimeout(()=>{[...document.querySelectorAll(".text-box.hidden")].forEach(o=>{_.observe(o)})},0),(c,s)=>{const o=u("v-icon");return n(),a("div",Ie,[t("div",Ee,[i(fe),i(we)]),t("div",Te,[i(o,null,{default:m(()=>[v("mdi-domain")]),_:1}),v("Алматы")]),t("div",Ae,[i(o,null,{default:m(()=>[v("mdi-map-marker")]),_:1}),v("проспект Aль-Фараби 77/7")])])}}});const Ce=d(ke,[["__scopeId","data-v-e0be34fe"]]),W=e=>(f("data-v-cc2f2ba4"),e=e(),x(),e),Se={class:"title"},He=W(()=>t("div",{class:"title__upper"},[t("div",{class:"title__upper-title upper-title hidden"},"CREW")],-1)),ze=W(()=>t("div",{class:"title__bottom bottom-title hidden"},"Central Asia 2023",-1)),Re=W(()=>t("div",{class:"title__bottom-2 bottom-2-title hidden"},"GREEN&SMART Development",-1)),We=[He,ze,Re],De=r({__name:"HeroTitle",setup(e){const _=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});return setTimeout(()=>{let c=document.querySelectorAll(".upper-title.hidden"),s=document.querySelectorAll(".bottom-title.hidden"),o=document.querySelectorAll(".bottom-2-title.hidden");[...c,...s,...o].forEach(l=>{_.observe(l)})},0),(c,s)=>(n(),a("div",Se,We))}});const Me=d(De,[["__scopeId","data-v-cc2f2ba4"]]),Be={class:"up"},je={class:"up__container"},Pe=r({__name:"HeroUp",setup(e){return(_,c)=>(n(),a("div",Be,[t("div",je,[i(Me),i(Ce)])]))}});const Ne=d(Pe,[["__scopeId","data-v-124494f7"]]),Ue="/crew-to/hero-image.jpg",Ge=e=>(f("data-v-3575daba"),e=e(),x(),e),Oe={class:"circle hidden"},Le=Ge(()=>t("img",{src:Ue,alt:"Circle Image"},null,-1)),Qe=[Le],Ve=r({__name:"BottomCircle",setup(e){const _=new IntersectionObserver(c=>{c.forEach(s=>{s.isIntersecting?s.target.classList.add("show"):s.target.classList.remove("show")})});return setTimeout(()=>{[...document.querySelectorAll(".circle.hidden")].forEach(o=>{_.observe(o)})},0),(c,s)=>(n(),a("div",Oe,Qe))}});const qe=d(Ve,[["__scopeId","data-v-3575daba"]]),Ye={class:"hero"},Fe=r({__name:"HomeHero",setup(e){return(_,c)=>(n(),a("div",Ye,[i(Ne),i(he),i(qe,{class:"circling",style:{position:"absolute",bottom:"-1000px","z-index":"2",right:"-750px"}})]))}});const Ze=d(Fe,[["__scopeId","data-v-a8487df4"]]),Je={class:"ticker"},Xe=["textContent"],Ke=r({__name:"AboutTimeline",setup(e){const _=b([{color:"#32cc98",year:"2013",text:"Создание CREW Central Asia"},{color:"#32cc98",year:"2014",text:"Проведение первых ивентов в сфере коммерческой недвижимости"},{color:"#32cc98",year:"2015",text:"2 еженегодный Форум CREW 2015. Специальный гость форума Donald Trump Jr."},{color:"#32cc98",year:"2016",text:"CRE Week впервые в Алмате"},{color:"#32cc98",year:"2017",text:"Центрально Азиатский форум по девелопменту с участием мэров городов Центральной Азии."},{color:"#32cc98",year:"2018",text:"Впервые проведен в Астане Форум по Редевелопменту объектов."},{color:"#32cc98",year:"2019",text:"Проведен Первый выездной CREW Форум «Трансформация рынка недвижимости» в горах."},{color:"#32cc98",year:"2019",text:"Первый бизнес завтраки в других регионах Казахстана."},{color:"#32cc98",year:"2020",text:"Серия онлайн конференций «Рынок недвижимости в период пандемии»."},{color:"#32cc98",year:"2020",text:"Первая масштабная гибридная (онлайн-офлайн) конференция в городе Ташкент."},{color:"#32cc98",year:"2021",text:"Центрально-Азиатский Форум CREW «Будущее Городов». В городе Ташкент, Узбекистан."},{color:"#32cc98",year:"2021",text:"Подписание сотрудничества и открытия представительства Международной Федерации FIABCI в Центр Азии с головным офисом в Алматы."},{color:"#32cc98",year:"2021",text:"Первые Property туры в Дубае, ОАЭ."},{color:"#32cc98",year:"2021",text:"Создание Real Estate Businesses School."},{color:"#32cc98",year:"2022",text:"Проведение первой по складской конференции в Центральной Азии «CREW WAREHOUSE»."},{color:"#32cc98",year:"2022",text:"Проведение первой CREW Central Asia Awards вместе со всемирным конкурсом по недвижимости FIABCI PRIX EXELIANCE."},{color:"#32cc98",year:"2023",text:"10-летие компании CREW Central Asia. Создание CREW CLUB."}]);return(c,s)=>{const o=u("v-timeline-item"),p=u("v-timeline");return n(),a("div",Je,[i(p,{side:"end"},{default:m(()=>[(n(!0),a(E,null,T(_.value,l=>(n(),g(o,{key:l.color,"dot-color":l.color,size:"x-small"},{opposite:m(()=>[t("div",{class:P(`headline font-weight-bold timeline-year text-${l.color}`),style:L([{"font-family":"'Montserrat', sans-serif","font-weight":"900","font-size":"32px"},{color:l.color}]),textContent:h(l.year)},null,14,Xe)]),default:m(()=>[t("h2",{class:P(`headline timeline-text  text-${l.color}`),style:{"font-family":"'Montserrat', sans-serif","font-weight":"500","font-size":"20px",width:"100%","text-align":"left"}},h(l.text),3)]),_:2},1032,["dot-color"]))),128))]),_:1})])}}});const et=d(Ke,[["__scopeId","data-v-6d186462"]]);const tt={},D=e=>(f("data-v-8f94cfb1"),e=e(),x(),e),st={class:"info"},ot=D(()=>t("div",{class:"info__title"},"CREW Central Asia",-1)),ct=D(()=>t("div",{class:"info__text"},[t("li",null,"10+ лет"),t("li",null,"160+ проведенных мероприятий"),t("li",null,"5000 делегатов")],-1)),_t=D(()=>t("div",{class:"info__image"},[t("img",{src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:"About Image"})],-1)),it=[ot,ct,_t];function nt(e,_){return n(),a("div",st,it)}const at=d(tt,[["render",nt],["__scopeId","data-v-8f94cfb1"]]),dt={class:"about"},rt={class:"about__container"},lt={class:"timeline"},mt=r({__name:"AboutUs",setup(e){return(_,c)=>(n(),a("div",dt,[t("div",rt,[i(at),t("div",lt,[i(et)])])]))}});const ut=d(mt,[["__scopeId","data-v-cffa3bda"]]);const vt=e=>(f("data-v-a6b1a5d1"),e=e(),x(),e),pt={class:"row"},ht={class:"item"},ft={class:"item__box"},xt={class:"item__title"},bt=vt(()=>t("div",{class:"item__text"},null,-1)),gt=r({__name:"GridItem",props:{title:String,icon:String,text:String},setup(e){return(_,c)=>{const s=u("v-icon");return n(),a("div",pt,[t("div",ht,[t("div",ft,[i(s,null,{default:m(()=>[v(h(e.icon),1)]),_:1}),t("div",xt,h(e.text),1)]),bt])])}}});const yt=d(gt,[["__scopeId","data-v-a6b1a5d1"]]),$t={class:"grid"},wt=r({__name:"AuditoryGrid",setup(e){const _=b([{id:1,icon:"mdi-numeric-1-box-outline",title:"Причина 1",text:"Качественный Networking"},{id:2,icon:"mdi-numeric-2-box-outline",title:"Причина 2",text:"Последние новости рынка недвижимости в Казахстане и Центральной Азии. "},{id:3,icon:"mdi-numeric-3-box-outline",title:"Причина 3",text:'Преимущества технологий Eco-Friendly. "Зеленые" и SMART- технологии в 2024 году.'},{id:4,icon:"mdi-numeric-4-box-outline",title:"Причина 4",text:"Расширение партнерских связей и обмен опытом"}]);return(c,s)=>(n(),a("div",$t,[(n(!0),a(E,null,T(_.value,o=>(n(),g(yt,{key:o.id,icon:o.icon,title:o.title,text:o.text},null,8,["icon","title","text"]))),128))]))}});const It=d(wt,[["__scopeId","data-v-68cc97b9"]]),Et=e=>(f("data-v-b1be43aa"),e=e(),x(),e),Tt={class:"upper"},At=Et(()=>t("iframe",{width:"100%",height:"768",src:" https://www.wrike.com/form/eyJhY2NvdW50SWQiOjU4OTQ5OTgsInRhc2tGb3JtSWQiOjEwNzI5MDV9CTQ4NDM3NzY3MDc2NDYJYjU3ODljZTZmMzdiODQyZGE4YWRiNzY1Yjg3MTcxODU0NzQxNmE1MjQ3NjI1NDQzZmQ3ZjA3YzdmZGQ5NTUzOQ== ",frameborder:"0"},null,-1)),kt=r({__name:"ProgramDialog",setup(e){const _=U();return(c,s)=>{const o=u("v-card-title"),p=u("v-btn"),l=u("v-card"),y=u("v-dialog");return n(),g(y,{modelValue:I(_).dialog,"onUpdate:modelValue":s[1]||(s[1]=$=>I(_).dialog=$),style:{"max-width":"900px"}},{default:m(()=>[i(l,null,{default:m(()=>[t("div",Tt,[i(o,{class:"title"},{default:m(()=>[v(" Стать партнером ивента ")]),_:1}),t("div",{onClick:s[0]||(s[0]=$=>I(_).dialog=!1),class:"close"},[i(p,{variant:"text",icon:"mdi-close"})])]),At]),_:1})]),_:1},8,["modelValue"])}}});const Ct=d(kt,[["__scopeId","data-v-b1be43aa"]]),M=e=>(f("data-v-5ef2665b"),e=e(),x(),e),St={class:"auditory"},Ht={class:"auditory__container"},zt=M(()=>t("div",{class:"auditory__title"},"Что вы получите от посещения Конференции?",-1)),Rt={class:"row"},Wt={class:"info"},Dt=M(()=>t("div",{class:"info__image"},[t("img",{src:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/453787532.jpg?k=33c31fc80a87fdf4f8a4d08fd1a3df8bd60ac3918106a10140e29f7a9705e293&o=&hp=1",alt:"Auditory More Image"})],-1)),Mt=M(()=>t("div",{class:"info__text"},' Ждём Вас 18 октября в отеле "The Ritz-Carlton Carlton Almaty" на ежегодном Центрально-Азиатском форуме "Crew Central Asia"! ',-1)),Bt={class:"button-row",style:{display:"flex",gap:"1em",width:"100%","align-items":"end","justify-content":"space-between"}},jt=r({__name:"HomeAuditory",setup(e){const _=U(),c=()=>{const o=document.createElement("a");o.setAttribute("href","/crew-to/storage/program.pdf"),o.download="Программа CREW Central Asia 2023.pdf",o.click()},s=()=>{_.changeDialog()};return(o,p)=>{const l=u("v-btn");return n(),a("div",St,[t("div",Ht,[zt,t("div",Rt,[i(It),t("div",Wt,[Dt,Mt,t("div",Bt,[i(l,{color:"#284240",class:"button",rounded:"0",style:{width:"300px",color:"#ffc14d","font-weight":"700","font-family":"'Montserrat', sans-serif"},onClick:c,size:"large"},{default:m(()=>[v("Скачать программу")]),_:1}),i(l,{color:"#32cc98",class:"button",variant:"outlined",rounded:"0",onClick:s,style:{width:"300px","font-weight":"700","font-family":"'Montserrat', sans-serif"},size:"large"},{default:m(()=>[v("Стать партнером ивента")]),_:1}),i(Ct)])])])])])}}});const Pt=d(jt,[["__scopeId","data-v-5ef2665b"]]),Nt="/crew-to/grey-plaza.jpeg";const Ut={},Gt={class:"partners"},Ot=Q('<div class="partners__container" data-v-b4bedd9e><div class="partners__title" data-v-b4bedd9e>Партнёры мероприятия</div><div class="partners__list" data-v-b4bedd9e><div style="width:100%;display:flex;flex-direction:column;align-items:center;gap:1em;" data-v-b4bedd9e><a href="https://shikimori.me" style="width:100%;height:300px;" class="partner main-partner" data-v-b4bedd9e><img style="width:100%;height:300px;object-fit:cover;" src="https://kaznetpartners.com/wp-content/uploads/2023/07/astana-tower.png" alt="Event Partner" data-v-b4bedd9e></a></div><a href="https://shikimori.me" class="partner" data-v-b4bedd9e><img src="https://kaznetpartners.com/wp-content/uploads/2023/07/lynks_logo_additional_keyword_white.jpg" alt="Event Partner" data-v-b4bedd9e></a><a href="https://shikimori.me" class="partner" data-v-b4bedd9e><img src="'+Nt+'" alt="Event Partner" data-v-b4bedd9e></a></div></div>',1),Lt=[Ot];function Qt(e,_){return n(),a("div",Gt,Lt)}const Vt=d(Ut,[["render",Qt],["__scopeId","data-v-b4bedd9e"]]),qt={class:"item"},Yt={class:"item__name"},Ft=r({__name:"WhoItem",props:{text:String,icon:String},setup(e){return(_,c)=>{const s=u("v-icon"),o=u("v-card");return n(),g(o,{width:"400px",color:"#284240",style:{padding:"20px"}},{default:m(()=>[t("div",qt,[i(s,{color:"#ffc14d"},{default:m(()=>[v("mdi-"+h(e.icon),1)]),_:1}),t("div",Yt,h(e.text),1)])]),_:1})}}});const Zt=d(Ft,[["__scopeId","data-v-11170b5f"]]),Jt=e=>(f("data-v-953b1ee2"),e=e(),x(),e),Xt={class:"who"},Kt={class:"who__container"},es=Jt(()=>t("div",{class:"who__title"},"Для кого мероприятие?",-1)),ts={class:"who__card-list"},ss=r({__name:"HomeForWho",setup(e){const _=b([{id:1,text:"Девелоперы",icon:"code-json"},{id:2,text:"Property & facility-компании",icon:"sprout"},{id:3,text:"Обслуживающие компании",icon:"account-wrench"},{id:4,text:"Агентства недвижимости",icon:"sign-real-estate"},{id:5,text:"Поставщики решений",icon:"checkbox-multiple-marked-circle"},{id:6,text:"Производство материалов",icon:"factory"},{id:7,text:"Арендаторы",icon:"car-key"},{id:8,text:"Инвесторы",icon:"cash-multiple"},{id:9,text:"IT-интеграторы",icon:"code-tags-check"}]);return(c,s)=>(n(),a("div",Xt,[t("div",Kt,[es,t("div",ts,[(n(!0),a(E,null,T(_.value,o=>(n(),g(Zt,{key:o.id,text:o.text,icon:o.icon},null,8,["text","icon"]))),128))])])]))}});const os=d(ss,[["__scopeId","data-v-953b1ee2"]]);const cs={},A=e=>(f("data-v-68cab170"),e=e(),x(),e),_s={class:"contact"},is={class:"contact__container"},ns={class:"contact__info"},as=A(()=>t("div",{class:"contact__title"},"Свяжитесь с нами",-1)),ds={class:"contact__list"},rs={class:"contact__item"},ls=A(()=>t("div",{class:"contact__text"}," Бизнес-Центр Есентай Тауэр, проспект Aль-Фараби 77/7, Алматы 050040 ",-1)),ms={class:"contact__item"},us=A(()=>t("div",{class:"contact__text"},"8-747-446-19-66",-1)),vs={class:"contact__item"},ps=A(()=>t("div",{class:"contact__text"},"Verozroke450@gmail.com",-1)),hs=A(()=>t("iframe",{class:"google-map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.542814564375!2d76.92666527595853!3d43.219077671125966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f307c71953f%3A0x3a7913cb3982fc67!2sRitz-Carlton!5e0!3m2!1sru!2skz!4v1690191312632!5m2!1sru!2skz",style:{width:"600px",border:"0","border-radius":"20px",height:"450px"},loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"},null,-1));function fs(e,_){const c=u("v-icon");return n(),a("div",_s,[t("div",is,[t("div",ns,[as,t("div",ds,[t("div",rs,[i(c,null,{default:m(()=>[v("mdi-map-marker")]),_:1}),ls]),t("div",ms,[i(c,null,{default:m(()=>[v("mdi-phone")]),_:1}),us]),t("div",vs,[i(c,null,{default:m(()=>[v("mdi-email")]),_:1}),ps])])]),hs])])}const xs=d(cs,[["render",fs],["__scopeId","data-v-68cab170"]]),bs=e=>(f("data-v-0babf82e"),e=e(),x(),e),gs={class:"item"},ys={class:"item__name"},$s={class:"item__price"},ws=bs(()=>t("div",{class:"item__service-title"},"Пакет включает:",-1)),Is={class:"item__services"},Es=r({__name:"TicketItem",props:{name:String,services:Array,price:String},setup(e){const _=V();return(c,s)=>{const o=u("v-btn");return n(),a("div",gs,[t("div",ys,h(e.name),1),t("div",$s,h(e.price)+" тенге",1),ws,t("ul",Is,[(n(!0),a(E,null,T(e.services,p=>(n(),a("li",{class:"item__service",key:p},h(p),1))),128))]),i(o,{onClick:s[0]||(s[0]=p=>I(_).dialog=!0),style:{"margin-top":"20px","font-weight":"600","font-family":"'Montserrat', sans-serif",color:"#284240"},rounded:"0",color:"#ffc14d",size:"large",width:"100%"},{default:m(()=>[v("Купить билет")]),_:1})])}}});const Ts=d(Es,[["__scopeId","data-v-0babf82e"]]),As=e=>(f("data-v-5a65fd8f"),e=e(),x(),e),ks={class:"ticket"},Cs={class:"ticket__container"},Ss=As(()=>t("div",{class:"ticket__title"},"Билеты",-1)),Hs={class:"ticket__row"},zs=r({__name:"HomeTicket",setup(e){const _=b([{id:1,name:"Все включено",price:"300 000",services:["Участие в конференции Central Asia Property","Кофе-брейк","Нетворкинг","Презентации спикеров","Участие в гала-ужине Central Asia Property Awards"]},{id:2,name:"Конференция",price:"150 000",services:["Кофе-брейк","Нетворкинг","Презентации спикеров"]},{id:3,name:"Гала-ужин Central Asia Property Awards",price:"250 000",services:["Фуршет","Концертная часть","Нетворкинг"]}]);return(c,s)=>(n(),a("div",ks,[i(F),t("div",Cs,[Ss,t("div",Hs,[(n(!0),a(E,null,T(_.value,o=>(n(),g(Ts,{key:o.id,name:o.name,price:o.price,services:o.services},null,8,["name","price","services"]))),128))])])]))}});const Rs=d(zs,[["__scopeId","data-v-5a65fd8f"]]),Ws={id:"Home"},js=r({__name:"HomeView",setup(e){const _=q(),c=Y();return N(()=>{_.fullPath==="/crew-awards"?c.isCrewAwards=!0:c.isCrewAwards=!1,window.scrollTo(0,0)}),(s,o)=>(n(),a("div",Ws,[i(Ze),i(ut),i(Pt),i(os),i(Rs),i(xs),i(Vt)]))}});export{js as default};
