import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import About from './components/About';
import CreateFamily from './components/CreateFamily';
import Families from './components/Families'
import CreateRecipe from './components/CreateRecipe';
import Recipes from './components/Recipes'
import JoinFamily from './components/JoinFamily';
import FamilyEdit from './components/FamilyEdit';
import RecipeEdit from './components/RecipeEdit';

class App extends React.Component {
  state = {
    username: this.props.username
  }

  render() {
    return (
      <>
        <Route exact path="/home" component={() => <About />} />
        <Route exact path="/create-family" component={() => <CreateFamily username={this.state.username}/>} />
        <Route exact path="/families" component={() => <Families username={this.state.username}/> } />
        <Route exact path="/edit-family" component={() => <FamilyEdit username={this.state.username} /> } />
        <Route exact path="/edit-recipe" component={() => <RecipeEdit username={this.state.username} /> } />
        <Route exact path="/join-family" component={() => <JoinFamily username={this.state.username}/> } />
        <Route exact path="/create-recipe" component={() => <CreateRecipe user={this.state.username}/> } />
        <Route exact path="/recipes" component={() => <Recipes username={this.state.username} /> } />
      </>
    )
  }
}

export default App;