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
    this.state = {
      index: this.props.index,
      items: this.props.items,
    };
  }

  // Component looks to receive new props. Previously would not always show currently selected contact.
  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.index === oldState.index && newProps.items === oldState.items) {
      return null;
    }
    return {
      index: newProps.index,
      items: newProps.items,
    };
  }

  render() {
    if (this.state.items) {
      return (
    <div >
      <div className="ContactPageContact">
        <div className="container responsive" style={{height: '20vh', 'paddingTop': '3vh'}}><ContactPagePicture picture={this.props.picture} /></div>
        <h2 className="ContactPageName">{this.props.name}</h2>
        <h2 className="ContactPagePhone">{this.props.phone}</h2>
        <h2 className="ContactPageEmail">{this.props.email}</h2>
        <br />
        <ReactMarkdown className="ContactPageDescription" source={this.props.desc} />
      </div>
      <b style={{display: 'flex', 'height': '9vh'}}>
          <ContactEdit items={this.state.items} index={this.state.index} />
          <ContactDelete items={this.state.items} index={this.state.index}/>
      </b>
    </div>
);
} else {
  return (
    <div >
      <div className="ContactPageContact">
        <div className="container responsive" style={{height: '20vh', 'paddingTop': '3vh'}} />
        <h2 className="ContactPageName">Add contacts to begin</h2>
        <h2 className="ContactPagePhone"> </h2>
        <h2 className="ContactPageEmail"> </h2>
        <br />
        <ReactMarkdown className="ContactPageDescription" />
      </div>
    </div>
)
}
}
}

export default Cpage;
