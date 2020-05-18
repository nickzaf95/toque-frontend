import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import API from './API';
import SignInForm from './components/SignInForm';


class App extends React.Component {
  state = {
    username: null,
    accounts: []
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate (localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token))
    }
  }

  signIn = (username, token, accounts) => {
    // Set the state of username to be the username the server sent back
    this.setState({
      username: username,
      accounts: accounts
    })
    // Store the token the server sent back in localStorage, which is on the client-side
    localStorage.token = token
  }

  isValid = () => {
    if (this.state.username) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <Router>
        <Route exact path='/sign-in' component={() => <SignInForm signIn={this.signIn} isValid={this.isValid} />} />
      </Router>
    )
  }
}

export default App;
