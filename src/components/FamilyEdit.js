import React from 'react'
import API from "../API"
import { Card, Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import FamilyCard from "./FamilyCard";

class EditFamily extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: "",
      code: "",
      username: props.username,
      selectedFamily: false,
      families: []
    }
  }

  handleClick = (family) => {
      this.setState({
          selectedFamily: family,
          name: family.name,
          code: family.code
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleBack = () => {
      this.setState({selectedFamily: false})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.editFamily(this.state)
    .then(() => this.props.history.push('/families'))
  }

  componentDidMount() {
    API.get("http://localhost:3000/families")
    .then(families => this.setState({families: families.families}))
    .then( () => this.setState({selectedFamily: false}))
  }

  render() {
    return(
        (!this.state.selectedFamily)
        ?
        <div>
        <div className="recipes">
            {
                <h2>Click on a Family to Edit</h2>
            }
        </div>
        <br/>
        <div className="recipes">
        {
            <Card.Group>
                { this.state.families.map(family => <FamilyCard family={family} selection={this.handleClick}/> )}            
            </Card.Group>
        }
        </div>
    </div>
    :
    <div className="signinform">
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Name </label>
                <input type="text" name="name" placeholder={this.state.name} onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Code </label>
                <input type="text" name="code" placeholder={this.state.code} onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Button className="submitbutton" type='submit'>Save</Button>
            <Button className="submitbutton" type='back' onClick={this.handleBack}>Back</Button>
        </Form>
    </div>
    )
  }
}

export default withRouter(EditFamily)