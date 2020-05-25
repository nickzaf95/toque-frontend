import React from 'react'
import { withRouter } from 'react-router-dom'
import RecipeCard from "./RecipeCard";
import API from '../API';


class Recipes extends React.Component {

    state = {
        username: this.props.username,
        recipes: []
    }

    componentDidMount() {
        API.get("http://localhost:3000/recipes")
        .then(recipes => this.setState({recipes: recipes.recipes}))
    }

    render() {
        return(
        <div className="recipes">
            <p>
                { this.state.recipes.map(recipe => <RecipeCard recipe={recipe} /> )}
            </p>
            <br/>
        </div>
        )
    }
}

export default withRouter(Recipes)