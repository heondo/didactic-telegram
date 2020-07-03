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
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const Header = styled(View)`
  /* background-color: ${(props) => props.theme.BOTTOM_SHEET_BACKGROUND}; */
  elevation: 4;
`

export const AbsoluteView = styled(View)`
  position: absolute;
  background-color: transparent;
`

export const ModalView = styled(View)`
  background-color: white;
  align-items: flex-start;
  padding: 14px 26px;
  height: auto;
  width: 80%;
`

export const NoteContainer = styled(View)`
  padding: 4px 4px 24px 4px;
`

export const SubmitNoteContainer = styled(AbsoluteView)`
  width: auto;
  right: 0px;
  bottom: 24px;
`

export const BottomContentContainer = styled(View)`
  opacity: 0.85;
  background-color: ${(props) => props.theme.BOTTOM_SHEET_BACKGROUND};
  height: 100%;
`

export const BottomHeaderContainer = styled(BottomContentContainer)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 20px;
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

export const Row = styled(View)`
  flex-direction: row;
  background-color: transparent;
`

export const EmptySpace = styled.View`
  flex-grow: 1;
`
