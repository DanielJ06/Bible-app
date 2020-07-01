import React, {useEffect, useState, useContext} from 'react';
import { FlatList, Text } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';
import Icons from '@expo/vector-icons/Feather';

import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

import { 
  Container,
  InfoContainer,
  BookAbbrev,
  ChapterNumber,
  VerseContainer,
  VerseContent,
  VerseNumber,
  BottomActions,
  Header,
  Previous,
  Next
} from './styles';

const Verses = () => {
  const {user} = useContext(AuthContext);

  const route = useRoute();
  const { book, chapter } = route.params;

  const navigation = useNavigation();
  
  function navigateToBooks(index) {
    navigation.navigate('Books');
  }

  function navigateToChapters(index) {
    navigation.navigate('Chapters');
  }

  const [verse, setVerse] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(chapter);

  useEffect(() => {
    async function loadData() {
      const config = {
        headers: { Authorization: `Bearer ${user && user.token}` },
      };
      const response = await api.get(`verses/nvi/${book.abbrev.pt}/${currentChapter}`, config);
      setVerse(response.data.verses);
    }
    loadData();
  }, [currentChapter])

  function previousChapter() {
    if(currentChapter === 1) {
      return currentChapter;
    } else {
      const nextChapter = currentChapter - 1;
      setCurrentChapter(nextChapter);
    }
  }

  function nextChapter() {
    if(currentChapter === book.chapters) {
      return currentChapter
    } else {
      const nextChapter = currentChapter + 1;
      setCurrentChapter(nextChapter);
    }
  }

  return (
    <React.Fragment>
      <Container>
        <FlatList
          data={verse}
          style={{marginTop: 32}}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(verseNumber) => String(verseNumber.number)}
          ListFooterComponent={() => (
            <Text style={{textAlign: 'center', marginBottom: 86}}>
              {`© ${new Date().getFullYear()}, 💻 with ❤ by Daniel de Jesus`}
            </Text>
          )}
          renderItem={({ item }) => (
            <VerseContainer>
              <VerseContent><VerseNumber>{item.number} </VerseNumber>{item.text}</VerseContent>
            </VerseContainer>
          )}
          />
          <BottomActions>
            <Previous onPress={previousChapter}>
              <Icons name="arrow-left" size={21} />
            </Previous>
            <Header>
              <InfoContainer onPress={navigateToBooks}>
                <BookAbbrev>{book.abbrev.pt}</BookAbbrev>
                <Icons name="chevron-down" size={21} />
              </InfoContainer>
              <InfoContainer onPress={navigateToChapters}>
                <ChapterNumber>{currentChapter}</ChapterNumber>
                <Icons name="chevron-down" size={21} />
              </InfoContainer>
            </Header>
            <Next onPress={nextChapter}>
              <Icons name="arrow-right" size={21} />
            </Next>
          </BottomActions>
      </Container>
    </React.Fragment>
  );
}

export default Verses;