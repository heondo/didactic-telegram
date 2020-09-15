import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ImageZoomBody } from '../../molecules'

const PointDepthSideScreenComponent = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <ImageZoomBody side="side" />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthSideScreen = connect(mapStateToProps)(
  PointDepthSideScreenComponent,
)
