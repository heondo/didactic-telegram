import React from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  Text,
  MeridianSquareButton,
  Row,
  ImageAbsolute,
  EmptySpace,
  HeaderText,
  Image,
} from '../atoms'

function SearchResultsListItemComponent({ theme, pointID, pointData }) {
  return (
    <ThemeProvider theme={theme}>
      <Row>
        <Text fontSize="24px">{pointID}</Text>
        <EmptySpace />
        <Text fontSize="18px">{pointData.english}</Text>
      </Row>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

SearchResultsListItemComponent.propTypes = {
  pointID: PropTypes.string,
  pointData: PropTypes.object,
}

export const SearchResultsListItem = connect(mapStateToProps)(
  SearchResultsListItemComponent,
)
