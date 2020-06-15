import styled from 'styled-components/native'

export const TextInput = styled.TextInput`
  border-radius: 5px;
  background-color: ${(props) => props.theme.WHITE};
  width: 100%;
  font-size: 16px;
  padding: 12px 18px;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  margin: 4px 0 16px 0;
  border: 1px solid ${(props) => props.theme.SECONDARY_TEXT_COLOR};
`
