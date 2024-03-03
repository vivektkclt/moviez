/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';

//styles
import styles from './style';

//images
import images from '../../../assets/images';

//screens
import screens from '../../../Navigation/screens';

//constants
import strings from '../../../constants/strings';

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screens.main);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={images.logo} />
      <Text style={styles.titleTxt}>{strings.moviez}</Text>
    </View>
  );
};

export default SplashScreen;
