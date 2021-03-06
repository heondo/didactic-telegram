import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { SettingsHomeScreen } from './screens'

const SettingsScreenStack = createStackNavigator()

function SettingsScreenTab({ theme }) {
  return (
    <SettingsScreenStack.Navigator>
      <SettingsScreenStack.Screen
        name="Settings Home Screen"
        component={SettingsHomeScreen}
        options={{
          headerTitle: 'Settings',
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        }}
      />
    </SettingsScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(SettingsScreenTab)
