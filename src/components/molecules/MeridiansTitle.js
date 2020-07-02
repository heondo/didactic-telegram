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
  TextInput,
} from '../atoms'

const MeridiansTitleComponent = ({ theme, title }) => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleOpenSearch = () => {
    setSearchVisible(true)
  }

  return (
    <ThemeProvider theme={theme}>
      <Row>
        {searchVisible ? (
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search points"
          />
        ) : (
          <>
            <HeaderText fontSize="19px">{title}</HeaderText>
            <EmptySpace />
            <TransparentButton onPress={handleOpenSearch} pd="0" mg="0">
              <MatIcon name="search" size={20} />
            </TransparentButton>
          </>
        )}
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
