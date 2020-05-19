import React from 'react'
import { withRouter } from 'react-router-dom'

class RecipeCard extends React.Component {

    handleClick = () => {
        this.props.history.push(`/recipes/${this.props.recipe.name}`)
    }

  render() {
    return(
    <div className="recipes">
        <div onClick={this.handleClick}>
            {this.props.recipe.name}
        </div>
    </div>
    )
  }
}

export default withRouter(RecipeCard)

