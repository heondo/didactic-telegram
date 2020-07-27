import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import PropTypes from 'prop-types'

import Swiper from 'react-native-swiper'
import {
  SafeAreaView,
  Text,
  TutorialButtonsRow,
  TransparentButton,
  EmptySpace,
} from '../../atoms'
import { FirstIntroScreen } from './FirstIntroScreen'

const IntroSwiperScreenComponent = ({
  navigation,
  route,
  theme,
  setAlreadyLaunched,
}) => {
  let swiperRef
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <Swiper
        showsButtons={false}
        loop={false}
        ref={(swiper) => (swiperRef = swiper)}
        activeDotColor={theme.PRIMARY_TEXT_COLOR}
        showsPagination={true}
        onIndexChanged={(index) => setCurrentIndex(index)}
        index={0}>
        <FirstIntroScreen />
        <SafeAreaView>
          <Text>Hello</Text>
        </SafeAreaView>
        <SafeAreaView>
          <Text>Hello</Text>
        </SafeAreaView>
      </Swiper>
      <TutorialButtonsRow pd="0 8px">
        {currentIndex === 0 ? (
          <TransparentButton onPress={setAlreadyLaunched}>
            <Text>SKIP</Text>
          </TransparentButton>
        ) : null}
        <EmptySpace />
        {currentIndex < 2 ? (
          <TransparentButton onPress={() => swiperRef.scrollBy(1)}>
            <Text>NEXT</Text>
          </TransparentButton>
        ) : (
          <TransparentButton onPress={setAlreadyLaunched}>
            <Text>DONE</Text>
          </TransparentButton>
        )}
      </TutorialButtonsRow>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

IntroSwiperScreenComponent.propTypes = {
  setAlreadyLaunched: PropTypes.func,
}

export const IntroSwiperScreen = connect(mapStateToProps)(
  IntroSwiperScreenComponent,
)
