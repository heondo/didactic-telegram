import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@react-navigation/native'
import { Text, Row, BottomContentContainer, EmptySpace } from '../atoms'

function BottomSheetContentComponent({ theme, pointData }) {
  return (
    <ThemeProvider theme={theme}>
      <BottomContentContainer pd="4px 18px">
        <Row>
          <Text>Name: </Text>
          <Text>{pointData.name}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>English: </Text>
          <Text>{pointData.english}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>Transliteration: </Text>
          <Text>{pointData.transliteration}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>Pinyin: </Text>
          <Text>{pointData.pinyin}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>Korean: </Text>
          <Text>{pointData.korean}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>Romaji: </Text>
          <Text>{pointData.romaji}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>Vietnamese: </Text>
          <Text>{pointData.vietnamese}</Text>
          <EmptySpace />
        </Row>
        {pointData.alternative ? (
          <Row>
            <Text>Alternative: </Text>
            <Text>{pointData.alternative}</Text>
            <EmptySpace />
          </Row>
        ) : null}
        <EmptySpace />
      </BottomContentContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const BottomSheetContent = connect(mapStateToProps)(
  BottomSheetContentComponent,
)

BottomSheetContentComponent.propTypes = {
  pointData: PropTypes.object,
}
