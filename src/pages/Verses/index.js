import React, {useEffect, useState, useContext} from 'react';
import { View, Text, FlatList } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';
// import { Container } from './styles';

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
      const response = await api.get(`verses/acf/${book.abbrev.pt}/${chapter}`, config);
      setVerse(response.data.verses);
    }
    loadData();
  }, [])

  return (
    <FlatList 
      data={verse}
      keyExtractor={(verseNumber) => verseNumber.number}
      renderItem={({ item }) => (
        <View>
          <Text>{item.number} {item.text}</Text>
        </View>
      )}
    />
  );
}

export default Verses;