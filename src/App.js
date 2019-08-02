import React, { Component } from 'react';
import './App.css';
import ContactPage from './Contacts/ContactPage';
import RandomUser from './Contacts/RandomUser';


class App extends Component {


  state = {
    name: 'Add contacts to begin',
    phone: '',
    email: '',
    desc: '',
    checked: false,
    items: JSON.parse(localStorage.getItem('items')),
    item: JSON.parse(localStorage.getItem('items')),
    index: 0
  }



  componentDidMount() {
    if (this.state.items !== null) {
      this.setState({
        name: `${this.state.items[0].name.first} ${this.state.items[0].name.last}`,
        phone: this.state.items[0].phone,
        email: this.state.items[0].email,
        desc: this.state.items[0].desc,
      });
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

  }


  clickHandler = (event) => {
    this.setState({
      name: `${this.state.items[event.currentTarget.attributes.id.value].name.first} ${this.state.items[event.currentTarget.attributes.id.value].name.last}`,
      phone: this.state.items[event.currentTarget.attributes.id.value].phone,
      email: this.state.items[event.currentTarget.attributes.id.value].email,
      desc: this.state.items[event.currentTarget.attributes.id.value].desc,
      index: event.currentTarget.attributes.id.value,
    })
    console.log(this.state.index);
  }

  handleCheckboxChange = () => {
    this.setState({
      checked: !this.state.checked,
    })
    if (this.state.checked === false) {
      this.setState({
        items: this.state.results
      })
    } else {
      this.setState({
        items: this.state.item})
    }
  }

  render() {
  return (
    <div className="App">

      <header className="App-Header">
          Contacts 'R' Us
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
            name={this.state.name}
            phone={this.state.phone}
            email={this.state.email}
            desc={this.state.desc}
            handleDelete={this.handleDelete}
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
