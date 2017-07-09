import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { DevicesAdapter } from '../adapters'
import DevicesPage from '../components/DevicesPage'

class DevicesContainer extends Component {
  constructor(){
    super()
    this.state = {
      devices: []
    }
    this.createDevice = this.createDevice.bind(this)
    this.updateDevice = this.updateDevice.bind(this)
    this.deleteDevice = this.deleteDevice.bind(this)
    this.getPositions = this.getPositions.bind(this)
  }

  componentDidMount(){
    DevicesAdapter.getDevicesByUser(this.props.user)
      .then(devices => this.setState({
        devices: devices
      }))
  }

  getPositions(d){
      DevicesAdapter.getPositions(d)
        .then(positions => {
          const devices = this.state.devices.map(device => {
            if(device.id === d.id){
              d.positions = positions
              return d
            } else {
              return device
            }
          })
          this.setState({
            devices: devices
          })
        })
  }

  createDevice(device){
    device.user_id = this.props.user.id
    DevicesAdapter.create(device)
      .then(device => {
        if(!device.error){
          this.setState({
            devices: [...this.state.devices, device]
          })
        }
        this.props.history.push(`/devices/${device.id}`)
      })
  }

  updateDevice(device){
    device.user_id = this.props.user.id
    DevicesAdapter.update(device)
      .then(updatedDevice => {
        if(!updatedDevice.error){
          this.setState(() => {
            const devices = this.state.devices.map(device => {
              if(device.id === updatedDevice.id){
                return updatedDevice
              } else {
                return device
              }
            })
            return {
              devices: devices
            }
          })
        }
        this.props.history.push(`/devices/${updatedDevice.id}`)
      })
  }

  deleteDevice(device){
    DevicesAdapter.destroy(device)
      .then(destroyedDevice => {
        this.setState(() => {
          const devices = this.state.devices.filter(device => {
            return device.id !== destroyedDevice.id
          })
          return {
            devices: devices
          }
        })
        this.props.history.push(`/devices`)
      })
  }

  render(){
    return (
      <div>
        <DevicesPage user={this.props.user}
                  devices={this.state.devices}
                  getPositions={this.getPositions}
                  createDevice={this.createDevice}
                  updateDevice={this.updateDevice}
                  deleteDevice={this.deleteDevice} />
      </div>
    )
  }
}

export default withRouter(DevicesContainer)
