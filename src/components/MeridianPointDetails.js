import React from 'react'
import { connect } from 'react-redux'

import { Text } from './atoms'
import PropTypes from 'prop-types'

function MeridianPointDetails(props) {
  const { id } = props
  // pass in the points array when pressing the Meridian Point to enter the
  // Meridian Points List, instead of the normal meridian lists. JEez this naming convention is confusing my head
  return <Text>{id}</Text>
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianPointDetails)

MeridianPointDetails.propTypes = {
  id: PropTypes.string,
}
