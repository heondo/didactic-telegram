import React from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { Text, Container } from '../../components/atoms'

function HomeScreen({ navigation, theme }) {
  // const [accountState, setAccountState] = useState<string | null>(null)
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>Home Screen</Text>
      </Container>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(HomeScreen)
