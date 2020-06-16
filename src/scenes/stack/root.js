import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import auth from '@react-native-firebase/auth'

import { MatCommIcon } from '../../components/atoms'
import AccountStackScreen from '../account/AccountStack'
import HomeScreen from '../home/HomeScreen'
import FirstLaunch from '../first-launch/FirstLaunch'
import { authSlice } from '../../state/auth/auth'
import HomeStackScreen from '../home/HomeStack'

const Tab = createBottomTabNavigator()

function StackNavigator({ theme, login, authState }) {
  useEffect(() => {
    // _isFirstLaunch()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged(user) {
    // console.log(user)
    const strippedDown = user
      ? {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        }
      : {}
    login({ user: strippedDown })
  }

  // const _isFirstLaunch = async () => {
  //   try {
  //     const wasLaunched = await AsyncStorage.getItem('wasLaunched')
  //     if (wasLaunched !== null) {
  //       setHasBeenLaunched(true)
  //     }
  //     setHasBeenLaunched(false)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  if (!authState?.displayName) {
    return <FirstLaunch />
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
