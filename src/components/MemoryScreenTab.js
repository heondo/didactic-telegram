import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  MemoryHomeScreen,
  MemoryPointsListScreen,
  MemoryPointsSwiperScreen,
} from './screens'

const MemoryScreenStack = createStackNavigator()

function MemoryScreenTab({ theme, navigation }) {
  return (
    <MemoryScreenStack.Navigator initialRouteName="Memory Home Screen">
      <MemoryScreenStack.Screen
        name="Memory Home Screen"
        component={MemoryHomeScreen}
        options={{
          headerTitle: 'Memory',
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
      <MemoryScreenStack.Screen
        name="Memory Points List"
        component={MemoryPointsListScreen}
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
      <MemoryScreenStack.Screen
        name="Memory Points Swiper"
        component={MemoryPointsSwiperScreen}
        options={{
          headerShown: false,
        }}
      />
    </MemoryScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MemoryScreenTab)
