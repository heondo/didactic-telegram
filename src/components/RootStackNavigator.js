import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-community/async-storage'

import { MatCommIcon, MatIcon } from './atoms'
import { thunkLogin } from '../state/auth/slice'
import MemoryScreenTab from './MemoryScreenTab'
import SettingsScreenTab from './SettingsScreenTab'
import PointDepthScreenTab from './PointDepthScreenTab'
import DetailsScreenTab from './DetailsScreenTab'
import SearchScreenTab from './SearchScreenTab'
import { toggleTheme } from '../state/theme/slice'
import { IntroSwiperScreen } from './screens'

const Tab = createBottomTabNavigator()

function RootStackNavigator({ theme, toggleTheme }) {
  const dispatch = useDispatch()

  const [initializing, setInitializing] = useState(true)
  const [loadingTheme, setLoadingTheme] = useState(true)
  const [firstLaunch, setFirstLaunch] = useState(false)

  const setAlreadyLaunched = async () => {
    await AsyncStorage.setItem('wasLaunched', 'true')
    setFirstLaunch(false)
  }

  useEffect(() => {
    const getWasLaunched = async () => {
      const wasAlreadyLaunched = await AsyncStorage.getItem('wasLaunched')
      if (wasAlreadyLaunched !== 'true') {
        setFirstLaunch(true)
      }
    }
    const getThemeMode = async () => {
      try {
        const themeMode = await AsyncStorage.getItem('themeMode')
        if (themeMode === 'light') {
          toggleTheme()
        }
        setLoadingTheme(false)
      } catch (err) {
        console.error(err)
      }
    }
    getThemeMode()
    getWasLaunched()
    const onAuthStateChanged = (user) => {
      const strippedDown = user
        ? {
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            signUpDate: user.metadata.creationTime,
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
  }, [])

  if (initializing || loadingTheme) {
    return null
  }

  if (firstLaunch) {
    return <IntroSwiperScreen handleCloseTutorial={setAlreadyLaunched} />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        lazy={false}
        tabBarOptions={{
          style: { height: '7.5%' },
          activeBackgroundColor: theme.BLACK,
          inactiveBackgroundColor: theme.BLACK,
          activeTintColor: theme.WHITE,
          inactiveTintColor: theme.GREY,
          showLabel: true,
        }}>
        <Tab.Screen
          name="Road Memory"
          component={MemoryScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="image"
                color={focused ? theme.WHITE : theme.GREY}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Point Depth"
          component={PointDepthScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="map"
                color={focused ? theme.WHITE : theme.GREY}
                size={30}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Details"
          component={DetailsScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="book-open-outline"
                color={focused ? theme.WHITE : theme.GREY}
                size={28}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatIcon
                name="search"
                color={focused ? theme.WHITE : theme.GREY}
                size={30}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatIcon
                name="settings"
                color={focused ? theme.WHITE : theme.GREY}
                size={30}
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

export default connect(mapStateToProps, { toggleTheme })(RootStackNavigator)
