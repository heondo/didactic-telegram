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
import { SearchResultsModal } from './SearchResultsModal'

const MeridiansTitleComponent = ({ theme, title, userImages, navigation }) => {
  const [searchVisible, setSearchVisible] = useState(false)

  const handleOpenSearch = () => {
    setSearchVisible(true)
  }

  const handleCloseSearch = () => {
    setSearchVisible(false)
  }

  const goToPoint = (pointID) => {
    navigation.navigate('Images Points Swiper', {
      pointID,
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Row>
        <HeaderText fontSize="19px">{title}</HeaderText>
        <EmptySpace />
        <TransparentButton onPress={handleOpenSearch} pd="0" mg="0">
          <MatIcon name="search" size={20} />
        </TransparentButton>
      </Row>
      <SearchResultsModal
        searchVisible={searchVisible}
        goToPoint={goToPoint}
        handleCloseSearch={handleCloseSearch}
      />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

MeridiansTitleComponent.propTypes = {
  title: PropTypes.string,
}

export const MeridiansTitle = connect(mapStateToProps)(MeridiansTitleComponent)
