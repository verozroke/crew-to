import{_ as o,h as i,a as s,b as a,e as g,i as n,g as c,w as p,d as _,r as y,F as u,j as f,k as j,s as m,v,o as h}from"./index-75f0ddeb.js";const k={},w={class:"title"},x={class:"title__container"};function G(l,r){const e=i("v-icon");return s(),a("div",w,[g("div",x,[n(" Галерея "),c(e,{class:"icon",style:{"font-size":"100px","margin-left":"0.2em"}},{default:p(()=>[n("mdi-image")]),_:1})])])}const b=o(k,[["render",G],["__scopeId","data-v-5f938bc3"]]),B={class:"block"},$=["src"],C=_({__name:"GalleryBlock",props:{src:String},setup(l){return(r,e)=>(s(),a("div",B,[g("img",{src:l.src,alt:"Gallery Photo"},null,8,$)]))}});const T=o(C,[["__scopeId","data-v-1959d41f"]]),V={class:"blocks"},I=_({__name:"GalleryBlocks",setup(l){const r=y([{id:1,src:"/storage/gallery/ (1).jpg"},{id:2,src:"/storage/gallery/ (2).jpg"},{id:3,src:"/storage/gallery/ (3).jpg"},{id:4,src:"/storage/gallery/ (4).jpg"},{id:5,src:"/storage/gallery/ (5).jpg"},{id:6,src:"/storage/gallery/ (6).jpg"},{id:7,src:"/storage/gallery/ (7).jpg"},{id:8,src:"/storage/gallery/ (8).jpg"},{id:9,src:"/storage/gallery/ (9).jpg"},{id:10,src:"/storage/gallery/ (10).jpg"},{id:11,src:"/storage/gallery/ (11).jpg"},{id:12,src:"/storage/gallery/ (12).jpg"},{id:13,src:"/storage/gallery/(13).jpg"},{id:14,src:"/storage/gallery/ (14).jpg"},{id:15,src:"/storage/gallery/ (15).jpg"},{id:16,src:"/storage/gallery/ (16).jpg"},{id:17,src:"/storage/gallery/ (17).jpg"},{id:18,src:"/storage/gallery/ (18).jpg"},{id:19,src:"/storage/gallery/ (19).jpg"},{id:20,src:"/storage/gallery/(20).webp"}]);return(e,d)=>(s(),a("div",V,[(s(!0),a(u,null,f(r.value,t=>(s(),j(T,{key:t.id,src:t.src},null,8,["src"]))),128))]))}});const N=o(I,[["__scopeId","data-v-bdfb8874"]]),S={id:"Gallery",class:"gallery"},F=_({__name:"GalleryView",setup(l){const r=m(),e=v();return h(()=>{r.fullPath==="/crew-awards"?e.isCrewAwards=!0:e.isCrewAwards=!1,window.scrollTo(0,0)}),(d,t)=>(s(),a("div",S,[c(b),c(N)]))}});export{F as default};