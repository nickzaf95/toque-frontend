import React from 'react'
import API from "../API"
import { Button, Form, Checkbox } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

class SignUpForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: "",
      full_name: "",
      email: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.signUp(this.state)
    .then(() => this.props.history.push('/sign-in'))
  }

  render() {
    return(
    <div className="signinform">
        <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Full Name</label>
                
                <input type="text" name="full_name" placeholder='full_name' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Username</label>
                <input type="text" name="username" placeholder='username' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Password</label>
                <input type="password" name="password" placeholder='password' onChange={this.handleChange}/>
            </Form.Field>
            <br/>
            <Form.Field>
                <label>Email Address</label>
                <input type="text" name="email" placeholder='email' onChange={this.handleChange}/>
            </Form.Field >
            <br/>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
            <br/>
            <Button className="submitbutton" type='submit'>Submit</Button>
        </Form>
    </div>
    )
  }
}

export default withRouter(SignUpForm)