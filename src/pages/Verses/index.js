import React, {useEffect, useState, useContext} from 'react';
import { FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

import { 
  Container,
  VerseContent,
  VerseNumber,
} from './styles';

const Verses = () => {
  const [verse, setVerse] = useState([]);
  const {user} = useContext(AuthContext);

  const route = useRoute();
  const { book, chapter } = route.params;

  useEffect(() => {
    async function loadData() {
      const config = {
        headers: { Authorization: `Bearer ${user && user.token}` },
      };
      const response = await api.get(`verses/nvi/${book.abbrev.pt}/${chapter}`, config);
      setVerse(response.data.verses);
    }
    loadData();
  }, [])

  return (
    <FlatList
      data={verse}
      keyExtractor={(verseNumber) => verseNumber.number}
      style={{padding: 12}}
      renderItem={({ item }) => (
        <Container>
          <VerseContent><VerseNumber>{item.number}</VerseNumber> {item.text}</VerseContent>
        </Container>
      )}
    />
  );
}

export default Verses;