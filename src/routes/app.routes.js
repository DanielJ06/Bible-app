import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Chapters from '../pages/Chapters';
import Verses from '../pages/Verses';
const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Books" component={Home} />
      <Stack.Screen name="Chapters" component={Chapters} />
      <Stack.Screen 
        options={{headerShown: false}}
        name="Verses" 
        component={Verses} 
      />
    </Stack.Navigator>
  );
}

export default Routes;