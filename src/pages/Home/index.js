import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import { 
  Container,
  CardContainer,
  BoxContainer,
  Abbrev,
  BookContainer, 
  Title, 
  InfoContainer, 
  Label 
} from './styles';

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
          <CardContainer>
            <BoxContainer
              colors={['#E8B155', '#EA907A']}
            >
              <Abbrev>{item.abbrev.pt}</Abbrev>
            </BoxContainer>
            <BookContainer key={item.abbrev.pt}>
              <Title>{item.name}</Title>
              <InfoContainer>
                <Label>{item.chapters} capítulos</Label>
                <Label>{item.group}</Label>
                <Label>
                  {item.testament === 'VT' ? 'Velho Testamento' : 'Novo Testamento'}
                </Label>
              </InfoContainer>
            </BookContainer>
          </CardContainer>
        )}
      />
    </Container>
  );
}

export default Home;