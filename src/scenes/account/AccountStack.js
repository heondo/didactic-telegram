import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import AccountScreen from './AccountScreen'
import LoginScreen from './LoginScreen'
import { connect } from 'react-redux'

const AccountStack = createStackNavigator()

function AccountStackScreen({ theme }) {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        }}
      />
      <AccountStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </AccountStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(AccountStackScreen)
