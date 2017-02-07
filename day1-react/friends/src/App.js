import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Brett',
      friends: [
        'Tome',
        'Brian',
        'paul'
      ]
    }

  }



 handleChange(e) {
  //  this.setState({value: e.target.value})
    this.state.name = e.target.value // if you dont want to set the state automatically just set it equal to it but dont invoke setS
  }
  handleClick() {


    // input.target
    var newFriends = this.state.friends;
    newFriends.push(this.state.name)
  this.setState({
    name: this.state.name,
    friends: newFriends
  })

  }

  render() {
    var friends = [];
      for(var i = 0; i < this.state.friends.length; i++) {
        friends.push(
          <li key={i}>{this.state.friends[i]}</li>
        )
      }

    console.log('val', this.state.name);
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

          <h5>Name: {this.state.name}</h5>
          <br/>
           <input id='input' onChange={this.handleChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}> Change Name </button>

        <ul> {friends}</ul>
        <List friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
