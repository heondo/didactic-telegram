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
          <Text>chinese: </Text>
          <Text>{pointData.chinese}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>english: </Text>
          <Text>{pointData.english}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>korean: </Text>
          <Text>{pointData.korean}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>romaji: </Text>
          <Text>{pointData.romaji}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>vietnamese: </Text>
          <Text>{pointData.vietnamese}</Text>
          <EmptySpace />
        </Row>
        <Row>
          <Text>alternative: </Text>
          <Text>{pointData.alternative}</Text>
          <EmptySpace />
        </Row>
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
