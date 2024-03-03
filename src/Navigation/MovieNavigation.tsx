import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MovieDetails, MovieList} from '../screens';
import screens from './screens';
import {MainHeader} from '../components';
const Stack = createStackNavigator();
const MovieNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: MainHeader,
      }}>
      <Stack.Screen name={screens.movieList} component={MovieList} />
      <Stack.Screen name={screens.movieDetails} component={MovieDetails} />
    </Stack.Navigator>
  );
};

export default MovieNavigation;
