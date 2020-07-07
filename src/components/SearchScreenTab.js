import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { connect } from 'react-redux'

import { SearchHomeScreen } from './screens'

const SearchScreenStack = createStackNavigator()

function SearchScreenTab({ theme, navigation }) {
  return (
    <SearchScreenStack.Navigator>
      <SearchScreenStack.Screen
        name="Search Screen"
        component={SearchHomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </SearchScreenStack.Navigator>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(SearchScreenTab)
