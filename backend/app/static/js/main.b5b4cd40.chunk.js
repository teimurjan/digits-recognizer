(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{1087:function(n,e,t){},1088:function(n,e,t){"use strict";t.r(e);var o,i=t(43),c=t(77),r=t(479),a=t.n(r),s=(t(485),t(158)),l=t(252),u=function(n){return new Promise((function(e,t){var o=n.status<400?e:t;n.text().then(o)}))},d=t.p+"static/media/logo.103b5fa1.svg",f=(t(1087),function(n){return"".concat(n,"px")}),h={width:f(200),height:(o=100,"".concat(o,"px")),margin:"0 auto"},g={border:"1px solid black",width:f(198),height:f(198),backgroundColor:"white"},j=function(){var n=Object(c.useRef)(null),e=Object(c.useState)(),t=Object(s.a)(e,2),o=t[0],r=t[1],a=Object(c.useState)(),f=Object(s.a)(a,2),j=f[0],b=f[1],p=Object(c.useState)(),v=Object(s.a)(p,2),w=v[0],m=v[1];return Object(i.jsx)("div",{className:"App",style:h,children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(i.jsx)("h1",{className:"App-title",children:"Draw a digit"})]}),Object(i.jsx)("div",{style:g,children:Object(i.jsx)(l.SketchField,{ref:n,onChange:function(n){b(n.target.value)},width:"100%",height:"100%",tool:l.Tools.Pencil,imageFormat:"jpg",lineColor:"#111",lineWidth:10,value:j})}),w&&Object(i.jsxs)("h3",{children:["Predicted value is: ",w]}),Object(i.jsx)("button",{onClick:function(e){return n.current.clear()},children:"Clear"}),Object(i.jsx)("button",{onClick:function(){var e=n.current.toDataURL();m(void 0),r(void 0),function(n){return fetch("/api/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:n})}).then(u)}(e).then(m).catch(r)},children:"Guess the number"}),o&&Object(i.jsx)("p",{style:{color:"red"},children:"Something went wrong"})]})})},b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}a.a.render(Object(i.jsx)(j,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");b?(!function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):p(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):p(n)}))}}()},302:function(n,e){},485:function(n,e,t){},535:function(n,e){},536:function(n,e){},840:function(n,e){},842:function(n,e){},851:function(n,e){},853:function(n,e){},885:function(n,e){},886:function(n,e){},891:function(n,e){},893:function(n,e){},900:function(n,e){},919:function(n,e){},954:function(n,e){}},[[1088,1,2]]]);
//# sourceMappingURL=main.b5b4cd40.chunk.js.map