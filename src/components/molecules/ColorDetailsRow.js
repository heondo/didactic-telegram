import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { EmptySpace, Row, Text } from '../atoms'
import { CircleOrIcon } from './CircleOrIcon'
import { capitalize } from '../../utils'

function ColorDetailsRowComponent({ theme, color, colorCode, depth }) {
  return (
    <ThemeProvider theme={theme}>
      <Row mg="3px">
        <CircleOrIcon size={18} margin="0 6px 0 0" colorCode={colorCode} />
        <Text>{depth}</Text>
        <EmptySpace />
        <Text>{capitalize(color)}</Text>
      </Row>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

ColorDetailsRowComponent.propTypes = {
  colorCode: PropTypes.string,
  color: PropTypes.string,
  depth: PropTypes.string,
}

export const ColorDetailsRow = connect(mapStateToProps)(
  ColorDetailsRowComponent,
)
