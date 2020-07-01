import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { Text, TransparentButton, View, Row, EmptySpace } from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'

function MeridianPointListItemComponent({ pointID, handlePointPress, theme }) {
  const pointData = MERIDIAN_POINTS_DATA[pointID]

  const handleButtonPress = () => {
    handlePointPress(pointID)
  }
  return (
    <ThemeProvider theme={theme}>
      <TransparentButton onPress={handleButtonPress} mg="0" pd="6px">
        <Row>
          <Text mg="0 4px 0 0">{pointID}</Text>
          <Text>{pointData.english}</Text>
          <EmptySpace />
          <Text>{pointData.name}</Text>
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
