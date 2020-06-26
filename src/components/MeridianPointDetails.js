import React from 'react'
import { connect } from 'react-redux'

import { Text, SafeAreaView } from './atoms'
import { LoggedInPointDetails } from './molecules'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

function MeridianPointDetails({ route, theme, userImages, authState }) {
  const { pointID } = route.params
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView pd="0">
        {authState.loggedIn ? (
          <LoggedInPointDetails pointID={pointID} />
        ) : (
          <Text>Not logged in View</Text>
        )}
      </SafeAreaView>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState, userImages }) => {
  return {
    theme,
    authState,
    userImages,
  }
}

export default connect(mapStateToProps)(MeridianPointDetails)

MeridianPointDetails.propTypes = {
  id: PropTypes.string,
}
