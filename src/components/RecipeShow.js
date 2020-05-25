import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card } from "semantic-ui-react";

class RecipeShow extends React.Component {

    render() {
        return (
            <div className="recipeshow">
                <h5>{this.props.recipe.name}</h5>
                <Card.Group>
                <div className="ingredients">
                    {this.props.recipe.ingredients}
                </div>
                </Card.Group>
                <br/>
                <Card.Group>
                <div className="method">
                    {this.props.recipe.method}
                </div>
                </Card.Group>
                {/* <Button className="submitbutton" type='back' onClick={this.props.back}>Back</Button> */}
            </div>
        )
    }

}

export default withRouter(RecipeShow)