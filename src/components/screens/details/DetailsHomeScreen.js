import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList, Text } from '../../atoms'
import { MeridianListItem } from '../../molecules'
import PRIMARY_MERIDIANS_DATA from '../../../shared/data/primaryMeridiansData'

const DetailsHomeScreenComponent = ({ navigation, theme }) => {
  const handleMeridianPress = (meridianID, name, points) => {
    // navigate to the list of meridian points and pass in the meridian ID and points
    navigation.navigate('Details Points List', {
      meridianID,
      name,
      points,
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={PRIMARY_MERIDIANS_DATA}
        renderItem={({ item }) => (
          <MeridianListItem
            meridianID={item.meridianID}
            name={item.english}
            chinese={item.chinese}
            iconPath={item.iconPath}
            points={item.points}
            handleMeridianPress={handleMeridianPress}
          />
        )}
        numColumns={3}
        horizontal={false}
        keyExtractor={(item) => item.meridianID}
      />
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export const DetailsHomeScreen = connect(mapStateToProps)(
  DetailsHomeScreenComponent,
)