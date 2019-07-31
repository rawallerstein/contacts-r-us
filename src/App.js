import React, {Component} from 'react';
import './App.css';
import ContactPage from './Contacts/ContactPage';
import RandomUser from './Contacts/RandomUser';
import Contacts from './Contacts/Contacts.js';


class App extends Component {

  componentDidMount() {

    fetch("https://randomuser.me/api/?results=100")
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

  }
  state = {
    image: null,
    name: '',
    phone: '',
    email: 'Select Contact',
    desc: '',
    checked: false,
    items: Contacts.results.sort((a, b) => a.name.first.localeCompare(b.name.first))
  }

  clickHandler = (event) => {
    console.log(event.currentTarget.attributes.id.value)
    this.setState({
                   name: this.state.items[event.currentTarget.attributes.id.value].name.first + ' ' + this.state.items[event.currentTarget.attributes.id.value].name.last,
                   phone: this.state.items[event.currentTarget.attributes.id.value].phone,
                   email: this.state.items[event.currentTarget.attributes.id.value].email,
                   index: event.currentTarget.attributes.id.value
                 })
  }
  savehandler = (event) => {
    if (this.state.checked === true) {
      return(
        <div></div>
      );
    } else {

    }
  }



  handleCheckboxChange = () => {
    this.setState({
        checked: !this.state.checked,
    })
    if (this.state.checked === true) {
      this.setState({
        items: Contacts.results.sort((a, b) => a.name.first.localeCompare(b.name.first))
      })
    } else {
      this.setState({
      items: this.state.results})
    }
  }

  render() {
  return (
          <div className="App">

            <header className="App-header">
              Contacts 'R' Us
            </header>
                <div className="wrapper">
                  <div className="Contact">
                  <RandomUser error={this.state.error} isLoaded={this.state.isLoaded} items={this.state.items}  click={this.clickHandler}/>
                          {/*{this.contactState.data.map((d, i) =>
                      <div  key={i} id={i} className="Cinfo" onClick={this.clickHandler}>
                      {/*  // <li className="Cname">{d.name.first} </li>
                        // <li className="Cphone">{d.phone}</li>
                        // <li className="Cemail">{d.email}</li>
                      </div>)}*/}

                  </div>

                <div>
              <ContactPage className="ContactPage" name={this.state.name} phone={this.state.phone} email={this.state.email} savehandler={this.savehandler}/>
              <input type="checkbox" id="democheck" checked={this.state.checked} onChange={this.handleCheckboxChange} text="lmao"/>
              <label for="democheck">Demo Mode</label>
            </div>
      </div>

    </div>
  );
}
}

export default App;
