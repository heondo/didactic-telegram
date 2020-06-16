import React from 'react'
import { Text, ListItemContainer } from '../atoms'

export const ListItem = (props) => {
  const { data } = props
  const handlePress = () => {}
  return (
    <ListItemContainer onPress={handlePress}>
      <Text>{data.title}</Text>
    </ListItemContainer>
  )
}
