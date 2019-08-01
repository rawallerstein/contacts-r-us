import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class ContactDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      index: props.index,
      items: props.items,
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

handleDelete = () => {
  const dat = JSON.parse(localStorage.getItem('items'));
  dat.splice(this.state.index, 1);
  localStorage.setItem('items', JSON.stringify(dat))
}

static getDerivedStateFromProps(newProps, oldState) {
  if (newProps.index === oldState.index) {
    return null;
  }
  return {
    index: newProps.index,
  };
}

  render () {
    if (this.state.items[this.state.index]) {
  return (
    <>
      <Button variant="danger" onClick={this.handleShow}>
        Delete Contact
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Contact Deletion</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleDelete}>
          <Modal.Body>
          Are you sure you want to delete this contact? This cannot be undone.
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <input className="btn btn-danger" type="submit" value="Delete Contact" variant="danger" />
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );}
  return null;
}
}

export default ContactDelete;
