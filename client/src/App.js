import React, { Component } from "react";
import axios from "axios";
import Players from "./component/Players";
import Navbar from "./component/Navbar";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response);
        this.setState({
          players: response.data
        });
      })
      .catch(error => {
        console.log("axios: ", error);
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
