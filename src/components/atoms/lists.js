import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 6px 8px;
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  padding: 2px 4px;
  margin: ${(props) => (props.mg ? props.mg : '0')};
`
