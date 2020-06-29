import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #e5e6f0;
  padding: 0 18px;
`;

export const VerseContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 21px;
`;

export const VerseContent = styled.Text`
  font-size: 18px;
  margin-left: 12px;
`;

export const VerseNumber = styled.Text`
  font-size: 21px;
  color: #999;
  font-weight: bold;
`;

export const ActionsChapter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 21px;
  background-color: transparent;
`;

export const Previous = styled.TouchableOpacity`
  position: absolute;
  width: 48px;
  height: 48px; 
  align-items: center; 
  justify-content: center; 
  left: 20px; 
  bottom: 20px; 
  background-color: #eee; 
  border-radius: 30px; 
  elevation: 8;
`;

export const Next = styled.TouchableOpacity`
  position: absolute;
  width: 48px;
  height: 48px; 
  align-items: center; 
  justify-content: center; 
  right: 20px; 
  bottom: 20px; 
  background-color: #eee; 
  border-radius: 30px; 
  elevation: 8;
`;