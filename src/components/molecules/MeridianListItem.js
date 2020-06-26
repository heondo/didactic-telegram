import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Row, ListItemButton, ButtonText, EmptySpace } from '../atoms'

function MeridianListItemComponent({
  meridianID,
  title,
  points,
  goToPointsList,
  chinese,
  theme,
}) {
  const handlePress = () => {
    // navigation to Meridian Points, passing in the Meridian Name and the points
    // associated with the Meridian in an array form

    goToPointsList(title, points, `${title} ${chinese}`, meridianID)
  }

  return (
    <ThemeProvider theme={theme}>
      <ListItemButton onPress={handlePress}>
        <Row>
          <ButtonText mg="0 6px 0 0">{meridianID}:</ButtonText>
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

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)

MeridianListItemComponent.propTypes = {
  pointID: PropTypes.string,
  title: PropTypes.string,
  points: PropTypes.array,
  chinese: PropTypes.string,
  goToPointsList: PropTypes.func,
}
