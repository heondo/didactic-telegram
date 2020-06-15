import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

function HomeScreen({ navigation, theme }) {
  // const [accountState, setAccountState] = useState<string | null>(null)
  return (
    <ThemeProvider theme={theme}>
      <Text>Home Screen</Text>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(HomeScreen)
