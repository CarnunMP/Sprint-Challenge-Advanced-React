import React from 'react';
import './App.css';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({players: res.data});
        console.log(this.state);
      })
      .catch(err => {
        debugger
      });
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}
