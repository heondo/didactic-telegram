import React from 'react'
import { connect } from 'react-redux'
import {
  Container,
  FlatList,
  Button,
  ButtonText,
} from '../../../components/atoms'
import { ListItem } from '../../../components/molecules'
import MeridianData from '../../../shared/meridian-data'

const MeridianRoute = (navigation) => {
  const handlePrimaryPress = (meridianPointsArray) => {
    navigation.navigate('Meridian Points', {
      meridianPointsArray,
    })
  }

  return (
    <Container>
      <FlatList
        data={MeridianData}
        renderItem={({ item }) => (
          <ListItem data={item} handlePrimaryPress={handlePrimaryPress} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Container>
    //   <Container>
    //     <Text>Scene First</Text>
    //   </Container>
  )
}
const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(MeridianRoute)
