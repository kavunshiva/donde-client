import React from 'react'
import GoogleMapReact from 'google-map-react'

const PositionsMap = (props) => {

  return (
    <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} apiKey={props.apiKey} style={props.style} >
    </GoogleMapReact>
  )
}

export default PositionsMap
