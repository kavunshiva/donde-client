import React, { Component } from 'react'

export default class DeviceForm extends Component {
  constructor(props){
    super(props)
    if (this.props.device){
      this.state = this.props.device
    } else {
      this.state = {
        device_name: '',
        password: '',
        password_confirmation: ''
      }
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
      device_name: '',
      password: '',
      password_confirmation: ''
    })
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Device ID</label>
        <input type="text" name="device_name" value={this.state.device_name} onChange={this.handleChange} /><br/>
        <label>Device Key</label>
        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br/>
        <label>Device Key Confirmation</label>
        <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} /><br/>
        <input type="submit" value={this.props.submitText} />
      </form>
    )
  }
}
