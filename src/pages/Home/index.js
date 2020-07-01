import React, {useEffect, useState, useContext} from 'react';

import { FlatList, View, TextInput, Text } from 'react-native';
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
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState('');
  const {user} = useContext(AuthContext);
  const navigation = useNavigation();

  
  useEffect(() => {
    async function loadData() {
      const config = {
        headers: {Authorization: `Bearer ${user && user.token}`},
      };
      const response = await api.get('books', config);
      setData(response.data);
      setFilter(response.data);
    }
    loadData();
  }, [])
  
  useEffect(() => {
    const res = data.filter((book) => (
      book.name.toLowerCase().includes(search.toLowerCase())
    ));
    setFilter(res);
  }, [search])

  function navigateToHome(item) {
    navigation.navigate('Chapters', {book: item});
  }

  return (
    <React.Fragment>
      <View style={{ backgroundColor: '#fff', padding: 18 }} >
        <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Busque por nome:</Text>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Ex: Dan..."
          style={{ backgroundColor: '#e5e6f0', padding: 8, borderRadius: 7 }}
        />
      </View>
      <Container>
        <FlatList 
          data={filter}
          showsVerticalScrollIndicator={false}
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
    </React.Fragment>
  );
}

export default Home;