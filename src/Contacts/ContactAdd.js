import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../bootstrap.css';
import './ContactAdd.css';


// Component for the Add Contact button and modal.
class ContactAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

componentDidMount() {
  // If there is no contacts array, or if the array is empty, starts the app with the modal open.
if (localStorage.getItem('items') === '[]' || localStorage.getItem('items') === null) {
      this.setState({
        show: true,
      });
}
}

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleSave = (event) => {
    const dat = JSON.parse(localStorage.getItem('items'));
    dat.push({
      name: {
        first: event.target[0].value,
        last: event.target[1].value},
      phone: event.target[2].value,
      email: event.target[3].value,
      desc: event.target[5].value,
      picture: {
        large: event.target[4].value,
      }
    });
    localStorage.setItem('items', JSON.stringify(dat))
  }

  render() {
    return (
    <>
      <p style={{width: '29.5vw', 'justifySelf': 'center', 'paddingBottom': '10px'}}>
<Button variant="info" className="ContactAdd" onClick={this.handleShow}>
        Add Contact
</Button>
</p>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSave}>
          <Modal.Body>
          <div className="form-group">
            <label htmlFor="AddFirstName">First Name</label>
            <input type="text" className="form-control" placeholder="John"/>
          </div>
          <div className="form-group">
            <label htmlFor="AddLastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Doe"/>
          </div>
          <div>
            <label htmlFor="AddPhone">Phone Number</label>
            <input type="tel" className="form-control" placeholder="(555)-555-5555"/>
          </div>
          <div>
            <label htmlFor="AddEmail">Email</label>
            <input type="email" className="form-control" placeholder="john.doe@gmail.com"/>
          </div>
          <div>
            <label htmlFor="AddPicture">Image URL</label>
            <input type="url" className="form-control" placeholder="https://website.com/image.jpg"/>
          </div>
          <div>
            <label htmlFor="AddDesc">Description</label>
          <textarea className="form-control" placeholder="He's a pretty good fella!"/>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <input className="btn btn-primary" type="submit" value="Save Contact" variant="primary" />
        </Modal.Footer>
        </form>
    </Modal>
    </>
    );
}
}

export default ContactAdd;
