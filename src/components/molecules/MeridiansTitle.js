import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { HeaderText, Row, EmptySpace, MatIcon } from '../atoms'

const MeridiansTitleComponent = ({ theme }) => {
  const [searchVisible, setSearchVisible] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Row>
        <HeaderText fontSize="19px">Meridians</HeaderText>
        <EmptySpace />
        <MatIcon name="search" size={20} />
      </Row>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

MeridiansTitleComponent.propTypes = {}

export const MeridiansTitle = connect(mapStateToProps)(MeridiansTitleComponent)
