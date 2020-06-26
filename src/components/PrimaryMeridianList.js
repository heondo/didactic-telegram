import React from 'react'
import { connect } from 'react-redux'
import { FlatList, SafeAreaView } from './atoms'
import PrimaryMeridianData from '../shared/data/primary-meridian-data'
import { MeridianListItem } from './molecules'
import { ThemeProvider } from 'styled-components'

const PrimaryMeridianList = ({ navigation, theme }) => {
  const goToPointsList = (
    meridianTitle,
    meridianPointsArray,
    headerName,
    meridianID = null,
  ) => {
    navigation.navigate('Meridian Points List', {
      meridianTitle,
      meridianPointsArray,
      headerName,
      meridianID,
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <FlatList
        data={PrimaryMeridianData}
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
        renderItem={({ item }) => (
          // pass in a callback to navigate to ea MeridianPointsList page
          <MeridianListItem
            // TODO: this is where to customize the language for the whatever
            title={item.english}
            chinese={item.chinese}
            meridianID={item.meridianID}
            goToPointsList={goToPointsList}
            points={item.points || []}
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
