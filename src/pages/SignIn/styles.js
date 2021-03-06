import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #e5e6f0;
  align-items: center;
  justify-content: center;
`;

export const ScreenContainer = styled.View`
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  elevation: 4;
`;

export const Input = styled.TextInput`
  height: 42px;
  width: 258px;
  padding: 5px 10px;

  margin-bottom: 12px;
  align-self: stretch;

  background-color: #ddd;
  border-radius: 5px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 18px;
`;

export const SubmitBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  
  background-color: #000;
  border-radius: 7px;

  elevation: 2;
  padding: 12px;
`; 

export const BtnText = styled.Text`
  color: #fff;
  font-weight: bold;
`;