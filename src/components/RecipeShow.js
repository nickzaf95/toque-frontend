import React from 'react'
import { withRouter } from 'react-router-dom'
import { Card } from "semantic-ui-react";

class RecipeShow extends React.Component {

    render() {
        return (
            <div className="helper">
                <br/>
                <br/>
                <div className="signinform">
                    <Card>
                        <h2>{this.props.recipe.name}</h2>
                        <h5>Ingredients</h5>
                        <Card.Content>
                            <div className="ingredients">
                                {this.props.recipe.ingredients}
                            </div>
                        </Card.Content>
                        <h5>Method</h5>
                        <Card.Content>
                            <div className="method">
                                {this.props.recipe.method}
                            </div>
                        </Card.Content>
                    </Card>
                    {/* <Button className="submitbutton" type='back' onClick={this.props.back}>Back</Button> */}
                </div>
            </div>
        )
    }

}

export default withRouter(RecipeShow)