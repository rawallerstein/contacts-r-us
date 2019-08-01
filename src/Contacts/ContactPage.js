import React from 'react';
import './Contacts.css';
import ContactDelete from './ContactDelete';
import ContactEdit from './ContactEdit';
import 'bootstrap/dist/css/bootstrap.css';
import './ContactAdd.css';


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
        <h2 className="ContactPageName">{this.props.name}</h2>
        <h2 className="ContactPagePhone">{this.props.phone}</h2>
        <h2 className="ContactPageEmail">{this.props.email}</h2>
        <br />
        <h2 className="lead">{this.props.desc}</h2>
      </div>
      <ContactEdit items={this.props.items} index={this.state.index} />
      <ContactDelete items={this.props.items} index={this.state.index}/>
    </div>
);} else {
  return <div></div>
}}
};

export default Cpage;
