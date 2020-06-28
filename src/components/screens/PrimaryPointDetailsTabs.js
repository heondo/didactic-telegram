import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import Swiper from 'react-native-swiper'
import { LoggedOutDetailsScreen } from './LoggedOutDetailsScreen'
import { LoggedInDetailsScreen } from './LoggedInDetailsScreen'

const PrimaryPointDetailsTabsComponent = ({
  navigation,
  route,
  theme,
  authState,
}) => {
  const { pointID, points } = route.params

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        showsButtons={true}
        showsPagination={false}
        index={parseInt(pointID.split('-')[1], 0) - 1}>
        {authState.isLoggedIn
          ? points.map((p) => <LoggedInDetailsScreen key={p} pointID={p} />)
          : points.map((p) => <LoggedOutDetailsScreen key={p} pointID={p} />)}
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
