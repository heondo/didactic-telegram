import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { Text, Button, View, Image, Row } from '../atoms'

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
      <View width="50%" pd="4px 20px">
        <Button onPress={handleButtonPress}>
          <Image
            source={require('../../../public/images/generic-lung.jpg')}
            width="50px"
            height="50px"
            resizeMode="contain"
          />
          <Text>{meridianID}</Text>
          <Text>{name}</Text>
          <Text>{chinese}</Text>
        </Button>
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
