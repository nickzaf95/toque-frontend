import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import RecipeCard from './RecipeCard'

class FamilyShow extends React.Component {

    state = {
        recipes: []
    }

    componentDidMount() {
        API.get(`http://localhost:3000/families/${this.props.family.id}`)
        .then(recipes => this.setState({
            recipes: recipes.recipes
        }))
    }

    render() {
        return (
            <div className="familyshow">
                <h3>{this.props.family.name}</h3>
                <div className="recipes">
                    {this.state.recipes.map(recipe => <RecipeCard recipe={recipe} />)}
                </div>
            </div>
        )
    }

}

export default withRouter(FamilyShow)


// this.state.recipes.map(recipe => <RecipeCard recipe={recipe} />