import React from 'react';
import { TouchableOpacity } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { 
  Container,
  ChaptersContainers,
  BtnArea,
  BtnText,
} from './styles';

const Chapters = () => {
  const routes = useRoute();
  const { book } = routes.params;

  return (
      <Container>
        <ChaptersContainers>
          {Array.from(Array(book.chapters)).map((x, index) => (
            <TouchableOpacity key={index} >
              <BtnArea colors={['#E8B155', '#EA907A']}>
                <BtnText>{index + 1}</BtnText>
              </BtnArea>
            </TouchableOpacity>
          ))}
        </ChaptersContainers>
      </Container>
  );
}

export default Chapters;