import React from 'react'
import API from "../API"
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class JoinFamily extends React.Component {
  constructor(props) {
    super()
    this.state = {
      name: "",
      code: "",
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
    API.joinFamily(this.state)
    .then(() => this.props.history.push('/families'))
  }

  render() {
    return(
        <div className="helper">
            <div className="signinform">
                <br/>
                <div className="recipes">
                    <h2>Join a Family</h2>
                    <br/>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Name </label>
                        <br/>
                        <input type="text" name="name" placeholder='name' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Code </label>
                        <br/>
                        <input type="text" name="code" placeholder='code' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    )
  }
}

export default withRouter(JoinFamily)