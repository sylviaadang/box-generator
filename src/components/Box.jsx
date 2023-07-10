import React from 'react'

const Box = props => {
    const {color} = props

    const boxStyle = {
      backgroundColor: color,
      height: 256,
      width: 256,
    }

  return (
    <div style={boxStyle}>Hi</div>
  )
}

export default Box
