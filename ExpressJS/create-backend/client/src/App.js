import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      users:[]
    }
  }
 
  componentDidMount() {
    fetch('http://localhost:7000/routeUser/users', {
      method: 'POST',
      body: JSON.stringify(),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then(users => this.setState({users}))
    .catch(error => console.error('Error:', error));
  }
  render() {
    console.log('Hello users ',this.state.users)
    return (
      <div className="App">
          <h1>Users List</h1>
          {this.state.users.map(user => {
            return (<li key={user.id}>{user.name}</li>)
          })}
      </div>
    );
  }
}

export default App;
