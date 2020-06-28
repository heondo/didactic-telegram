import styled from 'styled-components/native'

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '4px')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const View = styled.View`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
`

export const Header = styled(View)`
  background-color: ${(props) => props.theme.nordNight3};
`

export const AbsoluteView = styled(View)`
  position: absolute;
  background-color: transparent;
`

export const SubmitNoteContainer = styled(AbsoluteView)`
  width: auto;
  right: 0px;
  bottom: 0px;
`

export const OverLay = styled(View)`
  position: absolute;
  background-color: ${(props) => props.theme.OVERLAY_BG_COLOR};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 2;
`

export const ScrollView = styled.ScrollView`
  flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  padding: ${(props) => (props.pd ? props.pd : '4px')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const Row = styled(View)`
  flex-direction: row;
  background-color: transparent;
`

export const EmptySpace = styled.View`
  flex-grow: 1;
`
