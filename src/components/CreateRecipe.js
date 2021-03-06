import React from 'react'
import API from "../API"
import { Button, Form } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class CreateRecipeForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: props.username,
      name: "",
      ingredients: "",
      method: "",
      image: "",
      video: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    API.createRecipe(this.state)
    .then(() => this.props.history.push('/recipes'))
  }

  render() {
    return(
        <div className="helper">
            
            <div className="signinform">
            <br/>
            <div>
                <h2>Create a Recipe</h2>
            </div>
            <br/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Name</label>
                        <br/>
                        <input type="text" name="name" placeholder='name' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Ingredients</label>
                        <br/>
                        <input type="text" name="ingredients" placeholder='ingredients' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Method</label>
                        <br/>
                        <input type="text" name="method" placeholder='method' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Image</label>
                        <br/>
                        <input type="text" name="image" placeholder='image_url' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Form.Field>
                        <label>Video</label>
                        <br/>
                        <input type="text" name="video" placeholder='video_url' onChange={this.handleChange}/>
                    </Form.Field>
                    <br/>
                    <Button type='submit'>Submit</Button>
                </Form>
            </div>
        </div>
    )
  }
}

export default withRouter(CreateRecipeForm)