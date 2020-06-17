import React from 'react'
import { Text, Button } from '../atoms'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export const MeridianListItemContainer = styled(Button)``

export function MeridianListItem({ id, title, points, goToPointsList }) {
  const handlePress = () => {
    goToPointsList(title, points)
  }

  return (
    <MeridianListItemContainer onPress={handlePress}>
      <Text>{id}</Text>
      <Text>{title}</Text>
    </MeridianListItemContainer>
  )
}

MeridianListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  points: PropTypes.array,
  goToPointsList: PropTypes.func,
}
