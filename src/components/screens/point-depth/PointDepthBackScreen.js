import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Svg, { Image, G } from 'react-native-svg'
import { Animated, PanResponder } from 'react-native'

import { View, Text, Button } from '../../atoms'

const PointDepthBackScreenComponent = ({ theme }) => {
  // useNativeDriver not specified?
  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        })
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset()
      },
    }),
  ).current

  return (
    <ThemeProvider theme={theme}>
      <Text>Drag this box!</Text>
      <Animated.View
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}>
        <Svg height="100%" width="100%">
          <G>
            <Image
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              href={require('../../../shared/images/depth-images/front-core.png')}
              clipPath="url(#clip)"
            />
          </G>
        </Svg>
      </Animated.View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthBackScreen = connect(mapStateToProps)(
  PointDepthBackScreenComponent,
)
