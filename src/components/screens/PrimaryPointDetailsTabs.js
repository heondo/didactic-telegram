import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { PrimaryPointDetailsScreen } from './PrimaryPointDetailsScreen'

import Swiper from 'react-native-swiper'

export const PrimaryPointDetailsTabs = ({ navigation, route, theme }) => {
  const { pointID, points } = route.params

  return (
    <Swiper
      showsButtons={true}
      showsPagination={false}
      index={parseInt(pointID.split('-')[1], 0) - 1}>
      {points.map((p) => (
        <PrimaryPointDetailsScreen key={p} pointID={p} />
      ))}
    </Swiper>
  )
}
