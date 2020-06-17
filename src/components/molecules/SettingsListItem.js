import React from 'react'
import { ButtonText, Button, ListItem, Row } from '../atoms'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

export const SettingsListItemContainer = styled(Button)``

export function SettingsListItem(props) {
  const { title } = props
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <SettingsListItemContainer>
      <ListItem>
        <ButtonText>{title}</ButtonText>
      </ListItem>
    </SettingsListItemContainer>
  )
}

SettingsListItem.propTypes = {
  title: PropTypes.string,
}
