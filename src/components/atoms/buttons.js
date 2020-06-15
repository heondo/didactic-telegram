import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 5px;
  padding: 16px;
`

export const DisabledButton = styled(Button)`
  background-color: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.LIGHT_GREY};
`

export const FacebookButton = styled(Button)`
  background-color: ${(props) => props.theme.FACEBOOK};
`

export const ClearButton = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  border-radius: 5px;
  padding: 8px;
`

export const SecondaryButton = styled.TouchableOpacity`
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
  width: ${(props) => (props.width ? props.width : '100%')};
  border-radius: 5px;
  padding: 16px;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.WHITE};
  text-align: center;
`

export const ButtonText2 = styled(ButtonText)`
  color: ${(props) => props.theme.LIGHT_GREY};
`

export const ButtonText3 = styled(ButtonText)`
  font-weight: normal;
  color: ${(props) => props.theme.GREY};
`
