import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { PointDepthHomeScreen } from './screens'

const PointDepthScreenStack = createStackNavigator()

function PointDepthScreenTab({ theme, navigation }) {
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
    </PointDepthScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(PointDepthScreenTab)
