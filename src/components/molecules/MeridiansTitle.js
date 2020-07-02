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

const MeridiansTitleComponent = ({ theme, title }) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleOpenSearch = () => {
    setSearchVisible(true)
  }

  const handleCancelSearch = () => {
    setSearchText('')
    if (!searchText) {
      setSearchVisible(false)
    }
  }

  const handleChangeText = (text) => {
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
