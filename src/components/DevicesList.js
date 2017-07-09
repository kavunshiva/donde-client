import React, { Component } from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

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
        <Switch>
          <Route path='/devices/new' />
            <Route render={() => <Button onClick={() => this.props.history.push(`/devices/new`) } color="teal" fluid>Add New Device</Button>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(DevicesList)
