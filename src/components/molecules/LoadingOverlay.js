import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { View, Text } from '../atoms'

function LoadingOverlayComponent({ theme, authState }) {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Loadinggg....</Text>
      </View>
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
