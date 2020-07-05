import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'

import Swiper from 'react-native-swiper'
import PRIMARY_MERIDIANS_DATA from '../../../shared/data/primaryMeridiansData'
import { DetailsPointScreen } from './DetailsPointScreen'

const DetailsPointsSwiperScreenComponent = ({
  navigation,
  route,
  theme,
  authState,
}) => {
  const { pointID } = route.params
  const points = PRIMARY_MERIDIANS_DATA.filter(
    (m) => m.meridianID === pointID.split('-')[0],
  )[0].points
  const initialIndex = parseInt(pointID.split('-')[1], 0) - 1

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        loadMinimal={true}
        showsButtons={false}
        showsPagination={false}
        index={initialIndex}>
        {points.map((p) => (
          <DetailsPointScreen key={p} pointID={p} />
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

export const DetailsPointsSwiperScreen = connect(mapStateToProps)(
  DetailsPointsSwiperScreenComponent,
)
