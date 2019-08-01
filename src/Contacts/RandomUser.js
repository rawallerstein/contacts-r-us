import React from 'react';
import ContactAdd from './ContactAdd';


class RandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
              <ul>
              <li className="ContactName">{item.name.first} {item.name.last} </li>
              <li className="ContactPhone">{item.phone}</li>
              <li className="ContactEmail">{item.email}</li>
              </ul>
            </div>)
          )}
          <ContactAdd />
        </div>
      );
    }
  }
}

export default RandomUser;
