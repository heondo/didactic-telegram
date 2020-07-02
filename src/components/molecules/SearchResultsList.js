import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Text, SearchResultsFlatList } from '../atoms'

function SearchResultsListComponent({ theme, searchResults }) {
  return (
    <ThemeProvider theme={theme}>
      <SearchResultsFlatList
        data={searchResults}
        renderItem={({ item }) => <Text>{item[0]}</Text>}
        keyExtractor={(item) => item[0]}
      />
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
}
