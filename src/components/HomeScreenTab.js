import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import PrimaryMeridiansScreen from './screens/PrimaryMeridiansScreen'

const HomeScreenStack = createStackNavigator()
function HomeScreenTab({ theme }) {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={PrimaryMeridiansScreen}
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
    </HomeScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(HomeScreenTab)
