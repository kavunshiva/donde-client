import React, { Component } from 'react'

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
      <form onSubmit={this.handleSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br/>
        <label>Password</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <input type="submit" value="login" />
      </form>
    )
  }

}
