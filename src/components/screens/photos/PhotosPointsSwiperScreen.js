import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import Swiper from 'react-native-swiper'

import PRIMARY_MERIDIANS_DATA from '../../../shared/data/primaryMeridiansData'
import { LoggedOutImageScreen } from './LoggedOutImageScreen'
import { LoggedInImageScreen } from './LoggedInImageScreen'

const PhotosPointsSwiperScreenComponent = ({
  navigation,
  route,
  theme,
  authState,
}) => {
  const [points, setPoints] = useState([])
  const [initialIndex, setInitialIndex] = useState(0)

  useEffect(() => {
    const { pointID } = route.params
    setInitialIndex(parseInt(pointID.split('-')[1], 0) - 1)
    const pointsArray = PRIMARY_MERIDIANS_DATA.filter(
      (m) => m.meridianID === pointID.split('-')[0],
    )[0].points
    setPoints(pointsArray)
  }, [route.params])

  return (
    <ThemeProvider theme={theme}>
      <Swiper
        loadMinimal={true}
        showsButtons={false}
        showsPagination={false}
        index={initialIndex}>
        {authState.isLoggedIn
          ? points.map((p) => <LoggedInImageScreen key={p} pointID={p} />)
          : points.map((p) => <LoggedOutImageScreen key={p} pointID={p} />)}
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

export const PhotosPointsSwiperScreen = connect(mapStateToProps)(
  PhotosPointsSwiperScreenComponent,
)
