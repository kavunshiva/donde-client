import React from 'react'
import { Link } from 'react-router-dom'

const DeviceDetail = (props) => {
  const { device, deleteDevice } = props
  return (
    <div>
      <h2>{device.device_name}</h2><br/>
      <h4>Positions:</h4>
        {/*device.positions.map(position => <div>{position}</div>)*/}
      <Link to={`/devices/${device.id}/edit`}>Update This Device</Link><br/>
      <Link to="/" onClick={() => deleteDevice(device)}>Delete This Device</Link>
    </div>
  )
}

export default DeviceDetail
