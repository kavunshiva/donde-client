import React from 'react'
import { Route } from 'react-router-dom'
import DevicesList from '../components/DevicesList'
import DeviceForm from '../components/DeviceForm'
import DeviceDetail from '../components/DeviceDetail'

const DevicesPage = (props) => {
  const { user, devices, createDevice, updateDevice, deleteDevice } = props
  return (
    <div className="row">
      <div className="col-md-4">
        <DevicesList devices={devices} />
      </div>
      <div className="col-md-8">
        <Route exact path="devices/new" render={() => <DeviceForm onSubmit={createDevice} submitText="create device" />} />
        <Route exact path="/devices/:id" render={(routerProps) => {
          const device = devices.find(device => device.id === parseInt(routerProps.match.params.id))
          !!device ? <DeviceDetail device={device} deleteDevice={deleteDevice} /> : null
        }} />
        <Route exact path="/devices/:id/edit" render={(routerProps) => {
          const device = devices.find(device => device.id === parseInt(routerProps.match.params.id))
          !!device ? <DeviceForm device={device} onSumbit={updateDevice} submitText="update device" /> : null
        }} />
      </div>
    </div>
  )
}

export default DevicesPage
