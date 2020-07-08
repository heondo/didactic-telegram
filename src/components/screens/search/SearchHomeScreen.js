import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { CommonActions } from '@react-navigation/native'

import {
  FlatList,
  SafeAreaView,
  Row,
  SearchInput,
  MatIcon,
  TransparentButton,
  EmptySpace,
} from '../../atoms'
import { SearchResultsListItem } from '../../molecules'
import MERIDIAN_POINTS_DATA from '../../../shared/data/meridianPointsData'

const SearchHomeScreenComponent = ({ navigation, theme, userImages }) => {
  const meridianPointsArray = Object.entries(MERIDIAN_POINTS_DATA)
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChangeText = (text) => {
    const lowerInput = text.toLowerCase().trim()
    if (!lowerInput) {
      setSearchText('')
      setSearchResults([])
      return
    }
    const filteredResults = filterPoints(lowerInput)
    setSearchResults(filteredResults)
    setSearchText(text)
  }

  const goToImagesScreen = (pointID) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Photos' }],
      }),
    )
    navigation.navigate('Images Points Swiper', { pointID })
  }

  const goToDetailsScreen = (pointID) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Details' }],
      }),
    )
    navigation.navigate('Details Points Swiper', { pointID })
  }

  const filterPoints = (lowerText) =>
    meridianPointsArray.filter((entry) => {
      const [pointID, pointData] = entry
      const usersPointNote =
        userImages.images && userImages.images[pointID]
          ? userImages.images[pointID].note
          : ''
      // for each pointID, i can check the userImages.images[pointID] && userImages.images[pointID]?.note.toLowerCase().indexOf(lowerInput)
      // user notes filter
      if (usersPointNote.toLowerCase().indexOf(lowerText) !== -1) {
        return true
      }
      // point Data filter
      if (
        pointID.toLowerCase().indexOf(lowerText) !== -1 ||
        pointData.english.toLowerCase().indexOf(lowerText) !== -1 ||
        (pointData.location &&
          pointData.location.toLowerCase().indexOf(lowerText) !== -1)
      ) {
        return true
      }
      return false
    })

  const handleCancelSearch = () => {
    setSearchResults([])
    setSearchText('')
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Row pd="4px 2px 4px 6px">
          <SearchInput
            placeholder="SEARCH..."
            value={searchText}
            placeholderTextColor={theme.FADED_TEXT_COLOR}
            onChangeText={handleChangeText}
          />
          <TransparentButton onPress={handleCancelSearch} pd="2px" mg="0">
            <MatIcon name="close" size={32} color={theme.PRIMARY_TEXT_COLOR} />
          </TransparentButton>
        </Row>
        <FlatList
          data={searchResults}
          renderItem={({ item }) => (
            <SearchResultsListItem
              pointID={item[0]}
              pointData={item[1]}
              goToImagesScreen={goToImagesScreen}
              goToDetailsScreen={goToDetailsScreen}
            />
          )}
          keyExtractor={(item) => item[0]}
        />
        <EmptySpace />
      </SafeAreaView>
    </ThemeProvider>
  )
}
const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

export const SearchHomeScreen = connect(mapStateToProps)(
  SearchHomeScreenComponent,
)
