import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DevicesList from '../components/DevicesList'
import DeviceForm from '../components/DeviceForm'
import DeviceDetail from '../components/DeviceDetail'
import { DevicesAdapter } from '../adapters'


const DevicesPage = (props) => {
  const { user, devices, createDevice, updateDevice, deleteDevice } = props


  return (
    <div className="row">
      <div className="col-md-4">
        <Route path="/devices" />
        <DevicesList devices={devices} />
      </div>
      <div className="col-md-8">
        <Switch devices={devices}>
          <Route exact path="/devices/new" render={() => <DeviceForm onSubmit={createDevice} submitText="create device" />} />
          <Route exact path="/devices/:id" render={(routerProps) => {
            const device = devices.find(device => device.id === parseInt(routerProps.match.params.id))
            return device ? <DeviceDetail device={device} deleteDevice={deleteDevice} /> : null
          }} />
          <Route exact path="/devices/:id/edit" devices={devices} render={(routerProps) => {
            const device = devices.find(device => device.id === parseInt(routerProps.match.params.id))
            return device ? <DeviceForm device={device} onSubmit={updateDevice} submitText="update device" /> : null
          }} />
        </Switch>
      </div>
    </div>
  )
}

export default DevicesPage
