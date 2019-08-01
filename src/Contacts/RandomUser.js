import React from 'react';
import ContactAdd from './ContactAdd';


class RandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cid: 0,
      show: false,
    };
  }

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

handleSave = (event) => {
  if (localStorage.getItem('items') === null) {
    localStorage.setItem('items', '[]')
  }
  const dat = JSON.parse(localStorage.getItem('items'));
  dat.push({
    name: {
      first: event.target[0].value,
      last: event.target[1].value},
    phone: event.target[2].value,
    email: event.target[3].value,
    desc: event.target[4].value,
  });
  localStorage.setItem('items', JSON.stringify(dat))
}


  render() {
    const { error, isLoaded, items } = this.props;
    if (error) {
      return (
        <div>
      Error: {error.message}
      </div>
);
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        console.log(items),
        <div>
          {items.map((item, index) => (
            <div  key={index} id={index} className="ContactInfo" onClick={this.props.click}>
              <li className="ContactName">{item.name.first} {item.name.last} </li>
              <li className="ContactPhone">{item.phone}</li>
              <li className="ContactEmail">{item.email}</li>
            </div>)
          )}
          <ContactAdd handleClose={this.handleClose} handleShow={this.handleShow} show={this.state.show} handleSave={this.handleSave}/>
        </div>
      );
    }
  }
}

export default RandomUser;
