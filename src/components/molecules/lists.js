import React from 'react'
import { Text, ListItemContainer, Button } from '../atoms'

export const ListItem = (props) => {
  const { data, handlePrimaryPress } = props
  return (
    <ListItemContainer>
      <Button onPress={handlePrimaryPress}>
        <Text>{data.title}</Text>
      </Button>
    </ListItemContainer>
  )
}
