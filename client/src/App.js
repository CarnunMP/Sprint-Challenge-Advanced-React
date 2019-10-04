import React from 'react';
import './App.css';
import axios from "axios";

import PlayerCard from "./components/PlayerCard";

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
      })
  }

  render() {
    const {players} = this.state;

    return (
      <div className="App">
        {players !== [] && players.map(player => (
          <PlayerCard player={player} key={player.id}/>
        ))}
        {players !== [] && <h1>Can't load players...</h1>}
      </div>
    );
  }
}
