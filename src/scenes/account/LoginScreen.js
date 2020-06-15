import * as React from 'react'
import { ThemeProvider } from 'styled-components/native'
import { connect } from 'react-redux'

import { Formik } from 'formik'
import * as Yup from 'yup'

import {
  SignupContainer,
  SignupTitle,
  SignupView,
  FormContainer,
  SignupRow,
  Button,
  FacebookButton,
  ButtonText,
  ButtonText2,
  ButtonText3,
  TextInput,
  ClearButton,
  ErrorText,
} from '../../components/atoms'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
})

function LoginScreen({ theme, navigation }) {
  //   const handleSubmit = (values) => {
  //     // should I....make an API request here? or do that in firebase...
  //     // do i dispatch a login request here?
  //   }

  const toSignup = () => {
    navigation.navigate('Signup')
  }

  return (
    <ThemeProvider theme={theme}>
      <SignupContainer>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <SignupView width={'80%'}>
                <SignupTitle>LOOP</SignupTitle>
                <FormContainer>
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor={theme.SECONDARY_TEXT_COLOR}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <ErrorText>{errors.email}</ErrorText>
                  ) : null}
                </FormContainer>
                <FormContainer>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor={theme.SECONDARY_TEXT_COLOR}
                    textAlign={'left'}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <ErrorText>{errors.password}</ErrorText>
                  ) : null}
                </FormContainer>
                <Button onPress={handleSubmit}>
                  <ButtonText>LOG IN</ButtonText>
                </Button>
                <FacebookButton onPress={handleSubmit}>
                  <ButtonText>LOG IN WITH FACEBOOK</ButtonText>
                </FacebookButton>
                <ClearButton>
                  <ButtonText2>Continue without account</ButtonText2>
                </ClearButton>
              </SignupView>
              <SignupRow>
                <ClearButton onPress={toSignup}>
                  <ButtonText3>SIGN UP</ButtonText3>
                </ClearButton>
                <ClearButton>
                  <ButtonText3>FORGOT PASSWORD</ButtonText3>
                </ClearButton>
              </SignupRow>
            </>
          )}
        </Formik>
      </SignupContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return {
    theme,
  }
}

export default connect(mapStateToProps)(LoginScreen)
