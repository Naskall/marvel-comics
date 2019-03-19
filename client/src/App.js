import React, { Component } from "react";
import "./App.css";

const PUBLIC_KEY = "b5c2f55ccad62bbe140c7b363cd78f6e";
const PRIVATE_KEY = "8ffde7eebc90aa58b84011d00634abc1936f7a08";
const baseUrl = "https://gateway.marvel.com:443/v1/public/";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      baseUrl +
        "comics?format=comic&formatType=comic&characters=1011096&orderBy=focDate&apikey=" +
        PUBLIC_KEY
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    let { isLoaded, comics } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {comics.map(comic => (
              <li key={comic.id}>Titulo: {comic.title}</li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
