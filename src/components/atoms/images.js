import styled from 'styled-components/native'

export const Image = styled.Image``

export const ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin: ${(props) => (props.mg ? props.mg : '0')};
`
