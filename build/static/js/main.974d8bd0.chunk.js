(this["webpackJsonppokemon-shop"]=this["webpackJsonppokemon-shop"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c);var o=function(){return r.a.createElement("header",null,r.a.createElement("img",{alt:""}),r.a.createElement("ul",null,r.a.createElement("li",null,"Bot\xe3o 1"),r.a.createElement("li",null,"Bot\xe3o 2"),r.a.createElement("li",null,"Bot\xe3o 3")))};var u=function(){return r.a.createElement("footer",null," Created by ",r.a.createElement("a",{href:"https://github.com/mnegabriel"},"Gabriel Dantas"))},i=a(18),s=a(2),m=a(4),p=a.n(m),f=a(6),E=a(7),v=a.n(E);var d=function(e){var t=e.pokeProps,a=t.id,n=t.name,c=t.sprites.front_default,l=e.grabPokeInfo,o=n[0].toUpperCase()+n.slice(1),u=c;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:u,alt:""}),r.a.createElement("p",null,a),r.a.createElement("h5",null,o),r.a.createElement("button",{onClick:function(){return l({id:a,name:n,image:u})}}," Add to cart "))};var b=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),u=Object(s.a)(o,2),i=u[0],m=u[1],E=Object(n.useState)(!0),b=Object(s.a)(E,2),h=b[0],g=b[1],k=Object(n.useState)([]),j=Object(s.a)(k,2),O=j[0],C=j[1],N=Object(n.useState)("https://pokeapi.co/api/v2/pokemon"),x=Object(s.a)(N,2),P=x[0],w=x[1];Object(n.useEffect)((function(){v.a.get(P).then((function(e){var t=e.data,a=t.results,n=t.next,r=t.previous;l(n),m(r),y(a)}))}),[P]);var y=function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.a.get(t.url).then((function(e){return e.data})),e.abrupt("return",a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:a=e.sent,C(a),g(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function S(){null!=i&&(g(!0),w(i),console.log(i))}function I(){g(!0),w(c),console.log(c)}var B=e.dataForCart;function F(e){B(e)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:S},"Prev"),r.a.createElement("button",{onClick:I},"Next")),r.a.createElement("div",{className:"deck"},h?r.a.createElement("h1",null,"Carregando..."):O.map((function(e){return r.a.createElement(d,{key:e.id,pokeProps:e,grabPokeInfo:F})}))),r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:S},"Prev"),r.a.createElement("button",{onClick:I},"Next")))};var h=function(e){var t=e.cartItems;return r.a.createElement(r.a.Fragment,null,t.length>0?r.a.createElement("h2",null,t,"teste"):r.a.createElement("h2",null,"carrinho vazio"))};var g=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"list"},r.a.createElement("h1",null,"Choose your pokemon:"),r.a.createElement(b,{dataForCart:function(e){console.log("bot\xe3o rodando fun\xe7\xe3o");var t=a.filter((function(e){return e.id===a.id}));return t.length>0?console.log("j\xe1 existe"):c([].concat(Object(i.a)(a),[t]))}})),r.a.createElement("div",{className:"cart"},r.a.createElement(h,{cartItems:a})))};var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o,null),r.a.createElement(g,null),r.a.createElement(u,null))};l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.974d8bd0.chunk.js.map