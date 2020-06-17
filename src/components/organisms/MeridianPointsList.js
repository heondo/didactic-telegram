import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text } from '../atoms'

const MeridianPointsList = ({ route, navigation }) => {
  return (
    <View>
      <Text>This is the list of points of a specific meridian</Text>
      <Text>{JSON.stringify(route.params.meridianPointsArray)}</Text>
    </View>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianPointsList)

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
