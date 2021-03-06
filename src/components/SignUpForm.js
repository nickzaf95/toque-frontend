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
    .then(json => {
        if (json.message === "Success!") {
            alert(json.message)
            this.props.history.push('/sign-in')
        } else {
            alert(json.message)
        }
    })
    }
  

  render() {
    return(
        <div className="helper">
            <br/>
            <div className="signinform">
            <br/>
                <div className="recipes">
                    <h2>Sign Up</h2>
                    <br/>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Full Name </label>
                        <br/>
                        <input type="text" name="full_name" placeholder='full_name' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Username </label>
                        <br/>
                        <input type="text" name="username" placeholder='username' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Password </label>
                        <br/>
                        <input type="password" name="password" placeholder='password' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Email Address </label>
                        <br/>
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
    </div>
    )
  }
}

export default withRouter(SignUpForm)