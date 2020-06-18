import React from 'react'
import { Row, Button, ListItem, ButtonText, EmptySpace } from '../atoms'
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
    goToPointsList(title, points, `${title} ${chinese}`)
  }

  return (
    <MeridianListItemContainer onPress={handlePress}>
      <ListItem>
        <Row>
          <ButtonText mg="0 4px 0 0">{id}:</ButtonText>
          <ButtonText>{title}</ButtonText>
        </Row>
        <EmptySpace />
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
