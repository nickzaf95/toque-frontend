import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import API from './API';
import SignInForm from './components/SignInForm';
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import About from './components/About';

// Do the post to sign up - create new user
// Do about page, import logo? DONE
// Do create family and auth for family
// Do create recipe form and post it

// TypeError (no implicit conversion of nil into String):
  
// app/controllers/application_controller.rb:9:in `generate_token'
// app/controllers/users_controller.rb:7:in `sign_in'


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

  // Sign the user out by setting the username to null and removing the token key from localStorage
  signOut = () => {
    this.setState({
      username: null,
      accounts: []
    })
    localStorage.removeItem("token")
  }

  render() {
    return (
      <Router>
        <NavBar username={this.state.username} signOut={this.signOut}/>
        <Route exact path="" component={() => <About />} />
        <Route exact path="/sign-in" component={() => <SignInForm signIn={this.signIn} isValid={this.isValid} />} />
        <Route exact path="/sign-up" component={() => <SignUpForm isValid={this.isValid} />} />
      </Router>
    )
  }
}

export default App;
