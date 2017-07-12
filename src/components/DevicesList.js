import React, { Component } from 'react'
import { Link, Switch, Route, withRouter } from 'react-router-dom'
import { Button, Menu, Search } from 'semantic-ui-react'

class DevicesList extends Component {
  constructor(){
    super()
    this.state = {
      activeItem: '',
      searchTerm: ''
    }
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  handleItemClick(e, { name }){
    this.setState({
      activeItem: name
    })
  }

  handleSearchChange(e){
    this.setState({
      searchTerm: e.target.value
    })
  }

  render(){
    return (
      <div>
        {this.props.devices && this.props.devices.length > 0 ?
          <Menu fluid vertical tabular>
            <Search onSearchChange={this.handleSearchChange} showNoResults={false} fluid/>
            {this.props.devices.filter(device => device.device_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
              .map(device => {
                return (
                  <Menu.Item key={device.id} name={device.id} active={this.state.activeItem === device.id} onClick={this.handleItemClick}>
                    <Link to={`/devices/${device.id}`}>
                      <strong><em>{device.device_name}</em></strong>
                    </Link><br/>
                  </Menu.Item>
                )
              })
            }
          </Menu> : null
        }
        <Switch>
          <Route path='/devices/new' />
            <Route render={() => <Button onClick={() => this.props.history.push(`/devices/new`) } color="teal" fluid>Add New Device</Button>} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(DevicesList)
