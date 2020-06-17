import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from './atoms'
import { SettingsListItem } from './molecules/SettingsListItem'

const SettingsListScreen = ({ navigation }) => {
  return (
    <View>
      <SettingsListItem title="Change Theme" />
    </View>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(SettingsListScreen)

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
