import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import {
  HeaderText,
  Row,
  EmptySpace,
  MatIcon,
  TransparentButton,
} from '../atoms'

const MeridiansTitleComponent = ({ theme, title }) => {
  const [searchVisible, setSearchVisible] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <Row>
        <HeaderText fontSize="19px">{title}</HeaderText>
        <EmptySpace />
        <TransparentButton pd="0" mg="0">
          <MatIcon name="search" size={20} />
        </TransparentButton>
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
