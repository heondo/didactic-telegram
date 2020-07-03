import styled from 'styled-components/native'

export const FlatList = styled.FlatList`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  padding: ${(props) => (props.pd ? props.pd : '4px')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const SearchResultsFlatList = styled(FlatList)`
  max-height: 300px;
  position: absolute;
  top: 24px;
  width: 100%;
  /* width: 100%;
  z-index: 5;
  position: absolute;
  top: 32px; */
`
