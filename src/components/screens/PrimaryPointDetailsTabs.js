import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { PrimaryPointDetailsScreen } from './PrimaryPointDetailsScreen'

import Swiper from 'react-native-swiper'

const PrimaryPointDetailsTabsComponent = ({ navigation, route, theme }) => {
  const { pointID, points } = route.params

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        showsButtons={true}
        showsPagination={false}
        index={parseInt(pointID.split('-')[1], 0) - 1}>
        {points.map((p) => (
          <PrimaryPointDetailsScreen key={p} pointID={p} />
        ))}
      </Swiper>
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

export const PrimaryPointDetailsTabs = connect(mapStateToProps)(
  PrimaryPointDetailsTabsComponent,
)
