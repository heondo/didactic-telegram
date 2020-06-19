import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { connect } from 'react-redux'
import MeridianTabScreen from './MeridianTabSreen'
import MeridianPointDetails from './MeridianPointDetails'
import MeridianPointsList from './MeridianPointsList'

const MeridiansStack = createStackNavigator()

function MeridianStackScreen({ theme }) {
  return (
    <MeridiansStack.Navigator>
      <MeridiansStack.Screen
        name="Primary Meridians"
        component={MeridianTabScreen}
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
      <MeridiansStack.Screen
        name="Meridian Points List"
        component={MeridianPointsList}
        options={({ route }) => ({
          title: route.params.headerName,
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
      <MeridiansStack.Screen
        name="Point Details"
        component={MeridianPointDetails}
        options={({ route }) => ({
          title: route.params.headerName,
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
    </MeridiansStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianStackScreen)
