import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  DetailsHomeScreen,
  DetailsPointsListScreen,
  DetailsPointsSwiperScreen,
} from './screens'

const DetailsHomeScreenStack = createStackNavigator()

function DetailsScreenTab({ theme, navigation }) {
  return (
    <DetailsHomeScreenStack.Navigator initialRouteName="Details Home Screen">
      <DetailsHomeScreenStack.Screen
        name="Details Home Screen"
        component={DetailsHomeScreen}
        options={{
          headerTitle: 'Details',
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
      <DetailsHomeScreenStack.Screen
        name="Details Points List"
        component={DetailsPointsListScreen}
        options={({ route }) => ({
          headerTitle: `${route.params.name} - ${route.params.chinese}`,
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
      <DetailsHomeScreenStack.Screen
        name="Details Points Swiper"
        component={DetailsPointsSwiperScreen}
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
    </DetailsHomeScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(DetailsScreenTab)
