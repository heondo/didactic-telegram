import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  margin: ${(props) => (props.mg ? props.mg : '4px')} 0;
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 5px;
  padding: 16px;
  margin: ${(props) => (props.mg ? props.mg : '4px 0')};
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
`

export const DisabledButton = styled(Button)`
  background-color: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.LIGHT_GREY};
`

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
  text-align: center;
  margin: ${(props) => (props.mg ? props.mg : '0')};
`
