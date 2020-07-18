import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { ColorCodeCircle } from '../atoms'

function CircleOrTriangleComponent({ theme, colorCode, size, marginRight }) {
  return (
    <ThemeProvider theme={theme}>
      {colorCode === 'triangle' ? null : (
        <ColorCodeCircle
          size={size}
          color={colorCode}
          marginRight={marginRight}
        />
      )}
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

CircleOrTriangleComponent.propTypes = {
  colorCode: PropTypes.string,
  size: PropTypes.string,
  marginRight: PropTypes.string,
}

export const CircleOrTriangle = connect(mapStateToProps)(
  CircleOrTriangleComponent,
)
