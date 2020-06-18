import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: 16px;
  text-align: center;
  margin: ${(props) => (props.mg ? props.mg : '0')};
`
