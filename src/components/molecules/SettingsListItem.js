import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

import { ButtonText, Button, ListItem } from '../atoms'

const SettingsListItemContainer = styled(Button)``

function SettingsListItemComponent({ title, theme }) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <ThemeProvider theme={theme}>
      <SettingsListItemContainer>
        <ListItem>
          <ButtonText>{title}</ButtonText>
        </ListItem>
      </SettingsListItemContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const SettingsListItem = connect(mapStateToProps)(
  SettingsListItemContainer,
)

SettingsListItemComponent.propTypes = {
  title: PropTypes.string,
}
