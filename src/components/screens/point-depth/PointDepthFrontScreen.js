import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Svg, { Image } from 'react-native-svg'

const PointDepthFrontScreenComponent = ({ navigation, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <Svg height="100%" width="100%">
        <Image
          // x="5%"
          // y="5%"
          width="100%"
          height="100%"
          // preserveAspectRatio="xMidYMid slice"
          // opacity="0.5"
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
