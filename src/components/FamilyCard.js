import React from 'react'
import { Card } from "semantic-ui-react";
import { withRouter } from 'react-router-dom'

class FamilyCard extends React.Component {

    handleClick = () => {
        this.props.selection(this.props.family)
    }

    

    render() {
        return(
                <Card onClick={this.handleClick} >
                    <Card.Content>
                        <Card.Header>
                            {this.props.family.name}
                        </Card.Header>
                    </Card.Content>
                </Card>
        )
    }
}



export default withRouter(FamilyCard)