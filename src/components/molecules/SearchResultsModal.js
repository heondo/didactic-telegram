import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

import {
  FlatList,
  SafeAreaView,
  Row,
  SearchInput,
  MatIcon,
  TransparentButton,
  EmptySpace,
} from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { SearchResultsListItem } from './SearchResultsListItem'

function SearchResultsModalComponent({
  theme,
  userImages,
  goToPoint,
  searchVisible,
  handleCloseSearch,
}) {
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

  const filterPoints = (lowerText) =>
    meridianPointsArray.filter((entry) => {
      const [pointID, pointData] = entry
      const usersPointNote =
        userImages.images[pointID] && userImages.images[pointID].note
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
    if (!searchText) {
      handleCloseSearch()
    }
    setSearchResults([])
    setSearchText('')
  }

  return (
    <ThemeProvider theme={theme}>
      <Modal
        animationType="slide"
        hasBackdrop={true}
        backdropOpacity={0.5}
        onBackButtonPress={handleCloseSearch}
        backdropColor={theme.PRIMARY_BACKGROUND_COLOR}
        isVisible={searchVisible}
        style={{ margin: 0 }}
        coverScreen={true}>
        <SafeAreaView>
          <Row pd="4px 2px 4px 6px">
            <SearchInput
              placeholder="SEARCH..."
              value={searchText}
              placeholderTextColor={theme.FADED_TEXT_COLOR}
              onChangeText={handleChangeText}
            />
            <TransparentButton onPress={handleCancelSearch} pd="2px" mg="0">
              <MatIcon
                name="close"
                size={32}
                color={theme.PRIMARY_TEXT_COLOR}
              />
            </TransparentButton>
          </Row>
          <FlatList
            data={searchResults}
            renderItem={({ item }) => (
              <SearchResultsListItem
                handleCloseSearch={handleCloseSearch}
                goToPoint={goToPoint}
                pointID={item[0]}
                pointData={item[1]}
              />
            )}
            keyExtractor={(item) => item[0]}
          />
          <EmptySpace />
        </SafeAreaView>
      </Modal>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

export const SearchResultsModal = connect(mapStateToProps)(
  SearchResultsModalComponent,
)

SearchResultsModalComponent.propTypes = {
  goToPoint: PropTypes.func,
  searchVisible: PropTypes.bool,
  handleCloseSearch: PropTypes.func,
}
