import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { connect } from 'react-redux'
import SettingsListScreen from './SettingsListScreen'

const SettingsStack = createStackNavigator()

function SettingsStackScreen({ theme }) {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings List"
        component={SettingsListScreen}
        options={{
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
    </SettingsStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(SettingsStackScreen)
