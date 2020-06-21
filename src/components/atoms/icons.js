import MTCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

export const MatCommIcon = styled(MTCIcon)`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_BUTTON_TEXT_COLOR};
`

export const MatIcon = styled(MIcon)`
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_BUTTON_TEXT_COLOR};
  /* color: white; */
`
