import React from 'react'
import { withRouter } from 'react-router-dom'
import RecipeShow from './RecipeShow'


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
    <div  onClick={this.handleClick}>
        <div className="recipes">
            {
                (this.state.clicked) ?
                <RecipeShow recipe={this.props.recipe} back={this.handleBack}/>
                :
                <div className="recipes">
                    {this.props.recipe.name}
                </div>
            }
        </div>
        <br/>
    </div>
    )
  }
}

export default withRouter(RecipeCard)

