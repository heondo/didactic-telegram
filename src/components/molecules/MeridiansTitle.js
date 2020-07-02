import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  HeaderText,
  Row,
  EmptySpace,
  MatIcon,
  TransparentButton,
  TextInput,
  Text,
} from '../atoms'
import MERIDIAN_POINTS_DATA from '../../shared/data/meridianPointsData'
import { SearchResultsList } from './SearchResultsList'

const MeridiansTitleComponent = ({ theme, title }) => {
  const meridianPointsArray = Object.entries(MERIDIAN_POINTS_DATA)
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleOpenSearch = () => {
    setSearchVisible(true)
  }

  const handleCancelSearch = () => {
    if (!searchText) {
      setSearchVisible(false)
    }
    setSearchResults([])
    setSearchText('')
  }

  const handleChangeText = (text) => {
    const lowerInput = text.toLowerCase().trim()
    if (!lowerInput) {
      setSearchText('')
      setSearchResults([])
      return
    }
    const testFilteredResults = meridianPointsArray.filter((entry) => {
      const [pointID, pointData] = entry
      if (pointID.toLowerCase().indexOf(lowerInput) !== -1) {
        return true
      }
      if (pointData.english.toLowerCase().indexOf(lowerInput) !== -1) {
        return true
      }
      return false
    })
    setSearchResults(testFilteredResults)
    setSearchText(text)
  }

  return (
    <ThemeProvider theme={theme}>
      <Row>
        {searchVisible ? (
          <Row>
            <TextInput
              width="auto"
              value={searchText}
              onChangeText={handleChangeText}
              placeholder="Search points"
            />
            <TransparentButton onPress={handleCancelSearch}>
              <MatIcon
                name="cancel"
                size={18}
                color={theme.SECONDARY_BUTTON_COLOR}
              />
            </TransparentButton>
          </Row>
        ) : (
          <>
            <HeaderText fontSize="19px">{title}</HeaderText>
            <EmptySpace />
            <TransparentButton onPress={handleOpenSearch} pd="0" mg="0">
              <MatIcon name="search" size={20} />
            </TransparentButton>
          </>
        )}
      </Row>
      {searchResults.length ? (
        <SearchResultsList searchResults={searchResults} />
      ) : null}
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

MeridiansTitleComponent.propTypes = {
  title: PropTypes.string,
}

export const MeridiansTitle = connect(mapStateToProps)(MeridiansTitleComponent)
