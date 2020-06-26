import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from '@react-navigation/native'
import PropTypes from 'prop-types'

import { Image, View, MatIcon } from '../atoms'

function UsersImageContainerComponent({ theme, authState, imageURL }) {
  return (
    <ThemeProvider theme={theme}>
      <View>
        {/* <AddImageButton>
          <MatIcon name="edit" size={18} />
        </AddImageButton> */}
        {/* <MatIcon name="edit" /> */}
        <Image source={{ uri: imageURL }} resizeMode="contain" />
      </View>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const UsersImageContainer = connect(mapStateToProps)(
  UsersImageContainerComponent,
)

UsersImageContainerComponent.propTypes = {}
