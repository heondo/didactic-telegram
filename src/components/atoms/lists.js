import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: 0px 8px;
`
