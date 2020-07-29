import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Svg, { Image, G } from 'react-native-svg'
import { View } from '../../atoms'
import { PanResponder, Animated } from 'react-native'

const PointDepthFrontScreenComponent = ({ theme }) => {
  // biggest features
  /**
   * 1. image of "side"
   * 2. array of images with to include and plot
   * 3. Button to filter/toggle which points to display? (which ones)
   *    3.a. Meridian Group, Color Code/Depth
   * 4. I need to add gesture handlers to this, and move the image around and change the scaling as i do so?
   * 4. Click each point and view...details?
   */
  const position = new Animated.ValueXY()

  const [imageState, setImageState] = useState({
    zoom: 1,
    left: 0, // max left and top is derived from scale
    top: 0,
  })

  // const

  // Zoom is determined by the distance from the initialX, initialY to the location on release
  const _panResponder = useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // We have a pinch-to-zoom movement
        // Track locationX/locationY to know by how much the user moved their fingers
        // console.log(evt.nativeEvent.locationX, evt.nativeEvent.locationY)
      },
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {},
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        // console.log('grant', evt, gestureState)
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true
      },
    }),
  ).current

  return (
    <ThemeProvider theme={theme}>
      <View {..._panResponder.panHandlers}>
        <Svg height="100%" width="100%">
          <G
            transform={{
              translateX: position.x,
              translateY: position.y,
              scale: imageState.zoom,
            }}>
            <Image
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              href={require('../../../shared/images/depth-images/front-core.png')}
              clipPath="url(#clip)"
            />
          </G>
        </Svg>
      </View>
    </ThemeProvider>
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
