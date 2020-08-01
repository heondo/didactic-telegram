import React from 'react'
import { connect } from 'react-redux'
import { Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import Svg, { Image, G, Circle } from 'react-native-svg'
import ImageZoom from 'react-native-image-pan-zoom'
import svgPointsData from '../../shared/data/svgPointsData'

const ImageZoomBodyComponent = ({ theme, side }) => {
  // biggest features
  /**
   * 1. image of "side"
   * 2. array of images with to include and plot
   * 3. Button to filter/toggle which points to display? (which ones)
   *    3.a. Meridian Group, Color Code/Depth
   * 4. I need to add gesture handlers to this, and move the image around and change the scaling as i do so?
   * 4. Click each point and view...details?
   */

  const { imageSource, points } = svgPointsData[side]

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
        maxScale={2.5}>
        <Svg height="100%" width="100%">
          <G>
            <Image
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid"
              href={imageSource}
              clipPath="url(#clip)"
            />
            {
              // render an array of points with an x and y coordinate, colors exist in meridia points data.
              // or, add coordinate data to meridian points data. No
              points.map((p) => (
                <Circle key={p.pointID} cx={p.x} cy={p.y} r={10} fill="red" />
              ))
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

ImageZoomBodyComponent.propTypes = {
  side: PropTypes.oneOf(['front', 'back', 'side']),
}

export const ImageZoomBody = connect(mapStateToProps)(ImageZoomBodyComponent)
