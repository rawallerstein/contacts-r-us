import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../bootstrap.css';

// Component for the Edit Contact button and modal.
class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }

  // Same as ContactDelete.
  // Would occasionally edit previous contact. Not a common bug, but did occur during development.

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
    dat[this.props.index].name.first = event.target[0].value;
    dat[this.props.index].name.last = event.target[1].value;
    dat[this.props.index].phone = event.target[2].value;
    dat[this.props.index].email = event.target[3].value;
    dat[this.props.index].desc = event.target[5].value;
    dat[this.props.index].picture.large = event.target[4].value;
    localStorage.setItem('items', JSON.stringify(dat));}

  render() {
    // Button only appears if there is a contact to edit.
    if (typeof this.props.items[this.props.index] !== 'undefined') {
      return (
        <>
      <Button variant="primary" onClick={this.handleShow}>
        Edit
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <form onSubmit={this.handleSaveEdit}>
          <Modal.Body>
          <div className="form-group">
            <label htmlFor="AddFirstName" >First Name</label>
            <input type="text" className="form-control"  defaultValue={this.props.items[this.props.index].name.first} />
          </div>
          <div className="form-group">
            <label htmlFor="AddLastName">Last Name</label>
            <input type="text" className="form-control" defaultValue={this.props.items[this.props.index].name.last} />
          </div>
          <div>
            <label htmlFor="AddPhone">Phone Number</label>
            <input type="tel" className="form-control"  defaultValue={this.props.items[this.props.index].phone}/>
          </div>
          <div>
            <label htmlFor="AddEmail">Email</label>
            <input type="email" className="form-control" defaultValue={this.props.items[this.props.index].email} />
          </div>
          <div>
            <label htmlFor="AddPicture">Image URL</label>
            <input type="url" className="form-control" defaultValue={this.props.items[this.props.index].picture.large}/>
          </div>
          <div>
            <label htmlFor="AddDesc">Description</label>
          <textarea className="form-control" defaultValue={this.props.items[this.props.index].desc}/>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <input className="btn btn-primary" type="submit" value="Save" variant="primary" />
        </Modal.Footer>
        </form>
      </Modal>
    </>
      );
    }
    return null;
  }
}
export default ContactEdit;
