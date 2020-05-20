import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import FamilyCard from "./FamilyCard";


class Families extends React.Component {

    state = {
        username: this.props.username,
        families: []
    }

    componentDidMount() {
        API.get("http://localhost:3000/families")
        .then(response => response.json())
        .then(families => this.setState({families: families}))
    }
    
  render() {
    return(
    <div className="families">
        <p>
            {/* { this.state.families.map(family => <FamilyCard family={family} /> )} */}
            {/* {this.state.families.families.map(family => console.log(family.name))} */}
            
        </p>
    </div>
    )
  }
}

export default withRouter(Families)