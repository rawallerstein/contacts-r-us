import React from 'react';
import './Contacts.css';

const Cpage = (props) => {
  return (
    <div className="Cpcontact">
        <p className="Cpname">{props.name}</p>
        <p className="Cpphone">{props.phone}</p>
        <p className="Cpemail">{props.email}</p>
    </div>);
};

export default Cpage;
