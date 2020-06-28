import React, {useEffect, useState, useContext} from 'react';

import { FlatList } from 'react-native';
import Icons from '@expo/vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import {AuthContext} from '../../contexts/auth';

import { 
  Container,
  CardContainer,
  ContentContainer,
  BoxContainer,
  Abbrev,
  BookContainer, 
  Title, 
  InfoContainer, 
  Label 
} from './styles';

const Home = () => {
  const [data, setData] = useState([]);
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      const config = {
        headers: {Authorization: `Bearer ${user && user.token}`},
      };
      const response = await api.get('books', config);
      setData(response.data);
    }
    loadData();
  }, [])

  function navigateToHome(item) {
    navigation.navigate('Chapters', {book: item});
  }

  return (
    <Container>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.abbrev.pt}
        renderItem={({item}) => (
          <CardContainer onPress={() => navigateToHome(item)}>
            <ContentContainer>
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
            </ContentContainer>
            <Icons name="navigate-next" size={28} />
          </CardContainer>
        )}
      />
    </Container>
  );
}

export default Home;