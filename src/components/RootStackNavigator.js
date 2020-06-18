import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'

import { MatCommIcon, MatIcon } from './atoms'
import { authSlice } from '../state/auth/slice'
import MeridiansStackScreen from './MeridiansStackScreen'
import SettingsStackScreen from './SettingsStackScreen'

const Tab = createBottomTabNavigator()

function RootStackNavigator({ theme, login, authState }) {
  // do i put logic here. If authState.loggedIn
  const [initializing, setInitializing] = useState(true)
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onAuthStateChanged = (user) => {
    console.log(user)
    const strippedDown = user
      ? {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }
      : null
    if (initializing) {
      setInitializing(false)
    }
    if (user) {
      login({ user: strippedDown })
    }
  }

  if (initializing) {
    return null
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: theme.BLACK,
          inactiveBackgroundColor: theme.BLACK,
          activeTintColor: theme.WHITE,
          inactiveTintColor: theme.GREY,
          showLabel: true,
        }}>
        <Tab.Screen
          name="Meridians"
          component={MeridiansStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="view-list"
                color={focused ? theme.WHITE : theme.GREY}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatIcon
                name="settings"
                color={focused ? theme.WHITE : theme.GREY}
                size={25}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

const mapDispatchToProps = {
  login: authSlice.actions.login,
}

RootStackNavigator.propTypes = {
  theme: PropTypes.object,
  auth: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(RootStackNavigator)
