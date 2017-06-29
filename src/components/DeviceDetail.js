import React from 'react'
import { Link } from 'react-router-dom'

const DeviceDetail = (props) => {
  return (
    <div>
      <h2>{props.device.device_name}</h2><br/>
      <Link onClick={props.updateDevice}>Update This Device</Link><br/>
      <Link onClick={props.deleteDevice}>Delete This Device</Link>
    </div>
  )
}

export default DeviceDetail
