import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import RecipeCard from './RecipeCard'

class FamilyShow extends React.Component {

    state = {
        recipes: [],
        selectedRecipe: false
    }

    componentDidMount() {
        API.get(`http://localhost:3000/families/${this.props.family.id}`)
        .then(recipes => this.setState({
            recipes: recipes.recipes
        }))
    }

    handleSelection = () => {
        this.setState({
            selectedRecipe: true
        })
    }

    render() {
        return (
            <div className="familyshow">
                <h2>{this.props.family.name}</h2>
                <div>
                    <h3>Recipes</h3>
                </div>
                <div >
                    {this.state.recipes.map(recipe => <RecipeCard recipe={recipe} handleSelection={this.handleSelection}/>)}
                </div>
            </div>
        )
    }

}

export default withRouter(FamilyShow)