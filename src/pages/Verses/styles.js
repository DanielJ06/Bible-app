import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #e5e6f0;
  padding: 0 16px;
`;

export const Header = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  
  padding:  5px 20px;
  align-items: center; 
  justify-content: center;
  
  background-color: #eee; 
  border-radius: 30px; 
  elevation: 8;
`;

export const InfoContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;

  align-items: center;

  padding: 8px;
  border-radius: 7px;
  margin: 0 15px;
`;

export const BookAbbrev = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const ChapterNumber = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const VerseContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
`;

export const VerseContent = styled.Text`
  font-size: 18px;
  margin-left: 8px;
`;

export const VerseNumber = styled.Text`
  font-size: 21px;
  color: #999;
  font-weight: bold;
`;

export const BottomActions = styled.View`
  display: flex;
  flex-direction: row;
  
  align-items: center; 
  justify-content: space-between;  
  bottom: 72px;
`;

export const Previous = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center; 
  justify-content: center;  
  background-color: #eee; 
  border-radius: 30px; 
  elevation: 8;
`;

export const Next = styled.TouchableOpacity`
  width: 48px;
  height: 48px; 
  align-items: center; 
  justify-content: center;  
  background-color: #eee; 
  border-radius: 30px; 
  elevation: 8;
`;