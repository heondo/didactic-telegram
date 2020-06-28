import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  PrimaryMeridiansScreen,
  PrimaryMeridianPointsScreen,
  PrimaryPointDetailsTabs,
} from './screens'

const HomeScreenStack = createStackNavigator()
function HomeScreenTab({ theme, navigation }) {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Primary Meridians List"
        component={PrimaryMeridiansScreen}
        options={{
          headerTitle: 'Meridians',
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
      <HomeScreenStack.Screen
        name="Primary Meridian Points List"
        component={PrimaryMeridianPointsScreen}
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
      <HomeScreenStack.Screen
        name="Primary Point Details"
        component={PrimaryPointDetailsTabs}
        options={({ route }) => ({
          headerShown: false,
        })}
      />
    </HomeScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(HomeScreenTab)
