import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { FlatList } from '../atoms'
import { MeridianListItem } from '../molecules'
import PRIMARY_MERIDIANS_DATA from '../../shared/data/primaryMeridiansData'

const PrimaryMeridiansScreen = ({ navigation, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={PRIMARY_MERIDIANS_DATA}
        renderItem={({ item }) => (
          <MeridianListItem
            meridianID={item.meridianID}
            name={item.english}
            chinese={item.chinese}
          />
        )}
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

export default connect(mapStateToProps)(PrimaryMeridiansScreen)
