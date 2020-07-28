import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Svg, { Image } from 'react-native-svg'

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
  return (
    <ThemeProvider theme={theme}>
      <Svg height="100%" width="100%">
        <Image
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          href={require('../../../shared/images/depth-images/front-core.png')}
          clipPath="url(#clip)"
        />
      </Svg>
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
