import React from 'react'
import { withRouter } from 'react-router-dom'
import FamilyCard from "./FamilyCard";


class Families extends React.Component {
    
  render() {
    return(
    <div className="families">
        <p>
            { this.props.families.map(family => <FamilyCard family={family} /> )}
        </p>
    </div>
    )
  }
}

export default withRouter(Families)