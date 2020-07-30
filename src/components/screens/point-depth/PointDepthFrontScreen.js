import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { ImageZoomBody } from '../../molecules'

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
      <ImageZoomBody side="front" />
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
