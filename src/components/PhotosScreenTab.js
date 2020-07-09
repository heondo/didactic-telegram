import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  PhotosHomeScreen,
  PhotosPointsListScreen,
  PhotosPointsSwiperScreen,
} from './screens'

const PhotosScreenStack = createStackNavigator()

function PhotosScreenTab({ theme, navigation }) {
  return (
    <PhotosScreenStack.Navigator initialRouteName="Photos Home Screen">
      <PhotosScreenStack.Screen
        name="Photos Home Screen"
        component={PhotosHomeScreen}
        options={{
          headerTitle: 'Photos',
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
      <PhotosScreenStack.Screen
        name="Photos Points List"
        component={PhotosPointsListScreen}
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
      <PhotosScreenStack.Screen
        name="Photos Points Swiper"
        component={PhotosPointsSwiperScreen}
        options={{
          headerShown: false,
        }}
      />
    </PhotosScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(PhotosScreenTab)
