(this["webpackJsonpreact-homeworks"]=this["webpackJsonpreact-homeworks"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={nav:"Header_nav__3EvKJ",hamburger:"Header_hamburger__2mhWp",line:"Header_line__13J6n",menu:"Header_menu__2U7ec",active:"Header_active__1to5y"}},,,,,function(e,t,n){e.exports={message:"Message_message__26s74",image:"Message_image__1XVSY",text:"Message_text__17aFY",author:"Message_author__2GQ6F",time:"Message_time__3-4sE"}},function(e,t,n){e.exports={totalUser:"Greeting_totalUser__iZdUe",inputGroup:"Greeting_inputGroup__3w3o9",input:"Greeting_input__1QGX3",error:"Greeting_error__Td8r6",errorText:"Greeting_errorText__hYb-m"}},,function(e,t,n){e.exports={task:"Affairs_task__1svy6",buttons:"Affairs_buttons__M3s9f",high:"Affairs_high__1qpLU",middle:"Affairs_middle__jxm-6",low:"Affairs_low__3SgbG"}},function(e,t,n){e.exports={input:"SuperInputText_input__3ta3N",errorInput:"SuperInputText_errorInput__36O12",error:"SuperInputText_error__27Inf"}},function(e,t,n){e.exports={checkboxLabel:"SuperCheckbox_checkboxLabel__RCrH3",checkbox:"SuperCheckbox_checkbox__3p_T_",focused:"SuperCheckbox_focused__GyPv3"}},,function(e,t,n){e.exports={blue:"HW4_blue__NoyNh",column:"HW4_column__2mrmf",testSpanError:"HW4_testSpanError__3xlJ9"}},function(e,t,n){e.exports={default:"SuperButton_default__Ugepb",red:"SuperButton_red__3S60z"}},function(e,t,n){e.exports={page404:"Error_page404__r5gCv",number:"Error_number__2JJtf"}},,function(e,t,n){e.exports={App:"App_App__2G7b1"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(20),s=n.n(r),i=(n(27),n(21)),o=n.n(i),l=n(5),j=n.n(l),u=n(8),b=n(10),d=n.n(b),h=n(0);var x=function(e){return Object(h.jsxs)("div",{className:d.a.message,children:[Object(h.jsx)("div",{className:d.a.image,children:Object(h.jsx)("img",{src:e.avatar,alt:""})}),Object(h.jsxs)("div",{className:d.a.text,children:[Object(h.jsx)("span",{className:d.a.author,children:e.name}),Object(h.jsx)("p",{children:e.message}),Object(h.jsx)("span",{className:d.a.time,children:e.time})]})]})},O="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg",m="\u0414\u0438\u043c\u044b\u0447",_='Ctrl + Alt + L \u043d\u0435 \u0437\u0430\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c \u0447\u0442\u043e\u0431 \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u043a\u043e\u0434 \u0431\u044b\u043b (\u044d\u0442\u043e \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438 \u043e\u0431\u043b\u0435\u0433\u0447\u0430\u0435\u0442 \u043f\u043e\u0438\u0441\u043a \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 "\u0447\u0442\u043e \u0442\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442")\n',p="22:00";var f=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"homeworks 1"}),Object(h.jsx)(x,{avatar:O,name:m,message:_,time:p})]})},v=n(3),g=n(13),N=n.n(g);var k=function(e){return Object(h.jsxs)("div",{className:N.a.task,children:[Object(h.jsx)("span",{children:e.affair.name}),Object(h.jsxs)("span",{className:N.a[e.affair.priority],children:["[ ",e.affair.priority," ]"]}),Object(h.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(h.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsxs)("div",{className:N.a.buttons,children:[Object(h.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(h.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(h.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(h.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(c.useState)(y),t=Object(v.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("all"),s=Object(v.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"homeworks 2"}),Object(h.jsx)(C,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},w=n(22),A=n(11),T=n.n(A),E=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,a=e.error,r=e.totalUsers,s="".concat(T.a.input," ").concat(a&&T.a.error);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{className:T.a.totalUser,children:["User online: ",r]}),Object(h.jsxs)("div",{className:T.a.inputGroup,children:[Object(h.jsx)("input",{value:t,onChange:n,className:s}),Object(h.jsx)("button",{onClick:c,disabled:!!a,children:"+"})]}),Object(h.jsx)("span",{className:T.a.errorText,children:a})]})},U=function(e){var t=e.users,n=e.addUserCallback,a=Object(c.useState)(""),r=Object(v.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(v.a)(o,2),j=l[0],u=l[1],b=t.length;return Object(h.jsx)(E,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),u("")):(i(""),u("name is required"))},addUser:function(){j||""===s?u("name is required"):(n(s),alert("Hello ".concat(s,"!")),i(""))},error:j,totalUsers:b})},F=n(31);var G=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"homeworks 3"}),Object(h.jsx)(U,{users:n,addUserCallback:function(e){a([{_id:Object(F.a)(),name:e}].concat(Object(w.a)(n)))}})]})},J=n(6),H=n(7),I=n(14),M=n.n(I),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,a=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(H.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(M.a.error," ").concat(i||""),j="".concat(M.a.input," ").concat(r&&M.a.errorInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),a&&"Enter"===e.key&&a()},className:j},o)),r&&Object(h.jsx)("span",{className:l,children:r})]})},B=n(17),L=n.n(B),W=n(18),q=n.n(W),K=function(e){var t=e.red,n=e.className,c=Object(H.a)(e,["red","className"]),a="".concat(q.a.default," ").concat(t&&q.a.red," ").concat(n);return Object(h.jsx)("button",Object(J.a)({className:a},c))},Y=n(15),D=n.n(Y),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,c=e.className,a=(e.spanClassName,e.children),r=Object(H.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(D.a.checkbox," ").concat(c||"");return Object(h.jsxs)("label",{className:D.a.checkboxLabel,children:[Object(h.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),a&&Object(h.jsx)("span",{className:D.a.spanClassName,children:a})]})};var Q=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],r=n?"":"Field is required",s=function(){r?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(c.useState)(!1),o=Object(v.a)(i,2),l=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"homeworks 4"}),Object(h.jsxs)("div",{className:L.a.column,children:[Object(h.jsx)(P,{value:n,onChangeText:a,onEnter:s,error:r}),Object(h.jsx)(P,{className:L.a.blue}),Object(h.jsx)(K,{children:"default"}),Object(h.jsx)(K,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(K,{disabled:!0,children:"disabled"}),Object(h.jsx)(X,{checked:l,onChangeChecked:j,children:"some text "}),Object(h.jsx)(X,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]})]})},R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,r=Object(H.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),i=Object(v.a)(s,2),o=i[0],l=(i[1],a||{}),j=l.children,u=l.onDoubleClick,b=l.className,d=Object(H.a)(l,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",b);return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(P,Object(J.a)({autoFocus:!0,onBlur:function(e){t&&t(e)},onEnter:function(){n&&n()}},r)):Object(h.jsx)("span",Object(J.a)(Object(J.a)({onDoubleClick:function(e){u&&u(e)},className:x},d),{},{children:j||r.value}))})};function z(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}z("test",{x:"A",y:1});!function(e,t){var n=t,c=localStorage.getItem(e);null!==c&&(n=JSON.parse(c))}("test",{x:"",y:0});var V=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 6",Object(h.jsx)("div",{children:Object(h.jsx)(R,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(h.jsx)(K,{onClick:function(){z("editable-span-value",n)},children:"save"}),Object(h.jsx)(K,{onClick:function(){},children:"restore"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var Z=function(){return Object(h.jsxs)("div",{className:"homeworks",children:[Object(h.jsx)(f,{}),Object(h.jsx)(S,{}),Object(h.jsx)(G,{}),Object(h.jsx)(Q,{}),Object(h.jsx)(V,{})]})},$=n(2);var ee=function(){return Object(h.jsx)("div",{})};var te=function(){return Object(h.jsx)("div",{})},ne=n(19),ce=n.n(ne);var ae=function(){return Object(h.jsxs)("div",{className:ce.a.page404,children:[Object(h.jsx)("div",{className:ce.a.number,children:"404"}),Object(h.jsx)("div",{children:"Sorry, page not found!"})]})},re="/pre-junior",se="/junior",ie="/junior-plus";var oe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)($.d,{children:[Object(h.jsx)($.b,{path:"/",element:Object(h.jsx)($.a,{replace:!0,to:re})}),Object(h.jsx)($.b,{path:re,element:Object(h.jsx)(Z,{})}),Object(h.jsx)($.b,{path:se,element:Object(h.jsx)(ee,{})}),Object(h.jsx)($.b,{path:ie,element:Object(h.jsx)(te,{})}),Object(h.jsx)($.b,{path:"*",element:Object(h.jsx)(ae,{})})]})})};var le=function(){return Object(h.jsxs)("div",{className:j.a.nav,children:[Object(h.jsxs)("div",{className:j.a.hamburger,children:[Object(h.jsx)("div",{className:j.a.line}),Object(h.jsx)("div",{className:j.a.line}),Object(h.jsx)("div",{className:j.a.line})]}),Object(h.jsxs)("ul",{className:j.a.menu,children:[Object(h.jsx)("li",{className:"".concat(j.a.item," ").concat(j.a.active),children:Object(h.jsx)(u.b,{to:re,className:function(e){return e.isActive?j.a.active:""},children:"Pre-Junior"})}),Object(h.jsx)("li",{className:j.a.item,children:Object(h.jsx)(u.b,{to:se,className:function(e){return e.isActive?j.a.active:""},children:"Junior"})}),Object(h.jsx)("li",{className:j.a.item,children:Object(h.jsx)(u.b,{to:ie,className:function(e){return e.isActive?j.a.active:""},children:"Junior+"})})]})]})};var je=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(le,{}),Object(h.jsx)(oe,{})]})})};var ue=function(){return Object(h.jsxs)("div",{className:o.a.App,children:[Object(h.jsx)("h2",{children:"react homeworks:"}),Object(h.jsx)(je,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(ue,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.e185efd0.chunk.js.map