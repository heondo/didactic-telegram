import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { ColorCodeCircle, MatCommIcon, View } from '../atoms'

function CircleOrIconComponent({ theme, colorCode, size, margin }) {
  let shapeComponent = null
  switch (colorCode) {
    case 'triangle':
      shapeComponent = <MatCommIcon name="triangle" size={size} />
      break
    case 'circle':
      shapeComponent = <MatCommIcon name="circle" size={size} />
      break
    case 'square':
      shapeComponent = <MatCommIcon name="square" size={size} />
      break
    case 'x':
      shapeComponent = <MatCommIcon name="close" size={size} />
      break
    default:
      shapeComponent = <ColorCodeCircle size={size} color={colorCode} />
  }

  return (
    <ThemeProvider theme={theme}>
      <View mg={margin}>{shapeComponent}</View>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

CircleOrIconComponent.propTypes = {
  colorCode: PropTypes.string,
  size: PropTypes.number,
  marginRight: PropTypes.string,
}

export const CircleOrIcon = connect(mapStateToProps)(CircleOrIconComponent)
