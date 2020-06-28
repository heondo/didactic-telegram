import styled from 'styled-components/native'

export const Image = styled.Image`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100px')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const PointImage = styled(Image)`
  position: absolute;
`

export const ProfileImage = styled(Image)`
  border-radius: 25px;
`
