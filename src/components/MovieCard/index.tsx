import {Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import CommonStyles from '../../common/CommonStyles';
import {IMG_BASE_URL} from '../../constants/apiConstants';
import {IMovie} from '../../types/IMovie';
import moment from 'moment';

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import screens from '../../Navigation/screens';
//CARD WITH BASIC MOVIE DETAILS

const MovieCard: FC<IMovie> = ({backdrop_path, id, title, release_date}) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(screens.movieDetails, {movieId: id, title});
      }}>
      <ImageBackground
        source={{
          uri: IMG_BASE_URL + backdrop_path,
        }}
        resizeMode="stretch"
        imageStyle={[styles.imgStyle]}
        style={[styles.cardView, CommonStyles.container.shadowWhite]}>
        <Text style={[styles.movieNameTxt]}>{title}</Text>
        <Text style={styles.dateText}>
          {moment(release_date).format('MMMM Do YYYY')}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default MovieCard;
