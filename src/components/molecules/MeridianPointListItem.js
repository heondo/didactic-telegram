import React from 'react'
import { ButtonText, Button, ListItem, Row, EmptySpace } from '../atoms'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export const MeridianPointListItemContainer = styled(Button)``

export function MeridianPointListItem({
  pointID,
  title,
  chinese,
  handlePointItemPress,
}) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head

  // clicking this should go to the MeridianPointDetails, just send the id as the param
  const handlePress = () => {
    handlePointItemPress(pointID, `${pointID} - ${title}`)
  }

  return (
    <MeridianPointListItemContainer mg="4px 0" onPress={handlePress}>
      <ListItem>
        <Row>
          <ButtonText mg="0 4px 0 0">{pointID}:</ButtonText>
          <ButtonText>{title}</ButtonText>
        </Row>
        <EmptySpace />
        <ButtonText>{chinese}</ButtonText>
      </ListItem>
    </MeridianPointListItemContainer>
  )
}

MeridianPointListItem.propTypes = {
  pointID: PropTypes.string,
  title: PropTypes.string,
  chinese: PropTypes.string,
}
