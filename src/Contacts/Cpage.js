import React from 'react';
import './Contacts.css';

class Cpage extends React.Component {
  constructor(props){
    super(props);
    this.pageState = {
      name: props.name,
      phone: props.phone,
      email: props.email,
      desc: props.desc
    }
  }
  render(){
  return (
    <div className="Cpcontact">
        <p className="Cpname">{this.pageState.name}</p>
        <p className="Cpphone">{this.pageState.phone}</p>
        <p className="Cpemail">{this.pageState.email}</p>
        <p className="Cpdesc">{this.pageState.desc}</p>
    </div>);
  }
};

export default Cpage;
