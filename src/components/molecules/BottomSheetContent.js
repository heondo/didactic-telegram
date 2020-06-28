import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@react-navigation/native'
import { Text, BottomContentContainer } from '../atoms'

function BottomSheetContentComponent({ theme, pointData }) {
  return (
    <ThemeProvider theme={theme}>
      <BottomContentContainer>
        <Text>{JSON.stringify(pointData)}</Text>
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
