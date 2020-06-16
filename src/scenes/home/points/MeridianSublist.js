import React from 'react'
import { connect } from 'react-redux'
import { Container, FlatList } from '../../../components/atoms'
import { ListItem } from '../../../components/molecules'
import MeridianData from '../../../shared/meridian-data'

const MeridianSublistRoute = ({ navigation }) => {
  const { meridianID, points } = navigation.state || null
  return (
    <Container>
      <FlatList
        data={MeridianData}
        renderItem={({ item }) => <ListItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </Container>
  )
  //   <Container>
  //     <Text>Scene First</Text>
  //   </Container>
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianSublistRoute)
