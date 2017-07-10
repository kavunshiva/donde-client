import React from 'react'
import { withRouter } from 'react-router-dom'
import PositionsMap from './PositionsMap'
import { Button, Header, Icon, Menu, Modal, Segment } from 'semantic-ui-react'

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
  const deleteConfirmation = () => (
    <Modal trigger={<Button color="red">Delete This Device</Button>} basic size="small">
      <Header icon="delete" content="delete device" />
      <Modal.Content>
        <p>Are you sure you want to delete this device?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => props.history.push(`/devices`)} basic color='red' inverted>
          <Icon name='remove' /> No
        </Button>
        <Button onClick={() => deleteDevice(device)} color='green' inverted>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )

  return (
    <div>
      <h2>{device.device_name}</h2><br/>

      <div className="col-md-6">
        {renderMapIfPositionsPresent()}
      </div>
      <Button.Group widths="2">
        <Button color="blue" onClick={() => props.history.push(`/devices/${device.id}/edit`)}>Update This Device</Button>
        {deleteConfirmation()}
      </Button.Group>
    </div>
  )
}

export default withRouter(DeviceDetail)
