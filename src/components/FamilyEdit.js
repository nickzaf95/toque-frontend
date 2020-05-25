import React from 'react'
import API from "../API"
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class EditFamily extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: props.family.name,
      code: props.family.code,
      username: props.username
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.createFamily(this.state)
    .then(() => this.props.history.push('/families'))
  }

  render() {
    return(
    <div className="signinform">
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Name        </label>
                <input type="text" name="name" placeholder='name' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Code        </label>
                <input type="text" name="code" placeholder='code' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Button type='submit'>Submit</Button>
        </Form>
    </div>
    )
  }
}

export default withRouter(EditFamily)