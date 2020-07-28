import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  PointDepthHomeScreen,
  PointDepthFrontScreen,
  PointDepthColorScreen,
  PointDepthBackScreen,
  PointDepthSideScreen,
} from './screens'

const PointDepthScreenStack = createStackNavigator()

function PointDepthScreenTab({ theme }) {
  return (
    <PointDepthScreenStack.Navigator>
      <PointDepthScreenStack.Screen
        name="Point Depth Home Screen"
        component={PointDepthHomeScreen}
        options={{
          headerTitle: 'Point Depth',
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
      <PointDepthScreenStack.Screen
        name="Point Depth Front"
        component={PointDepthFrontScreen}
        options={{
          headerTitle: 'Front',
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
      <PointDepthScreenStack.Screen
        name="Point Depth Back"
        component={PointDepthBackScreen}
        options={{
          headerTitle: 'Back',
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
      <PointDepthScreenStack.Screen
        name="Point Depth Side"
        component={PointDepthSideScreen}
        options={{
          headerTitle: 'Side',
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
      <PointDepthScreenStack.Screen
        name="Point Depth Color"
        component={PointDepthColorScreen}
        options={{
          headerTitle: 'Color',
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
    </PointDepthScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(PointDepthScreenTab)
