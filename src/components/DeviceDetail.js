import React from 'react'
import { Link } from 'react-router-dom'
import PositionsMap from './PositionsMap'

const DeviceDetail = (props) => {
  const { device, getPositions, deleteDevice } = props

  return (
    <div>
      <h2>{device.device_name}</h2><br/>
      <div className="col-md-6">
        <h4>Positions:</h4>
          {device.positions ? <div><ul>{device.positions.map(position => <li key={position.id}>{`latitude: ${position.lat}, longitude: ${position.long}, altitude: ${position.alt} meters, time: ${position.time}, prev: ${position.prev_pos}, id: ${position.id}, next: ${position.next_pos}`}</li>)}</ul></div> : getPositions(device)}
      </div>
      <div className="col-md-6">
        <PositionsMap center={{lat: 40.7255944265592, lng: -73.9446377360189}}
                      zoom={11}
                      apiKey={`AIzaSyBGfiK9HHMGDWC_cWg11K1Bxo8n8ggd8vM`}
                      style={{}} />
      </div>
      <Link to={`/devices/${device.id}/edit`}>Update This Device</Link><br/>
      <Link to="/" onClick={() => deleteDevice(device)}>Delete This Device</Link>
    </div>
  )
}

export default DeviceDetail
