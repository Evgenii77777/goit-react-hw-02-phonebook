(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{57:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var r,a,c=n(0),o=n(11),i=n.n(o),s=n(8),u=n(3),b=n.n(u),l=n(7),p=n(13),d=n(14),j=n(16),f=n(15),h=n(5),O=n(2),m=Object(O.b)("getAllContacts"),v=Object(O.b)("addContact"),x=Object(O.b)("deleteContact"),C=Object(O.b)("getFiltered"),g=Object(O.b)("setContactLoading"),k=Object(O.b)("setError"),y=Object(O.b)("resetError"),w=n(12),F=function(t){return t.items},A=function(t){return t.error},L=function(t){return t.isContactLoading},D=function(t){return t.filter},N=Object(w.a)([F,D],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),E=n(1),H=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.onHandleChange=function(e){t.props.error&&t.props.resetError();var n=e.target,r=n.name,a=n.value;t.setState(Object(h.a)({},r,a))},t.onHandleSubmit=function(e){e.preventDefault(),t.props.checkDublicateName(t.state.name)?alert("".concat(t.state.name," \u0443\u0436\u0435 \u0435\u0441\u0442\u044c! ")):(t.props.addContact(t.state),t.setState({name:"",number:""}))},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h2",{children:"Phonebook"}),Object(E.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(E.jsxs)("label",{children:["Name:",Object(E.jsx)("input",{onChange:this.onHandleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(E.jsxs)("label",{children:["Number:",Object(E.jsx)("input",{onChange:this.onHandleChange,value:this.state.number,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(E.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),S=Object(s.b)((function(t,e){return{error:A(t)}}),{resetError:y})(H),z=function(t){var e=t.contacts,n=t.deleteClient;return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("ul",{children:["Contacts:",e.map((function(t){return Object(E.jsxs)("li",{children:[Object(E.jsx)("p",{children:t.name}),Object(E.jsx)("p",{children:t.number}),Object(E.jsx)("button",{onClick:n,type:"button",id:t.id,children:"Delete"})]},t.id)}))]})})},J=function(t){var e=t.filter,n=t.setFilter;return Object(E.jsxs)("label",{children:["Filter:",Object(E.jsx)("input",{type:"text",value:e,onChange:n})]})},Z=n(10),q=n(17),B=n.n(q),M=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).addContact=function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.props.addContactOperation(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.deleteContact=function(){var e=Object(l.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.target.id,t.props.deleteContactOperation(r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.setFilter=function(e){var n=e.target.value;t.props.getFiltered(n)},t.checkDublicateName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=Object(l.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.props.getAllContactOperation();case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(E.jsxs)(E.Fragment,{children:[this.props.error&&Object(E.jsx)("h2",{children:this.props.error}),this.props.isLoading&&Object(E.jsx)("h2",{children:"Loading......"}),Object(E.jsx)(S,{addContact:this.addContact,checkDublicateName:this.checkDublicateName}),Object(E.jsx)(J,{filter:this.props.filter,setFilter:this.setFilter}),Object(E.jsx)(z,{deleteContact:this.deleteContact,contacts:this.props.filteredContact})]})}}]),n}(c.Component),I={getAllContactOperation:function(t){return function(){var t=Object(l.a)(b.a.mark((function t(e){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(g()),t.prev=1,t.next=4,B.a.get("https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json");case 4:if(!(n=t.sent).data){t.next=10;break}r=Object.keys(n.data).map((function(t){return Object(Z.a)(Object(Z.a)({},n.data[t]),{},{id:t})})),e(m(r)),t.next=11;break;case 10:return t.abrupt("return");case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),e(k(t.t0.response.data.error));case 16:return t.prev=16,e(g()),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[1,13,16,19]])})));return function(e){return t.apply(this,arguments)}}()},addContactOperation:function(t){return function(){var e=Object(l.a)(b.a.mark((function e(n,r){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g()),e.prev=1,e.next=4,B.a.post("https://phonebook-e3785-default-rtdb.firebaseio.com/contacts.json",t);case 4:a=e.sent,n(v(Object(Z.a)(Object(Z.a)({},t),{},{id:a.data.name}))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.dir(e.t0),n(k(e.t0.response.data.error));case 12:return e.prev=12,n(g()),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t,n){return e.apply(this,arguments)}}()},deleteContactOperation:function(t){return function(){var e=Object(l.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(g()),e.prev=1,e.next=4,B.a.delete("https://phonebook-e3785-default-rtdb.firebaseio.com/contacts/".concat(t,".json"));case 4:n(x(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(k(e.t0.response.data.error));case 10:return e.prev=10,n(g()),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()},getFiltered:C},P=Object(s.b)((function(t){return{contacts:F(t),isLoading:L(t),error:A(t),filter:D(t),filteredContact:N(t)}}),I)(M),$=function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(P,{})})},G=(n(57),n(9)),K=n(6),Q=Object(O.c)([],(r={},Object(h.a)(r,m,(function(t,e){return e.payload})),Object(h.a)(r,v,(function(t,e){var n=e.payload;return[].concat(Object(G.a)(t),[n])})),Object(h.a)(r,x,(function(t,e){var n=e.payload;return Object(G.a)(t.filter((function(t){return t.id!==n})))})),r)),R=Object(O.c)("",Object(h.a)({},C,(function(t,e){return e.payload}))),T=Object(O.c)(!1,Object(h.a)({},g,(function(t){return!t}))),U=Object(O.c)("",(a={},Object(h.a)(a,k,(function(t,e){return e.payload})),Object(h.a)(a,y,(function(){return""})),a)),V=Object(K.b)({items:Q,isContactLoading:T,error:U,filter:R}),W=Object(O.a)({reducer:V,middleware:Object(G.a)(Object(O.d)())});i.a.render(Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(s.a,{store:W,children:Object(E.jsx)($,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.86f8efd8.chunk.js.map