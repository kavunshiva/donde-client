import React from 'react'
import { Link } from 'react-router-dom'

const DeviceDetail = (props) => {
  const { device, getPositions, deleteDevice } = props

  return (
    <div>
      <h2>{device.device_name}</h2><br/>
      <h4>Positions:</h4>
        {device.positions ? <div><ul>{device.positions.map(position => <li key={position.id}>{`latitude: ${position.lat}, longitude: ${position.long}, altitude: ${position.alt} meters, time: ${position.time}, prev: ${position.prev_pos}, id: ${position.id}, next: ${position.next_pos}`}</li>)}</ul></div> : getPositions(device)}
      <Link to={`/devices/${device.id}/edit`}>Update This Device</Link><br/>
      <Link to="/" onClick={() => deleteDevice(device)}>Delete This Device</Link>
    </div>
  )
}

export default DeviceDetail
