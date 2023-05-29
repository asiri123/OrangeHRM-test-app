import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/screens/Login';
import Home from './src/screens/Home';

const stack = createNativeStackNavigator();

const stacknavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="login" component={Login} />
      <stack.Screen name="Home" component={Home} />
    </stack.Navigator>
  );
};

export default stacknavigator;
