import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignInForm from './components/SignInForm';
import SignUpForm from "./components/SignUpForm";
import About from './components/About';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route exact path="/home" component={() => <About />} />
        <Route exact path="/sign-in" component={() => <SignInForm signIn={this.props.signIn} />} />
        <Route exact path="/sign-up" component={() => <SignUpForm />} />
      </Router>
    )
  }
}

export default App;