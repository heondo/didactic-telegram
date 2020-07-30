import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { EmptySpace, MatCommIcon, Row, Text } from '../atoms'
import { CircleOrIcon } from './CircleOrIcon'
import { capitalize } from '../../utils'

function ColorDetailsRowComponent({ theme, color, colorCode, depth }) {
  return (
    <ThemeProvider theme={theme}>
      <Row>
        <CircleOrIcon colorCode={colorCode} />
        <EmptySpace />
        <Text>{capitalize(color)} </Text>
        <Text>{depth}</Text>
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
