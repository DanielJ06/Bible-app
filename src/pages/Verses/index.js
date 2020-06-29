import React, {useEffect, useState, useContext} from 'react';
import { FlatList, Text } from 'react-native';

import { useRoute } from '@react-navigation/native';
import Icons from '@expo/vector-icons/Feather';

import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

import { 
  Container,
  VerseContainer,
  VerseContent,
  VerseNumber,
  ActionsChapter,
  Previous,
  Next
} from './styles';

const Verses = () => {
  const {user} = useContext(AuthContext);

  const route = useRoute();
  const { book, chapter } = route.params;

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
    <Container>
      <FlatList
        data={verse}
        keyExtractor={(verseNumber) => String(verseNumber.number)}
        ListFooterComponent={() => (
          <Text style={{textAlign: 'center', marginBottom: 64}}>
            {`© ${new Date().getFullYear()}, 💻 with ❤ by Daniel de Jesus`}
          </Text>
        )}
        renderItem={({ item }) => (
          <VerseContainer>
            <VerseNumber>{item.number}</VerseNumber> 
            <VerseContent>{item.text}</VerseContent>
          </VerseContainer>
        )}
        />
        {currentChapter !== 1 ? (
          <Previous onPress={previousChapter}>
            <Icons name="arrow-left" size={21} />
          </Previous>
        ) : <></>}
        {currentChapter !== book.chapters ? (
          <Next onPress={nextChapter}>
            <Icons name="arrow-right" size={21} />
          </Next>
        ): <></>}
    </Container>
  );
}

export default Verses;