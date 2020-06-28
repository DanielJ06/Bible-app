import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled.ScrollView`
`;

export const ChaptersContainers = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: flex-start;
  align-items: center;

  padding: 8px;
`;

export const BtnArea = styled(LinearGradient)`
  width: 49px;
  height: 49px;

  justify-content: center;
  align-items: center;
  
  margin: 8px;
  padding: 8px;

  border-radius: 68px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
