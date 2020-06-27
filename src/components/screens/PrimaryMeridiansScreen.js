import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList } from '../atoms'
import { MeridianListItem } from '../molecules'
import PRIMARY_MERIDIANS_DATA from '../../shared/data/primaryMeridiansData'

const PrimaryMeridiansScreenComponent = ({ navigation, theme }) => {
  const handleMeridianPress = (meridianID, name, points) => {
    // navigate to the list of meridian points and pass in the meridian ID and points
    navigation.navigate('Primary Meridian Points List', {
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
            points={item.points}
            handleMeridianPress={handleMeridianPress}
          />
        )}
        numColumns={2}
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

export const PrimaryMeridiansScreen = connect(mapStateToProps)(
  PrimaryMeridiansScreenComponent,
)
