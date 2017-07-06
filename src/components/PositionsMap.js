import React from 'react'
import GoogleMapReact from 'google-map-react'

const PositionsMap = (props) => {
  const size = 100
  const strokeWidth = 3

  const centerMarker = (size) => ({
    position: 'absolute',
    width: size,
    height: size,
    left: -size / 2,
    top: -size / 2
  })

  return (
    <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} apiKey={props.apiKey} style={props.style} >
      <svg height={size} width={size} lat={props.center.lat} lng={props.center.lng} style={centerMarker(size)}>
        <circle cx={size/2} cy={size/2} r={size/2 - strokeWidth} stroke="black" stroke-width={strokeWidth} fill="red" />
      </svg>
    </GoogleMapReact>
  )
}

export default PositionsMap
