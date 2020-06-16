import React from 'react'
import { Text, ListItemContainer, Button } from '../atoms'

export const ListItem = (props) => {
  const { data, handlePrimaryPress, title } = props

  const handlePress = () => {
    handlePrimaryPress(data.title, data.points)
  }

  return (
    <ListItemContainer>
      <Button onPress={handlePress}>
        <Text>{title}</Text>
      </Button>
    </ListItemContainer>
  )
}
