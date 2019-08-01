import React from 'react';
import './Contacts.css';
import ContactDelete from './ContactDelete';
import ContactEdit from './ContactEdit';



class Cpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: this.props.index };
  }

  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.index === oldState.index) {
      return null;
    }
    return {
      index: newProps.index,
    };
  }

  render() {
    if (this.props.items) {
  return (
    <div className="ContactPageContact">
      <div>
        <p className="ContactPageName" contentEditable="true">{this.props.name}</p>
        <p className="ContactPagePhone" contentEditable="true">{this.props.phone}</p>
        <p className="ContactPageEmail" contentEditable="true">{this.props.email}</p>
        <p className="ContactPageDescription" contentEditable="true">{this.props.desc}</p>
      </div>
      <ContactEdit items={this.props.items} index={this.state.index} />
      <ContactDelete items={this.props.items} index={this.state.index}/>
    </div>
);} else {
  return <div></div>
}}
};

export default Cpage;
