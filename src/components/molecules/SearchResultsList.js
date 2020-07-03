import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'

import { ButtonText, SearchResultsFlatList, Button } from '../atoms'

function SearchResultsListComponent({ theme, searchResults, goToPoint }) {
  return (
    <ThemeProvider theme={theme}>
      <Modal
        animationType="slide"
        hasBackdrop={false}
        isVisible={true}
        coverScreen={false}
        style={{
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}>
        <SearchResultsFlatList
          data={searchResults}
          renderItem={({ item }) => (
            <Button>
              <ButtonText>{item[0]}</ButtonText>
            </Button>
          )}
          keyExtractor={(item) => item[0]}
        />
      </Modal>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
  }
}

export const SearchResultsList = connect(mapStateToProps)(
  SearchResultsListComponent,
)

SearchResultsListComponent.propTypes = {
  searchResults: PropTypes.array,
  goToPoint: PropTypes.func,
}
