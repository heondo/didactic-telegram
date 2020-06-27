import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabView, TabBar } from 'react-native-tab-view'
import { ThemeProvider } from 'styled-components/native'
import { View } from '../atoms'

const FirstRoute = () => <View />

const SecondRoute = () => <View />

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

function PrimaryPointDetailsTabComponent({ navigation, theme }) {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'meridian', title: 'Primary' },
    { key: 'meridianExtras', title: 'Extras' },
  ])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'meridian':
        return <FirstRoute navigation={navigation} />
      case 'meridianExtras':
        // TODO: change this to the extra meridians, they will need different components
        return <SecondRoute navigation={navigation} />
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

export const PrimaryPointDetailsTabs = connect(mapStateToProps)(
  PrimaryPointDetailsTabComponent,
)
