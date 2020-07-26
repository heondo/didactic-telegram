import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Svg, { Image } from 'react-native-svg'
import { Animated, StyleSheet } from 'react-native'

import {
  PanGestureHandler,
  PinchGestureHandler,
  RotationGestureHandler,
  State,
} from 'react-native-gesture-handler'
import { View } from '../../atoms'
const PointDepthFrontScreenComponent = ({ navigation, theme }) => {
  // biggest features
  /**
   * 1. image of "side"
   * 2. array of images with to include and plot
   * 3. Button to filter/toggle which points to display? (which ones)
   *    3.a. Meridian Group, Color Code/Depth
   * 4. Click each point and view...details?
   */
  // return (
  //   <ThemeProvider theme={theme}>
  //     <Svg height="100%" width="100%">
  //       <Image
  //         width="100%"
  //         height="100%"
  //         preserveAspectRatio="xMidYMid slice"
  //         href={require('../../../shared/images/depth-images/front-core.png')}
  //         clipPath="url(#clip)"
  //       />
  //     </Svg>
  //   </ThemeProvider>
  // )
  const _baseScale = new Animated.Value(1)
  const _pinchScale = new Animated.Value(1)
  const _scale = Animated.multiply(_baseScale, _pinchScale)
  let _lastScale = 1
  const _onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: _pinchScale } }],
    { useNativeDriver: true },
  )

  const _onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      _lastScale *= event.nativeEvent.scale
      _baseScale.setValue(_lastScale)
      _pinchScale.setValue(1)
    }
  }

  return (
    <PinchGestureHandler
      onGestureEvent={_onPinchGestureEvent}
      onHandlerStateChange={_onPinchHandlerStateChange}>
      <View collapsable={false}>
        <Animated.Image
          source={require('../../../shared/images/depth-images/front-core.png')}
          style={[
            {
              transform: [{ perspective: 200 }, { scale: _scale }],
            },
          ]}
        />
      </View>
    </PinchGestureHandler>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PointDepthFrontScreen = connect(mapStateToProps)(
  PointDepthFrontScreenComponent,
)
