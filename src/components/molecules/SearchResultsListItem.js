import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  Row,
  EmptySpace,
  SearchDetailsContainer,
  TransparentButton,
} from '../atoms'

function SearchResultsListItemComponent({
  theme,
  pointID,
  goToPoint,
  pointData,
  userImages,
  handleCloseSearch,
}) {
  const usersPointNote =
    userImages.images[pointID] && userImages.images[pointID].note
      ? userImages.images[pointID].note
      : ''

  // when i go to the  Primary Point Details, I need to send a pointID and then also,
  // the matching points for the primaryMeridiansData

  const handleSearchItemPress = () => {
    goToPoint(pointID)
    handleCloseSearch()
  }

  return (
    <ThemeProvider theme={theme}>
      <TransparentButton onPress={handleSearchItemPress} pd="0" mg="0">
        <Row>
          <Text fontSize="28px">{pointID}</Text>
          <EmptySpace />
          <SearchDetailsContainer>
            <Text fontSize="16px">{pointData.english}</Text>
            <Text fontSize="14px">{usersPointNote}</Text>
          </SearchDetailsContainer>
        </Row>
      </TransparentButton>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, userImages }) => {
  return {
    theme,
    userImages,
  }
}

SearchResultsListItemComponent.propTypes = {
  pointID: PropTypes.string,
  pointData: PropTypes.object,
  goToPoint: PropTypes.func,
  handleCloseSearch: PropTypes.func,
}

export const SearchResultsListItem = connect(mapStateToProps)(
  SearchResultsListItemComponent,
)
