(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},r=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4bc238f1":"4470fbd7"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=o(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cultura-chupistica/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"133c":function(e,t,a){},"16b4":function(e,t,a){},"568f":function(e,t,a){"use strict";a("c457")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("574d"),r=a.n(s),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},i=[],c=a("2877"),l={},u=Object(c["a"])(l,o,i,!1,null,null,null),d=u.exports,m=a("f9d5"),h=a.n(m),f=a("5f5b"),v=a("b1e0"),p=a("3f08"),b=a("9483");Object(b["a"])("".concat("/cultura-chupistica/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("f9e3"),a("2dd8"),a("04f2"),a("4413"),a("16b4"),a("d3b7"),a("3ca3"),a("ddb0");var g=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-10 col-lg-8 col-xl-8 col-12 mx-auto"},[a("div",{staticClass:"card-custom-1 mt-4 text-center border-success"},[e._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex"},[a("div",{staticClass:"col-8"},[a("vs-input",{staticClass:"input-theme border-custom",attrs:{id:"user",type:"text",name:"user","label-placeholder":"Nombre",state:"success","aria-label":"Usuario","icon-after":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addUser.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v(" 🐵 ")]},proxy:!0}]),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),a("vs-button",{staticClass:"col-4",attrs:{disabled:!e.users.length,block:""},on:{click:e.onClickNext}},[e._v(" Siguiente ")])],1),a("div",{staticClass:"my-4 row d-flex justify-content-center"},[a("change-theme")],1)])]),a("div",{staticClass:"row"},e._l(e.users,(function(t,n){return a("div",{key:n,staticClass:"col-4"},[a("div",{staticClass:"badge my-2 mx-2 w-100",class:n%2?"badge-success":"badge-primary"},[a("h2",{staticClass:"w-100 text-center"},[e._v(" "+e._s(t)+" ")])])])})),0)])])])},C=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card-header"},[a("h1",{staticClass:"h3 text-success"},[e._v(" Ingresa los nombres de los jugadores ")])])}],T=a("5530"),y=(a("d81d"),a("9697")),S=a("2f62"),x={name:"LoginView",data:function(){return{user:"",users:[]}},components:{ChangeTheme:y["a"]},methods:Object(T["a"])(Object(T["a"])({},Object(S["b"])("game",["SET_USERS"])),{},{onClickNext:function(){this.SET_USERS(this.users.map((function(e,t){return{name:e,points:0,id:t+1}}))),this.$router.push("/game")},addUser:function(){this.users.push(this.user),this.user=""}})},k=x,E=(a("d6db"),Object(c["a"])(k,_,C,!1,null,null,null)),O=E.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home h-100"},[a("div",{staticClass:"row h-100"},[a("div",{staticClass:"\n        col-3\n        h-100\n        border-right border-primary\n        d-flex\n        flex-column\n        justify-content-center\n      "},[a("div",{staticClass:"d-flex justify-content-between"},[a("h2",{staticClass:"mt-5"},[e._v("Puntaje")]),a("div",{staticClass:"d-flex align-items-end"},[a("vs-button",{attrs:{transparent:""},on:{click:e.reset}},[e._v("🔃")])],1)]),a("table",{staticClass:"table table-bordered text-base"},[e._m(0),a("tbody",e._l(e.userOrderByPoints,(function(t,n){return a("tr",{key:n,class:(n+1)%3?(n+1)%2?"bg-danger":"bg-success":"bg-primary"},[a("td",{staticClass:"w-25 font-weight-bold"},[e._v(e._s(t.points))]),a("td",{staticClass:"font-weight-bold"},[e._v(e._s(t.name))])])})),0)])]),a("div",{staticClass:"col-8 h-100"},[e.startedProcess?a("div",{staticClass:"\n          content-main-game\n          d-flex\n          flex-column\n          align-items-center\n          justify-content-around\n          h-100\n        "},[a("small",[e._v(" A petición de "+e._s(e.userOrderById.find((function(t){return t.id==e.userTheme})).name)+" ")]),a("h3",{},[e._v(e._s(e.currentTheme)+" Seleccionado por")]),a("h3",[e._v(" Vas tu "+e._s(e.userOrderById.find((function(t){return t.id==e.currentUser})).name)+" ")]),a("Chronometer",{on:{complete:e.nextUser}})],1):a("div",{staticClass:"\n          content-start-button\n          h-100\n          d-flex\n          justify-content-center\n          align-items-center\n        "},[a("vs-button",{attrs:{circle:"",icon:"",success:"",flat:""},on:{click:e.startProcess}},[a("div",{staticClass:"d-flex align-items-center flex-column px-2"},[a("span",{staticClass:"h1"},[e._v(" ✨")]),a("span",{staticClass:"h1"},[e._v(" ✨ 🚀 ✨ ")]),a("span",{staticClass:"h1"},[e._v(" ✨")])])])],1)])]),a("vs-dialog",{attrs:{"not-close":"","overflow-hidden":"","auto-width":""},scopedSlots:e._u([{key:"header",fn:function(){return[a("h1",{staticClass:"mt-4 text-warning text-center"},[e._v(" Selecciona "+e._s(e.userOrderById.find((function(t){return t.id===e.userTheme})).name)+" 🔥 ")])]},proxy:!0}]),model:{value:e.activeSelectTheme,callback:function(t){e.activeSelectTheme=t},expression:"activeSelectTheme"}},[a("div",{staticClass:"w-50vh h-30vh container"},[a("div",{staticClass:"h-75 d-flex justify-content-around align-items-center"},[a("button",{staticClass:"\n            card-custom-2\n            text-white\n            border border-dark\n            rounded\n            bg-primary\n            d-flex\n            justify-content-center\n            align-items-center\n            mx-2\n          ",class:1===e.activeCardSelect?"activate-animation":"",attrs:{disabled:0!==e.activeCardSelect},on:{click:function(t){return e.choiceTheme(0)}}},[e.activeCardSelect?a("span",{staticClass:"h1"},[e._v(" "+e._s(1===e.activeCardSelect?"🙉":"🙈")+" ")]):a("span",{staticClass:"h4"},[e._v(e._s(e.mainTheme[0]))])]),a("button",{staticClass:"\n            card-custom-2\n            text-white\n            border border-dark\n            rounded\n            bg-success\n            d-flex\n            justify-content-center\n            align-items-center\n            mx-2\n          ",class:2===e.activeCardSelect?"activate-animation":"",attrs:{disabled:0!==e.activeCardSelect},on:{click:function(t){return e.choiceTheme(1)}}},[e.activeCardSelect?a("span",{staticClass:"h1"},[e._v(" "+e._s(2===e.activeCardSelect?"🙉":"🙈")+" ")]):a("span",{staticClass:"h4"},[e._v(e._s(e.mainTheme[1]))])]),a("button",{staticClass:"\n            card-custom-2\n            text-white\n            border border-dark\n            rounded\n            bg-danger\n            d-flex\n            justify-content-center\n            align-items-center\n            mx-2\n          ",class:3===e.activeCardSelect?"activate-animation":"",attrs:{disabled:0!==e.activeCardSelect},on:{click:function(t){return e.choiceTheme(2)}}},[e.activeCardSelect?a("span",{staticClass:"h1"},[e._v(" "+e._s(3===e.activeCardSelect?"🙉":"🙈")+" ")]):a("span",{staticClass:"h4"},[e._v(e._s(e.mainTheme[2]))])])])])]),a("vs-dialog",{attrs:{blur:""},on:{close:e.closeShop},model:{value:e.activeShop,callback:function(t){e.activeShop=t},expression:"activeShop"}},[a("h1",[e._v(" "+e._s(this.userOrderByPoints.at(-1).name)+" ")]),a("img",{attrs:{src:"https://c.tenor.com/l5IT_IveuyYAAAAd/beer-meet.gif",alt:"Toma"}})])],1)},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("Usuario")]),a("th",{attrs:{scope:"col"}},[e._v("Puntos")])])])}],D=(a("b680"),a("a9e3"),a("c740"),a("4e82"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex container-timer"},[a("div",{staticClass:"col-4 d-flex flex-column justify-content-center"},[a("vs-button",{staticClass:"my-2",attrs:{transparent:""},on:{click:e.start}},[e._v("Inicio")]),a("vs-button",{staticClass:"my-2",attrs:{transparent:""},on:{click:e.stop}},[e._v("Detener")])],1),a("div",{staticClass:"col-4"},[a("span",{staticClass:"timer text-center"},[e._v(e._s(e.formattedElapsedTime))])]),a("div",{staticClass:"col-4 d-flex align-items-center"},[a("vs-button",{attrs:{disabled:!e.active,circle:"",success:""},on:{click:e.reset}},[a("span",{staticClass:"h2"},[e._v(" ✔️ ")])])],1)])}),P=[],A={name:"Chronometer",data:function(){return{elapsedTime:0,timer:void 0,active:!1}},props:{initialCount:{type:Number,default:15}},computed:{formattedElapsedTime:function(){return Number(this.elapsedTime)===this.initialCount&&(this.stop(),this.$emit("complete",0)),Number(this.initialCount-this.elapsedTime).toFixed(0)}},methods:{start:function(){var e=this;this.active=!0,this.timer=setInterval((function(){e.elapsedTime+=1}),1e3)},stop:function(){clearInterval(this.timer),this.active=!1,this.elapsedTime=0},reset:function(){clearInterval(this.timer),this.active=!1,this.$emit("complete",this.initialCount-this.elapsedTime),this.elapsedTime=0}}},I=A,M=(a("78ef"),Object(c["a"])(I,D,P,!1,null,null,null)),U=M.exports,R={name:"Game",components:{Chronometer:U},computed:Object(T["a"])({},Object(S["c"])("game",["users","themes"])),mounted:function(){this.userOrderByPoints=this.users,this.userOrderById=this.users},data:function(){return{userOrderByPoints:[{name:"",id:1,points:0}],userOrderById:[{name:"",id:1,points:0}],userTheme:1,currentUser:1,activeSelectTheme:!1,startedProcess:!1,timerSelect:null,timeSelect:0,activeCardSelect:0,mainTheme:["Thema 1","Thema 2","Thema 3"],currentTheme:"",activeShop:!1,activeGameOver:!1}},methods:{reset:function(){this.userOrderByPoints=this.users.map((function(e){return Object(T["a"])(Object(T["a"])({},e),{},{points:0})})),this.userOrderById=this.users,this.currentUser=1,this.userTheme=1,this.activeCardSelect=0,this.activeShop=!1,this.activeSelectTheme=!1,this.startedProcess=!1},startProcess:function(){this.startedProcess=!0,this.selectTheme()},selectTheme:function(){var e=this;this.activeSelectTheme=!0,this.timeSelect=0,this.timerSelect=setInterval((function(){e.timeSelect+=1,3===e.activeCardSelect?e.activeCardSelect=1:e.activeCardSelect+=1,15===e.timeSelect&&(e.activeCardSelect=0,e.mainTheme[0]=e.generateRandomThemes(),e.mainTheme[1]=e.generateRandomThemes(),e.mainTheme[2]=e.generateRandomThemes(),clearInterval(e.timerSelect))}),250)},choiceTheme:function(e){this.currentTheme=this.mainTheme[e],this.currentUser=this.continueUser(this.currentUser),this.activeSelectTheme=!1},generateRandomThemes:function(){var e=Number(Math.random()*(this.themes.length-1)).toFixed(0);return this.themes[e]},nextUser:function(e){var t=this,a=this.userOrderById.findIndex((function(e){return e.id===t.currentUser}));this.userOrderById[a].points=this.userOrderById[a].points+e,this.userOrderByPoints=this.userOrderById.sort((function(e,t){return t.points-e.points})),this.currentUser=this.continueUser(this.currentUser,this.userTheme)},closeShop:function(){this.activeSelectTheme=!0,this.selectTheme()},continueUser:function(e,t){return t&&e===t&&(this.activeShop=!0,this.userOrderById.length>this.userTheme?this.userTheme+=1:this.userTheme=1),this.userOrderById.length>e?e+=1:e=1,e}}},B=R,N=(a("568f"),Object(c["a"])(B,w,j,!1,null,null,null)),G=N.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-md-12 text-center"},[a("span",{staticClass:"display-1 d-block"},[e._v("404")]),a("div",{staticClass:"mb-4 lead"},[e._v(" La página que buscas no existe, estas en el lugar equivocado 😵. ")]),a("router-link",{staticClass:"btn btn-link",attrs:{to:"/","aria-label":"Ir a Inicio"}},[e._v(" Vuelve al Home 🏠 ")])],1)])])},$=[],F={name:"NotFound"},V=F,q=Object(c["a"])(V,L,$,!1,null,null,null),z=q.exports;n["default"].use(g["a"]);var J=[{path:"/",name:"Login",component:O},{path:"/game",name:"Game",component:function(){return a.e("chunk-4bc238f1").then(a.bind(null,"240f"))},children:[{path:"",name:"IndexGame",component:G,meta:{pageTitle:"Inicio App"}}]},{path:"/not-found",name:"NotFount",component:z},{path:"*",redirect:"/not-found"}],H=new g["a"]({mode:"history",routes:J}),K=H,W=a("bfa9"),Y={},Q=Y,X={},Z=X,ee={},te=ee,ae={updateSidebarWidth:function(e,t){var a=e.commit;a("UPDATE_SIDEBAR_WIDTH",t)},updateI18nLocale:function(e,t){var a=e.commit;a("UPDATE_I18N_LOCALE",t)},toggleContentOverlay:function(e){var t=e.commit;t("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(e,t){var a=e.commit;a("UPDATE_THEME",t)},updateStarredPage:function(e,t){var a=e.commit;a("UPDATE_STARRED_PAGE",t)},arrangeStarredPagesLimited:function(e,t){var a=e.commit;a("ARRANGE_STARRED_PAGES_LIMITED",t)},arrangeStarredPagesMore:function(e,t){var a=e.commit;a("ARRANGE_STARRED_PAGES_MORE",t)}},ne=ae,se={loading:!1,activeSidebar:!0,activeDark:!0,error:!1},re=se,oe={},ie=oe,ce={UPDATED_SIDEBAR_STATE:function(e,t){e.activeSidebar=t},UPDATED_LOADING_STATE:function(e,t){e.loading=t},UPDATED_ACTIVE_DARK_MODE:function(e,t){e.activeDark=t}},le=ce,ue={},de=ue,me={namespaced:!0,state:re,getters:ie,mutations:le,actions:de},he={users:[{name:"",points:0,id:0}],user:"",themes:["Cantantes de salsa como: Mark antony","Cantes de ranchera como: Vicente Fernandez","Platos colombianos como: la changua","Villancicos como: Ana nanita nana","Marcas de ropa colombiana como: Abril","Banco colombianos como: Banco de occidente","Lugares turisticos colombianos como: Guatape","Mascotas como: un gato","Deportes como: ciclismo","Marcas de motos como: yamaha","Marcas de carros americanas como: chevrolet","Equipos de futbol alemanes como: Bayer de Munich","Peliculas de terror como: anabelle","Juegos en linea como: fornite","Series de anime como: naruto","Series de netflix como: la casa de papel","Super heroes de marvel como: capitan america","Peliculas de viajes en el tiempo como: volver al futuro","Grupos de salsa como: grupo niche","Grupos de rock como: Queen","Marcas de computadores como: Apple","Marcas de neveras como: Mabe","Supermercados como: carulla","Cantantes de vallenato como: Diomendez Díaz","Platos de mar como: causuela de maricos","Novelas colombianas como: vecinos","Marcas de bicicletas como: gw","Frutas en la gama de colores del amarillo como: banano","Frutas en la gama de colores del rojo como: banano","Redes sociales como: fabebook","Paises de america latina como: Colombia","Paises de europa como: Francia","Paises de asia como: China","Paises de africa como: Nigeria","Villanos en peliculas de super heroes como: joker","Marcas de esmaltes como: masglo","Platos de navidad como: la natilla","Tipos de cerveza como: ipa","Marcas de cerveza que se venda en colombia como: poker","Juegos de mesa como: parques","Marcas de maletas como: totto"]},fe=he,ve={},pe=ve,be=a("2909"),ge=(a("99af"),{SET_USERS:function(e,t){e.users=t},ADD_USERS:function(e,t){e.users=[].concat(Object(be["a"])(e.users),Object(be["a"])(t))},UPDATE_USER_POINTS:function(e,t){var a=e.users;a[t.i]=Object(T["a"])(Object(T["a"])({},e.users[t.i]),{},{points:e.users[t.i].points+t.points}),e.users=a.sort((function(e,t){return t.id-e.id}))}}),_e=ge,Ce={},Te=Ce,ye={namespaced:!0,state:fe,getters:pe,mutations:_e,actions:Te};n["default"].use(S["a"]);var Se=new W["a"]({storage:window.localStorage,modules:["game","control"]}),xe=new S["a"].Store({getters:Z,mutations:te,state:Q,actions:ne,modules:{control:me,game:ye},strict:!1,plugins:[Se.plugin]});n["default"].config.productionTip=!1,n["default"].use(h.a),n["default"].use(r.a,{theme:{colors:{primary:"#FDD402",success:"#0097d6",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"}}}),n["default"].use(f["a"]),n["default"].use(v["a"]),n["default"].use(p["a"]),new n["default"]({router:K,store:xe,render:function(e){return e(d)}}).$mount("#app")},"708d":function(e,t,a){"use strict";a("133c")},"78ef":function(e,t,a){"use strict";a("b174")},9697:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shadow border-radius-sw"},[a("vs-switch",{attrs:{dark:!e.activeDarkMode,"aria-label":"Change Theme"},scopedSlots:e._u([{key:"circle",fn:function(){return[e._v(" "+e._s(e.activeDarkMode?"🌛":"🌞")+" ")]},proxy:!0}]),model:{value:e.activeDarkMode,callback:function(t){e.activeDarkMode=t},expression:"activeDarkMode"}})],1)},s=[],r=a("5530"),o=a("2f62"),i={data:function(){return{active:!0,activeDarkMode:!1}},computed:Object(r["a"])({},Object(o["c"])("control",["activeDark"])),watch:{activeDarkMode:function(e){this.UPDATED_ACTIVE_DARK_MODE(e),this.changeColorMode(e)}},beforeMount:function(){this.activeDarkMode=this.activeDark,this.changeColorMode(this.activeDark)},methods:Object(r["a"])(Object(r["a"])({},Object(o["b"])("control",["UPDATED_ACTIVE_DARK_MODE"])),{},{changeColorMode:function(e){var t=document.querySelector("#father").classList.toggle("dark-mode");console.log(t),this.$vs.setColor("background",e?"#01071d":"#f3f5f4"),this.$vs.setColor("primary",e?"#37a726":"#253c99"),this.$vs.setColor("text",e?"#f3f5f4":"#2C3E50")}})},c=i,l=(a("708d"),a("2877")),u=Object(l["a"])(c,n,s,!1,null,"2f03ec78",null);t["a"]=u.exports},b174:function(e,t,a){},c457:function(e,t,a){},d6db:function(e,t,a){"use strict";a("e67a")},e67a:function(e,t,a){}});
//# sourceMappingURL=app.be1909c4.js.map