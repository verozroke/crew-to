import{_ as a,h as p,a as s,b as t,e as d,j as l,g as o,w as u,d as n,r as f,F as y,l as m,i as v,v as g,x as h,o as x}from"./index-2513768f.js";const k={},w={class:"title"},G={class:"title__container"};function B(r,c){const e=p("v-icon");return s(),t("div",w,[d("div",G,[l(" Галерея "),o(e,{class:"icon",style:{"font-size":"100px","margin-left":"0.2em"}},{default:u(()=>[l("mdi-image")]),_:1})])])}const $=a(k,[["render",B],["__scopeId","data-v-5f938bc3"]]),b={class:"block"},C=["src"],T=n({__name:"GalleryBlock",props:{src:String},setup(r){return(c,e)=>(s(),t("div",b,[d("img",{src:`/crew-to/gallery/${r.src}`,alt:"Gallery Photo"},null,8,C)]))}});const V=a(T,[["__scopeId","data-v-743fc8b3"]]),I={class:"blocks"},N=n({__name:"GalleryBlocks",setup(r){const c=f([{id:1,src:"1.png"},{id:2,src:"1.png"},{id:3,src:"1.png"},{id:4,src:"1.png"},{id:5,src:"1.png"},{id:6,src:"1.png"}]);return(e,i)=>(s(),t("div",I,[(s(!0),t(y,null,m(c.value,_=>(s(),v(V,{key:_.id,src:_.src},null,8,["src"]))),128))]))}});const S=a(N,[["__scopeId","data-v-85406d38"]]),A={id:"Gallery",class:"gallery"},P=n({__name:"GalleryView",setup(r){const c=g(),e=h();return x(()=>{c.fullPath==="/crew-awards"?e.isCrewAwards=!0:e.isCrewAwards=!1,window.scrollTo(0,0)}),(i,_)=>(s(),t("div",A,[o($),o(S)]))}});export{P as default};
