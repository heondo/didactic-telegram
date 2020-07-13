import styled from 'styled-components/native'

export const Image = styled.Image`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  margin: ${(props) => (props.mg ? props.mg : '0')};
`

export const ImageAbsolute = styled(Image)`
  position: absolute;
`

export const ProfileImage = styled(Image)`
  border-radius: 25px;
  height: 50px;
  width: 50px;
`
