import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import API from './API';
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
    username: this.props.username
  }

  componentDidMount() {
    if (localStorage.token) {
      API.validate (localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token))
    }
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
        <Route exact path="/home" component={() => <About />} />
        <Route exact path="/create-family" component={() => <CreateFamily username={this.state.username}/>} />
        <Route exact path="/families" component={() => <Families username={this.state.username}/> } />
        <Route exact path="/create-recipe" component={() => <CreateRecipe user={this.state.username}/> } />
        <Route exact path="/recipes" component={() => <Recipes username={this.state.username} /> } />
      </Router>
    )
  }
}

export default App;

// App
// |___ Authorised
//     |__ Route
//     |__ Route
//     |__ Route
//     |__ Route
//     |__ Route
//     |__ Route
// |___ NotAuthorised
//     |__ SignUpForm
//     |__ LogIn