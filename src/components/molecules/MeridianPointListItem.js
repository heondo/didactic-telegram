import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { Text, TransparentButton, Row, EmptySpace } from '../atoms'
import { CircleOrTriangle } from './CircleOrTriangle'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

function MeridianPointListItemComponent({ pointID, handlePointPress, theme }) {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  const handleButtonPress = () => {
    handlePointPress(pointID)
  }
  return (
    <ThemeProvider theme={theme}>
      <TransparentButton
        onPress={handleButtonPress}
        mg="0"
        pd="8px 6px"
        width="100%">
        <Row>
          <CircleOrTriangle colorCode={pointData.colorCode} marginRight="8px" />
          <Text fontSize="18px" mg="0 4px 0 0">
            {pointID}
          </Text>
          <Text fontSize="18px">{pointData.english}</Text>
          <EmptySpace />
          <Text fontSize="18px">{pointData.name}</Text>
        </Row>
      </TransparentButton>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

MeridianPointListItemComponent.propTypes = {
  pointID: PropTypes.string,
  handlePointPress: PropTypes.func,
}

export const MeridianPointListItem = connect(mapStateToProps)(
  MeridianPointListItemComponent,
)
