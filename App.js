import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

const Home = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default Home;