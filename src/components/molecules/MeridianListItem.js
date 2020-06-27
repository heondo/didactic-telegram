import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { Text, Row, EmptySpace } from '../atoms'

function MeridianListItemComponent({ theme, meridianID, chinese, name }) {
  return (
    <ThemeProvider theme={theme}>
      <Row>
        <Text>{meridianID} - </Text>
        <Text>{name}</Text>
        <EmptySpace />
        <Text>{chinese}</Text>
      </Row>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

MeridianListItemComponent.propTypes = {
  meridianID: PropTypes.string,
  chinese: PropTypes.string,
  english: PropTypes.string,
}

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)
