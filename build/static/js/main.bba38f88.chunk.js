(this["webpackJsonpkeeper-app-part-1-starting"]=this["webpackJsonpkeeper-app-part-1-starting"]||[]).push([[0],{53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),c=n.n(l),o=n(38),u=n(21),i=n(34),m=n.n(i);var s=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header h1"},r.a.createElement(m.a,null)," Keeper "))};var E=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer p"}," Copyright \xa9 ",e," "))},f=n(36),p=n.n(f);var d=function(e){return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){return e.onDelete(e.id)}},r.a.createElement(p.a,null)))},v=n(25),h=n(32),b=n(37),j=n.n(b),O=n(70),g=n(71);var k=function(e){var t=Object(a.useState)({title:"",note:""}),n=Object(u.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),m=i[0],s=i[1];function E(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(v.a)({},n,a))}))}return r.a.createElement("div",null,r.a.createElement("form",{className:"create-note"},m&&r.a.createElement("input",{name:"title",placeholder:"Title",value:l.title,onChange:E}),r.a.createElement("textarea",{name:"note",placeholder:"Take a note...",rows:m?3:1,value:l.note,onChange:E,onClick:function(){s(!0)}}),r.a.createElement(g.a,{in:m},r.a.createElement(O.a,{onClick:function(t){e.onAdd(l),t.preventDefault(),c({title:"",note:""})}},r.a.createElement(j.a,null)))))};var C=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];function c(e){l((function(t){return t.filter((function(t,n){return n!==e}))}))}return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(k,{onAdd:function(e){console.log(e),l((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return r.a.createElement(d,{title:e.title,content:e.note,key:t,id:t,onDelete:c})})),r.a.createElement(E,null))};c.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.bba38f88.chunk.js.map