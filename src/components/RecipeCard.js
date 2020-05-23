import React from 'react'
import { withRouter } from 'react-router-dom'

class RecipeCard extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

  render() {
    return(
    <div className="recipes">
        <div onClick={this.handleClick}>
            {this.props.recipe.name}
        </div>
        <div>
            {
                (this.state.clicked) ?
                <div>
                    <p>
                        {this.props.recipe.ingredients}
                    </p>
                    <p>
                        {this.props.recipe.method}
                    </p>
                </div>
                :
                null
            }
        </div>
    </div>
    )
  }
}

export default withRouter(RecipeCard)

