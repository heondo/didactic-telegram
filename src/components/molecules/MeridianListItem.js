import React from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  MeridianSquareButton,
  View,
  EmptySpace,
  HeaderText,
  Image,
} from '../atoms'

function MeridianListItemComponent({
  meridianID,
  chinese,
  name,
  points,
  iconPath,
  handleMeridianPress,
  theme,
}) {
  const handleButtonPress = () => {
    handleMeridianPress(meridianID, name, points)
  }
  return (
    <ThemeProvider theme={theme}>
      <View
        width="33.3%"
        height={`${Dimensions.get('screen').height / 5.5}px`}
        pd="4px 6px">
        <MeridianSquareButton
          onPress={handleButtonPress}
          height="100%"
          pd="12px 0">
          <HeaderText fontSize="28px">{meridianID}</HeaderText>
          <EmptySpace />
          {iconPath ? (
            <Image source={iconPath} height="28px" resizeMode="contain" />
          ) : null}
          <EmptySpace />
          <Text fontSize="14px">{name}</Text>
          <Text>{chinese}</Text>
        </MeridianSquareButton>
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
  iconPath: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
}

export const MeridianListItem = connect(mapStateToProps)(
  MeridianListItemComponent,
)
