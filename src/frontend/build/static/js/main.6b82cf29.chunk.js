(this["webpackJsonpwebsite-frontend"]=this["webpackJsonpwebsite-frontend"]||[]).push([[0],{18:function(e,a,t){e.exports=t(38)},24:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),s=(t(7),t(1)),m=t(2);t(23),t(24);const i=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],u=e=>{let{children:a,type:t,onClick:n,buttonStyle:c,buttonSize:r}=e;const m=i.includes(c)?c:i[0],u=o.includes(r)?r:o[0];return l.a.createElement(s.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(m," ").concat(u),onClick:n,type:t},a))};t(33);var E=function(){const[e,a]=Object(n.useState)(!1),[t,c]=Object(n.useState)(!0),r=()=>a(!1),m=()=>{window.innerWidth<=960?c(!1):c(!0)};return Object(n.useEffect)(()=>{m()},[]),window.addEventListener("resize",m),l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(s.b,{to:"/",className:"navbar-logo",onClick:r},"Home"),l.a.createElement("div",{className:"menu-icon",onClick:()=>a(!e)},l.a.createElement("i",{className:e?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:e?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/data",className:"nav-links",onClick:r},"Data")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/reports",className:"nav-links",onClick:r},"Reports")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/essays",className:"nav-links",onClick:r},"Essays")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{to:"/about",className:"nav-links",onClick:r},"About")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/sign-up",className:"nav-links-mobile",onClick:r},"Sign Up"))),t&&l.a.createElement(u,{buttonStyle:"btn--outline"},"SIGN UP"))))};t(34);function b(){return l.a.createElement("div",{className:"hero-container"},l.a.createElement("h1",null,"WELCOME"),l.a.createElement("p",null,"To another website"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(u,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"EMPTY")))}t(35);function d(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{className:"cards__item"},l.a.createElement(s.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text)))))}function p(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"ARTICLES"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(d,{src:"images/img-9.jpg",text:"Data: UK GDP - Top 10 Quarters",label:"Adventure",path:"/gdp"}),l.a.createElement(d,{src:"images/img-2.jpg",text:"Reviews: Book - ",label:"Luxury",path:"/book"})),l.a.createElement("ul",{className:"cards__items"}))))}t(36);function f(){return l.a.createElement("div",{className:"footer-container"},l.a.createElement("div",{class:"footer-links"},l.a.createElement("div",{className:"footer-link-wrapper"},l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Data"),l.a.createElement(s.b,{to:"/data"},"Data")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Reports"),l.a.createElement(s.b,{to:"/reports"},"Reports")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"Essays"),l.a.createElement(s.b,{to:"/essays"},"Essays")),l.a.createElement("div",{class:"footer-link-items"},l.a.createElement("h2",null,"About"),l.a.createElement(s.b,{to:"/about"},"About")))),l.a.createElement("section",{class:"social-media"},l.a.createElement("div",{class:"social-media-wrap"},l.a.createElement("div",{className:"input-areas"},l.a.createElement("form",null,l.a.createElement("input",{className:"footer-input",name:"email",type:"email",placeholder:"Your Email"}),l.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe"))),l.a.createElement("small",{class:"website-rights"},"OM \xa9 2020"),l.a.createElement("div",{class:"social-icons"},l.a.createElement(s.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},l.a.createElement("i",{class:"fab fa-facebook-f"})),l.a.createElement(s.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},l.a.createElement("i",{class:"fab fa-instagram"})),l.a.createElement(s.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},l.a.createElement("i",{class:"fab fa-youtube"})),l.a.createElement(s.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},l.a.createElement("i",{class:"fab fa-twitter"})),l.a.createElement(s.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},l.a.createElement("i",{class:"fab fa-linkedin"}))))))}function h(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(f,null))}function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"data"},"DATA"),l.a.createElement(p,null),l.a.createElement(f,null))}function v(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"reports"},"REPORTS"),l.a.createElement(p,null),l.a.createElement(f,null))}function N(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"essays"},"ESSAYS"),l.a.createElement(p,null),l.a.createElement(f,null))}function k(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"about"},"ABOUT"),l.a.createElement(p,null),l.a.createElement(f,null))}function _(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",{className:"sign-up"},"LIKE & SUBSCRIBE"),l.a.createElement(p,null),l.a.createElement(f,null))}var y=t(11);function w(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{fetch("http://localhost:5000/gdp-highest/gdp_data").then(e=>e.json()).then(e=>{a(e)}).catch(e=>console.error("Error fetching highest:",e))},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"gdp"},"GDP Data"),l.a.createElement("div",null,l.a.createElement("h3",null,"Highest by Quarter"),l.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0},l.a.createElement("thead",null,l.a.createElement("th",null,"Quarter"),l.a.createElement("th",null,"Number")),l.a.createElement("tbody",null,e.map((e,a)=>{let[t,n]=e;return l.a.createElement("tr",{key:a},l.a.createElement("td",null,t),l.a.createElement("td",null,n))})))),l.a.createElement(f,null))}function S(){const[e,a]=Object(n.useState)([]);return Object(n.useEffect)(()=>{fetch("http://localhost:5000/reviews/all").then(e=>e.json()).then(e=>{a(e)}).catch(e=>console.error("Error fetching reviews:",e))},[]),l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Reviews"),l.a.createElement("ul",null,e.map((e,a)=>l.a.createElement("li",{key:a},l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.content)))))}function C(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,null,l.a.createElement(E,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,component:h}),l.a.createElement(m.a,{path:"/data",component:g}),l.a.createElement(m.a,{path:"/reports",component:v}),l.a.createElement(m.a,{path:"/essays",component:N}),l.a.createElement(m.a,{path:"/about",component:k}),l.a.createElement(m.a,{path:"/sign-up",component:_})),l.a.createElement(m.a,{path:"/gdp",component:w}),l.a.createElement(m.a,{path:"/book",component:S})))}r.a.render(l.a.createElement(C,null),document.getElementById("root"))},7:function(e,a,t){}},[[18,1,2]]]);
//# sourceMappingURL=main.6b82cf29.chunk.js.map