import React from 'react'
import { Row, Text, Button, ListItem, ButtonText } from '../atoms'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export const MeridianListItemContainer = styled(Button)``

export function MeridianListItem({
  id,
  title,
  points,
  goToPointsList,
  chinese,
}) {
  const handlePress = () => {
    // navigation to Meridian Points, passing in the Meridian Name and the points
    // associated with the Meridian in an array form
    goToPointsList(title, points)
  }

  return (
    <MeridianListItemContainer onPress={handlePress}>
      <ListItem>
        <Row>
          <ButtonText>{id}:</ButtonText>
          <ButtonText>{title}</ButtonText>
        </Row>
        <ButtonText>{chinese}</ButtonText>
      </ListItem>
    </MeridianListItemContainer>
  )
}

MeridianListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  points: PropTypes.array,
  chinese: PropTypes.string,
  goToPointsList: PropTypes.func,
}
