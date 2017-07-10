import React from 'react'
import { withRouter } from 'react-router-dom'
import PositionsMap from './PositionsMap'
import { Button, Menu, Segment } from 'semantic-ui-react'

const DeviceDetail = (props) => {
  const { device, getPositions, deleteDevice } = props
  const renderMapIfPositionsPresent = () => {
    if(device.positions && !device.positions.error){
      return (
        <Segment>
          <PositionsMap center={{lat: 40.731408, lng: -74.0127797}}
                        zoom={12}
                        apiKey={`AIzaSyBGfiK9HHMGDWC_cWg11K1Bxo8n8ggd8vM`}
                        style={{width: "100%", height: "400px"}}
                        device={device} />
        </Segment>
      )
    } else {
      getPositions(device)
      return null
    }
  }

  return (
    <div>
      <h2>{device.device_name}</h2><br/>

      <div className="col-md-6">
        {renderMapIfPositionsPresent()}
      </div>
      <Button.Group widths="2">
        <Button color="blue" onClick={() => props.history.push(`/devices/${device.id}/edit`)}>Update This Device</Button>
        <Button to="/" onClick={() => deleteDevice(device)} color="red">Delete This Device</Button>
      </Button.Group>
    </div>
  )
}

export default withRouter(DeviceDetail)
