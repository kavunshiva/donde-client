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
    if (this.props.isLoggedIn){
      this.setState({
        activeComponent: name
      })
    } else {
      e.preventDefault()
    }
  }

  render(){
    const { isLoggedIn, logout } = this.props
    const { activeComponent } = this.state
    return (
      <Menu>
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
            <Menu.Item name="login"
                       onClick={this.handleClick}
                       active={activeComponent === "login"}
                       position="right">
              <Link to="/login">Login</Link>
            </Menu.Item>
          }
      </Menu>
    )
  }
}

export default NavBar
