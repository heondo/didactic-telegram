import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Text, OverLay, LoadingCircle } from '../atoms'

function LoadingOverlayComponent({ theme, authState }) {
  return (
    <ThemeProvider theme={theme}>
      <OverLay>
        <LoadingCircle size="large" color={theme.LOADING_CIRCLE_COLOR} />
      </OverLay>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const LoadingOverlay = connect(mapStateToProps)(LoadingOverlayComponent)

LoadingOverlayComponent.propTypes = {}
