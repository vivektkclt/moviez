import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens';
import screens from './screens';
import MovieNavigation from './MovieNavigation';
const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.splash} component={Splash} />
      <Stack.Screen name={screens.main} component={MovieNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
