import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import ContactPage from './Contacts/ContactPage';
import RandomUser from './Contacts/RandomUser';

// The Main App Component
class App extends Component {

// State contains contact info as well as the array of contacts
// taken from localStorage.

  state = {
    name: 'Add contacts to begin',
    phone: '',
    email: '',
    desc: '',
    checked: true,
    items: JSON.parse(localStorage.getItem('items')),
    index: 0,
  }

  componentDidMount() {
    // Initializes contacts array if none is found
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', '[]')
    }

    // Initiliazes single contact for contact page if one exists.
    if (this.state.items !== null && typeof this.state.items[0] != 'undefined') {
      this.setState({
        name: `${this.state.items[0].name.first} ${this.state.items[0].name.last}`,
        phone: this.state.items[0].phone,
        email: this.state.items[0].email,
        desc: this.state.items[0].desc,
        picture: this.state.items[0].picture.large,
      });
    }

    // Gets array of random users from the randomuser API.
    // This is mostly to demonstrate ability of app to do so if client needs it.
    // Will be removed in full production.
    fetch('https://randomuser.me/api/?results=25')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.results.sort((a, b) => a.name.first.localeCompare(b.name.first))
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    // The "demo" mode toggle that changes contacts array to the randomly generated one.
    document.addEventListener('keydown', this.handleCheckboxChange);
  }

  // The actual keydown handler
  handleCheckboxChange = (event) => {
    if (event.key === 'Escape') {
      this.setState({
        checked: !this.state.checked,
      });
    }
    if (this.state.checked === false) {
      this.setState({
        items: this.state.results
      })
    } else {
      this.setState({
        items: JSON.parse(localStorage.getItem('items'))})
    }
}

  // Handler for clicking on a contact on the left. Sets the info for the contact page.
  clickHandler = (event) => {
    if (this.state.items[event.currentTarget.attributes.id.value].picture) {
      this.setState({
        picture: this.state.items[event.currentTarget.attributes.id.value].picture.large,
      });
    }
    this.setState({
      name: `${this.state.items[event.currentTarget.attributes.id.value].name.first} ${this.state.items[event.currentTarget.attributes.id.value].name.last}`,
      phone: this.state.items[event.currentTarget.attributes.id.value].phone,
      email: this.state.items[event.currentTarget.attributes.id.value].email,
      desc: this.state.items[event.currentTarget.attributes.id.value].desc,
      index: event.currentTarget.attributes.id.value,
    })
  }



  render() {
  return (
    <div className="App">

      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
          <strong className="navbar-brand">Contacts 'R' Us</strong>
      </header>
      <div className="wrapper">
        <div className="Contact">
          <RandomUser
            error={this.state.error}
            isLoaded={this.state.isLoaded}
            items={this.state.items}
            click={this.clickHandler}
          />
        </div>

        <div>
          <ContactPage
          className="ContactPage"
            picture={this.state.picture}
            name={this.state.name}
            phone={this.state.phone}
            email={this.state.email}
            desc={this.state.desc}
            items={this.state.items}
            index={this.state.index}
          />
        </div>
      </div>

    </div>
    );
}
}

export default App;
