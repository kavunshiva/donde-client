import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class NavBar extends Component {
  constructor(){
    super()
    this.state = {
      activeComponent: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e, { name }){
    this.setState({
      activeComponent: name
    })
  }

  render(){
    const { isLoggedIn, logout } = this.props
    const { activeComponent } = this.state
    return (
      <Menu tabular>
          <Menu.Item name="header"
                     onClick={this.handleClick}
                     active={activeComponent === "header"}
                     header>
            <Link to="/">¿Dónde?</Link>
          </Menu.Item>
          {isLoggedIn ?
            <Menu.Item name="devices"
                       onClick={this.handleClick}
                       active={activeComponent === "devices"}>
              <Link to="/devices">Devices</Link>
            </Menu.Item> : null
          }
          {isLoggedIn ?
            <Menu.Menu position="right">
              <Menu.Item name="username"
                         onClick={this.handleClick}
                         active={activeComponent === "username"}>
                {this.props.user.username}
              </Menu.Item>
              <Menu.Item name="logout" position="right">
                <Link to="/" onClick={() => logout()}>Logout</Link>
              </Menu.Item>
            </Menu.Menu> :
            <Menu.Menu position="right">
              <Menu.Item name="signup"
                onClick={this.handleClick}
                active={activeComponent === "signup"}>
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
              <Menu.Item name="login"
                onClick={this.handleClick}
                active={activeComponent === "login"}>
                <Link to="/login">Login</Link>
              </Menu.Item>
            </Menu.Menu>
          }
      </Menu>
    )
  }
}

export default NavBar
