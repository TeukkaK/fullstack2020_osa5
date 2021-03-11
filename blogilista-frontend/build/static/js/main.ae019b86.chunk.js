(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),o=n.n(l),u=n(7),c=n(1),i=n.n(c),s=n(4),d=n(3),m=n(6),f=n.n(m),p=function(e){var t=e.user,n=e.loggedUser,a=e.deleteBlog;return r.a.createElement("div",{className:"userInfo"},t.name,r.a.createElement("br",null),t.id!==n.id?null:r.a.createElement("button",{onClick:a,id:"remove-button"},"remove"))},b=function(e){var t=e.likes,n=e.addLike;return r.a.createElement("div",{className:"likes"},"likes ",t,r.a.createElement("button",{onClick:n,id:"like-button"},"like"))},g=function(e){var t=e.blog,n=e.loggedUser,l=e.likeBlog,o=e.deleteBlog,u=Object(a.useState)(!1),c=Object(d.a)(u,2),i=c[0],s=c[1],m={display:i?"none":""},f={display:i?"":"none"},g=function(){s(!i)},v=typeof t.user!==String?t.user:null;return r.a.createElement("div",{style:{paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},className:"blog"},r.a.createElement("div",{style:m,className:"hiddenBlog"},t.title," ",t.author,r.a.createElement("button",{onClick:g,id:"view-button"},"view")),r.a.createElement("div",{style:f,className:"blogInfo"},t.title," ",t.author,r.a.createElement("button",{onClick:g,id:"hide-button"},"hide"),r.a.createElement("br",null),r.a.createElement("a",{href:t.url},t.url),r.a.createElement(b,{likes:t.likes,addLike:l}),r.a.createElement(p,{user:v,loggedUser:n,deleteBlog:o})))};g.prototypes={blog:f.a.object.isRequired,blogs:f.a.array.isRequired,setBlogs:f.a.isRequired};var v=g,h=function(e){var t=e.message,n=e.error;return null===t?null:n?r.a.createElement("div",{className:"error"},t):r.a.createElement("div",{className:"success"},t)},E=r.a.forwardRef((function(e,t){var n=Object(a.useState)(!1),l=Object(d.a)(n,2),o=l[0],u=l[1],c={display:o?"none":""},i={display:o?"":"none"},s=function(){u(!o)};return Object(a.useImperativeHandle)(t,(function(){return{toggleVisibility:s}})),r.a.createElement("div",null,r.a.createElement("div",{style:c},r.a.createElement("button",{onClick:s},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:s},"cancel")))}));E.displayName="Togglable",E.prototypes={buttonLabel:f.a.string.isRequired};var k=E,w=function(e){var t=e.createBlog,n=Object(a.useState)(""),l=Object(d.a)(n,2),o=l[0],u=l[1],c=Object(a.useState)(""),i=Object(d.a)(c,2),s=i[0],m=i[1],f=Object(a.useState)(""),p=Object(d.a)(f,2),b=p[0],g=p[1];return r.a.createElement("div",{className:"formDiv"},r.a.createElement("h2",null,"create new"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({title:o,author:s,url:b}),u(""),m(""),g("")}},r.a.createElement("div",null,"title:",r.a.createElement("input",{id:"title",type:"text",value:o,name:"Title",onChange:function(e){var t=e.target;return u(t.value)}})),r.a.createElement("div",null,"author:",r.a.createElement("input",{id:"author",type:"text",value:s,name:"Author",onChange:function(e){var t=e.target;return m(t.value)}})),r.a.createElement("div",null,"url:",r.a.createElement("input",{id:"url",type:"text",value:b,name:"Url",onChange:function(e){var t=e.target;return g(t.value)}})),r.a.createElement("button",{type:"submit",id:"blog-button"},"create")))},y=function(e){var t=e.handleSubmit,n=e.handleUsernameChange,a=e.handlePasswordChange,l=e.username,o=e.password;return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,"username",r.a.createElement("input",{value:l,onChange:n})),r.a.createElement("div",null,"password",r.a.createElement("input",{type:"password",value:o,onChange:a})),r.a.createElement("button",{type:"submit"},"login")))},O=function(e){var t=e.blogService,n=e.user,a=e.setUser;return r.a.createElement("form",{onSubmit:function(){window.localStorage.removeItem("loggedBlogappUser"),t.setToken(null),a(null)}},n.name," logged in",r.a.createElement("button",{type:"submit"},"logout"))},j=n(5),x=n.n(j),S="/api/blogs",B=null,C={getAll:function(){return x.a.get(S).then((function(e){return e.data}))},create:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:B}},e.next=3,x.a.post(S,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(s.a)(i.a.mark((function e(t,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.put("".concat(S,"/").concat(t),n);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),deleteBlog:function(){var e=Object(s.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:B}},e.next=3,x.a.delete("".concat(S,"/").concat(t),n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),setToken:function(e){B="bearer ".concat(e)}},U={login:function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],l=t[1],o=Object(a.useState)(null),c=Object(d.a)(o,2),m=c[0],f=c[1],p=Object(a.useState)(null),b=Object(d.a)(p,2),g=b[0],E=b[1],j=Object(a.useState)(null),x=Object(d.a)(j,2),S=x[0],B=x[1];Object(a.useEffect)((function(){C.getAll().then((function(e){return l(e)}))}),[]),Object(a.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);E(t),C.setToken(t.token)}}),[]);var N=function(e,t){return t.likes-e.likes},T=function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.login(t);case 3:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),C.setToken(n.token),E(n),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),B(!0),f("wrong username or password"),setTimeout((function(){f(null),B(!1)}),2e3);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A.current.toggleVisibility(),e.next=3,C.create(t);case 3:a=e.sent,l(n.concat(a)),B(!1),f("a new blog ".concat(a.title," by ").concat(a.author)),setTimeout((function(){f(null)}),2e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.find((function(e){return e.id===t})),e.prev=1,r=Object(u.a)(Object(u.a)({},a),{},{likes:a.likes+1}),e.next=5,C.update(t,r);case 5:l(n.map((function(e){return e.id!==t?e:r}))),B(!1),f("liked ".concat(r.title," by ").concat(r.author)),setTimeout((function(){f(null)}),2e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Failed to like blog",{blog:a});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.find((function(e){return e.id===t})),!window.confirm("Remove blog ".concat(a.title," by ").concat(a.author))){e.next=11;break}return e.prev=2,e.next=5,C.deleteBlog(t);case 5:l(n.filter((function(e){return e.id!==t}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error("Poistaminen ep\xe4onnistui",{blog:a});case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),A=r.a.createRef();return r.a.createElement("div",null,null===g?r.a.createElement(y,{loginUser:T,message:m,error:S}):r.a.createElement("div",null,r.a.createElement("h2",null,"blogs"),r.a.createElement(h,{message:m,error:S}),r.a.createElement(O,{blogService:C,user:g,setUser:E}),r.a.createElement(k,{buttonLabel:"new blog",ref:A},r.a.createElement(w,{createBlog:I})),n.sort(N).map((function(e){return r.a.createElement(v,{key:e.id,blog:e,loggedUser:g,likeBlog:function(){return L(e.id)},deleteBlog:function(){return R(e.id)}})}))))};n(43);o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ae019b86.chunk.js.map