(function(e){function t(t){for(var a,r,i=t[0],c=t[1],l=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==s[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},s={app:0},o=[];function r(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4bc238f1":"daf50b40"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}s[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cultura-chupistica/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00b4":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shadow border-radius-sw mx-2"},[n("vs-switch",{attrs:{dark:!e.activeSoundMode,"aria-label":"Change Sound"},scopedSlots:e._u([{key:"circle",fn:function(){return[e._v(" "+e._s(e.activeSoundMode?"🔊":"🔈")+" ")]},proxy:!0}]),model:{value:e.activeSoundMode,callback:function(t){e.activeSoundMode=t},expression:"activeSoundMode"}})],1)},s=[],o=n("5530"),r=n("2f62"),i={data:function(){return{active:!0,activeSoundMode:!1}},computed:Object(o["a"])({},Object(r["c"])("control",["activeSound"])),watch:{activeSoundMode:function(e){this.UPDATED_ACTIVE_SOUND_MODE(e)}},beforeMount:function(){this.activeSoundMode=this.activeSound},methods:Object(o["a"])({},Object(r["b"])("control",["UPDATED_ACTIVE_SOUND_MODE"]))},c=i,l=(n("6750"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"9ec54348",null);t["a"]=u.exports},"16b4":function(e,t,n){},"4ce0":function(e,t,n){e.exports=n.p+"media/mixkit-bubbly-achievement-tone-3193.faf277dd.wav"},"568f":function(e,t,n){"use strict";n("c457")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=n("574d"),o=n.n(s),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},i=[],c=n("2877"),l={},u=Object(c["a"])(l,r,i,!1,null,null,null),d=u.exports,m=n("f9d5"),h=n.n(m),f=n("2736"),v=n("6f0b"),p=n.n(v),b=n("7f74"),g=n.n(b),_=n("f410"),C=n.n(_),S=n("4ce0"),T=n.n(S),y=n("5f5b"),x=n("b1e0"),O=n("3f08"),E=n("9483");Object(E["a"])("".concat("/cultura-chupistica/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("f9e3"),n("2dd8"),n("04f2"),n("4413"),n("16b4"),n("d3b7"),n("3ca3"),n("ddb0");var k=n("8c4f"),D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"container"},[n("div",{staticClass:"col-md-10 col-lg-8 col-xl-8 col-12 mx-auto mt-4"},[n("div",{staticClass:"mt-4 text-center"},[e._m(0),n("div",{staticClass:"card-body"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"col-8"},[n("vs-input",{staticClass:"input-theme border-custom",attrs:{id:"user",type:"text",name:"user","label-placeholder":"Nombre",state:"success","aria-label":"Usuario","icon-after":""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addUser.apply(null,arguments)}},scopedSlots:e._u([{key:"icon",fn:function(){return[e._v(" 🐵 ")]},proxy:!0}]),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),n("vs-button",{staticClass:"col-4",attrs:{disabled:!e.users.length,block:""},on:{click:e.onClickNext}},[e._v(" Siguiente ")])],1),n("div",{staticClass:"col-12 my-4 d-flex justify-content-center"},[n("vs-radio",{attrs:{val:"1"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[e._v(" Extendido ")]),n("vs-radio",{attrs:{success:"",val:"2"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[e._v(" Tema Recurrente ")])],1),n("div",{staticClass:"my-4 row d-flex justify-content-center"},[n("change-theme"),n("change-sound")],1)])]),n("div",{staticClass:"row"},e._l(e.users,(function(t,a){return n("div",{key:a,staticClass:"col-4"},[n("div",{staticClass:"badge my-2 mx-2 w-100",class:a%2?"badge-success":"badge-primary"},[n("h2",{staticClass:"w-100 text-center"},[e._v(" "+e._s(t)+" ")])])])})),0)])]),n("footer",{staticClass:"footer text-center w-100 py-3"},[n("router-link",{attrs:{to:"/game"}},[e._v("Jugadores pasados")])],1)])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-header"},[n("h1",{staticClass:"h3 text-success"},[e._v(" Ingresa los nombres de los jugadores ")])])}],w=n("5530"),A=(n("d81d"),n("9697")),M=n("00b4"),P=n("2f62"),U={name:"LoginView",data:function(){return{user:"",users:[],mode:"1"}},watch:{mode:function(e){this.SET_MODE(e)}},components:{ChangeTheme:A["a"],ChangeSound:M["a"]},methods:Object(w["a"])(Object(w["a"])({},Object(P["b"])("game",["SET_USERS","SET_MODE"])),{},{onClickNext:function(){this.SET_USERS(this.users.map((function(e,t){return{name:e,points:0,id:t+1}}))),this.$router.push("/game")},addUser:function(){""!==this.user&&(this.users.push(this.user),this.user="")}})},I=U,R=(n("d6db"),Object(c["a"])(I,D,j,!1,null,null,null)),N=R.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home h-100"},[n("div",{staticClass:"row h-100"},[n("div",{staticClass:"\n        col-lg-3 col-xl-3 col-12\n        h-lg-100 h-xl-100\n        border-right border-primary\n        d-flex\n        flex-column\n        justify-content-center\n      "},[n("div",{staticClass:"d-flex justify-content-between"},[n("h2",{staticClass:"mt-5"},[e._v("Puntaje")]),n("div",{staticClass:"d-flex align-items-end"},[n("vs-button",{attrs:{transparent:""},on:{click:e.reset}},[e._v("🔃")])],1)]),n("table",{staticClass:"table table-bordered text-base"},[e._m(0),n("tbody",e._l(e.userOrderByPoints,(function(t,a){return n("tr",{key:a,class:(a+1)%3?(a+1)%2?"bg-danger":"bg-success":"bg-primary"},[n("td",{staticClass:"w-25 font-weight-bold"},[e._v(e._s(t.points))]),n("td",{staticClass:"font-weight-bold"},[e._v(e._s(t.name))])])})),0)])]),n("div",{staticClass:"col-xl-8 col-lg-8 col-12 h-100"},[e.startedProcess?n("div",{staticClass:"\n          content-main-game\n          d-flex\n          flex-column\n          align-items-center\n          justify-content-around\n          h-100\n          my-2\n        "},[n("small",[e._v(" A petición de "+e._s(e.userOrderById.find((function(t){return t.id==e.currentUserTheme})).name)+" ")]),n("h3",{},[e._v(e._s(e.currentTheme))]),n("div",{staticClass:"d-flex"},[n("h3",[e._v("Vas tu ")]),n("h3",{staticClass:"text-success"},[e._v(" "+e._s(e.userOrderById.find((function(t){return t.id==e.currentUserRound})).name)+" ")])]),n("Chronometer",{on:{complete:e.nextUser}})],1):n("div",{staticClass:"\n          content-start-button\n          h-100\n          d-flex\n          justify-content-center\n          align-items-center\n        "},[n("vs-button",{attrs:{circle:"",icon:"",success:"",flat:""},on:{click:e.startProcess}},[n("div",{staticClass:"d-flex align-items-center flex-column px-2"},[n("span",{staticClass:"h1"},[e._v(" ✨")]),n("span",{staticClass:"h1"},[e._v(" ✨ 🚀 ✨ ")]),n("span",{staticClass:"h1"},[e._v(" ✨")])])])],1)])]),n("vs-dialog",{attrs:{"not-close":"","overflow-hidden":"","auto-width":""},scopedSlots:e._u([{key:"header",fn:function(){return[n("h1",{staticClass:"mt-4 text-warning text-center"},[e._v(" Selecciona "+e._s(e.userOrderById.find((function(t){return t.id===e.currentUserTheme})).name)+" 🔥 ")])]},proxy:!0}]),model:{value:e.activeSelectTheme,callback:function(t){e.activeSelectTheme=t},expression:"activeSelectTheme"}},[n("div",{staticClass:"w-50vh h-30vh container"},[n("div",{staticClass:"h-75 d-flex justify-content-around align-items-center"},[n("button",{staticClass:"\n            card-custom-2\n            text-white\n            border border-dark\n            rounded\n            bg-primary\n            d-flex\n            justify-content-center\n            align-items-center\n            mx-2\n          ",class:1===e.activeCardSelect?"activate-animation":"",attrs:{disabled:0!==e.activeCardSelect},on:{click:function(t){return e.choiceTheme(0)}}},[e.activeCardSelect?n("span",{staticClass:"h1"},[e._v(" "+e._s(1===e.activeCardSelect?"🙉":"🙈")+" ")]):n("span",{staticClass:"h4"},[e._v(e._s(e.mainTheme[0]))])]),n("button",{staticClass:"\n            card-custom-2\n            text-white\n            border border-dark\n            rounded\n            bg-success\n            d-flex\n            justify-content-center\n            align-items-center\n            mx-2\n          ",class:2===e.activeCardSelect?"activate-animation":"",attrs:{disabled:0!==e.activeCardSelect},on:{click:function(t){return e.choiceTheme(1)}}},[e.activeCardSelect?n("span",{staticClass:"h1"},[e._v(" "+e._s(2===e.activeCardSelect?"🙉":"🙈")+" ")]):n("span",{staticClass:"h4"},[e._v(e._s(e.mainTheme[1]))])]),n("button",{staticClass:"\n            card-custom-2\n            text-white\n            border border-dark\n            rounded\n            bg-danger\n            d-flex\n            justify-content-center\n            align-items-center\n            mx-2\n          ",class:3===e.activeCardSelect?"activate-animation":"",attrs:{disabled:0!==e.activeCardSelect},on:{click:function(t){return e.choiceTheme(2)}}},[e.activeCardSelect?n("span",{staticClass:"h1"},[e._v(" "+e._s(3===e.activeCardSelect?"🙉":"🙈")+" ")]):n("span",{staticClass:"h4"},[e._v(e._s(e.mainTheme[2]))])])])])]),n("vs-dialog",{attrs:{blur:""},on:{close:e.closeShop},model:{value:e.activeShop,callback:function(t){e.activeShop=t},expression:"activeShop"}},[n("h1",[e._v(" "+e._s(this.userOrderByPoints.at(-1).name)+" ")]),n("img",{attrs:{src:"https://c.tenor.com/l5IT_IveuyYAAAAd/beer-meet.gif",alt:"Toma"}})])],1)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[e._v("Usuario")]),n("th",{attrs:{scope:"col"}},[e._v("Puntos")])])])}],G=(n("b680"),n("a9e3"),n("c740"),n("4e82"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex container-timer"},[n("div",{staticClass:"col-4 d-flex flex-column justify-content-center"},[n("vs-button",{staticClass:"my-2",attrs:{transparent:"",disabled:e.active},on:{click:e.start}},[e._v(" Inicio ")]),n("vs-button",{staticClass:"my-2",attrs:{transparent:"",disabled:!e.active},on:{click:e.stop}},[e._v(" Detener ")])],1),n("div",{staticClass:"col-4"},[n("span",{staticClass:"timer text-center"},[e._v(e._s(e.formattedElapsedTime))])]),n("div",{staticClass:"col-4 d-flex align-items-center"},[n("vs-button",{attrs:{disabled:!e.active,circle:"",success:""},on:{click:e.reset}},[n("span",{staticClass:"h2"},[e._v(" ✔️ ")])])],1)])}),L=[],F={name:"Chronometer",data:function(){return{elapsedTime:0,timer:void 0,active:!1,sound:null}},props:{initialCount:{type:Number,default:17}},computed:Object(w["a"])(Object(w["a"])({},Object(P["c"])("control",["activeSound"])),{},{formattedElapsedTime:function(){return Number(this.elapsedTime)===this.initialCount&&this.reset(),Number(this.initialCount-this.elapsedTime).toFixed(0)}}),methods:{start:function(){var e=this;this.active=!0,this.activeSound&&(this.sound=this.$sounds.get("clock"),this.sound.volume(.2),this.sound.play()),this.timer=setInterval((function(){e.elapsedTime+=1}),1e3)},stop:function(){clearInterval(this.timer),this.active=!1,this.sound&&this.sound.stop()},reset:function(){clearInterval(this.timer),this.active=!1,this.$emit("complete",this.initialCount-this.elapsedTime),this.elapsedTime=0,this.sound&&this.sound.stop()}}},V=F,q=(n("78ef"),Object(c["a"])(V,G,L,!1,null,null,null)),z=q.exports,J={name:"Game",components:{Chronometer:z},computed:Object(w["a"])(Object(w["a"])({},Object(P["c"])("game",["users","themes","mode"])),Object(P["c"])("control",["activeSound"])),mounted:function(){this.userOrderByPoints=this.users,this.userOrderById=this.users},data:function(){return{userOrderByPoints:[{name:"",id:1,points:0}],userOrderById:[{name:"",id:1,points:0}],currentUserTheme:1,currentUserRound:1,activeSelectTheme:!1,startedProcess:!1,timerSelect:null,timeSelect:0,activeCardSelect:0,mainTheme:["Thema 1","Thema 2","Thema 3"],currentTheme:"",activeShop:!1,activeGameOver:!1,clockSoundInstance:null}},methods:{reset:function(){this.userOrderByPoints=this.users.map((function(e){return Object(w["a"])(Object(w["a"])({},e),{},{points:0})})),this.userOrderById=this.users,this.currentUserRound=1,this.currentUserTheme=1,this.activeCardSelect=0,this.activeShop=!1,this.activeSelectTheme=!1,this.startedProcess=!1},startProcess:function(){this.startedProcess=!0,this.selectTheme(),this.continueUserRound()},selectTheme:function(){var e=this;if(this.activeSelectTheme=!0,this.timeSelect=0,this.activeSound){var t=this.$sounds.get("theme");t.volume(.2),t.play()}this.timerSelect=setInterval((function(){e.timeSelect+=1,3===e.activeCardSelect?e.activeCardSelect=1:e.activeCardSelect+=1,12===e.timeSelect&&(e.activeCardSelect=0,e.mainTheme[0]=e.generateRandomThemes(),e.mainTheme[1]=e.generateRandomThemes(),e.mainTheme[2]=e.generateRandomThemes(),clearInterval(e.timerSelect))}),250)},choiceTheme:function(e){this.currentTheme=this.mainTheme[e],this.activeSelectTheme=!1},generateRandomThemes:function(){var e=Number(Math.random()*(this.themes.length-1)).toFixed(0);return this.themes[e]},nextUser:function(e){var t=this,n=this.userOrderById.findIndex((function(e){return e.id===t.currentUserRound}));this.userOrderById[n].points=this.userOrderById[n].points+e,this.userOrderByPoints=this.userOrderById.sort((function(e,t){return t.points-e.points})),this.continueUserTheme(e),this.continueUserRound()},closeShop:function(){this.activeSelectTheme=!0,this.selectTheme()},continueUserRound:function(){if(this.activeSound){var e=this.$sounds.get("next");e.volume(.2),e.play()}this.userOrderById.length>this.currentUserRound?this.currentUserRound+=1:this.currentUserRound=1},continueUserTheme:function(e){if("2"===this.mode&&this.currentUserTheme===this.currentUserRound||"1"===this.mode&&0===e){this.userOrderById.length>this.currentUserTheme?this.currentUserTheme+=1:this.currentUserTheme=1;var t=JSON.parse(JSON.stringify({number:this.currentUserTheme}));if(console.log(t),this.currentUserRound=t.number,this.activeShop=!0,this.activeSound){var n=this.$sounds.get("beer");n.volume(.2),n.play()}}}}},H=J,K=(n("568f"),Object(c["a"])(H,B,$,!1,null,null,null)),W=K.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center mt-5"},[n("div",{staticClass:"col-md-12 text-center"},[n("span",{staticClass:"display-1 d-block"},[e._v("404")]),n("div",{staticClass:"mb-4 lead"},[e._v(" La página que buscas no existe, estas en el lugar equivocado 😵. ")]),n("router-link",{staticClass:"btn btn-link",attrs:{to:"/","aria-label":"Ir a Inicio"}},[e._v(" Vuelve al Home 🏠 ")])],1)])])},Q=[],X={name:"NotFound"},Z=X,ee=Object(c["a"])(Z,Y,Q,!1,null,null,null),te=ee.exports;a["default"].use(k["a"]);var ne=[{path:"/",name:"Login",component:N},{path:"/game",name:"Game",component:function(){return n.e("chunk-4bc238f1").then(n.bind(null,"240f"))},children:[{path:"",name:"IndexGame",component:W,meta:{pageTitle:"Inicio App"}}]},{path:"/not-found",name:"NotFount",component:te},{path:"*",redirect:"/not-found"}],ae=new k["a"]({mode:"history",routes:ne,base:"/cultura-chupistica/"}),se=ae,oe=n("bfa9"),re={},ie=re,ce={},le=ce,ue={},de=ue,me={updateSidebarWidth:function(e,t){var n=e.commit;n("UPDATE_SIDEBAR_WIDTH",t)},updateI18nLocale:function(e,t){var n=e.commit;n("UPDATE_I18N_LOCALE",t)},toggleContentOverlay:function(e){var t=e.commit;t("TOGGLE_CONTENT_OVERLAY")},updateTheme:function(e,t){var n=e.commit;n("UPDATE_THEME",t)},updateStarredPage:function(e,t){var n=e.commit;n("UPDATE_STARRED_PAGE",t)},arrangeStarredPagesLimited:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_LIMITED",t)},arrangeStarredPagesMore:function(e,t){var n=e.commit;n("ARRANGE_STARRED_PAGES_MORE",t)}},he=me,fe={loading:!1,activeSidebar:!0,activeDark:!0,activeSound:!0,error:!1},ve=fe,pe={},be=pe,ge={UPDATED_SIDEBAR_STATE:function(e,t){e.activeSidebar=t},UPDATED_LOADING_STATE:function(e,t){e.loading=t},UPDATED_ACTIVE_DARK_MODE:function(e,t){e.activeDark=t},UPDATED_ACTIVE_SOUND_MODE:function(e,t){e.activeSound=t}},_e=ge,Ce={},Se=Ce,Te={namespaced:!0,state:ve,getters:be,mutations:_e,actions:Se},ye={users:[{name:"",points:0,id:0}],user:"",themes:["Cantantes de salsa como: Mark antony","Capitales de euro tales como: Madrid","Cantes de ranchera como: Vicente Fernandez","Platos colombianos como: la changua","Villancicos como: Ana nanita nana","Marcas de ropa colombiana como: Abril","Banco colombianos como: Banco de occidente","Lugares turisticos colombianos como: Guatape","Mascotas como: un gato","Deportes como: ciclismo","Marcas de motos como: yamaha","Marcas de carros americanas como: chevrolet","Equipos de futbol alemanes como: Bayer de Munich","Peliculas de terror como: anabelle","Deportes en equipo como: futbol","Juegos en linea como: fornite","Series de anime como: naruto","Series de netflix como: la casa de papel","Super heroes de marvel como: capitan america","Peliculas de viajes en el tiempo como: volver al futuro","Grupos de salsa como: grupo niche","Grupos de rock como: Queen","Marcas de computadores como: Apple","Marcas de neveras como: Mabe","Supermercados como: carulla","Cantantes de vallenato como: Diomendez Díaz","Platos de mar como: causuela de maricos","Novelas colombianas como: vecinos","Marcas de bicicletas como: gw","Frutas en la gama de colores del amarillo como: banano","Frutas en la gama de colores del rojo como: manzana","Redes sociales como: fabebook","Paises de america latina como: Colombia","Paises de europa como: Francia","Paises de asia como: China","Paises de africa como: Nigeria","Villanos en peliculas de super heroes como: joker","Marcas de esmaltes como: masglo","Montañas como: Everest","Nevados como: Nevado de ruiz","Platos de navidad como: la natilla","Tipos de cerveza como: ipa","Marcas de cerveza que se venda en colombia como: poker","Juegos de mesa como: parques","Marcas de maletas como: totto"],mode:1},xe=ye,Oe={},Ee=Oe,ke=n("2909"),De=(n("99af"),{SET_USERS:function(e,t){e.users=t},ADD_USERS:function(e,t){e.users=[].concat(Object(ke["a"])(e.users),Object(ke["a"])(t))},UPDATE_USER_POINTS:function(e,t){var n=e.users;n[t.i]=Object(w["a"])(Object(w["a"])({},e.users[t.i]),{},{points:e.users[t.i].points+t.points}),e.users=n.sort((function(e,t){return t.id-e.id}))},SET_MODE:function(e,t){e.mode=t}}),je=De,we={},Ae=we,Me={namespaced:!0,state:xe,getters:Ee,mutations:je,actions:Ae};a["default"].use(P["a"]);var Pe=new oe["a"]({storage:window.localStorage,modules:["game","control"]}),Ue=new P["a"].Store({getters:le,mutations:de,state:ie,actions:he,modules:{control:Te,game:Me},strict:!1,plugins:[Pe.plugin]});a["default"].config.productionTip=!1,a["default"].use(h.a),a["default"].use(o.a,{theme:{colors:{primary:"#FDD402",success:"#0097d6",danger:"#EA5455",warning:"#FF9F43",dark:"#1E1E1E"}}}),a["default"].use(y["a"]),a["default"].use(x["a"]),a["default"].use(O["a"]),a["default"].use(f["a"],Ue,{sounds:[{name:"clock",url:p.a},{name:"theme",url:C.a},{name:"beer",url:g.a},{name:"next",url:T.a}]}),new a["default"]({router:se,store:Ue,render:function(e){return e(d)}}).$mount("#app")},6750:function(e,t,n){"use strict";n("6aa5")},"6aa5":function(e,t,n){},"6f0b":function(e,t,n){e.exports=n.p+"media/mixkit-tick-tock-clock-timer-1045.ad30dde3.wav"},"78ef":function(e,t,n){"use strict";n("b174")},"7f74":function(e,t,n){e.exports=n.p+"media/mixkit-small-crowd-ovation-437.d11eaaeb.wav"},9697:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"shadow border-radius-sw mx-2"},[n("vs-switch",{attrs:{dark:!e.activeDarkMode,"aria-label":"Change Theme"},scopedSlots:e._u([{key:"circle",fn:function(){return[e._v(" "+e._s(e.activeDarkMode?"🌛":"🌞")+" ")]},proxy:!0}]),model:{value:e.activeDarkMode,callback:function(t){e.activeDarkMode=t},expression:"activeDarkMode"}})],1)},s=[],o=n("5530"),r=n("2f62"),i={data:function(){return{active:!0,activeDarkMode:!1}},computed:Object(o["a"])({},Object(r["c"])("control",["activeDark"])),watch:{activeDarkMode:function(e){this.UPDATED_ACTIVE_DARK_MODE(e),this.changeColorMode(e)}},beforeMount:function(){this.activeDarkMode=this.activeDark,this.changeColorMode(this.activeDark)},methods:Object(o["a"])(Object(o["a"])({},Object(r["b"])("control",["UPDATED_ACTIVE_DARK_MODE"])),{},{changeColorMode:function(e){var t=document.querySelector("#father").classList.toggle("dark-mode");console.log(t),this.$vs.setColor("background",e?"#01071d":"#f3f5f4"),this.$vs.setColor("primary",e?"#37a726":"#253c99"),this.$vs.setColor("text",e?"#f3f5f4":"#2C3E50")}})},c=i,l=(n("d929"),n("2877")),u=Object(l["a"])(c,a,s,!1,null,"258fcd14",null);t["a"]=u.exports},"9e84":function(e,t,n){},b174:function(e,t,n){},c457:function(e,t,n){},d6db:function(e,t,n){"use strict";n("e67a")},d929:function(e,t,n){"use strict";n("9e84")},e67a:function(e,t,n){},f410:function(e,t,n){e.exports=n.p+"media/mixkit-retro-video-game-bubble-laser-277.18277e0e.wav"}});
//# sourceMappingURL=app.005cac4c.js.map