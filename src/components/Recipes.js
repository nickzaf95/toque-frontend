import React from 'react'
import { withRouter } from 'react-router-dom'
import RecipeCard from "./RecipeCard";
import API from '../API';


class Recipes extends React.Component {

//   state = {
//       recipes: API.getRecipes(username)
//   }

  render() {
    return(
    <div className="recipes">
        <p>
            { this.state.recipes.map(recipe => <RecipeCard recipe={recipe} /> )}
        </p>
    </div>
    )
  }
}

export default withRouter(Recipes)