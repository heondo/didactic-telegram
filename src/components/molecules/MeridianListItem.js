import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { Text, MeridianSquare, View, Image } from '../atoms'

function MeridianListItemComponent({
  meridianID,
  chinese,
  name,
  points,
  handleMeridianPress,
  theme,
}) {
  const handleButtonPress = () => {
    handleMeridianPress(meridianID, name, points)
  }
  return (
    <ThemeProvider theme={theme}>
      <View width="33%" pd="4px 8px">
        <MeridianSquare onPress={handleButtonPress}>
          <Image
            source={require('../../../public/images/generic-lung.jpg')}
            width="50px"
            height="50px"
            resizeMode="contain"
          />
          <Text>{meridianID}</Text>
          <Text fontSize="14px">{name}</Text>
          <Text>{chinese}</Text>
        </MeridianSquare>
      </View>
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
  points: PropTypes.array,
  handleMeridianPress: PropTypes.func,
}

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)
