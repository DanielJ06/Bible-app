import React, {useEffect, useState} from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import { Container } from './styles';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/books/');
      setData(response.data);
    }
    loadData();
  }, [])

  return (
    <Container>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.abbrev.pt}
        renderItem={({item}) => (
          <TouchableOpacity key={item.abbrev.pt}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}

export default Home;