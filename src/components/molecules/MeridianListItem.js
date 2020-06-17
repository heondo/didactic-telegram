import React from 'react'
import { CodeText, Row, Text, Button, ListItem } from '../atoms'
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
          <CodeText>{id}:</CodeText>
          <Text>{title}</Text>
        </Row>
        <Text>{chinese}</Text>
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
