import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Dimensions } from 'react-native'
import Svg, { Image, G } from 'react-native-svg'
import ImageZoom from 'react-native-image-pan-zoom'

const PointDepthBackScreenComponent = ({ theme }) => {
  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window')

  return (
    <ThemeProvider theme={theme}>
      <ImageZoom
        cropWidth={deviceWidth}
        cropHeight={deviceHeight}
        imageWidth={deviceWidth}
        imageHeight={deviceHeight}
        useNativeDriver={true}
        minScale={1}
        maxScale={3}>
        <Svg height="100%" width="100%">
          <G>
            <Image
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid"
              href={require('../../../shared/images/depth-images/front-core.png')}
              clipPath="url(#clip)"
            />
          </G>
        </Svg>
      </ImageZoom>
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
