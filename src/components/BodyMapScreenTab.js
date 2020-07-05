import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { BodyMapHomeScreen } from './screens'

const BodyMapScreenStack = createStackNavigator()

function BodyMapScreenTab({ theme, navigation }) {
  return (
    <BodyMapScreenStack.Navigator>
      <BodyMapScreenStack.Screen
        name="Body Map"
        component={BodyMapHomeScreen}
        options={{
          headerTitle: 'Body Map',
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
    </BodyMapScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(BodyMapScreenTab)
