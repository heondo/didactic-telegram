import MTCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'

export const MatCommIcon = styled(MTCIcon)`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const MatIcon = styled(MIcon)`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
`

export const LoadingCircle = styled.ActivityIndicator`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
`
