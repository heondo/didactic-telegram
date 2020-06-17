import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { MatCommIcon, MatIcon } from './atoms'
import MeridiansStackScreen from './MeridiansStackScreen'
import SettingsStackScreen from './SettingsStackScreen'

const Tab = createBottomTabNavigator()

function RootStackNavigator({ theme }) {
  // do i put logic here. If authState.loggedIn
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

const mapStateToProps = ({ theme, auth: authState }) => {
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
