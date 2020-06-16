import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'

import { MatCommIcon } from '../../components/atoms'
import AccountStackScreen from '../account/AccountStack'
import HomeScreen from '../home/HomeScreen'
import FirstLaunch from '../first-launch/FirstLaunch'
import { authSlice } from '../../state/auth/auth'
import HomeStackScreen from '../home/HomeStack'

const Tab = createBottomTabNavigator()

function StackNavigator({ theme, login, authState }) {
  const [hasBeenLaunched, setHasBeenLaunched] = useState(false)
  useEffect(() => {
    checkWasLaunched()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onAuthStateChanged = (user) => {
    const strippedDown = user
      ? {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }
      : null
    login({ user: strippedDown })
  }

  const checkWasLaunched = async () => {
    try {
      const wasLaunched = await AsyncStorage.getItem('wasLaunched')
      if (wasLaunched === null) {
        setHasBeenLaunched(false)
      }
      setHasBeenLaunched(true)
    } catch (err) {
      console.log(err)
    }
  }

  if (!hasBeenLaunched) {
    return <FirstLaunch setHasBeenLaunched={setHasBeenLaunched} />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: theme.BLACK,
          inactiveBackgroundColor: theme.BLACK,
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
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
          name="Account"
          component={AccountStackScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="account"
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

const mapStateToProps = ({ theme, auth: authState }) => {
  return {
    theme,
    authState,
  }
}

const mapDispatchToProps = {
  login: authSlice.actions.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(StackNavigator)
