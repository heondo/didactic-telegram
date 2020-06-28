import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { SafeAreaView, Text } from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

const PrimaryPointDetailsScreenComponent = ({ navigation, theme, pointID }) => {
  const pointData = MERIDIAN_POINTS_DATA[pointID]
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>{pointID}</Text>
        <Text>{JSON.stringify(pointData)}</Text>
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PrimaryPointDetailsScreen = connect(mapStateToProps)(
  PrimaryPointDetailsScreenComponent,
)
