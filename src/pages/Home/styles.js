import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  padding: 23px;
  background-color: #e5e6f0;
`;

export const CardContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  margin: 8px 0;
  border-radius: 5px;
  padding: 15px;
  
  background-color: #fff;
  elevation: 2;
`;

export const BoxContainer = styled(LinearGradient)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 52px;
  height: 52px;
  
  border-radius: 10px;
`;

export const Abbrev = styled.Text`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
`;

export const BookContainer = styled.View`
  margin-left: 9px;
  padding: 9px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const InfoContainer = styled.View`
`;

export const Label = styled.Text``;