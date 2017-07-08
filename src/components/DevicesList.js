import React, { Component } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

class DevicesList extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(e, { name }){
    this.setState({
      activeItem: name
    })
  }

  render(){
    return (
      <div>
        <Menu fluid vertical tabular>
          {this.props.devices && !this.props.devices.error ?
            this.props.devices.map(device => {
              return (
                <Menu.Item key={device.id} name={device.id} active={this.state.activeItem === device.id} onClick={this.handleItemClick}>
                  <Link to={`/devices/${device.id}`}>
                    <strong><em>{device.device_name}</em></strong>
                  </Link><br/>
                </Menu.Item>
              )
            }) : null
          }
        </Menu>
        <div>
          <Switch>
            <Route path='/devices/new' />
            <Route render={() => <Link to="/devices/new">Add New Device</Link> } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default DevicesList
