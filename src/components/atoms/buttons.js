import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  margin: ${(props) => (props.mg ? props.mg : '4px')} 0;
  background-color: ${(props) => props.theme.PRIMARY_BUTTON_COLOR};
  width: ${(props) => (props.width ? props.width : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 16px 8px;
  margin: ${(props) => (props.mg ? props.mg : '4px 0')};
`

export const SecondaryButton = styled(Button)`
  background-color: ${(props) => props.theme.SECONDARY_BUTTON_COLOR};
`

export const TransparentButton = styled(Button)`
  background-color: transparent;
  padding: 4px;
`

export const AddImageButton = styled(Button)`
  border-radius: 20px;
  z-index: 2;
  width: 25px;
  height: 25px;
  position: absolute;
  top: 20px;
  right: 25px;
`

export const DisabledButton = styled(Button)`
  background-color: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.LIGHT_GREY};
`
