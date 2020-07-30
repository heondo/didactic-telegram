import React from 'react'
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'
import { ThemeProvider } from 'styled-components'
import Svg, { Image, G } from 'react-native-svg'
import ImageZoom from 'react-native-image-pan-zoom'

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

  const { width: deviceWidth, height: deviceHeight } = Dimensions.get('screen')

  return (
    <ThemeProvider theme={theme}>
      <ImageZoom
        cropWidth={deviceWidth}
        cropHeight={deviceHeight * 0.85}
        imageWidth={deviceWidth}
        imageHeight={deviceHeight * 0.85}
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
            {
              // render an array of points with an x and y coordinate, colors exist in meridia points data.
              // or, add coordinate data to meridian points data. No
            }
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

export const PointDepthFrontScreen = connect(mapStateToProps)(
  PointDepthFrontScreenComponent,
)
