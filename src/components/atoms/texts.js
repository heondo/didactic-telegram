import styled from 'styled-components/native'

export const Text = styled.Text`
  /* color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: center;
  margin: ${(props) => (props.mg ? props.mg : '0')}; */
`

export const ButtonText = styled(Text)`
  /* color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR}; */
`

export const TextInput = styled.TextInput`
  /* color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  width: 90%;
  height: 40px;
  background-color: transparent;
  border-style: solid; */
  /* Most components in react native support unique border width and 
     colors on each side of the component */
  /* border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px; */
`
