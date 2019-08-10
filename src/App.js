import React, { Component } from 'react';
import './bootstrap.css';
import './App.css';
import ContactPage from './Contacts/ContactPage';
import RandomUser from './Contacts/RandomUser';


class App extends Component {


  state = {
    name: 'Add contacts to begin',
    phone: '',
    email: '',
    desc: '',
    checked: true,
    items: JSON.parse(localStorage.getItem('items')),
    item: JSON.parse(localStorage.getItem('items')),
    index: 0,
  }



  componentDidMount() {
    if (this.state.items[0]) {
      this.setState({
        name: `${this.state.items[0].name.first} ${this.state.items[0].name.last}`,
        phone: this.state.items[0].phone,
        email: this.state.items[0].email,
        desc: this.state.items[0].desc,
      });
    }

    if (this.state.items[0]) {
      this.setState({
        picture: this.state.items[0].picture.large,
      })
    }

    fetch('https://randomuser.me/api/?results=100')
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
    if (this.state.items === null) {
      this.setState({
        items: [],
        item: []
      })
    }
    document.addEventListener('keydown', this.handleCheckboxChange);
  }

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
        items: this.state.item})
    }
}

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
    console.log(this.state.index);
    console.log(this.state.picture)
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
