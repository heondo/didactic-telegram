import React, { useState } from 'react'
import { Dimensions, Text } from 'react-native'
import { connect } from 'react-redux'
import { TabView } from 'react-native-tab-view'
import PrimaryMeridianList from './PrimaryMeridianList'
import { ThemeProvider } from 'styled-components/native'

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
        return <Text>Extras</Text>
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
