import MTCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import styled from 'styled-components/native'
import { View } from './views'

export const MatCommIcon = styled(MTCIcon)`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const MatIcon = styled(MIcon)`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const ColorCodeCircle = styled.View`
  background-color: ${(props) => (props.color ? props.color : 'gray')};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.FADED_TEXT_COLOR};
  height: ${(props) => (props.size ? props.size : '14')}px;
  width: ${(props) => (props.size ? props.size : '14')}px;
`

export const LoadingCircle = styled.ActivityIndicator`
  color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
`

export const BottomSheetBar = styled(View)`
  width: 40%;
  height: 4px;
  opacity: 0.6;
  border-radius: 16px;
  background-color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
`

export const SearchItemBottomBorder = styled.View`
  background-color: ${(props) =>
    props.color ? props.color : props.theme.PRIMARY_TEXT_COLOR};
  height: 1px;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`
