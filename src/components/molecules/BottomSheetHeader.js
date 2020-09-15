import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@react-navigation/native'
import {
  BottomSheetBar,
  BottomHeaderContainer,
  BottomHeaderButton,
} from '../atoms'

function BottomSheetHeaderComponent({ theme, onHeaderPress }) {
  return (
    <ThemeProvider theme={theme}>
      <BottomHeaderButton onPress={onHeaderPress}>
        <BottomHeaderContainer>
          <BottomSheetBar />
        </BottomHeaderContainer>
      </BottomHeaderButton>
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

BottomSheetHeaderComponent.propTypes = {
  onHeaderPress: PropTypes.func,
}
