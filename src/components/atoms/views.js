import styled from 'styled-components/native'

export const View = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`

export const PaddedView = styled(View)`
  padding: 6px;
`
