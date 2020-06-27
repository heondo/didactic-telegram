import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList } from '../atoms'
import { MeridianPointListItem } from '../molecules'

const PrimaryMeridianPointsScreenComponent = ({ navigation, theme, route }) => {
  const { meridianID, points } = route.params

  const handlePointPress = (pointID) => {
    navigation.navigate('Primary Point Details', {
      pointID,
    })
  }
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={points}
        renderItem={({ item }) => (
          <MeridianPointListItem
            pointID={item}
            handlePointPress={handlePointPress}
          />
        )}
        keyExtractor={(item) => item}
      />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const PrimaryMeridianPointsScreen = connect(mapStateToProps)(
  PrimaryMeridianPointsScreenComponent,
)
