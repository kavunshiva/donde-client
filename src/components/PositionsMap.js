import React from 'react'
import GoogleMapReact from 'google-map-react'

const PositionsMap = (props) => {
  const { device, $hover } = props
  let size = 20
  const strokeWidth = 3

  // function to use as callback with $hover
  // const changeSize = (val) => {
  //   size += val
  // }

  const centerMarker = (size) => ({
      position: 'absolute',
      width: size,
      height: size,
      left: -size / 2,
      top: -size / 2
  })

  const renderPositions = (props) => {
    return device.positions.map(position => {
      return (
        <svg key={position.id} height={size} width={size} lat={position.lat} lng={position.long} style={centerMarker(size)}>
          <circle cx={size/2} cy={size/2} r={size/2 - strokeWidth} stroke="black" stroke-width={strokeWidth} fill="red" />
        </svg>
      )
    })
  }

  return (
    <GoogleMapReact defaultCenter={props.center} defaultZoom={props.zoom} apiKey={props.apiKey} style={props.style} yesIWantToUseGoogleMapApiInternals={true}>
      {renderPositions()}
    </GoogleMapReact>
  )
}

export default PositionsMap
