(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(9),i=n.n(r),c=n(8),s=n(10),o=n(3),l=n(4),d=n(6),u=n(5),b=n(2),j=n(0),m=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",name:"",number:""},e.onHandleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.onHandleSubmit=function(t){t.preventDefault(),e.props.addContact(e.state),e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Phonebook"}),Object(j.jsxs)("form",{onSubmit:this.onHandleSubmit,children:[Object(j.jsxs)("label",{children:["Name:",Object(j.jsx)("input",{onChange:this.onHandleChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(j.jsxs)("label",{children:["Number:",Object(j.jsx)("input",{onChange:this.onHandleChange,type:"tel",value:this.state.tel,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})]})}}]),n}(a.Component),h=function(e){var t=e.contacts,n=e.deleteClient;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("ul",{children:["Contacts:",t.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:e.name}),Object(j.jsx)("p",{children:e.number}),Object(j.jsx)("button",{onClick:n,type:"button",id:e.id,children:"Delete"})]},e.id)}))]})})},O=n(19),f=function(e){var t=e.filter,n=e.setFilter;return Object(j.jsxs)("label",{children:["Filter:",Object(j.jsx)("input",{type:"text",value:t,onChange:n})]})},p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var n=t.contact;e.setState((function(e){return{contacts:[].concat(Object(s.a)(e.contacts),[Object(c.a)(Object(c.a)({},n),{},{id:Object(O.a)()})])}}))},e.deleteClient=function(t){var n=t.target.id;e.setState({contacts:e.state.contacts.filter((function(e){return e.id!==n}))})},e.setFilter=function(t){var n=t.target.value;e.setState({filter:n})},e.getFilteredClients=function(){return e.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e.state.filter.toLowerCase())}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{addContact:this.addContact}),Object(j.jsx)(f,{filter:this.state.filter,setFilter:this.setFilter}),Object(j.jsx)(h,{contacts:this.getFilteredClients(),deleteClient:this.deleteClient})]})}}]),n}(a.Component),C=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(p,{})})};n(16);i.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(C,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e987b94c.chunk.js.map