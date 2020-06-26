import styled from 'styled-components/native'

export const Div = styled.View`
  /* background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')}; */
`

export const ProfileBannerContainer = styled(Div)`
  /* position: absolute;
  background-color: transparent; */
`

export const View = styled.SafeAreaView`
  /* flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')}; */
`

export const OverLay = styled(View)`
  /* position: absolute;  */
  /* Sit on top of the page content */
  /* background-color: ${(props) => props.theme.OVERLAY_BG_COLOR};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  z-index: 2;  */
  /* Specify a stack order in case you're using a different order for other elements */
`

export const ScrollView = styled.ScrollView`
  /* flex: 1;
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  display: flex; */
  /* justify-content: center;
  align-items: center; */
  /* padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
  width: ${(props) => (props.width ? props.width : '100%')}; */
`

export const PointDetailsView = styled(View)`
  /* justify-content: flex-start; */
`

export const Row = styled.View`
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => (props.mg ? props.mg : '4px 0')};
  padding: ${(props) => (props.pd ? props.pd : '4px')}; */
`

export const PaddedView = styled(View)`
  /* padding: 6px; */
`

export const EmptySpace = styled.View`
  /* flex-grow: 1; */
`
