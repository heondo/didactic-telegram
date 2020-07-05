import styled from 'styled-components/native'

export const Text = styled.Text`
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: center;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const HeaderText = styled(Text)`
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
`

export const ButtonText = styled(Text)`
  color: ${(props) => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`

export const DarkText = styled(Text)`
  color: ${(props) => props.theme.BLACK};
`

export const DarkHeaderText = styled(DarkText)`
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '28px')};
  padding: 4px 0;
`

export const ModalButtonText = styled(DarkText)`
  text-align: left;
  color: black;
  font-weight: 600;
`

export const TextInput = styled.TextInput`
  width: ${(props) => (props.width ? props.width : '100%')};
  flex-grow: 1;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-style: solid;
  border-bottom-color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
  border-bottom-width: 1px;
`

export const SearchInput = styled.TextInput`
  flex-grow: 1;
  /* Temp  fix for the auto growing text input */
  max-width: 90%;
  font-size: 36px;
  padding: ${(props) => (props.pd ? props.pd : '0')};
  color: ${(props) => props.theme.FADED_TEXT_COLOR};
`

export const ItalicizedText = styled(Text)`
  width: 100%;
  text-align: right;
  font-style: italic;
`
