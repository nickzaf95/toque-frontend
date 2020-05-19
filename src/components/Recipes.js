import React from 'react'
import { withRouter } from 'react-router-dom'
import RecipeCard from "./RecipeCard";


class Recipes extends React.Component {

  render() {
    return(
    <div className="recipes">
        <p>
            { this.props.recipes.map(recipe => <RecipeCard recipe={recipe} /> )}
        </p>
    </div>
    )
  }
}

export default withRouter(Recipes)