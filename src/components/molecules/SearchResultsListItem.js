import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  ItalicizedText,
  Row,
  SearchDetailsContainer,
  TransparentButton,
} from '../atoms'

function SearchResultsListItemComponent({
  theme,
  pointID,
  pointData,
  userImages,
}) {
  const usersPointNote =
    userImages.images[pointID] && userImages.images[pointID].note
      ? userImages.images[pointID].note
      : ''

  // when i go to the  Primary Point Details, I need to send a pointID and then also,
  // the matching points for the primaryMeridiansData

  return (
    <ThemeProvider theme={theme}>
      <TransparentButton pd="0" mg="4px 0">
        <Row>
          <Text fontSize="28px">{pointID}</Text>
          <SearchDetailsContainer>
            <Text fontSize="16px">{pointData.english}</Text>
            <ItalicizedText numberOfLines={2} fontSize="14px">
              {usersPointNote}
            </ItalicizedText>
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
