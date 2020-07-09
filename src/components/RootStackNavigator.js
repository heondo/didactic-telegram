import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PropTypes from 'prop-types'
import auth from '@react-native-firebase/auth'

import { MatCommIcon, MatIcon } from './atoms'
import { thunkLogin } from '../state/auth/slice'
import PhotosScreenTab from './PhotosScreenTab'
import SettingsScreenTab from './SettingsScreenTab'
import BodyMapScreenTab from './BodyMapScreenTab'
import DetailsScreenTab from './DetailsScreenTab'
import SearchScreenTab from './SearchScreenTab'

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
  }, [])

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
          name="Photos"
          component={PhotosScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="image"
                color={focused ? theme.WHITE : theme.GREY}
                size={25}
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
                size={25}
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
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Body Map"
          component={BodyMapScreenTab}
          options={{
            tabBarIcon: ({ focused }) => (
              <MatCommIcon
                name="map"
                color={focused ? theme.WHITE : theme.GREY}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreenTab}
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
