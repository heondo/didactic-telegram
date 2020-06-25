import React from 'react'
import { Switch } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Row,
  EmptySpace,
  Button,
  ButtonText,
  ProfileBannerContainer,
  Div,
  Image,
  MatIcon,
  MatCommIcon,
  TransparentButton,
} from './atoms'
import { toggleTheme } from '../state/theme/slice'
import { authStartLoading } from '../state/auth/slice'
import { ThemeProvider } from 'styled-components'
import { ProfileBanner, LoadingOverlay } from './molecules'
import firebaseService from '../services/firebase'

// no need for fancy settings pages just yet. Just a simple dark theme, sign in and sign out feature.

const SettingsListScreen = ({
  theme,
  authState,
  toggleTheme,
  userImages,
  authStartLoading,
}) => {
  const onGoogleButtonPress = async () => {
    try {
      authStartLoading()
      await firebaseService.login()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {authState.isLoading ? <LoadingOverlay /> : null}
      <View>
        {/* <Text>
          TODO: need to change this not logged in or out component into its own file
        */}
        {authState.loggedIn ? (
          <ProfileBanner />
        ) : (
          <>
            <Div>
              <Image
                source={require('../../public/images/backdrop-sample.png')}
                resizeMode="cover"
              />
              <ProfileBannerContainer>
                {/* <ProfileImage source={{ uri: authState.photoURL }} mg="0 12px" /> */}
                <TransparentButton onPress={onGoogleButtonPress}>
                  <Row>
                    <MatCommIcon name="google" size={24} />
                    <ButtonText mg="4px 6px" fontSize="24px">
                      - SIGN IN
                    </ButtonText>
                  </Row>
                </TransparentButton>
              </ProfileBannerContainer>
            </Div>
          </>
        )}
        {/* </Text> */}
        <EmptySpace />
        <Row mg="4px 0">
          <Text>
            {theme.mode === 'light' ? 'Enable' : 'Disable'} Dark Theme
          </Text>
          <Switch
            trackColor={{ false: theme.aurora2, true: theme.aurora3 }}
            thumbColor={
              theme.mode === 'light' ? theme.frost3 : theme.snowStorm0
            }
            onValueChange={toggleTheme}
            value={theme.mode !== 'light'}
          />
        </Row>
      </View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, authState, userImages }) => {
  return {
    theme,
    authState,
    userImages,
  }
}

export default connect(mapStateToProps, {
  toggleTheme,
  authStartLoading,
})(SettingsListScreen)

SettingsListScreen.propTypes = {
  theme: PropTypes.object,
  navigation: PropTypes.object,
}
