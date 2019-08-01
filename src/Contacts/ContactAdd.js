import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './ContactAdd.css';

const ContactAdd = (props) => {

  return (
    <>
      <Button variant="primary" onClick={props.handleShow}>
        Add Contact
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <form onSubmit={props.handleSave}>
          <Modal.Body>
          <div className="form-group">
            <label for="AddFirstName">First Name</label>
            <input type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label for="AddLastName">Last Name</label>
            <input type="text" className="form-control"/>
          </div>
          <div>
            <label for="AddPhone">Phone Number</label>
            <input type="tel" className="form-control"/>
          </div>
          <div>
            <label for="AddEmail">Email</label>
            <input type="email" className="form-control"/>
          </div>
          <div>
            <label for="AddDesc">Description</label>
          <textarea className="form-control"/>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <input type="submit" value="Save Contact" variant="primary" />
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ContactAdd;
