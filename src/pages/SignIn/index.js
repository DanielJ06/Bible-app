import React, {useContext} from 'react';

import {Formik} from 'formik';

import {AuthContext} from '../../contexts/auth';

import { 
  Container, 
  ScreenContainer, 
  Input, 
  Title, 
  SubmitBtn, 
  BtnText 
} from './styles';

const SignIn = () => {
  const {signIn} = useContext(AuthContext);

  return (
    <Container>
      <ScreenContainer>
        <Title>Faça login</Title>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            try {
              signIn(values);
            } catch (err) {
              console.log(err);
            }
          }}>
            {(props) => (
              <React.Fragment>
                <Input 
                  placeholder="Email"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={props.values.email}
                  onChangeText={props.handleChange('email')}
                />
                <Input
                  placeholder="Senha"
                  autoCorrect={false}
                  autoCapitalize="none"
                  value={props.values.password}
                  onChangeText={props.handleChange('password')}
                  secureTextEntry={true}
                />
                <SubmitBtn onPress={props.handleSubmit}>
                  <BtnText>Entrar</BtnText> 
                </SubmitBtn>
              </React.Fragment>
            )}
        </Formik>
      </ScreenContainer>
    </Container>
  );
}

export default SignIn;