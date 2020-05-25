import React from 'react'
import { Card } from "semantic-ui-react";
import { withRouter } from 'react-router-dom'
import API from '../API'
import RecipeCard from './RecipeCard'

class FamilyCard extends React.Component {

    // state = {
    //     recipes: []
    // }

    // componentDidMount() {
    //     API.get(`http://localhost:3000/families/${this.props.family.id}`)
    //     .then(recipes => this.setState({
    //         recipes: recipes.recipes
    //     }))
    // }

    handleClick = () => {
        this.props.selection(this.props.family)
    }

    render() {
        return(
                <Card onClick={this.handleClick}>
                    <Card.Content>
                        <Card.Header>{this.props.family.name}</Card.Header>
                        <Card.Description>
                            {/* put how many recipes each family has */}
                        </Card.Description>
                    </Card.Content>
                </Card>
        )
    }
}



export default withRouter(FamilyCard)