import React from 'react'
import { Link } from 'react-router-dom'

const DevicesList = (props) => {
  console.log("je suis device")
  return (
    <div>
      {props.devices.map(device => <Link key={device.id} to={`/devices/${device.id}`}><strong><em>je suis device</em></strong></Link>)}
    </div>
  )
}

export default DevicesList
