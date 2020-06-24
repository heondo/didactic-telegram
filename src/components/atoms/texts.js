import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: center;
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const ButtonText = styled(Text)`
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`

export const TextInput = styled.TextInput`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  width: 90%;
  background-color: transparent;
  border: 0px;
`
