"use strict";(self.webpackChunksocialnetwork=self.webpackChunksocialnetwork||[]).push([[889],{2889:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var s=t(364),a=t(7781),i=t(9475),r=t(5705),u=t(7965),o=t(184),c=function(e){var n=e.addNewMessageHandle,t=(0,r.TA)({initialValues:{message:""},onSubmit:function(e){n(e),t.resetForm()}});return(0,o.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,o.jsx)(i.Z,{id:"message",name:"message",label:"Enter text",type:"text",variant:"standard",onChange:t.handleChange,value:t.values.message}),(0,o.jsx)(u.z,{name:"Add",type:"submit"})]})},d=t(2791),l=t(3504),g="DialogItem_dialog__Ozc-c",m="DialogItem_navLink__Dzr-R",f=(0,d.memo)((function(e){return(0,o.jsxs)("div",{className:g,children:[(0,o.jsx)("img",{alt:"ava",src:e.ava,title:e.name,id:e.id.toString()}),(0,o.jsxs)(l.OL,{className:m,to:"/messages/".concat(e.id),children:[" ",e.name," "]})]})})),h="MessagesItem_message__s7hNw",x=(0,d.memo)((function(e){return(0,o.jsx)("div",{id:e.id.toString(),className:h,children:e.text})})),v="Messages_dialogs__AVLKB",j="Messages_dialogItems__qxTME",_="Messages_messages__nktWy",N="Messages_addMessageForm__1t2Xz",p=function(e){var n=e.dialogsPage,t=e.addNewMessage;return(0,o.jsxs)("div",{className:v,children:[(0,o.jsx)("div",{className:j,children:n.dialogs.map((function(e){return(0,o.jsx)(f,{id:e.id,name:e.name,ava:e.ava},e.id)}))}),(0,o.jsxs)("div",{className:_,children:[(0,o.jsx)("div",{children:n.messages.map((function(e){return(0,o.jsx)(x,{id:e.id,text:e.text},e.id)}))}),(0,o.jsx)("div",{className:N,children:(0,o.jsx)(c,{addNewMessageHandle:function(e){console.log(e),e.message?t(e.message.trim()):console.warn("field is empty")}})})]})]})},M=t(2932),w=t(7937),A=t(8892),k=(0,a.qC)((0,s.$j)((function(e){return{dialogsPage:(0,A.Km)(e)}}),(function(e){return{addNewMessage:function(n){return e((0,w.j)({value:n}))}}})),M.D)((function(e){var n=e.addNewMessage,t=e.dialogsPage;return(0,o.jsx)(p,{addNewMessage:n,dialogsPage:t})}))},2932:function(e,n,t){t.d(n,{D:function(){return d}});var s=t(1413),a=t(5987),i=t(364),r=t(6871),u=t(184),o=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function d(e){return(0,i.$j)(c)((function(n){var t=n.isAuth,i=(0,a.Z)(n,o);return t?(0,u.jsx)(e,(0,s.Z)({},i)):(0,u.jsx)(r.Fg,{to:"/login"})}))}},8892:function(e,n,t){t.d(n,{$z:function(){return s},Fq:function(){return a},Jt:function(){return o},Km:function(){return u},Tx:function(){return r},Uu:function(){return c},t:function(){return i}});var s=(0,t(6916).P1)((function(e){return e.users}),(function(e){return e})),a=function(e){return e.profilePage.profile},i=function(e){return e.profilePage.status},r=function(e){return e.auth.data.id.toString()},u=function(e){return e.dialogsPage},o=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return{captchaURL:e.auth.captchaURL}}}}]);
//# sourceMappingURL=889.32eca4dc.chunk.js.map