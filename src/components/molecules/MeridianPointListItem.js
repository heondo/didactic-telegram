import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'

import { ButtonText, ListItemButton, Row, EmptySpace } from '../atoms'
import PropTypes from 'prop-types'

function MeridianPointListItemComponent({
  pointID,
  title,
  chinese,
  handlePointItemPress,
  theme,
}) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head

  // clicking this should go to the MeridianPointDetails, just send the id as the param
  const handlePress = () => {
    handlePointItemPress(pointID, `${pointID} - ${title}`)
  }

  return (
    <ThemeProvider theme={theme}>
      <ListItemButton onPress={handlePress}>
        <Row>
          <ButtonText mg="0 6px 0 0">{pointID}:</ButtonText>
          <ButtonText>{title}</ButtonText>
          <EmptySpace />
          <ButtonText>{chinese}</ButtonText>
        </Row>
      </ListItemButton>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const MeridianPointListItem = connect(mapStateToProps)(
  MeridianPointListItemComponent,
)

MeridianPointListItem.propTypes = {
  pointID: PropTypes.string,
  title: PropTypes.string,
  chinese: PropTypes.string,
}
