import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

const DevicesList = (props) => {
  console.log("je suis device")
  return (
    <div>
      <div>
        {props.devices.map(device => <div key={device.id}><Link to={`/devices/${device.id}`}><strong><em>{device.device_name}</em></strong></Link><br/></div>)}
      </div>
      <div>
        <Switch>
          <Route path='/devices/new' />
          <Route render={() => <Link to="/devices/new">Add New Device</Link> } />
        </Switch>
      </div>
    </div>
  )
}

export default DevicesList
