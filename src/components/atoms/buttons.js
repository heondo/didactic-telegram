import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  padding: ${(props) => (props.pd ? props.pd : '4px 6px')};
  margin: ${(props) => (props.mg ? props.mg : '4px')};
`

export const CircleIconButton = styled(Button)`
  border-radius: 22px;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 44px;
  height: 44px;
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

export const MeridianSquareButton = styled(Button)`
  border-radius: 18px;
  elevation: 4;
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
`

export const TransparentButton = styled(Button)`
  background-color: transparent;
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
