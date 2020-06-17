import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text } from './atoms'
import MeridianData from '../shared/meridian-data'
import { ThemeProvider } from 'styled-components'
import { MeridianListItem } from './molecules'

const PrimaryMeridianList = (props) => {
  return (
    <View>
      <FlatList
        data={MeridianData}
        renderItem={({ item }) => (
          <MeridianListItem
            title={item.english}
            id={item.id}
            points={item.points || []}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(PrimaryMeridianList)

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
