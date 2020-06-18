import React from 'react'
import { connect } from 'react-redux'

import { ButtonText, Button, View, Div } from '../atoms'
import PropTypes from 'prop-types'

function ProfileBannerComponent({ authState }) {
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return (
    <Div>
      <ButtonText>{JSON.stringify(authState)}</ButtonText>
    </Div>
  )
}

ProfileBannerComponent.propTypes = {
  title: PropTypes.string,
}

const mapStateToProps = ({ theme, authState }) => {
  return {
    theme,
    authState,
  }
}

export const ProfileBanner = connect(mapStateToProps)(ProfileBannerComponent)
