import React from 'react';
import './Contacts.css';

const Cpage = (props) => {
  return (
    <div className="Cpcontact">
        <p className="Cpname" contenteditable="true">{props.name}</p>
        <p className="Cpphone" contenteditable="true">{props.phone}</p>
        <p className="Cpemail" contenteditable="true">{props.email}</p>
        <input type="button" value="save my edits" onClick={props.savehandler}/>
    </div>);
};

export default Cpage;
