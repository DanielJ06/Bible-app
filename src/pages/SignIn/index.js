import React from 'react';

import { Container, ScreenContainer, Input, Title, SubmitBtn, BtnText } from './styles';

const SignIn = () => {
  return (
    <Container>
      <ScreenContainer>
        <Title>Faça login</Title>
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <SubmitBtn>
          <BtnText>Entrar</BtnText> 
        </SubmitBtn>
      </ScreenContainer>
    </Container>
  );
}

export default SignIn;