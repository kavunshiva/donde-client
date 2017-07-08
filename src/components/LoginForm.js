import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class LoginForm extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.setState({
      user_name: '',
      password: ''
    })
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </Form.Field>
        <Button type="submit">Login</Button>
      </Form>
    )
  }

}
