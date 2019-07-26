import React from 'react';


class RandomUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      cid: 0
    };
  }
  // componentDidMount() {
  //   fetch("https://randomuser.me/api/?results=5")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           items: result.results
  //         });
  //       },
  //       // Note: it's important to handle errors here
  //       // instead of a catch() block so that we don't swallow
  //       // exceptions from actual bugs in components.
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  render() {
    const { error, isLoaded, items } = this.props;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        console.log(items),
        <div>
          {items.map((item, index) => (
            <div  key={index} id={index} className="Cinfo" onClick={this.props.click}>
              <li className="Cname">{item.name.first} {item.name.last} </li>
              <li className="Cphone">{item.phone}</li>
              <li className="Cemail">{item.email}</li>
            </div>)
          )}
        </div>
      );
    }
  }
}

export default RandomUser;
