import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { connect } from 'react-redux'
import MeridianTabScreen from './MeridianTabSreen'
import MeridianPointsList from './organisms/MeridianPointsList'

const MeridiansStack = createStackNavigator()

function MeridianStackScreen({ theme }) {
  return (
    <MeridiansStack.Navigator>
      <MeridiansStack.Screen
        name="Primary Meridians"
        component={MeridianTabScreen}
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
      <MeridiansStack.Screen
        name="Meridian Points"
        component={MeridianPointsList}
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
    </MeridiansStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianStackScreen)
