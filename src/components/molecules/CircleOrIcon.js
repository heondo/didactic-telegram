import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { ColorCodeCircle } from '../atoms'

function CircleOrIconComponent({ theme, colorCode, size, marginRight }) {
  let shapeComponent = null
  switch (colorCode) {
    case 'triangle':
      shapeComponent = null
      break
    case 'circle':
      shapeComponent = null
      break
    case 'square':
      shapeComponent = null
      break
    case 'x':
      shapeComponent = null
      break
    default:
      shapeComponent = (
        <ColorCodeCircle
          size={size}
          color={colorCode}
          marginRight={marginRight}
        />
      )
  }

  return <ThemeProvider theme={theme}>{shapeComponent}</ThemeProvider>
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

CircleOrIconComponent.propTypes = {
  colorCode: PropTypes.string,
  size: PropTypes.string,
  marginRight: PropTypes.string,
}

export const CircleOrIcon = connect(mapStateToProps)(CircleOrIconComponent)
