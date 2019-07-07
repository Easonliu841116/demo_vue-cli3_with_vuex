(function(t){function a(a){for(var s,n,o=a[0],c=a[1],l=a[2],u=0,f=[];u<o.length;u++)n=o[u],i[n]&&f.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(a);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,n=1;n<e.length;n++){var c=e[n];0!==i[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},i={app:0},r=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"54d57a1d"}[t]+".js"}function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise(function(a,s){e=i[t]=[a,s]});a.push(e[2]=s);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t),r=function(a){c.onerror=c.onload=null,clearTimeout(l);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src,n=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");n.type=s,n.request=r,e[1](n)}i[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(a)},o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="demo_vue-cli3_with_vuex/dist/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var d=l;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=e("bc3a"),r=e.n(i),n=e("a7fe"),o=e.n(n),c=e("9062"),l=e.n(c),u=(e("e40d"),e("4989"),e("8c4f"));s["a"].use(u["a"]);var d=new u["a"]({routes:[{path:"/",name:"home",component:function(){return Promise.resolve().then(e.bind(null,"bb51"))}},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),f=e("2f62"),p=(e("1c4c"),e("ac6a"),e("5df3"),e("4f7f"),{state:{products:[],categories:[]},mutations:{PRODUCTS:function(t,a){var e=t;e.products=a},CATEGORIES:function(t,a){var e=t,s=new Set;a.forEach(function(t){s.add(t.category)}),e.categories=Array.from(s)}},actions:{getProducts:function(t){var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("CASPERPATH","/products/all");t.commit("LOADING",!0,{root:!0}),r.a.get(a).then(function(a){t.commit("PRODUCTS",a.data.products),t.commit("CATEGORIES",a.data.products),t.commit("LOADING",!1,{root:!0})})}},getters:{categories:function(t){var a=t;return a.categories},products:function(t){var a=t;return a.products}}}),m={state:{isLoading:!1,cart:{carts:[]}},mutations:{CART:function(t,a){var e=t;e.cart=a}},actions:{getCart:function(t){t.commit("LOADING",!0,{root:!0});var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("CASPERPATH","/cart");r.a.get(a).then(function(a){a.data.data.carts&&t.commit("CART",a.data.data),t.commit("LOADING",!1,{root:!0})})},removeCart:function(t,a){var e="".concat("https://vue-course-api.hexschool.io","/api/").concat("CASPERPATH","/cart/").concat(a);t.commit("LOADING",!0,{root:!0}),r.a.delete(e).then(function(){t.commit("LOADING",!1,{root:!0}),t.dispatch("getCart")})},addtoCart:function(t,a){var e=a.id,s=a.qty,i="".concat("https://vue-course-api.hexschool.io","/api/").concat("CASPERPATH","/cart");t.commit("LOADING",!0,{root:!0});var n={product_id:e,qty:s};r.a.post(i,{data:n}).then(function(){t.commit("LOADING",!1,{root:!0}),t.dispatch("getCart")})}},getters:{cart:function(t){var a=t;return a.cart}}};s["a"].use(f["a"]);var v=new f["a"].Store({strict:!0,state:{isLoading:!1},namespaced:!0,mutations:{LOADING:function(t,a){var e=t;e.isLoading=a}},actions:{updateLoading:function(t,a){t.commit("LOADING",a)}},getters:{isLoading:function(t){var a=t;return a.isLoading}},modules:{productModules:p,cartModules:m}}),h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("nav",{staticClass:"navbar navbar-light bg-light"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e("i",{staticClass:"fa fa-heart text-info",attrs:{"aria-hidden":"true"}}),t._v("\n      六角血拼賣賣\n    ")]),e("div",{staticClass:"dropdown ml-auto"},[e("button",{staticClass:"btn btn-sm btn-cart",attrs:{"data-toggle":"dropdown","data-flip":"false"}},[e("i",{staticClass:"fa fa-shopping-cart text-dark fa-2x",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cart.carts.length))]),e("span",{staticClass:"sr-only"},[t._v("unread messages")])]),e("div",{staticClass:"dropdown-menu dropdown-menu-right p-3",staticStyle:{"min-width":"300px"},attrs:{"data-offset":"400"}},[e("h6",[t._v("已選擇商品")]),e("table",{staticClass:"table table-sm"},[e("tbody",t._l(t.cart.carts,function(a){return e("tr",{key:a.id},[t.cart.carts.length?[e("td",{staticClass:"align-middle text-center"},[e("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.removeCart(a.id)}}},[e("i",{staticClass:"fas fa-trash",attrs:{"aria-hidden":"true"}})])]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.product.title))]),e("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.total))])]:t._e()],2)}),0)]),t._m(0)])])],1),t._m(1),e("Home"),t._m(2)],1)},b=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-primary btn-block"},[e("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 結帳去\n        ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end"},[e("div",{staticClass:"container"},[e("div",{staticClass:"p-3 bg-lighter"},[e("h1",{staticClass:"display-3 font-weight-bold"},[t._v("買到剁手手！最後出清")]),e("p",{staticClass:"lead"},[t._v("我還不買爆!!!!!!!!!!!!!!!!!!!!!!!!")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"bg-light text-muted py-5"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"list-inline text-center"},[e("li",{staticClass:"list-inline-item"},[t._v("© Copright 2017 六角血拼賣賣")]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-info",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram",attrs:{"aria-hidden":"true"}}),t._v(" Instagrame")])]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-info",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square",attrs:{"aria-hidden":"true"}}),t._v(" Facebook")])]),e("li",{staticClass:"list-inline-item"},[e("a",{staticClass:"text-info",attrs:{href:"#"}},[t._v("About")])])]),e("p",{staticClass:"text-center"},[t._v("Made with Bootstrap4")])])])}],g=e("db72"),C=e("bb51"),_={name:"App",computed:Object(g["a"])({},Object(f["c"])(["isLoading","cart"])),methods:Object(g["a"])({removeCart:function(t){this.$store.dispatch("removeCart",t)}},Object(f["b"])(["getCart"])),created:function(){this.getCart()},components:{Home:C["default"]}},x=_,y=(e("5c0b"),e("2877")),O=Object(y["a"])(x,h,b,!1,null,null,null),w=O.exports;s["a"].config.productionTip=!1,s["a"].use(o.a,r.a),s["a"].component("Loading",l.a),new s["a"]({router:d,store:v,render:function(t){return t(w)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("5e27"),i=e.n(s);i.a},"5e27":function(t,a,e){},bb51:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container main-content mb-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"list-group sticky-top"},[t._l(t.categories,function(a){return e("a",{key:a,staticClass:"list-group-item list-group-item-action",class:{active:a===t.searchText},attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.searchText=a}}},[e("i",{staticClass:"fa fa-street-view",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(a)+"\n          ")])}),e("a",{staticClass:"list-group-item list-group-item-action",class:{active:""===t.searchText},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.searchText=""}}},[t._v("\n            全部顯示\n          ")])],2)]),e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"d-flex mb-4"},[e("form",{staticClass:"form-inline my-3 my-lg-0"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Search","aria-label":"Search"},domProps:{value:t.searchText},on:{input:function(a){a.target.composing||(t.searchText=a.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(a){t.searchText=""}}},[e("i",{staticClass:"fa fa-times"})])])])]),e("button",{staticClass:"btn btn-outline-primary ml-auto",attrs:{type:"button"},on:{click:t.getProducts}},[t._v("\n            重新取得資料\n          ")])]),e("div",{staticClass:"tab-pane",attrs:{id:"list-gift"}},[e("div",{staticClass:"row align-items-stretch"},t._l(t.filterData,function(a){return e("div",{key:a.id,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card border-0 box-shadow text-center h-100"},[e("img",{staticClass:"card-img-top",attrs:{src:a.image,alt:"Card image cap"}}),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[t._v(t._s(a.title))]),e("p",{staticClass:"card-text text-left"},[t._v(t._s(a.content))])]),e("div",{staticClass:"card-footer border-top-0 bg-white"},[e("button",{staticClass:"btn btn-outline-secondary btn-block btn-sm",on:{click:function(e){return t.addtoCart(a.id)}}},[e("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 加到購物車\n                  ")])])])])}),0)])])])])])},i=[],r=(e("6762"),e("2fdb"),e("db72")),n=e("2f62"),o={name:"Home",data:function(){return{searchText:""}},computed:Object(r["a"])({filterData:function(){var t=this;return t.searchText?t.products.filter(function(a){var e=a.title.toLowerCase().includes(t.searchText.toLowerCase());return e}):this.products}},Object(n["c"])(["isLoading","categories","products"])),methods:Object(r["a"])({addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$store.dispatch("addtoCart",{id:t,qty:a})}},Object(n["b"])(["productsModules","getProducts"])),created:function(){this.getProducts()}},c=o,l=e("2877"),u=Object(l["a"])(c,s,i,!1,null,"0443c896",null);a["default"]=u.exports}});
//# sourceMappingURL=app.255cac2b.js.map