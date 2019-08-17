(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,a){},226:function(e,t,a){e.exports=a(573)},469:function(e,t,a){},470:function(e,t,a){},471:function(e,t,a){},573:function(e,t,a){"use strict";a.r(t);a(227),a(276);var n=a(0),l=a.n(n),r=a(51),s=a.n(r),i=(a(468),a(469),a(29)),c=a(30),o=a(33),m=a(31),u=a(32),d=(a(68),a(470),a(471),a(576)),h=a(575),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleDelete=function(){var e=JSON.parse(localStorage.getItem("items"));e.splice(a.props.index,1),localStorage.setItem("items",JSON.stringify(e))},a.state={show:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return void 0!==this.props.items[this.props.index]?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"danger",onClick:this.handleShow},"Delete"),l.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Confirm Contact Deletion")),l.a.createElement("form",{onSubmit:this.handleDelete},l.a.createElement(h.a.Body,null,"Are you sure you want to delete this contact? This cannot be undone."),l.a.createElement(h.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),l.a.createElement("input",{className:"btn btn-danger",type:"submit",value:"Delete",variant:"danger"}))))):null}}]),t}(l.a.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleSaveEdit=function(e){var t=JSON.parse(localStorage.getItem("items"));t[a.props.index].name.first=e.target[0].value,t[a.props.index].name.last=e.target[1].value,t[a.props.index].phone=e.target[2].value,t[a.props.index].email=e.target[3].value,t[a.props.index].desc=e.target[5].value,t[a.props.index].picture.large=e.target[4].value,localStorage.setItem("items",JSON.stringify(t))},a.state={show:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return"undefined"!==typeof this.props.items[this.props.index]?l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{variant:"primary",onClick:this.handleShow},"Edit"),l.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Edit Contact")),l.a.createElement("form",{onSubmit:this.handleSaveEdit},l.a.createElement(h.a.Body,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"AddFirstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.items[this.props.index].name.first})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"AddLastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.items[this.props.index].name.last})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddPhone"},"Phone Number"),l.a.createElement("input",{type:"tel",className:"form-control",defaultValue:this.props.items[this.props.index].phone})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddEmail"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",defaultValue:this.props.items[this.props.index].email})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddPicture"},"Image URL"),l.a.createElement("input",{type:"url",className:"form-control",defaultValue:this.props.items[this.props.index].picture.large})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddDesc"},"Description"),l.a.createElement("textarea",{className:"form-control",defaultValue:this.props.items[this.props.index].desc}))),l.a.createElement(h.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Save",variant:"primary"}))))):null}}]),t}(l.a.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.picture?l.a.createElement("img",{style:{maxHeight:"20vh"},src:this.props.picture,alt:"Portrait"}):null}}]),t}(l.a.Component),g=(a(215),a(493)),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={index:a.props.index,items:a.props.items},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.state.items?l.a.createElement("div",null,l.a.createElement("div",{className:"ContactPageContact"},l.a.createElement("div",{className:"container responsive",style:{height:"20vh",paddingTop:"3vh"}},l.a.createElement(v,{picture:this.props.picture})),l.a.createElement("h2",{className:"ContactPageName"},this.props.name),l.a.createElement("h2",{className:"ContactPagePhone"},this.props.phone),l.a.createElement("h2",{className:"ContactPageEmail"},this.props.email),l.a.createElement("br",null),l.a.createElement(g,{className:"ContactPageDescription",source:this.props.desc})),l.a.createElement("b",{style:{display:"flex",height:"9vh"}},l.a.createElement(E,{items:this.state.items,index:this.state.index}),l.a.createElement(p,{items:this.state.items,index:this.state.index}))):l.a.createElement("div",null,l.a.createElement("div",{className:"ContactPageContact"},l.a.createElement("div",{className:"container responsive",style:{height:"20vh",paddingTop:"3vh"}}),l.a.createElement("h2",{className:"ContactPageName"},"Add contacts to begin"),l.a.createElement("h2",{className:"ContactPagePhone"}," "),l.a.createElement("h2",{className:"ContactPageEmail"}," "),l.a.createElement("br",null),l.a.createElement(g,{className:"ContactPageDescription"})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.index===t.index&&e.items===t.items?null:{index:e.index,items:e.items}}}]),t}(l.a.Component),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClose=function(){a.setState({show:!1})},a.handleShow=function(){a.setState({show:!0})},a.handleSave=function(e){var t=JSON.parse(localStorage.getItem("items"));t.push({name:{first:e.target[0].value,last:e.target[1].value},phone:e.target[2].value,email:e.target[3].value,desc:e.target[5].value,picture:{large:e.target[4].value}}),localStorage.setItem("items",JSON.stringify(t))},a.state={show:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){"[]"!==localStorage.getItem("items")&&null!==localStorage.getItem("items")||this.setState({show:!0})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{style:{width:"29.5vw",justifySelf:"center",paddingBottom:"10px"}},l.a.createElement(d.a,{variant:"info",className:"ContactAdd",onClick:this.handleShow},"Add Contact")),l.a.createElement(h.a,{show:this.state.show,onHide:this.handleClose},l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Add Contact")),l.a.createElement("form",{onSubmit:this.handleSave},l.a.createElement(h.a.Body,null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"AddFirstName"},"First Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"John"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"AddLastName"},"Last Name"),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Doe"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddPhone"},"Phone Number"),l.a.createElement("input",{type:"tel",className:"form-control",placeholder:"(555)-555-5555"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddEmail"},"Email"),l.a.createElement("input",{type:"email",className:"form-control",placeholder:"john.doe@gmail.com"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddPicture"},"Image URL"),l.a.createElement("input",{type:"url",className:"form-control",placeholder:"https://website.com/image.jpg"})),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:"AddDesc"},"Description"),l.a.createElement("textarea",{className:"form-control",placeholder:"He's a pretty good fella!"}))),l.a.createElement(h.a.Footer,null,l.a.createElement(d.a,{variant:"secondary",onClick:this.handleClose},"Close"),l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Save",variant:"primary"})))))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.error,n=t.isLoaded,r=t.items;return a?l.a.createElement("div",null,"Error: ",a.message):n?null===r?l.a.createElement(b,null):l.a.createElement("div",null,r.map(function(t,a){return l.a.createElement("div",{key:a,id:a,className:"ContactInfo",onClick:e.props.click},l.a.createElement("ul",null,l.a.createElement("li",{className:"ContactName"},t.name.first," ",t.name.last," "),l.a.createElement("li",{className:"ContactPhone"},t.phone),l.a.createElement("li",{className:"ContactEmail"},t.email)))}),l.a.createElement(b,null)):l.a.createElement("div",null,"Loading...")}}]),t}(l.a.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={name:"Add contacts to begin",phone:"",email:"",desc:"",items:JSON.parse(localStorage.getItem("items")),index:0},a.handleFetch=function(e){if("Escape"===e.key&&!0===a.state.isLoaded){var t=JSON.parse(localStorage.getItem("items")).concat(a.state.results);localStorage.setItem("items",JSON.stringify(t)),a.setState({items:JSON.parse(localStorage.getItem("items"))})}},a.clickHandler=function(e){a.state.items[e.currentTarget.attributes.id.value].picture&&a.setState({picture:a.state.items[e.currentTarget.attributes.id.value].picture.large}),a.setState({name:"".concat(a.state.items[e.currentTarget.attributes.id.value].name.first," ").concat(a.state.items[e.currentTarget.attributes.id.value].name.last),phone:a.state.items[e.currentTarget.attributes.id.value].phone,email:a.state.items[e.currentTarget.attributes.id.value].email,desc:a.state.items[e.currentTarget.attributes.id.value].desc,index:e.currentTarget.attributes.id.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;null===localStorage.getItem("items")&&localStorage.setItem("items","[]"),null!==this.state.items&&"undefined"!=typeof this.state.items[0]&&this.setState({name:"".concat(this.state.items[0].name.first," ").concat(this.state.items[0].name.last),phone:this.state.items[0].phone,email:this.state.items[0].email,desc:this.state.items[0].desc,picture:this.state.items[0].picture.large}),fetch("https://randomuser.me/api/?results=25").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,results:t.results})},function(t){e.setState({isLoaded:!0,error:t})}),document.addEventListener("keydown",this.handleFetch)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("strong",{className:"navbar-brand"},"Contacts 'R' Us")),l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"Contact"},l.a.createElement(N,{error:this.state.error,isLoaded:this.state.isLoaded,items:this.state.items,click:this.clickHandler})),l.a.createElement("div",null,l.a.createElement(f,{className:"ContactPage",picture:this.state.picture,name:this.state.name,phone:this.state.phone,email:this.state.email,desc:this.state.desc,items:this.state.items,index:this.state.index}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},68:function(e,t,a){}},[[226,1,2]]]);
//# sourceMappingURL=main.47d4ab1f.chunk.js.map