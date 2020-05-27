import React from 'react'
import { withRouter } from 'react-router-dom'
import RecipeShow from './RecipeShow'
import { Card } from 'semantic-ui-react'


class RecipeCard extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    handleBack = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

  render() {
    return(
    <div className="helper" onClick={this.handleClick}>
        <div>
            {
                (this.state.clicked) ?
                <RecipeShow recipe={this.props.recipe} back={this.handleBack}/>
                :
                <div>
                    <br/>
                    <br/>
                    <Card>
                        <Card.Content>
                            <Card.Header>
                                {this.props.recipe.name}
                            </Card.Header>
                        </Card.Content>
                    </Card>
                </div>
            }
        </div>
        <br/>
    </div>
    )
  }
}

export default withRouter(RecipeCard)

