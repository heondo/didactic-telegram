import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@react-navigation/native'
import { Text, BottomHeaderContainer } from '../atoms'

function BottomSheetHeaderComponent({ theme }) {
  return (
    <ThemeProvider theme={theme}>
      <BottomHeaderContainer>
        <Text>Header</Text>
      </BottomHeaderContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const BottomSheetHeader = connect(mapStateToProps)(
  BottomSheetHeaderComponent,
)

BottomSheetHeaderComponent.propTypes = {}
