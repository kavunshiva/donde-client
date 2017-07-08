import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DevicesList from '../components/DevicesList'
import DeviceForm from '../components/DeviceForm'
import DeviceDetail from '../components/DeviceDetail'
import { DevicesAdapter } from '../adapters'
import { Grid, Segment } from 'semantic-ui-react'


const DevicesPage = (props) => {
  const { user, devices, getPositions, createDevice, updateDevice, deleteDevice } = props

  return (
    <Grid>
      <Grid.Column width={4}>
        <Route path="/devices" render={() => <DevicesList devices={devices} />} />
      </Grid.Column>

      <Grid.Column stretched width={12}>
        <Segment>
          <Switch devices={devices}>
            <Route exact path="/devices/new" render={() => <DeviceForm onSubmit={createDevice} submitText="create device" />} />
            <Route exact path="/devices/:id" render={(routerProps) => {
              const device = devices.find(device => device.id === parseInt(routerProps.match.params.id))
              return device ? <DeviceDetail device={device} getPositions={getPositions} deleteDevice={deleteDevice} /> : null
            }} />
            <Route exact path="/devices/:id/edit" devices={devices} render={(routerProps) => {
              const device = devices.find(device => device.id === parseInt(routerProps.match.params.id))
              return device ? <DeviceForm device={device} onSubmit={updateDevice} submitText="update device" /> : null
            }} />
          </Switch>
        </Segment>
      </Grid.Column>
    </Grid>
  )
}

export default DevicesPage
