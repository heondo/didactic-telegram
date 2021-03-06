import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList } from '../../atoms'
import { MeridianPointListItem } from '../../molecules'

const DetailsPointsListScreenComponent = ({ navigation, theme, route }) => {
  const { points } = route.params

  const handlePointPress = (pointID) => {
    navigation.navigate('Details Points Swiper', {
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

export const DetailsPointsListScreen = connect(mapStateToProps)(
  DetailsPointsListScreenComponent,
)
