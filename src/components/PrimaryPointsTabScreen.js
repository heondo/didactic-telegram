import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabView, TabBar } from 'react-native-tab-view'
// import PrimaryMeridianList from './PrimaryMeridianList'
import { ThemeProvider } from 'styled-components/native'
import { Text } from './atoms'
import MeridianPointDetails from './MeridianPointDetails'

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

function PrimaryPointsTabScreen({ navigation, theme, route }) {
  const { meridianPointsArray } = route.params

  const pointsToRoutes = meridianPointsArray.map((p) => ({
    key: p.pointID,
    title: p.pointID,
  }))

  const [index, setIndex] = useState(0)
  const [routes] = useState(pointsToRoutes)

  const renderScene = ({ route }) => {
    return <MeridianPointDetails pointID={route.key} />
  }

  //   const initialLayout = { width: Dimensions.get('window').width }

  return (
    <ThemeProvider theme={theme}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        // initialLayout={initialLayout}
        lazy={true}
        renderTabBar={(props) => (
          <RenderTabBar
            {...props}
            theme={theme}
            scrollEnabled={true}
            tabStyle={{ width: 'auto' }}
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

export default connect(mapStateToProps)(PrimaryPointsTabScreen)
