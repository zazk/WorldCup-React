import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  api = "https://api.fifa.com/api/v1/live/football/17/254645/275073/300331527";
  state = {loading:true, homeScore:0, awayScore:0 };

  componentDidMount(){
    console.log("MOUNT", this.api );  
    fetch(this.api).then((r)=>r.json()).then( (obj) => {
      console.log("RESPONSE OBJ", obj) 
      this.setState( {homeScore : obj.HomeTeam.Score, awayScore: obj.AwayTeam.Score});
    } );
  }
  render() {

    const {loading, homeScore, awayScore} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div> France Score {homeScore} - Perú Score {awayScore}</div>
      </div>
    );
  }
}

export default App;
