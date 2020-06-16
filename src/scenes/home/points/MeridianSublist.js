import React from 'react'
import { connect } from 'react-redux'
import { Container, FlatList, Text } from '../../../components/atoms'
import { ListItem } from '../../../components/molecules'
import MeridianData from '../../../shared/meridian-data'

const MeridianSublistRoute = (props) => {
  // const { meridianID, points } = navigation.state || null
  const { params } = props.route // primaryName, meridianPointsArray
  return (
    <Container>
      <Text>{params.primaryName}</Text>
      <FlatList
        data={params.meridianPointsArray}
        renderItem={({ item }) => (
          <ListItem
            data={item}
            handlePrimaryPress={() => {
              console.log(item)
            }}
            title={item.english}
          />
        )}
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
