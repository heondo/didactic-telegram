import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import {
  MeridianImagesHomeScreen,
  MeridianPointsListScreen,
  PrimaryPointImagesTabs,
} from './screens'
import { MeridiansTitle } from './molecules'

const MeridianImagesScreenStack = createStackNavigator()
function MeridianImagesScreenTab({ theme, navigation }) {
  return (
    <MeridianImagesScreenStack.Navigator>
      <MeridianImagesScreenStack.Screen
        name="Primary Meridians List"
        component={MeridianImagesHomeScreen}
        options={{
          headerTitle: (props) => (
            <MeridiansTitle
              {...props}
              navigation={navigation}
              title="Meridians"
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
        name="Primary Meridian Points List"
        component={MeridianPointsListScreen}
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
        name="Primary Point Details"
        component={PrimaryPointImagesTabs}
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