(this["webpackJsonppokemon-card-game"]=this["webpackJsonppokemon-card-game"]||[]).push([[0],{41:function(e,t,n){e.exports=n(57)},46:function(e,t,n){},47:function(e,t,n){},56:function(e){e.exports=JSON.parse("{}")},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),o=n.n(c),l=(n(46),n(10)),u=(n(47),n(5)),s=n(59);function i(){return r.a.createElement(u.a,{bg:"blue.300",shadow:"md",roundedBottom:"md"},r.a.createElement(s.a,{size:"2xl",as:"h1",fontFamily:"comic-sans",textAlign:"center",fontStyle:"italic",color:"white"},"Pok\xe9mon"))}var m=n(18),f=n.n(m),p=n(26),E=n(21),h=n(63),d=n(64),b=n(67),j=n(65),v=n(36),g=n(40),O=n(60),k=n(61),x=n(62);function y(e){var t=e.data,n=e.setTeam;return r.a.createElement(O.a,{templateColumns:"repeat(5, 1fr)",gap:2,m:4,mt:5},t.map((function(e){return r.a.createElement(u.a,{w:"100%",key:e.id,shadow:"sm"},r.a.createElement(v.a,{justifyContent:"center"},r.a.createElement(k.a,{src:e.sprites.front_default})),r.a.createElement(x.a,{textAlign:"center"},e.name),r.a.createElement(v.a,{justifyContent:"center",m:5},r.a.createElement(j.a,{leftIcon:"add",size:"lg",onClick:function(t){return function(e){n((function(t){return[].concat(Object(E.a)(t),[e])}))}(e)}},"Add")))})))}var w=n(66);n(56);function C(e){var t=e.setTeam,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],i=c[1],m=Object(a.useState)([]),O=Object(l.a)(m,2),k=O[0],x=O[1],C=Object(a.useState)([]),S=Object(l.a)(C,2),T=S[0],z=S[1],I=function(){var e=Object(a.useState)(0),t=Object(l.a)(e,2),n=t[0],r=t[1];return[Object(w.a)(Object(p.a)(f.a.mark((function e(){var t,a,r,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://pokeapi.co/api/v2/pokemon?limit=20&offset=".concat(n),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.results.map((function(e){return fetch(e.url).then((function(e){return e.json()}))})),e.next=10,Promise.all(c);case 10:return o=e.sent,console.log("hiwm"),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)}))),[n]),r]}(),A=Object(l.a)(I,2),P=A[0],J=A[1],R=Object(a.useRef)(),B=Object(h.a)(R,{root:null,rootMargin:"0px",threshold:1});Object(a.useEffect)((function(){P.value&&(z((function(e){return[].concat(Object(E.a)(e),Object(E.a)(P.value))})),console.log(P.value))}),[z,P.value]),Object(a.useEffect)((function(){B&&1===B.intersectionRatio&&J((function(e){return e+20}))}),[B,J]),Object(a.useEffect)((function(){x([])}),[o]);var F=function(){var e=Object(p.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pokeapi.co/api/v2/pokemon/",e.prev=1,e.next=4,fetch("https://pokeapi.co/api/v2/pokemon/"+o);case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,x([n]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{alignItems:"center",spacing:4,my:4},r.a.createElement(u.a,null,r.a.createElement(s.a,null,"Pok\xe9D\xe9x")),r.a.createElement(d.a,{isInline:!0},r.a.createElement(b.a,{variant:"filled",placeholder:"Pikachu",value:o,onChange:function(e){return i(e.target.value)},width:300}),r.a.createElement(j.a,{variantColor:"teal",size:"md",onClick:F},"Search"))),o.length>0?null:r.a.createElement(y,{data:T,setTeam:t}),o.length>0&&k.length>0?r.a.createElement(y,{data:k,setTeam:t}):null,r.a.createElement("div",{ref:R}),r.a.createElement(v.a,{justifyContent:"center"},o.length>0&&k.length>0?null:r.a.createElement(g.a,{thickness:"4px",speed:"0.85s",emptyColor:"gray.200",color:"blue.500",size:"xl"})))}function S(e){var t=e.team,n=e.setTeam;return r.a.createElement(O.a,{templateColumns:"repeat(6, 1fr)",gap:2,m:4,mt:5},t.map((function(e,t){return r.a.createElement(u.a,{w:"100%",key:e.id,shadow:"sm"},r.a.createElement(v.a,{justifyContent:"center"},r.a.createElement(k.a,{src:e.sprites.front_default})),r.a.createElement(x.a,{textAlign:"center"},e.name),r.a.createElement(v.a,{justifyContent:"center",m:5},r.a.createElement(j.a,{leftIcon:"minus",size:"lg",onClick:function(e){return function(e){n((function(t){return t.filter((function(t,n){return n!==e}))}))}(t)}},"Remove")))})))}var T=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(u.a,{bg:"grey.400"},r.a.createElement(i,null),r.a.createElement(S,{team:n,setTeam:c}),r.a.createElement(C,{setTeam:c}))},z=n(17),I=n(68);o.a.render(r.a.createElement(z.a,null,r.a.createElement(I.a,null),r.a.createElement(T,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0e38e00a.chunk.js.map