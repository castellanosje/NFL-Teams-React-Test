(this["webpackJsonpnfl-app"]=this["webpackJsonpnfl-app"]||[]).push([[0],{12:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),o=n.n(c),r=(n(12),n(2)),s=n(6),i=n(3),l=n.n(i),u=n(4),f=n.p+"static/media/logo.066fa40e.png",b=n(0),j=function(t){var e=t.id,n=t.favCallBack;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:"favBtn",onClick:function(t){n(e)},children:Object(b.jsx)("i",{className:"fa fa-star"})})})},d=function(t){var e=t.color,n=(t.alt_color,t.id),c=t.logos,o=t.mascot,s=t.school,i=t.abbreviation;Object(a.useEffect)((function(){c&&(v(c[0]).then((function(t){var e=t?c[0]:f;m(e)})),v(c[1]).then((function(t){var e=t?c[1]:f;m(e)})))}),[]);var d=Object(a.useState)(f),p=Object(r.a)(d,2),h=p[0],m=p[1],v=function(){var t=Object(u.a)(l.a.mark((function t(e){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.abrupt("return",404!==n.status);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O={backgroundColor:e};return Object(b.jsxs)("div",{style:O,className:"card",id:n,children:[Object(b.jsx)("img",{src:h}),Object(b.jsxs)("p",{children:["The ",o," of:"]}),Object(b.jsx)("h2",{children:s}),Object(b.jsxs)("p",{children:["- ",i," -"]}),Object(b.jsx)(j,{id:n,favCallBack:function(t){console.log(t)}})]})},p=function(t){var e=t.teams,n=t.loading;return Object(b.jsxs)("div",{className:"grilla",children:[Object(b.jsx)("p",{children:n&&"cargando..."}),e.map((function(t){return Object(a.createElement)(d,Object(s.a)(Object(s.a)({},t),{},{key:t.id}))}))]})},h=function(){var t=Object(u.a)(l.a.mark((function t(e){var n,a,c,o,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.collegefootballdata.com/teams",t.next=3,fetch("https://api.collegefootballdata.com/teams");case 3:return n=t.sent,t.next=6,n.json();case 6:return a=t.sent,c=e.toLowerCase(),12,o=0,r=a.filter((function(t,e){var n=t.abbreviation?t.abbreviation:" ",a=t.mascot?t.mascot:" ",r=t.school?t.school:" ";if(o<12&&(n.toLowerCase().includes(c)||a.toLowerCase().includes(c)||r.toLowerCase().includes(c)))return o++,console.log(o<12),{abbreviation:t.abbreviation,alt_color:t.alt_color,alt_name1:t.alt_name1,alt_name2:t.alt_name2,alt_name3:t.alt_name3,color:t.color,conference:t.conference,division:t.division,id:t.id,logos:t.logos,mascot:t.mascot,school:t.school}})),t.abrupt("return",r);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],c=e[1],o=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(e,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){h(t).then((function(t){o({data:t,loading:!1})}))}),[t]),c}(n),s=o.data,i=o.loading;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("form",{onSubmit:function(t){t.preventDefault()},children:Object(b.jsx)("input",{type:"text",value:n,placeholder:"buscar un equipo...",onChange:function(t){c(t.target.value)}})}),s&&Object(b.jsx)(p,{teams:s,loading:i})]})},v=document.getElementById("root");o.a.render(Object(b.jsx)(m,{}),v)}},[[15,1,2]]]);
//# sourceMappingURL=main.7f66d324.chunk.js.map