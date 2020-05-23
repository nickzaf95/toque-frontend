import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import RecipeCard from './RecipeCard'

class FamilyCard extends React.Component {

    state = {
        recipes: [],
        clicked: false
    }

    handleClick = () => {
        API.get(`http://localhost:3000/families/${this.props.family.id}`)
        .then(recipes => this.setState({
            recipes: recipes.recipes,
            clicked: !this.state.clicked
        }))
    }

    render() {
        return(
        <div className="familyCard" >
            <div onClick={this.handleClick}>
                {this.props.family.name}
            </div>
            <div className="familysRecipes">
                {
                    (this.state.clicked) ?
                    this.state.recipes.map(recipe => <RecipeCard recipe={recipe} />)
                    :
                    null
                }
            </div>
        </div>
        )
    }
}

export default withRouter(FamilyCard)