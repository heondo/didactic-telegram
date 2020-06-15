import styled from 'styled-components/native'

export const TextContainer = styled.View`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`

export const Title = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  padding: 16px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`

export const ListItem = styled.View`
  padding: 10px;
  font-size: 18px;
  align-self: stretch;
  border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: 16px;
`

export const RedText = styled(Text)`
  color: red;
`

export const SignupLabel = styled(Text)`
  color: ${(props) => props.theme.WHITE};
  text-align: left;
  font-size: 14px;
  width: 100%;
`

export const SignupText = styled(Text)`
  color: ${(props) => props.theme.WHITE};
  text-align: center;
`

export const SignupTitle = styled(Title)`
  color: ${(props) => props.theme.WHITE};
`

export const ErrorText = styled.Text`
  color: red;
  text-align: left;
  position: absolute;
  bottom: -3px;
  width: 100%;
`
