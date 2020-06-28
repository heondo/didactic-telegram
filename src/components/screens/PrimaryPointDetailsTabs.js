import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabView, TabBar } from 'react-native-tab-view'
import { ThemeProvider } from 'styled-components/native'

import { PrimaryPointDetailsScreen } from './PrimaryPointDetailsScreen'

const RenderTabBar = (props) => {
  const { theme } = props
  return (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: theme.TAB_INDICATOR,
      }}
      style={{
        backgroundColor: theme.TAB_BACKGROUND,
      }}
    />
  )
}

function PrimaryPointDetailsTabComponent({ navigation, route, theme }) {
  const { pointID, points } = route.params
  const initialIndex = parseInt(pointID.split('-')[1], 0) - 1
  const [index, setIndex] = useState(initialIndex)
  const [routes] = useState(points.map((id) => ({ key: id, title: id })))

  const renderScene = ({ route }) => {
    return (
      <PrimaryPointDetailsScreen navigation={navigation} pointID={route.key} />
    )
  }

  const initialLayout = { width: Dimensions.get('window').width }

  return (
    <ThemeProvider theme={theme}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy={true}
        renderTabBar={(props) => (
          <RenderTabBar
            {...props}
            theme={theme}
            tabStyle={{ width: 'auto' }}
            scrollEnabled={true}
          />
        )}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PrimaryPointDetailsTabs = connect(mapStateToProps)(
  PrimaryPointDetailsTabComponent,
)
