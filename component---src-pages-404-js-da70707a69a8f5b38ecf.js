(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(164),o=a(163);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("div",{className:"page-content"},r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},162:function(e,t,a){var n;e.exports=(n=a(166))&&n.default||n},163:function(e,t,a){"use strict";var n=a(168),r=a(0),s=a.n(r),o=a(1),i=a.n(o),c=a(171),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,i=e.title,c=n.data.site,u=t||c.siteMetadata.description;return s.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=u},164:function(e,t,a){"use strict";a(83);var n=a(165),r=a(0),s=a.n(r),o=a(1),i=a.n(o),c=a(36),l=a.n(c),u=(a(162),s.a.createContext({})),d=function(e){return s.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};var m=a(59),p=(a(81),a(82),a(169),a(167)),g=a.n(p),f=function(e){var t=e.siteTitle,a=e.toggleLang,n=e.lang,r=function(e){return e[n]};return s.a.createElement("header",{className:"site-header"},s.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},s.a.createElement("h2",{style:{margin:0,padding:"1.45rem 1.0875rem"}},s.a.createElement(l.a,{to:"/",style:{color:"black",textDecoration:"none"}},s.a.createElement("img",{src:g.a,alt:t,className:"logo"}))),s.a.createElement("div",{style:{margin:0,padding:"1.45rem 1.0875rem"}},s.a.createElement("button",{id:"language-toggle-btn",onClick:a},"en"===n?"Español":"English"))),s.a.createElement("nav",{className:"main-navigation"},s.a.createElement("div",{className:"hamburger",onClick:function(e){var t,a;"main-navigation"===e.target.parentNode.className?(t=e.target.parentNode,a=e.target):(t=e.target.parentNode.parentNode,a=e.target.parentNode),t.className.includes("change")?(t.classList.remove("change"),a.classList.remove("change")):(t.classList.add("change"),a.classList.add("change"))}},s.a.createElement("div",{className:"bar1"}),s.a.createElement("div",{className:"bar2"}),s.a.createElement("div",{className:"bar3"})),s.a.createElement(l.a,{to:r({en:"/",es:"/es/"}),activeClassName:"active"},r({en:"Home",es:"Casa"})),s.a.createElement(l.a,{to:r({en:"products",es:"/es/productos"}),activeClassName:"active"},r({en:"Products",es:"Productos"})),s.a.createElement(l.a,{to:r({en:"about-us",es:"/es/perfil-de-empresa"}),activeClassName:"active"},r({en:"About Us",es:"Perfil de empresa"})),s.a.createElement(l.a,{to:r({en:"contact-us",es:"/es/contacto"}),activeClassName:"active"},r({en:"Contact Us",es:"Contacto"}))))};f.propTypes={siteTitle:i.a.string,toggleLang:i.a.func},f.defaultProps={siteTitle:""};var v=f,E=(a(170),"undefined"!=typeof window&&window),y=function(e){var t=e.children,a=e.location,r=e.lang,o=e.setLanguage;return s.a.createElement(d,{query:"4069440043",render:function(e){return s.a.createElement("div",{className:"page-wrap"},s.a.createElement(v,{siteTitle:e.site.siteMetadata.title,lang:r,toggleLang:function(){o("en"===r?"es":"en");var t=E.location.pathname,a=e.site.siteMetadata.urlTranslationsMap,n=a.find(function(e){return e.indexOf(t)>-1});if(console.log(a,t,n),n){var s=n.find(function(e){return e!==t});console.log(s),Object(c.navigate)(s)}},location:a}),s.a.createElement("main",null,t),s.a.createElement("footer",{className:"site-footer"},"© ",(new Date).getFullYear(),", Built by"," ",s.a.createElement("a",{href:"https://suurv.com  ",target:"_blank",rel:"noopener noreferrer nofollow"},"SUURV Technologies")))},data:n})};y.propTypes={children:i.a.node.isRequired};t.a=Object(m.b)(function(e){return{lang:e.lang}},function(e){return{setLanguage:function(t){return e(function(e){return{type:"SET_LANGUAGE",lang:e}}(t))}}})(y)},165:function(e){e.exports={data:{site:{siteMetadata:{title:"Brannen's, Inc.",urlTranslationsMap:[["/","/es/"],["/products/","/es/productos/"],["/about-us/","/es/perfil-de-empresa/"],["/contact-us/","/es/contacto/"]]}}}}},166:function(e,t,a){"use strict";a.r(t);a(26);var n=a(0),r=a.n(n),s=a(1),o=a.n(s),i=a(58),c=a(3),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},167:function(e,t,a){e.exports=a.p+"static/brannens-logo-2c8f3b5478d94fd31c33b19c572b2181.png"},168:function(e){e.exports={data:{site:{siteMetadata:{title:"Brannen's, Inc.",description:"Brannen's | Fasteners, Tools, and Construction Supplies",author:"@8ctopotamus"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-da70707a69a8f5b38ecf.js.map