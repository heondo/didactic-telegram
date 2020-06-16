import React from 'react'
import { connect } from 'react-redux'
import { View, FlatList, Text } from './atoms'
import MeridianData from '../shared/meridian-data'
import { ThemeProvider } from 'styled-components'

function ListItem({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const PrimaryMeridianList = (props) => {
  return (
    <FlatList
      data={MeridianData}
      renderItem={({ item }) => <ListItem data={item} title={item.english} />}
      keyExtractor={(item) => item.id}
    />
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(PrimaryMeridianList)
