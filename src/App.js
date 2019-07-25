import React, {Component} from 'react';
import './App.css';
import Cpage from './Contacts/Cpage';
import ContactList from './Contacts/ContactList';

class App extends Component {

  pageState = {
    name: 'John Doe',
    phone: '555-555-5555',
    email: 'john.doe@gmail.com',
    desc: 'A fairly well collected individual.'
  }

  contactState = {data: ContactList}

  clickHandler 

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Contacts 'R' Us
      </header>
      <div className="Contact">
          {this.contactState.data.map(d => <div className="Cinfo" onClick={this.clickHandler}>
          <p className="Cname"> {d.name} </p>
          <p className="Cphone">{d.phone}</p>
          <p className="Cemail">{d.email}</p>
          </div>)}
      </div>
      <div>
        <Cpage className="Cpage" name={this.pageState.name} phone={this.pageState.phone} email={this.pageState.email} desc={this.pageState.desc}/>
      </div>
    </div>
  );
}
}

export default App;
