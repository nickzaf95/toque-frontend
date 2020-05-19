import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import API from './API';
import IsLoggedIn from './IsLoggedIn';
import NotLoggedIn from './NotLoggedIn'
import NavBar from "./components/NavBar";
import NavBarNotLoggedIn from './components/NavBarNotLoggedIn'

class App extends React.Component {
  state = {
    username: null
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate (localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token))
    }
  }

  signIn = (username, token) => {
    // Set the state of username to be the username the server sent back
    this.setState({
      username: username
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
      username: null
    })
    localStorage.removeItem("token")
  }

  render() {
    return (
      <Router>
        {
          this.state.username
          ? <>
            <NavBar username={this.state.username} signOut={this.signOut}/>
            <IsLoggedIn username={this.state.username} />
          </>
          : <>
            <NavBarNotLoggedIn />
            <NotLoggedIn signIn={this.signIn} />
          </>
        }
      </Router>
    )
  }
}

export default App;