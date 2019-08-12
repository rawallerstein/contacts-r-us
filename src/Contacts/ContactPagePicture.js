import React from 'react';

// Picture display needed its own component.
// Really should be a pure function.
// Was made a class based component for consistent design.
class ContactPagePicture extends React.Component {
  render() {
    if (this.props.picture) {
      return <img style={{'max-height': '20vh'}} src={this.props.picture} alt={"Portrait"} />
    } else {
      return null;
    }
  }
}

export default ContactPagePicture;
