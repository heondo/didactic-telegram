import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabView, TabBar } from 'react-native-tab-view'
import PrimaryMeridianList from './PrimaryMeridianList'
import { ThemeProvider } from 'styled-components/native'

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

function MeridianTabScreen({ navigation, theme }) {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'meridian', title: 'Primary' },
    { key: 'meridianExtras', title: 'Extras' },
  ])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'meridian':
        return <PrimaryMeridianList navigation={navigation} />
      case 'meridianExtras':
        // TODO: change this to the extra meridians, they will need different components
        return <PrimaryMeridianList navigation={navigation} />
      default:
        return null
    }
  }

  const initialLayout = { width: Dimensions.get('window').width }

  return (
    <ThemeProvider theme={theme}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => <RenderTabBar {...props} theme={theme} />}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianTabScreen)
