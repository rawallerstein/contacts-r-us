import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      items: this.props.items,
      index: this.props.index,
    }
  }

  static getDerivedStateFromProps(newProps, oldState) {
    if (newProps.index === oldState.index) {
      return null;
    }
    return {
      index: newProps.index,
    };
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

  handleSaveEdit = (event) => {
    const dat = JSON.parse(localStorage.getItem('items'));
    dat[this.state.index].name.first = event.target[0].value;
    dat[this.state.index].name.last = event.target[1].value;
    dat[this.state.index].phone = event.target[2].value;
    dat[this.state.index].email = event.target[3].value;
    dat[this.state.index].desc = event.target[4].value;
    localStorage.setItem('items', JSON.stringify(dat));}

  render() {
    if (this.state.items[this.state.index]) {
  return (
    <>
      <Button variant="primary" onClick={this.handleShow}>
        Edit Contact
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSaveEdit}>
          <Modal.Body>
          <div className="form-group">
            <label for="AddFirstName" >First Name</label>
            <input type="text" className="form-control"  defaultValue={this.state.items[this.state.index].name.first} />
          </div>
          <div className="form-group">
            <label for="AddLastName">Last Name</label>
            <input type="text" className="form-control" defaultValue={this.state.items[this.state.index].name.last} />
          </div>
          <div>
            <label for="AddPhone">Phone Number</label>
            <input type="tel" className="form-control"  defaultValue={this.state.items[this.state.index].phone}/>
          </div>
          <div>
            <label for="AddEmail">Email</label>
            <input type="email" className="form-control" defaultValue={this.state.items[this.state.index].email} />
          </div>
          <div>
            <label for="AddDesc">Description</label>
          <textarea className="form-control" defaultValue={this.state.items[this.state.index].desc}/>
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
  );} else {
    return null
  }}
}

export default ContactEdit;
