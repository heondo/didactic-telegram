import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

const PointDepthSideScreenComponent = ({ theme }) => {
  return <ThemeProvider theme={theme}></ThemeProvider>
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthSideScreen = connect(mapStateToProps)(
  PointDepthSideScreenComponent,
)
