import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { connect } from 'react-redux'
import { Text, SafeAreaView } from './atoms'

const HomeScreenStack = createStackNavigator()

const Hello = () => (
  <SafeAreaView>
    <Text>Hello</Text>
  </SafeAreaView>
)

function HomeScreenTab({ theme }) {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name="Home"
        component={Hello}
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
