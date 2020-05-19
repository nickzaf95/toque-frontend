import React from 'react'
import { withRouter } from 'react-router-dom'

class FamilyCard extends React.Component {

  render() {
    return(
    <div className="familyCard">
        <div>
            {this.props.family.name}
            {//On click go to all recipes of specific family
            }
        </div>
    </div>
    )
  }
}

export default withRouter(FamilyCard)