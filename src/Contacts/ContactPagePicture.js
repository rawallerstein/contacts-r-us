import React from 'react';

class ContactPagePicture extends React.Component {
  render(){
    if (this.props.picture) {
      return <img src={this.props.picture} alt={"Portrait"} />
    } else {
      return null;
    }
  }
}

export default ContactPagePicture;
