import React, {Component} from 'react';
import './App.css';
import Contacts from './Contacts/Contacts';
import Cpage from './Contacts/Cpage';

class App extends Component {

  pageState = {
    name: 'John Doe',
    phone: '555-555-5555',
    email: 'john.doe@gmail.com',
    desc: 'A fairly well collected individual.'
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Contacts 'R' Us
      </header>
      <div className='Contacts'>
        <Contacts />
      </div>
      <div>
        <Cpage className="Cpage" name={this.pageState.name} phone={this.pageState.phone} email={this.pageState.email} desc={this.pageState.desc}/>
      </div>
    </div>
  );
}
}

export default App;
