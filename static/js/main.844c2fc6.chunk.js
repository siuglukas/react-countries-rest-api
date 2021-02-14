(this["webpackJsonpcountries-rest-api"]=this["webpackJsonpcountries-rest-api"]||[]).push([[0],{40:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(29),i=a.n(r),l=(a(40),a(34)),o=a(9),d=a(3),j=a(15),u=a(10);var m=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],r=a[1],i=localStorage.getItem("theme"),l=document.body;return Object(n.useEffect)((function(){i?(l.classList.add(i),r(i)):(l.classList.add("dark"),r("dark"))}),[]),Object(c.jsx)("nav",{children:Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"header__content-wrapper",children:[Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("h1",{onClick:function(){e.setUserInput(""),e.setCountriesData(e.countriesDataForInputComponent),e.setFilter("All"),e.setSortBy("Alphabetical")},className:"header__heading",children:"Where in the world?"})}),Object(c.jsxs)("div",{onClick:function(){l.classList.contains("dark")?(l.classList.replace("dark","light"),localStorage.setItem("theme","light"),r("light")):(l.classList.replace("light","dark"),localStorage.setItem("theme","dark"),r("dark"))},className:"header__theme-mode-wrapper",children:[Object(c.jsx)("i",{className:"fas fa-moon header__moon-ico",style:{fontWeight:"light"===s?100:""}}),Object(c.jsx)("p",{className:"header__theme-mode-text",children:"Dark Mode"})]})]})})})};var b=function(e){return Object(c.jsxs)("div",{className:"control ".concat("filter-by"===e.name?"control--filter-by":""),children:[Object(c.jsxs)("button",{onClick:function(){return e.actionUpdate(!e.action)},className:"control__button-as-heading  control__button-as-heading--".concat(e.name),"aria-expanded":"false","aria-controls":"section-list",children:[Object(c.jsx)("span",{children:"sort-by"===e.name?"Sort By":"Filter By Region"}),Object(c.jsx)("svg",{className:"control__arrow-down ".concat(e.action?"control__arrow-down--active":""),width:"13",height:"10",viewBox:"0 0 20 10",children:Object(c.jsx)("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M1.58.95L10 9.05m8.42-8.1L10 9.05"})})]}),Object(c.jsx)("ul",{className:"control__list-ul control__list-ul--".concat(e.name," ").concat(e.action?"control__list-ul--active":"control__list-ul--hidden"),children:e.list})]})};var h=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){return e.setFilter(e.name)},type:"button",className:"control__li-butt","aria-pressed":e.isPressed,children:e.name})})})};var p=function(e){return Object(c.jsx)("div",{className:"search-input-container",children:Object(c.jsx)("input",{type:"text",className:"search-input",placeholder:"Search for a country...",value:e.searchInputValue,autoComplete:"off",onChange:function(t){return e.setSearchInputValue(t.target.value)},onKeyUp:function(){var t,a=(t=e.searchInputValue,e.countriesDataForInput.filter((function(e){var a=new RegExp(t,"gi");return e.name.match(a)})));e.setCountriesData(a)}})})};var x=function(e){var t;switch(e.name){case"Alphabetical":t="Alphabet";break;case"Area":t="Area";break;case"PopulationAsc":t="Population (1-0)";break;case"PopulationDesc":t="Population (0-1)";break;default:t="sort"}return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){return e.setSortBy(e.name)},type:"button",className:"control__li-butt","aria-pressed":e.isPressed,children:t})})})};var O=function(e){return Object(c.jsxs)("article",{className:"card",children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(e.countryFlag,")")},className:"card__country-flag",role:"img",alt:"flag of ".concat(e.countryName)}),Object(c.jsxs)("div",{className:"card__content-wrap",children:[Object(c.jsx)("h2",{className:"card__country-name",children:e.countryName}),Object(c.jsxs)("p",{className:"card__country-info",children:[Object(c.jsx)("span",{className:"card__heading",children:"Area: "}),Object(c.jsx)("span",{className:"card__heading-value",children:e.countryArea?"".concat(e.numberWithCommas(e.countryArea)," km\xb2 "):"-"})]}),Object(c.jsxs)("p",{className:"card__country-info",children:[Object(c.jsx)("span",{className:"card__heading",children:"Population: "}),Object(c.jsx)("span",{className:"card__heading-value",children:e.numberWithCommas(e.countryPopulation)})]}),Object(c.jsxs)("p",{className:"card__country-info",children:[Object(c.jsx)("span",{className:"card__heading",children:"Region: "}),Object(c.jsx)("span",{className:"card__heading-value",children:e.countryRegion?e.countryRegion:"-"})]}),Object(c.jsxs)("p",{className:"card__country-info",children:[Object(c.jsx)("span",{className:"card__heading",children:"Capital: "}),Object(c.jsx)("span",{className:"card__heading-value",children:e.countryCapital?e.countryCapital:"-"})]}),Object(c.jsx)("p",{className:"card__country-info card__arrow",children:Object(c.jsx)(u.b,{to:"/".concat(e.countryName),children:Object(c.jsxs)("span",{className:"card__heading card__arrow",children:["Learn More ",Object(c.jsx)("i",{className:"fas fa-arrow-right"})]})})})]})]})};var _=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"page-not-found-container",children:[Object(c.jsxs)("svg",{className:"page-not-found-svg",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 200 82.7",style:{enableBackground:"new 0 0 200 82.7"},xmlSpace:"preserve",children:[Object(c.jsxs)("g",{id:"Calque_1",children:[Object(c.jsx)("text",{id:"XMLID_3_",transform:"matrix(1.2187 0 0 1 13 75.6393)",className:"st0 st1",children:"4"}),Object(c.jsx)("text",{id:"XMLID_4_",transform:"matrix(1.2187 0 0 1 133.0003 73.6393)",className:"st0 st1",children:"4"})]}),Object(c.jsxs)("g",{id:"Calque_2",children:[Object(c.jsxs)("g",{children:[Object(c.jsx)("path",{id:"XMLID_11_",d:"M81.8,29.2c4.1-5.7,10.7-9.4,18.3-9.4c6.3,0,12.1,2.7,16.1,6.9c0.6-0.4,1.1-0.7,1.7-1.1\r c-4.4-4.8-10.8-7.9-17.8-7.9c-8.3,0-15.6,4.2-20,10.6C80.7,28.5,81.3,28.8,81.8,29.2z"}),Object(c.jsx)("path",{id:"XMLID_2_",d:"M118.1,53.7c-4,5.7-10.7,9.5-18.2,9.5c-6.3,0-12.1-2.6-16.2-6.8c-0.6,0.4-1.1,0.7-1.7,1.1\r c4.4,4.8,10.8,7.8,17.9,7.8c8.3,0,15.6-4.3,19.9-10.7C119.2,54.5,118.6,54.1,118.1,53.7z"}),Object(c.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"360 100 41.3",to:"0 100 41.3",dur:"10s",repeatCount:"indefinite"})]}),Object(c.jsx)("g",{id:"XMLID_6_",children:Object(c.jsx)("g",{id:"XMLID_18_",children:Object(c.jsx)("circle",{className:"circle",cx:100,cy:41,r:1})})}),Object(c.jsx)("defs",{children:Object(c.jsx)("filter",{id:"blurFilter4",x:-20,y:-20,width:200,height:200,children:Object(c.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:2})})}),Object(c.jsx)("path",{id:"XMLID_5_",className:"st2",d:"M103.8,16.7c0.1,0.3,0.1,0.6,0.1,0.9c11.6,1.9,20.4,11.9,20.4,24.1c0,13.5-10.9,24.4-24.4,24.4\r S75.6,55.1,75.6,41.7c0-3.2,0.6-6.3,1.7-9.1c-0.3-0.2-0.5-0.3-0.7-0.5c-1.2,3-1.9,6.2-1.9,9.6c0,14,11.3,25.3,25.3,25.3\r s25.3-11.3,25.3-25.3C125.3,29,115.9,18.5,103.8,16.7z"})]})]}),Object(c.jsx)("div",{className:"message",children:"Page not found"})]})})};var f=function(){return Object(c.jsxs)("div",{className:"loading-page-wrapper",children:[Object(c.jsx)("div",{id:"particles-background",className:"vertical-centered-box"}),Object(c.jsx)("div",{id:"particles-foreground",className:"vertical-centered-box"}),Object(c.jsx)("div",{className:"vertical-centered-box",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("div",{className:"loader-circle"}),Object(c.jsx)("div",{className:"loader-line-mask",children:Object(c.jsx)("div",{className:"loader-line"})}),Object(c.jsx)("svg",{width:"36px",height:"24px",viewBox:"0 0 36 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(c.jsx)("path",{d:"M8.98885921,23.8523026 C8.8942483,23.9435442 8.76801031,24 8.62933774,24 L2.03198365,24 C1.73814918,24 1.5,23.7482301 1.5,23.4380086 C1.5,23.2831829 1.55946972,23.1428989 1.65570253,23.0416777 L13.2166154,12.4291351 C13.3325814,12.3262031 13.4061076,12.1719477 13.4061076,11.999444 C13.4061076,11.8363496 13.3401502,11.6897927 13.2352673,11.587431 L1.68841087,0.990000249 C1.57298556,0.88706828 1.5,0.733668282 1.5,0.561734827 C1.5,0.251798399 1.73814918,2.85130108e-05 2.03198365,2.85130108e-05 L8.62933774,2.85130108e-05 C8.76855094,2.85130108e-05 8.89532956,0.0561991444 8.98994048,0.148296169 L21.4358709,11.5757407 C21.548593,11.6783875 21.6196864,11.8297916 21.6196864,11.999444 C21.6196864,12.1693815 21.5483227,12.3219261 21.4350599,12.4251432 L8.98885921,23.8523026 Z M26.5774333,23.8384453 L20.1765996,17.9616286 C20.060093,17.8578413 19.9865669,17.703871 19.9865669,17.5310822 C19.9865669,17.3859509 20.0390083,17.2536506 20.1246988,17.153855 L23.4190508,14.1291948 C23.5163648,14.0165684 23.6569296,13.945571 23.8131728,13.945571 C23.9602252,13.945571 24.0929508,14.0082997 24.1894539,14.1092357 L33.861933,22.9913237 C33.9892522,23.0939706 34.0714286,23.2559245 34.0714286,23.4381226 C34.0714286,23.748059 33.8332794,23.9998289 33.5394449,23.9998289 L26.9504707,23.9998289 C26.8053105,23.9998289 26.6733958,23.9382408 26.5774333,23.8384453 Z M26.5774333,0.161098511 C26.6733958,0.0615881034 26.8053105,0 26.9504707,0 L33.5394449,0 C33.8332794,0 34.0714286,0.251769886 34.0714286,0.561706314 C34.0714286,0.743904453 33.9892522,0.905573224 33.861933,1.00822006 L24.1894539,9.89030807 C24.0929508,9.99152926 23.9602252,10.0542579 23.8131728,10.0542579 C23.6569296,10.0542579 23.5163648,9.98354562 23.4190508,9.87063409 L20.1246988,6.8459739 C20.0390083,6.74617837 19.9865669,6.613878 19.9865669,6.46874677 C19.9865669,6.29624305 20.060093,6.14198767 20.1765996,6.03848544 L26.5774333,0.161098511 Z",fill:"#FFFFFF"})})]})})]})};var g=function(e){var t=Object(d.g)().countryName,a=Object(d.f)(),n=e.countriesData.filter((function(e){return e.name===t})).map((function(t){var a=t.borders.map((function(t){return e.countriesData.filter((function(e){return e.alpha3Code===t}))})).map((function(e){return Object(c.jsx)(u.b,{className:"button",to:"/".concat(e[0].name),children:e[0].name},e[0].name)})),n=t.currencies.map((function(e){return e.name})),s=t.languages.map((function(e){return e.name})),r=t.topLevelDomain.join(", ");return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("title",{children:t.name})}),Object(c.jsxs)("div",{className:"country-details",children:[Object(c.jsx)("div",{style:{backgroundImage:"url(".concat(t.flag,")")},className:"country-details__flag"}),Object(c.jsxs)("div",{className:"country-details__content-flex-i",children:[Object(c.jsx)("h3",{className:"country-details__country-name",children:t.name}),Object(c.jsxs)("div",{className:"country-details__parameters-wrapper",children:[Object(c.jsxs)("div",{className:"country-details__param-first-col",children:[Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Native Name:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:t.nativeName})]}),Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Population:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:e.numberWithCommas(t.population)})]}),Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Region:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:t.region})]}),Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Sub Region:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:t.subregion})]}),Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Capital:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:t.capital})]})]}),Object(c.jsxs)("div",{className:"country-details__param-second-col",children:[Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Top Level Domain:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:r})]}),Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Currencies:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:n.join(", ")})]}),Object(c.jsxs)("p",{className:"country-details__parameter",children:[Object(c.jsxs)("span",{className:"country-details__paramater-static",children:["Languages:"," "]}),Object(c.jsx)("span",{className:"country-details-parameter-dynamic",children:s.join(", ")})]})]})]}),Object(c.jsx)("div",{className:"country-details__paramater-static country-details--border-countries-param",children:"Border Countries:"}),Object(c.jsx)("div",{className:"country-details__borders-wrap",children:a.length>0?a:Object(c.jsx)("div",{className:"button",children:"None"})})]})]},t.name)]})}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("button",{className:"button button--go-back",type:"button",onClick:function(){a.goBack()},children:[Object(c.jsx)("i",{className:"fas fa-long-arrow-alt-left arrow-left-mg"})," Back"]}),Object(c.jsxs)("button",{className:"button button--go-home",type:"button",onClick:function(){a.push("/")},children:[Object(c.jsx)("i",{className:"fas fa-home home-icon-mg"}),"Home"]}),e.isLoading?Object(c.jsx)(f,{}):n,0===n.length&&Object(c.jsx)(_,{})]})},N=a(33),y=a.n(N),v={All:function(){return!0},America:function(e){return"Americas"===e.region},Africa:function(e){return"Africa"===e.region},Asia:function(e){return"Asia"===e.region},Europe:function(e){return"Europe"===e.region},Oceania:function(e){return"Oceania"===e.region}},C={Alphabetical:function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))},Area:function(e){return e.sort((function(e,t){return t.area-e.area}))},PopulationAsc:function(e){return e.sort((function(e,t){return t.population-e.population}))},PopulationDesc:function(e){return e.sort((function(e,t){return e.population-t.population}))}},w=Object.keys(C),k=Object.keys(v);function L(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),u=i[0],N=i[1],F=Object(n.useState)(!1),S=Object(o.a)(F,2),D=S[0],I=S[1],A=Object(n.useState)(!1),B=Object(o.a)(A,2),M=B[0],P=B[1],W=Object(n.useState)("All"),X=Object(o.a)(W,2),R=X[0],E=X[1],U=Object(n.useState)("Alphabetical"),V=Object(o.a)(U,2),T=V[0],z=V[1],Z=Object(n.useState)(!0),q=Object(o.a)(Z,2),G=q[0],J=q[1],H=Object(n.useState)(""),K=Object(o.a)(H,2),Q=K[0],Y=K[1];Object(n.useEffect)((function(){y.a.get("https://restcountries.eu/rest/v2").then((function(e){s(e.data),N(Object(l.a)(e.data)),J(!1)}))}),[]);var $=C[T](a).filter(v[R]),ee=k.map((function(e){return Object(c.jsx)(h,{name:e,isPressed:e===R,setFilter:E},e)})),te=w.map((function(e){return Object(c.jsx)(x,{name:e,isPressed:e===T,setSortBy:z},e)})),ae=$.map((function(e){return Object(c.jsx)(O,{countryName:e.name,countryFlag:e.flag,countryArea:e.area,countryPopulation:e.population,countryRegion:e.region,countryCapital:e.capital,numberWithCommas:L},e.name)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.a,{children:Object(c.jsx)("title",{children:"Where in the world?"})}),Object(c.jsx)(m,{setUserInput:Y,setCountriesData:s,setSortBy:z,setFilter:E,countriesDataForInputComponent:u}),Object(c.jsx)("div",{className:"app-wrapper",children:Object(c.jsxs)(d.c,{children:[Object(c.jsxs)(d.a,{exact:!0,path:"/",children:[Object(c.jsxs)("div",{className:"sort-filter-container",children:[Object(c.jsx)(p,{searchInputValue:Q,setSearchInputValue:Y,setCountriesData:s,countriesDataForInput:u}),Object(c.jsxs)("div",{className:"filter-sort-container",children:[Object(c.jsx)(b,{name:"sort-by",actionUpdate:P,action:M,list:te}),Object(c.jsx)(b,{name:"filter-by",actionUpdate:I,action:D,list:ee})]})]}),Object(c.jsx)("main",{className:"cards-wrapper",children:G?Object(c.jsx)(f,{}):ae})]}),Object(c.jsx)(d.a,{exact:!0,path:"/:countryName/",children:Object(c.jsx)(g,{numberWithCommas:L,isLoading:G,countriesData:u})}),Object(c.jsx)(d.a,{path:"*",children:Object(c.jsx)(_,{})})]})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u.a,{children:Object(c.jsx)(F,{})})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.844c2fc6.chunk.js.map