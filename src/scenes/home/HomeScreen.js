import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabView, SceneMap } from 'react-native-tab-view'
import { ThemeProvider } from 'styled-components/native'
import MeridianRoute from './points/MeridianList'
import MeridianExtraRoute from './points/MerdiaianExtraList'

function HomeScreen({ navigation, theme }) {
  // const [accountState, setAccountState] = useState<string | null>(null)
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'meridian', title: 'Primary' },
    { key: 'meridianExtras', title: 'Extras' },
  ])

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'meridian':
        return <MeridianRoute navigation={navigation} />
      case 'meridianExtras':
        return <MeridianExtraRoute navigation={navigation} />
      default:
        return null
    }
  }
  // SceneMap({
  //   meridian: MeridianRoute,
  //   meridianExtras: MeridianExtraRoute,
  // })

  const initialLayout = { width: Dimensions.get('window').width }

  return (
    <ThemeProvider theme={theme}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(HomeScreen)
