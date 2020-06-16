import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { TabView, SceneMap } from 'react-native-tab-view'
import { ThemeProvider } from 'styled-components/native'
import { Text, Container } from '../../../components/atoms'

const SecondRoute = () => (
  <Container>
    <Text>Scene Two</Text>
  </Container>
)

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(SecondRoute)
