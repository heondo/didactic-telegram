import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ImageZoomBody } from '../../molecules'

const PointDepthFrontScreenComponent = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <ImageZoomBody side="front" />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthFrontScreen = connect(mapStateToProps)(
  PointDepthFrontScreenComponent,
)
