import styled from 'styled-components/native'

export const View = styled.SafeAreaView`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const Row = styled.SafeAreaView`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const SignupRow = styled(Row)`
  position: absolute;
  bottom: 8px;
`

export const SignupContainer = styled(Container)`
  background-color: ${(props) => props.theme.BLACK};
`

export const SignupView = styled(View)`
  background-color: ${(props) => props.theme.BLACK};
`

export const FormContainer = styled(View)`
  background-color: ${(props) => props.theme.BLACK};
`
