import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ContactAdd.css';

class ContactAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }

componentDidMount() {
if (localStorage.getItem('items') === null) {
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
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', '[]')
    }
    const dat = JSON.parse(localStorage.getItem('items'));
    dat.push({
      name: {
        first: event.target[0].value,
        last: event.target[1].value},
      phone: event.target[2].value,
      email: event.target[3].value,
      desc: event.target[4].value,
    });
    localStorage.setItem('items', JSON.stringify(dat))
  }

  render() {
  return (
    <>
      <Button variant="primary" onClick={this.handleShow}>
        Add Contact
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSave}>
          <Modal.Body>
          <div className="form-group">
            <label for="AddFirstName">First Name</label>
            <input type="text" className="form-control" placeholder="John"/>
          </div>
          <div className="form-group">
            <label for="AddLastName">Last Name</label>
            <input type="text" className="form-control" placeholder="Doe"/>
          </div>
          <div>
            <label for="AddPhone">Phone Number</label>
            <input type="tel" className="form-control" placeholder="(555)-555-5555"/>
          </div>
          <div>
            <label for="AddEmail">Email</label>
            <input type="email" className="form-control" placeholder="john.doe@gmail.com"/>
          </div>
          <div>
            <label for="AddDesc">Description</label>
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
  );}
}

export default ContactAdd;
