(function(e){function r(r){for(var o,i,s=r[0],l=r[1],c=r[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&f.push(t[i][0]),t[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(r);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],o=!0,s=1;s<n.length;s++){var l=n[s];0!==t[l]&&(o=!1)}o&&(a.splice(r--,1),e=i(i.s=n[0]))}return e}var o={},t={app:0},a=[];function i(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,r,n){i.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,r){if(1&r&&(e=i(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)i.d(n,o,function(r){return e[r]}.bind(null,o));return n},i.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,r,n){e.exports=n("cd49")},cd49:function(e,r,n){"use strict";n.r(r);var o=n("2b0e"),t=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],i=n("2877"),s={},l=Object(i["a"])(s,t,a,!1,null,null,null),c=l.exports,u=n("9483");"serviceWorker"in navigator&&window.addEventListener("load",()=>{Object(u["a"])(window.location.origin+"/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}})});var p=n("8c4f"),f=function(){var e=this,r=e._self._c;e._self._setupProxy;return r("div",{staticClass:"home"},[e._v(" 我就是看看有没有显示页面1 ")])},d=[],v=n("9ab4"),b=n("1b40");let g=class extends b["b"]{};g=Object(v["a"])([Object(b["a"])({components:{}})],g);var h=g,w=h,y=Object(i["a"])(w,f,d,!1,null,null,null),m=y.exports;o["a"].use(p["a"]);const O=[{path:"/",name:"Home",component:m}],j=new p["a"]({routes:O});var _=j,x=n("2f62");o["a"].use(x["a"]);var k=new x["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:_,store:k,render:e=>e(c)}).$mount("#app")}});
//# sourceMappingURL=app.9df36546.js.map