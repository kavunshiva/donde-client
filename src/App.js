import React, { Component } from 'react'
import { withRouter, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import { AuthAdapter, UsersAdapter } from './adapters'
import LoginForm from './components/LoginForm'
import DevicesContainer from './containers/DevicesContainer'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(){
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        user: {}
      }
    }
    this.setUser = this.setUser.bind(this)
    this.login = this.login.bind(this)
    this.redirectToLogin = this.redirectToLogin.bind(this)
  }

  setUser(user){
    if(user.jwt){
      this.setState({
        auth: {
          isLoggedIn: true,
          user: user
        }
      })
      localStorage.setItem('jwt', user.jwt)
      this.props.history.push('/devices')
    }
  }

  login(params){
    if(params.password_confirmation === ''){
      const loginParams = {
        username: params.username,
        password: params.password
      }
      AuthAdapter.login(loginParams)
        .then(user => {
          this.setUser(user)
        })
    } else {
      UsersAdapter.signup(params)
        .then(user => {
          this.setUser(user)
        })
    }
  }

  logout(){
    localStorage.clear()
    this.setState({
      auth: {
        isLoggedIn: false,
        user: {}
      }
    })
  }

  componentDidMount(){
    if(localStorage.getItem('jwt')){
      AuthAdapter.currentUser()
        .then(user => {
          if(!user.error){
            user.jwt = localStorage.getItem('jwt')
            this.setState({
              auth: {
                isLoggedIn: true,
                user: user
              }
            })
          }
        })
    } else {
      this.redirectToLogin()
    }
  }

  redirectToLogin(){
    this.props.history.push('/login')
  }

  render() {
    const { isLoggedIn, user } = this.state.auth
    return (
      <div>
        {!isLoggedIn ? <Route path="/" action={this.redirectToLogin} /> : null}
        <NavBar isLoggedIn={isLoggedIn} user={user} logout={this.logout} />
        {isLoggedIn ? <DevicesContainer user={user} /> : <LoginForm onSubmit={this.login} /> }
      </div>
    );
  }
}

export default withRouter(App)
