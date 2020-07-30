import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Svg, { Image, G } from 'react-native-svg'
import { View, Text, Button } from '../../atoms'
import { Animated, PanResponder } from 'react-native'

const PointDepthBackScreenComponent = ({ theme }) => {
  // const pan = useRef(new Animated.ValueXY()).current

  const [isDragging, setIsDragging] = useState(false)
  const _gesturePosition = useRef(new Animated.ValueXY()).current
  const _scaleValue = useRef(new Animated.Value(1)).current

  let animatedStyle = {
    transform: _gesturePosition.getTranslateTransform(),
  }
  let initialStyle = {
    transform: [{ translateY: 0 }],
  }

  let style = [{}, isDragging ? animatedStyle : initialStyle]

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      _gesturePosition.setOffset({
        x: 0,
        y: 0,
      })
      // set initial gesture value
      _gesturePosition.setValue({
        x: 0,
        y: 0,
      })
      setIsDragging(true)
    },
    onPanResponderMove: (e, gestureState) =>
      Animated.event(
        [null, { dx: _gesturePosition.x, dy: _gesturePosition.y }],
        { useNativeDriver: false },
      )(e, gestureState),
    onPanResponderRelease: (e, gestureState) => {
      setIsDragging(false)
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Animated.View style={style} {...panResponder.panHandlers}>
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
