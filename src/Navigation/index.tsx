import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../constants/colors';
import AuthNavigation from './AuthNavigation';
const Navigation = () => {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: colors.bg.color1,
          primary: '',
          card: '',
          text: '',
          border: '',
          notification: '',
        },
      }}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
