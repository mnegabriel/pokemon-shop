(this["webpackJsonppokemon-shop"]=this["webpackJsonppokemon-shop"]||[]).push([[0],{16:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(15),c=n.n(l);var u=function(){return r.a.createElement("header",null,r.a.createElement("img",{alt:""}),r.a.createElement("ul",null,r.a.createElement("li",null,"Bot\xe3o 1"),r.a.createElement("li",null,"Bot\xe3o 2"),r.a.createElement("li",null,"Bot\xe3o 3")))};var o=function(){return r.a.createElement("footer",null," Created by Gabriel Dantas")},m=n(3),s=n.n(m),i=n(4),p=n(2),f=n(5),E=n.n(f);var v=function(e){var t=e.pokeProps,n=t.name,a=t.sprites.front_default;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:a,alt:""}),r.a.createElement("h5",null,n))};var h=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),u=Object(p.a)(c,2),o=u[0],m=u[1],f=Object(a.useState)(!0),h=Object(p.a)(f,2),b=h[0],k=h[1],d=Object(a.useState)([]),j=Object(p.a)(d,2),O=j[0],_=j[1],g=Object(a.useState)("https://pokeapi.co/api/v2/pokemon"),C=Object(p.a)(g,2),w=C[0],x=C[1];Object(a.useEffect)((function(){E.a.get(w).then((function(e){var t=e.data,n=t.results,a=t.next,r=t.previous;l(a),m(r),y(n)}))}),[w]);var y=function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(i.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.a.get(t.url).then((function(e){return e.data})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,_(n),k(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,O.map((function(e){return r.a.createElement(v,{key:e.name,pokeProps:e})})),b?r.a.createElement("h1",null,"Carregando..."):r.a.createElement("h1",null,"Chegou"),r.a.createElement("button",{onClick:function(){null!=o&&(x(o),console.log(o))}},"Prev"),r.a.createElement("button",{onClick:function(){x(n),console.log(n)}},"Next"))};var b=function(){return r.a.createElement("h2",null,"____________Cart component is here")};var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,r.a.createElement("h1",null,"Choose your pokemon:"),r.a.createElement(h,null)),r.a.createElement("aside",null,r.a.createElement(b,null)))};var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(k,null),r.a.createElement(o,null))};c.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.39a27635.chunk.js.map