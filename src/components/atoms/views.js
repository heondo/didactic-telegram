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
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const ScrollView = styled.ScrollView`
  padding: ${(props) => (props.pd ? props.pd : '4px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const Header = styled(View)`
  padding: 8px;
  background-color: ${(props) => props.theme.BOTTOM_SHEET_BACKGROUND};
  elevation: 4;
`

export const AbsoluteView = styled(View)`
  position: absolute;
  background-color: transparent;
`

export const ImageCircleButtons = styled(AbsoluteView)`
  flex-direction: row;
  bottom: 0;
  right: 0;
`

export const ModalView = styled(View)`
  background-color: white;
  align-items: flex-start;
  padding: 14px 26px;
  height: auto;
  width: 80%;
`

export const NoteContainer = styled(View)`
  padding: 8px 4px;
  width: 100%;
`

export const SubmitNoteContainer = styled(AbsoluteView)`
  width: auto;
  right: 4px;
  bottom: 16px;
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

export const PointDepthButtonContainer = styled.ImageBackground`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  elevation: 4;
  margin: 8px 0;
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
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  background-color: transparent;
`

export const SettingsRow = styled(Row)`
  justify-content: flex-start;
  width: 100%;
  padding: ${(props) => (props.pd ? props.pd : '8px')};
`

// export const DetailsRow = styled(Row)`

// `

export const InfoBar = styled(View)`
  flex-direction: row;
  padding: 2px 8px;
  background-color: ${(props) => props.theme.DETAIL_BAR_COLOR};
`

export const EmptySpace = styled.View`
  flex-grow: 1;
`
export const TutorialButtonsRow = styled(Row)`
  position: absolute;
  bottom: 14px;
`
