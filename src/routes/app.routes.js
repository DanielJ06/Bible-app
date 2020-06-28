import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Chapters from '../pages/Chapters'; ''

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chapters" component={Chapters} />
    </Stack.Navigator>
  );
}

export default Routes;