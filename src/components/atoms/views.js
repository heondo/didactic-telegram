import styled from 'styled-components/native'

export const View = styled.SafeAreaView`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
`
