import React from 'react';
import './Contacts.css';
import ContactDelete from './ContactDelete';
import ContactEdit from './ContactEdit';
import ContactPagePicture from './ContactPagePicture';
import '../bootstrap.css'
import './ContactAdd.css';

// Gets markdown going for the description field.
const ReactMarkdown = require('react-markdown')

// Component for displaying single contact information on the right side of the app.
class Cpage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: this.props.index };
  }

  // Component looks to receive new props. Previously would not always show currently selected contact.
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
    <div >
      <div className="ContactPageContact">
        <div className="container responsive" style={{height: '20vh', 'padding-top': '3vh'}}><ContactPagePicture picture={this.props.picture} /></div>
        <h2 className="ContactPageName">{this.props.name}</h2>
        <h2 className="ContactPagePhone">{this.props.phone}</h2>
        <h2 className="ContactPageEmail">{this.props.email}</h2>
        <br />
        <ReactMarkdown className="ContactPageDescription" source={this.props.desc} />
      </div>
      <a style={{display: 'flex', 'height': '9vh'}}> <ContactEdit items={this.props.items} index={this.state.index} />
      <ContactDelete items={this.props.items} index={this.state.index}/> </a>
    </div>
);
} else {
  return <div />
}
}
}

export default Cpage;
