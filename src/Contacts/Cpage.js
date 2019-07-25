import React from 'react';
import './Contacts.css';

class Cpage extends React.Component {
  constructor(props){
    super(props);
    this.pageState = {
      name: 'Example McMann',
      phone: '555 555 5555',
      email: 'example.mcmann@yahoo.com',
      desc: 'A good fella'
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
