import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './HomeScreen'
import MeridianSublist from './points/MeridianSublist'
// import LoginScreen from './LoginScreen'
import { connect } from 'react-redux'

const HomeStack = createStackNavigator()

function HomeStackScreen({ theme }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        }}
      />
      <HomeStack.Screen
        name="Meridian Points List"
        component={MeridianSublist}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        }}
      />
    </HomeStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(HomeStackScreen)
