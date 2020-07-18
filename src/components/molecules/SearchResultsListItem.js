import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  SearchNoteText,
  Row,
  TransparentButton,
  EmptySpace,
  SearchItemBottomBorder,
  MatIcon,
  Button,
} from '../atoms'
import { CircleOrTriangle } from './CircleOrTriangle'

function SearchResultsListItemComponent({
  pointID,
  pointData,
  userImages,
  theme,
  goToDetailsScreen,
  goToImagesScreen,
}) {
  const [usersPointNote, setUsersPointNote] = useState('')

  useEffect(() => {
    userImages.images && userImages.images[pointID]
      ? setUsersPointNote(userImages.images[pointID].note)
      : null
  }, [pointID, userImages.images])

  // when i go to the  Primary Point Details, I need to send a pointID and then also,
  // the matching points for the primaryMeridiansData

  const handleItemPress = () => {
    goToImagesScreen(pointID)
  }

  const handleDetailsPress = () => {
    goToDetailsScreen(pointID)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransparentButton onPress={handleItemPress} pd="6px 4px" mg="0 0 6px 0">
        <Row mg="0 0 6px 0">
          <Text fontSize="22px">{pointData.english} - </Text>
          <Text fontSize="18px">{pointData.transliteration}</Text>
          <EmptySpace />
          <CircleOrTriangle colorCode={pointData.colorCode} marginRight="4px" />
          <Text fontSize="20px">{pointID}</Text>
        </Row>
        <Row>
          <SearchNoteText numberOfLines={2} fontSize="14px">
            Note: {usersPointNote}
          </SearchNoteText>
          <EmptySpace />
        </Row>
        <Row>
          <SearchNoteText numberOfLines={2} fontSize="14px">
            Location: {pointData.location}
          </SearchNoteText>
          <EmptySpace />
          <Button
            onPress={handleDetailsPress}
            width="auto"
            pd="6px"
            mg="0"
            elevation="6">
            <Row width="auto">
              <MatIcon name="info" size={16} />
              <Text fontSize="16px" mg="0 0 0 8px">
                Details
              </Text>
            </Row>
          </Button>
        </Row>
      </TransparentButton>
      <SearchItemBottomBorder />
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
  goToDetailsScreen: PropTypes.func,
  goToImagesScreen: PropTypes.func,
}

export const SearchResultsListItem = connect(mapStateToProps)(
  SearchResultsListItemComponent,
)
