import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { AuthAdapter } from './adapters'
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
    this.login = this.login.bind(this)
  }

  login(params){
    AuthAdapter.login(params)
      .then(user => {
        if(user.jwt){
          this.setState({
            auth: {
              isLoggedIn: true,
              user: user
            }
          })
          localStorage.setItem('jwt', user.jwt)
        }
      })
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
    if(!!localStorage.getItem('jwt')){
      AuthAdapter.currentUser()
        .then(user => {
          if(!user.error){
            this.setState({
              auth: {
                isLoggedIn: true,
                user: user
              }
            })
          }
        })
    }
  }

  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.auth.isLoggedIn} logout={this.logout} />
        {this.state.auth.isLoggedIn ? <DevicesContainer user={this.state.auth.user} /> : <LoginForm onSubmit={this.login} /> }
      </div>
    );
  }
}

export default App
