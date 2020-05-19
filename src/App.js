import React from 'react';
import './App.css';
import IsLoggedIn from './IsLoggedIn';
import NotLoggedIn from './NotLoggedIn'
import NavBar from "./components/NavBar";
import NavBarNotLoggedIn from './components/NavBarNotLoggedIn'

class App extends React.Component {
  state = {
    username: null
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
      <div className="main">
        {(this.isValid()) ? <NavBar username={this.state.username} signOut={this.signOut}/>
        : <NavBarNotLoggedIn />}
        {(this.isValid()) 
        ? <IsLoggedIn username={this.state.username} />
        : <NotLoggedIn signIn={this.signIn} /> }
        {/* <Route exact path="/sign-in" component={() => <SignInForm signIn={this.signIn} isValid={this.isValid} />} />
        <Route exact path="/sign-up" component={() => <SignUpForm isValid={this.isValid} />} /> */}
      </div>
    )
  }
}

export default App;