import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  width: 95%;
`
export const ListItemContainer = styled.View`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  margin: 3px 0px;
  padding: 4px;
  border: 1px solid black;
`
