import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const HeaderText = styled(Text)`
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
`

export const ButtonText = styled(Text)`
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`

export const DarkText = styled(Text)`
  color: ${(props) => props.theme.nordNight3};
`

export const TextInput = styled.TextInput`
  width: 100%;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  color:  ${(props) => props.theme.PRIMARY_TEXT_COLOR}; 
  border-radius: 4px;
  opacity: .5;
  /* border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR}; */
  border-style: solid;
  border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
`
