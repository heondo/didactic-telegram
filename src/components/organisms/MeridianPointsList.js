import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { View, FlatList } from '../atoms'
import { MeridianPointListItem } from '../molecules'
import { ThemeProvider } from 'styled-components'

const MeridianPointsList = ({ theme, route }) => {
  const { meridianPointsArray } = route.params
  return (
    <ThemeProvider theme={theme}>
      <View>
        <FlatList
          data={meridianPointsArray}
          renderItem={({ item }) => (
            // pass in a callback to navigate to ea MeridianPointsList page
            <MeridianPointListItem
              title={item.english}
              chinese={item.name}
              id={item.id}
              points={item.points || []}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianPointsList)

MeridianPointsList.propTypes = {
  route: PropTypes.object,
  navigation: PropTypes.object,
}

// {
//   "chinese": "手太阴肺经",
//   "english": "Lung",
//   "id": "LU",
//   "korean": "수태음폐경",
//   "points": [
//     {
//       "english": "Middle Palace",
//       "id": "LU-1",
//       "korean": "jung bu 중부",
//       "name": "中府",
//       "pinyin": "zhōng fǔ",
//       "romaji": "chū fu",
//       "transliteration": "Zhongfu",
//       "vietnamese": "Trung phủ"
//   ],
//   "title": "Lung",
//   "viet": "Thủ thái âm phế"
// }
