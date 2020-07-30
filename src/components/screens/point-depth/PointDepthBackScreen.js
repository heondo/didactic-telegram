import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ImageZoomBody } from '../../molecules'

const PointDepthBackScreenComponent = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <ImageZoomBody side="back" />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthBackScreen = connect(mapStateToProps)(
  PointDepthBackScreenComponent,
)
