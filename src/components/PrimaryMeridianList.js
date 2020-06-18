import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList } from './atoms'
import MeridianData from '../shared/meridian-data'
import { MeridianListItem } from './molecules'

const PrimaryMeridianList = ({ navigation }) => {
  const goToPointsList = (meridianTitle, meridianPointsArray, headerName) => {
    navigation.navigate('Meridian Points List', {
      meridianTitle,
      meridianPointsArray,
      headerName,
    })
  }

  return (
    <View>
      <FlatList
        data={MeridianData}
        renderItem={({ item }) => (
          // pass in a callback to navigate to ea MeridianPointsList page
          <MeridianListItem
            title={item.english}
            chinese={item.chinese}
            id={item.id}
            goToPointsList={goToPointsList}
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
