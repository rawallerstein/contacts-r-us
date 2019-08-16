import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../bootstrap.css';

// Component for Delete Contact button and modal.
class ContactDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

// Checks for props updates to avoid accidently deleting a previous contact.
// Not a common bug, but was an issue in the past.

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
dat.splice(this.props.index, 1);
localStorage.setItem('items', JSON.stringify(dat))
}

render() {
  // Button only appears if there is a contact to delete.
  if (this.props.items[this.props.index] !== undefined) {
    return (
      <>
      <Button variant="danger" onClick={this.handleShow}>
        Delete
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
          <input className="btn btn-danger" type="submit" value="Delete" variant="danger" />
        </Modal.Footer>
        </form>
      </Modal>
    </>
    );
  }
  return null;
}
}

export default ContactDelete;
