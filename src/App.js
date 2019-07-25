import React, {Component} from 'react';
import './App.css';
import Cpage from './Contacts/Cpage';
import ContactList from './Contacts/ContactList';

class App extends Component {

  state = {
    name: '',
    phone: '',
    email: '',
    desc: 'Select Contact'
  }

  contactState = {data: ContactList}

  clickHandler = (event) => {
    console.log(ContactList[event.currentTarget.attributes.id.value]);
    this.setState({
                   name: ContactList[event.currentTarget.attributes.id.value].name,
                   phone: ContactList[event.currentTarget.attributes.id.value].phone,
                   email: ContactList[event.currentTarget.attributes.id.value].email,
                   desc: ContactList[event.currentTarget.attributes.id.value].desc
                 })
  }

  render() {
  return (
    <div className="App">

      <header className="App-header">
        Contacts 'R' Us
      </header>
      <div className="wrapper">
      <div className="Contact">
              {this.contactState.data.map((d, i) =>
          <div  key={d.key} id={i} className="Cinfo" onClick={this.clickHandler}>
            <li className="Cname">{d.name} </li>
            <li className="Cphone">{d.phone}</li>
            <li className="Cemail">{d.email}</li>
          </div>)}
      </div>

      <div>
        <Cpage className="Cpage" name={this.state.name} phone={this.state.phone} email={this.state.email} desc={this.state.desc}/>
      </div>
      </div>

    </div>
  );
}
}

export default App;
