import React from 'react';
import './Contacts.css';

const Cpage = (props) => {
  return (
    <div className="ContactPageContact">
      <p className="ContactPageName" contentEditable="true">{props.name}</p>
      <p className="ContactPagePhone" contentEditable="true">{props.phone}</p>
      <p className="ContactPageEmail" contentEditable="true">{props.email}</p>
      <p className="ContactPageDescription" contentEditable="true">{props.desc}</p>
      <input type="button" value="save my edits" onClick={props.saveHandler}/>
    </div>
);
};

export default Cpage;
