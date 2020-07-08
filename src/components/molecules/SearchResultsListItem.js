import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  SearchNoteText,
  Row,
  SearchDetailsContainer,
  TransparentButton,
  EmptySpace,
} from '../atoms'

function SearchResultsListItemComponent({
  theme,
  pointID,
  pointData,
  userImages,
}) {
  const [usersPointNote, setUsersPointNote] = useState('')

  useEffect(() => {
    userImages.images && userImages.images[pointID]
      ? setUsersPointNote(userImages.images[pointID].note)
      : null
  }, [pointID, userImages.images])

  // when i go to the  Primary Point Details, I need to send a pointID and then also,
  // the matching points for the primaryMeridiansData

  return (
    <ThemeProvider theme={theme}>
      <TransparentButton pd="0" mg="4px 0">
        <Row mg="4px 0">
          <Text fontSize="22px">{pointData.english}</Text>
          <EmptySpace />
          <Text fontSize="20px">{pointID}</Text>
        </Row>
        <Row>
          <SearchNoteText numberOfLines={2} fontSize="14px">
            Note: {usersPointNote}
          </SearchNoteText>
          <EmptySpace />
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
