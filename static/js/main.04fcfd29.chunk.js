(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n.n(c),s=n(6),a=n(16),o=n(13),i=n(4),u=n(15),l="SET_TODOS",d="ADD_TODO",j="SET_USER",b="DELETE_TODO",p=function(e){return{type:j,payLoad:e}},h={todos:[],user:null},O=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{todos:Object(o.a)(t.payLoad)});case d:return Object(i.a)(Object(i.a)({},e),{},{todos:[].concat(Object(o.a)(e.todos),[t.payLoad])});case j:return Object(i.a)(Object(i.a)({},e),{},{user:t.payLoad});case b:return Object(i.a)(Object(i.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payLoad}))});default:return e}})),f=n(0),x=(n(24),n(25),function(e){return e.user}),_=n(1),m=function(){var e=Object(s.c)(x),t=Object(s.b)();return e?Object(_.jsxs)("div",{className:"CurrentUser",children:[Object(_.jsx)("button",{type:"button","data-cy":"userButton",onClick:function(){return t(p(null))},children:"Clear"}),Object(_.jsx)("h2",{className:"CurrentUser__title",children:Object(_.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(_.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(_.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(_.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}):Object(_.jsx)("p",{children:"No seelected user"})},v=n(7),y=n(5),T=n(3),L=n.n(T),N="https://mate.academy/students-api",k=function(){var e=Object(v.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(N,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=(n(28),function(){var e=Object(f.useState)("all"),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(f.useState)(""),a=Object(y.a)(r,2),o=a[0],i=a[1],u=Object(s.b)(),d=Object(s.c)(function(e,t){return"title"===t?function(t){return t.todos.filter((function(t){return t.title.includes(e)}))}:function(t){return t.todos.filter((function(t){switch(e){case"all":return!0;case"completed":return t.completed;case"active":return!t.completed;default:return!1}}))}}(n,o));Object(f.useEffect)((function(){var e=function(){var e=Object(v.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:t=e.sent,u({type:l,payLoad:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Todos not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var j=function(){var e=Object(v.a)(L.a.mark((function e(t){var n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t);case 3:n=e.sent,u(p(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("User not found");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(v.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u({type:b,payLoad:t});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"TodoList",children:[Object(_.jsxs)("div",{className:"TodoList__search",children:[Object(_.jsx)("h4",{children:"Search:"}),Object(_.jsxs)("div",{className:"TodoList__search-fields",children:[Object(_.jsxs)("label",{className:"TodoList__search-label",children:["by Title",Object(_.jsx)("input",{className:"TodoList__search-input","data-cy":"filterByTitle",onChange:function(e){c(e.target.value),i("title")}})]}),Object(_.jsxs)("label",{className:"TodoList__search-label",children:["by Status",Object(_.jsxs)("select",{onChange:function(e){c(e.target.value),i("status")},className:"TodoList__search-input",children:[Object(_.jsx)("option",{children:"all"}),Object(_.jsx)("option",{children:"active"}),Object(_.jsx)("option",{children:"completed"})]})]})]})]}),Object(_.jsx)("h2",{children:"Todos:"}),Object(_.jsx)("div",{className:"TodoList__list-container",children:Object(_.jsx)("ul",{className:"TodoList__list",children:d.map((function(e){return Object(_.jsxs)("li",{className:"TodoList__item TodoList__item--unchecked",children:[Object(_.jsxs)("label",{children:[Object(_.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(_.jsx)("p",{children:e.title})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){j(e.userId)},children:"User #".concat(e.userId)}),Object(_.jsx)("button",{className:" TodoList__user-button TodoList__user-button--selected button ",type:"button",onClick:function(){h(e.id)},children:"Delete"})]})]},e.id)}))})})]})}),g=(n(29),function(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("div",{className:"App__sidebar",children:Object(_.jsx)(C,{})}),Object(_.jsxs)("div",{className:"App__content",children:[Object(_.jsx)("div",{className:"App__content-container"}),Object(_.jsx)(m,{})]})]})}),S=function(){return Object(_.jsx)(s.a,{store:O,children:Object(_.jsx)(a.a,{children:Object(_.jsx)(g,{})})})};r.a.render(Object(_.jsx)(S,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.04fcfd29.chunk.js.map