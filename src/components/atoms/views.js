import styled from 'styled-components/native'

export const Div = styled.View`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const View = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  /* justify-content: center;
  align-items: center; */
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const PointDetailsView = styled(View)`
  /* justify-content: flex-start; */
`

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.mg ? props.mg : '4px 0')};
`

export const PaddedView = styled(View)`
  padding: 6px;
`

export const EmptySpace = styled.View`
  flex-grow: 1;
`
