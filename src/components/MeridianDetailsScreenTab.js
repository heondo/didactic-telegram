import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  MeridianDetailsHomeScreen,
  MeridianDetailsPointsListScreen,
} from './screens'

const MeridianDetailsHomeScreenStack = createStackNavigator()

function BodyMapScreenTab({ theme, navigation }) {
  return (
    <MeridianDetailsHomeScreenStack.Navigator>
      <MeridianDetailsHomeScreenStack.Screen
        name="Details Home Screen"
        component={MeridianDetailsHomeScreen}
        options={{
          headerTitle: 'Meridian Details',
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
      <MeridianDetailsHomeScreenStack.Screen
        name="Meridian Details Points List"
        component={MeridianDetailsPointsListScreen}
        options={({ route }) => ({
          headerTitle: route.params.name,
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.PRIMARY_BACKGROUND_COLOR,
          },
          headerTitleStyle: {
            color: theme.PRIMARY_TEXT_COLOR,
          },
          headerTintColor: theme.PRIMARY_TEXT_COLOR,
        })}
      />
    </MeridianDetailsHomeScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(BodyMapScreenTab)
