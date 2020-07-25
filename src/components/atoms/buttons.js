import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  elevation: ${(props) => (props.elevation ? props.elevation : '0')};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => (props.pd ? props.pd : '4px 6px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
`

export const CircleIconButton = styled(Button)`
  elevation: 5;
  border-radius: 30px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 60px;
  height: 60px;
  opacity: 0.85;
  padding: 0;
`

export const TouchableWithoutFeedback = styled.TouchableWithoutFeedback`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const BottomHeaderButton = styled(TouchableWithoutFeedback)`
  background-color: ${(props) => props.theme.BOTTOM_SHEET_BACKGROUND};
`

export const PointDepthButton = styled(Button)`
  background-color: rgba( 0, 0, 0, 0.6),
  height: 100%;
`

export const MeridianSquareButton = styled(Button)`
  border-radius: 18px;
  elevation: 4;
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
`

export const TransparentButton = styled(Button)`
  background-color: transparent;
  width: ${(props) => (props.width ? props.width : 'auto')};
`

export const ModalButton = styled(TransparentButton)`
  align-items: flex-start;
  padding: ${(props) => (props.pd ? props.pd : '12px 0')};
  margin: 0;
`

export const DisabledButton = styled(Button)`
  background-color: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.LIGHT_GREY};
`

export const ListItemButton = styled(Button)`
  width: 97.5%;
  margin: 6px;
  padding: 16px 12px;
`
