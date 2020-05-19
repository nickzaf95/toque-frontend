import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import API from './API';
import SignInForm from './components/SignInForm';
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import About from './components/About';
import CreateFamily from './components/CreateFamily';
import Families from './components/Families'
import CreateRecipe from './components/CreateRecipe';
import Recipes from './components/Recipes'

// Do the post to sign up - create new user DONE
// Do about page, import logo? DONE
// Do create family and auth for family - JOIN FAMILY LEFT
// Do create recipe form and post it - DONE - SHOW RECIPE LEFT

class App extends React.Component {
  state = {
    username: null,
    families: [],
    recipes: []
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate (localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token, json.families, json.recipes))
    }
  }

  signIn = (username, token, families, recipes) => {
    // Set the state of username to be the username the server sent back
    this.setState({
      username: username,
      families: families,
      recipes: recipes
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
      families: [],
      recipes: []
    })
    localStorage.removeItem("token")
  }

  render() {
    return (
      <Router>
        <NavBar username={this.state.username} signOut={this.signOut}/>
        <Route exact path="/home" component={() => <About />} />
        <Route exact path="/sign-in" component={() => <SignInForm signIn={this.signIn} isValid={this.isValid} />} />
        <Route exact path="/sign-up" component={() => <SignUpForm isValid={this.isValid} />} />
        <Route exact path="/create-family" component={() => <CreateFamily user={this.state.username}/>} />
        <Route exact path="/families" component={() => <Families families={this.state.families}/> } />
        <Route exact path="/create-recipe" component={() => <CreateRecipe user={this.state.username}/> } />
        <Route exact path="/recipes" component={() => <Recipes recipes={this.state.recipes} /> } />
      </Router>
    )
  }
}

export default App;