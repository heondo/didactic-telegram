import React from 'react'
import { Text, Button } from '../atoms'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export const MeridianPointListItemContainer = styled(Button)``

export function MeridianPointListItem({ id, title }) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <MeridianPointListItemContainer>
      <Text>{id}</Text>
      <Text>{title}</Text>
    </MeridianPointListItemContainer>
  )
}

MeridianPointListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
}
