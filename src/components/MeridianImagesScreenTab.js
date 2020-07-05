import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  ImagesHomeScreen,
  ImagesPointsListScreen,
  ImagesPointsSwiperScreen,
} from './screens'
import { ImagesHomeTitle } from './molecules'

const MeridianImagesScreenStack = createStackNavigator()
function MeridianImagesScreenTab({ theme, navigation }) {
  return (
    <MeridianImagesScreenStack.Navigator>
      <MeridianImagesScreenStack.Screen
        name="Images Home Screen"
        component={ImagesHomeScreen}
        options={{
          headerTitle: (props) => (
            <ImagesHomeTitle
              {...props}
              navigation={navigation}
              title="Images"
            />
          ),
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
      <MeridianImagesScreenStack.Screen
        name="Images Points List"
        component={ImagesPointsListScreen}
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
      <MeridianImagesScreenStack.Screen
        name="Images Points Swiper"
        component={ImagesPointsSwiperScreen}
        options={{
          headerShown: false,
        }}
      />
    </MeridianImagesScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianImagesScreenTab)
