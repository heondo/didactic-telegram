import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { connect } from 'react-redux'

import { MatCommIcon } from './atoms'
import MeridiansStack from './MeridiansStackScreen'

const Tab = createBottomTabNavigator()

function RootStackNavigator({ theme }) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: theme.BLACK,
          inactiveBackgroundColor: theme.BLACK,
          showLabel: false,
        }}>
        <Tab.Screen
          name="Meridians"
          component={MeridiansStack}
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
export default connect(mapStateToProps)(RootStackNavigator)
