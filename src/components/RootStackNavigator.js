import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'

import { MatCommIcon } from './atoms'
import HomeScreenTab from './HomeScreenTab'
import SettingsScreen from './SettingsScreenTab'
import { thunkLogin } from '../state/auth/slice'

const Tab = createBottomTabNavigator()

function RootStackNavigator({ theme, authState }) {
  const dispatch = useDispatch()

  const [initializing, setInitializing] = useState(true)
  useEffect(() => {
    const onAuthStateChanged = (user) => {
      const strippedDown = user
        ? {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
          }
        : null
      if (initializing) {
        setInitializing(false)
      }
      if (user) {
        dispatch(thunkLogin(strippedDown))
      }
    }

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

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
          name="Home"
          component={HomeScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="home"
                color={focused ? theme.WHITE : theme.GREY}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
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

RootStackNavigator.propTypes = {
  theme: PropTypes.object,
  auth: PropTypes.object,
}

export default connect(mapStateToProps)(RootStackNavigator)
