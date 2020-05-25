import React from 'react'
import { withRouter } from 'react-router-dom'
import API from '../API'
import FamilyCard from "./FamilyCard";
import FamilyShow from "./FamilyShow"
import { Card, Button } from "semantic-ui-react";


class Families extends React.Component {

    state = {
        username: this.props.username,
        families: [],
        selectedFamily: false
    }

    componentDidMount() {
        API.get("http://localhost:3000/families")
        .then(families => this.setState({families: families.families}))
        .then( () => this.setState({selectedFamily: false}))
    }

    handleFamilyClick = (family) => {
        (family) ? this.setState({selectedFamily: family}) : this.setState({selectedFamily: false})
    }

    handleBack = () => {
        this.setState({
            selectedFamily: false
        })
    }
    
  render() {
    return(
    <div className="families">
        <div>
            {
                (this.state.selectedFamily)
                ?
                <Button className="submitbutton" type='back' onClick={this.handleBack}>Back</Button>
                :
                <h2>Families</h2>
            }
        </div>
        {
            (this.state.selectedFamily)
            ?
            <FamilyShow family={this.state.selectedFamily} recipes={this.state.recipes} />
            :
            <Card.Group>
                { this.state.families.map(family => <FamilyCard family={family} selection={this.handleFamilyClick} /> )}            
            </Card.Group>
        }
    </div>
    )
  }
}

export default withRouter(Families)