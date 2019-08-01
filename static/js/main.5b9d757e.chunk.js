(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,a){},40:function(e,t,a){e.exports=a(70)},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(13),r=a.n(s),i=(a(46),a(5)),o=a(6),c=a(9),m=a(7),u=a(8),d=(a(47),a(48),a(73)),h=a(72),p=(a(20),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleDelete=function(){var e=JSON.parse(localStorage.getItem("items"));e.splice(a.state.index,1),localStorage.setItem("items",JSON.stringify(e))},a.state={show:!1,index:e.index,items:e.items},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.items[this.state.index]?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"danger",onClick:this.handleShow},"Delete Contact"),l.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Confirm Contact Deletion")),l.a.createElement("form",{onSubmit:this.handleDelete},l.a.createElement(h.a.Body,null,"Are you sure you want to delete this contact? This cannot be undone."),l.a.createElement(h.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),l.a.createElement("input",{className:"btn btn-danger",type:"submit",value:"Delete Contact",variant:"danger"}))))):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.index===t.index?null:{index:e.index}}}]),t}(l.a.Component)),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleSaveEdit=function(e){var t=JSON.parse(localStorage.getItem("items"));t[a.state.index].name.first=e.target[0].value,t[a.state.index].name.last=e.target[1].value,t[a.state.index].phone=e.target[2].value,t[a.state.index].email=e.target[3].value,t[a.state.index].desc=e.target[4].value,localStorage.setItem("items",JSON.stringify(t))},a.state={show:!1,items:a.props.items,index:a.props.index},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state.items[this.state.index]?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"primary",onClick:this.handleShow},"Edit Contact"),l.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Edit Contact")),l.a.createElement("form",{onSubmit:this.handleSaveEdit},l.a.createElement(h.a.Body,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"AddFirstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.items[this.state.index].name.first})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"AddLastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.state.items[this.state.index].name.last})),l.a.createElement("div",null,l.a.createElement("label",{for:"AddPhone"},"Phone Number"),l.a.createElement("input",{type:"tel",className:"form-control",defaultValue:this.state.items[this.state.index].phone})),l.a.createElement("div",null,l.a.createElement("label",{for:"AddEmail"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",defaultValue:this.state.items[this.state.index].email})),l.a.createElement("div",null,l.a.createElement("label",{for:"AddDesc"},"Description"),l.a.createElement("textarea",{className:"form-control",defaultValue:this.state.items[this.state.index].desc}))),l.a.createElement(h.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Save Contact",variant:"primary"}))))):null}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.index===t.index?null:{index:e.index}}}]),t}(l.a.Component),f=(a(36),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={index:a.props.index},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.items?l.a.createElement("div",{className:"ContactPageContact"},l.a.createElement("div",null,l.a.createElement("h2",{className:"display-4"},this.props.name),l.a.createElement("h2",{className:"ContactPagePhone"},this.props.phone),l.a.createElement("h2",{className:"ContactPageEmail"},this.props.email),l.a.createElement("br",null),l.a.createElement("h2",{className:"lead"},this.props.desc)),l.a.createElement(E,{items:this.props.items,index:this.state.index}),l.a.createElement(p,{items:this.props.items,index:this.state.index})):l.a.createElement("div",null)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.index===t.index?null:{index:e.index}}}]),t}(l.a.Component)),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleSave=function(e){null===localStorage.getItem("items")&&localStorage.setItem("items","[]");var t=JSON.parse(localStorage.getItem("items"));t.push({name:{first:e.target[0].value,last:e.target[1].value},phone:e.target[2].value,email:e.target[3].value,desc:e.target[4].value}),localStorage.setItem("items",JSON.stringify(t))},a.state={show:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"primary",onClick:this.handleShow},"Add Contact"),l.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Add Contact")),l.a.createElement("form",{onSubmit:this.handleSave},l.a.createElement(h.a.Body,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"AddFirstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"AddLastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement("div",null,l.a.createElement("label",{for:"AddPhone"},"Phone Number"),l.a.createElement("input",{type:"tel",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",className:"form-control"})),l.a.createElement("div",null,l.a.createElement("label",{for:"AddEmail"},"Email"),l.a.createElement("input",{type:"email",className:"form-control"})),l.a.createElement("div",null,l.a.createElement("label",{for:"AddDesc"},"Description"),l.a.createElement("textarea",{className:"form-control"}))),l.a.createElement(h.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Save Contact",variant:"primary"})))))}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.error,n=t.isLoaded,s=t.items;return a?l.a.createElement("div",null,"Error: ",a.message):n?(console.log(s),l.a.createElement("div",null,s.map(function(t,a){return l.a.createElement("div",{key:a,id:a,className:"ContactInfo",onClick:e.props.click},l.a.createElement("ul",null,l.a.createElement("li",{className:"ContactName"},t.name.first," ",t.name.last," "),l.a.createElement("li",{className:"ContactPhone"},t.phone),l.a.createElement("li",{className:"ContactEmail"},t.email)))}),l.a.createElement(v,null))):l.a.createElement("div",null,"Loading...")}}]),t}(l.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"Select or add contacts to begin",phone:"",email:"",desc:"",checked:!1,items:JSON.parse(localStorage.getItem("items")),item:JSON.parse(localStorage.getItem("items"))},a.clickHandler=function(e){a.setState({name:"".concat(a.state.items[e.currentTarget.attributes.id.value].name.first," ").concat(a.state.items[e.currentTarget.attributes.id.value].name.last),phone:a.state.items[e.currentTarget.attributes.id.value].phone,email:a.state.items[e.currentTarget.attributes.id.value].email,desc:a.state.items[e.currentTarget.attributes.id.value].desc,index:e.currentTarget.attributes.id.value}),console.log(a.state.index)},a.handleCheckboxChange=function(){a.setState({checked:!a.state.checked}),!1===a.state.checked?a.setState({items:a.state.results}):a.setState({items:a.state.item})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=100").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,results:t.results.sort(function(e,t){return e.name.first.localeCompare(t.name.first)})})},function(t){e.setState({isLoaded:!0,error:t})}),null===this.state.items&&this.setState({items:[],item:[]})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-Header"},"Contacts 'R' Us"),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"Contact"},l.a.createElement(b,{error:this.state.error,isLoaded:this.state.isLoaded,items:this.state.items,click:this.clickHandler})),l.a.createElement("div",null,l.a.createElement(f,{className:"ContactPage",name:this.state.name,phone:this.state.phone,email:this.state.email,desc:this.state.desc,handleDelete:this.handleDelete,items:this.state.items,index:this.state.index}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.5b9d757e.chunk.js.map