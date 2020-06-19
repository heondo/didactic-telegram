import React from 'react'
import { connect } from 'react-redux'

import { Text, View } from './atoms'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import MeridianPointsData from '../shared/data/meridian-points-data'

function MeridianPointDetails({ route, theme }) {
  const { id } = route.params
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>{JSON.stringify(MeridianPointsData[id])}</Text>
      </View>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianPointDetails)

MeridianPointDetails.propTypes = {
  id: PropTypes.string,
}
