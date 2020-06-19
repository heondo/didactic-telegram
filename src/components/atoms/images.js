import styled from 'styled-components/native'

export const Image = styled.Image`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '200px')};
  margin: ${(props) => (props.mg ? props.mg : '6px 0')};
`

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`
