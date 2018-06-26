import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  api = "https://jsonplaceholder.typicode.com/posts";
  state = {loading:true, homeScore:0, awayScore:0, posts:[], error:"" };

  componentDidMount(){
    console.log("MOUNT", this.api );  
    fetch(this.api).then((r)=>r.json()).then( (obj) => {
      console.log("RESPONSE OBJ", obj) 
      this.setState( {posts : obj });
    } ).catch( e => this.setState({error: JSON.stringify(e)}) );
  }
  render() {

    const {homeScore, awayScore} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        { this.state.error ?
          <div>{this.state.error}</div>:
          <div></div>
        }
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div> France Score {homeScore} - Perú Score {awayScore}</div>
        {this.state.posts.map( p =>(
          <div>{p.title}</div>
        ))}
        <div></div>
      </div>
    );
  }
}

export default App;
