/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text, ScrollView, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BackBtn, CastView, ImageCarousal} from '../../../../components';
import styles from './style';
import useGetApi from '../../../../api/hooks/useGetApi';
import {END_POINTS, IMG_BASE_URL} from '../../../../constants/apiConstants';
import CommonStyles from '../../../../common/CommonStyles';

const MovieDetails = ({navigation, route}: any) => {
  const [get] = useGetApi();
  const {title, movieId} = route?.params || {};

  // STATE VARIABLES
  const [images, setImages] = useState<any>([]);
  const [details, setDetails] = useState<any>({});
  const [cast, setCast] = useState<any>([]);
  //BACK
  const handleBackPress = () => {
    navigation.goBack();
  };
  useEffect(() => {
    getMovieImages();
    getMovieDetails();
    getCredits();
  }, []);
  //GET MOVIE IMAGES
  const getMovieImages = async () => {
    let response = await get({
      endPoint: END_POINTS.MOVIE_IMAGES.replace('movie_id', movieId),
      params: {},
    });
    setImages(
      response.backdrops && response.backdrops.length > 0
        ? response?.backdrops
        : response?.posters || [],
    );
  };

  //GET DETAILS

  const getMovieDetails = async () => {
    const response = await get({
      endPoint: END_POINTS.MOVIE_DETAILS.replace('movie_id', movieId),
    });
    setDetails(response);
  };

  //GET CREDITS

  const getCredits = async () => {
    const response: any = await get({
      endPoint: END_POINTS.MOVIE_CREDITS.replace('movie_id', movieId),
    });
    setCast(response?.cast);
  };
  return (
    <ScrollView>
      <ImageCarousal images={images} />
      <View style={styles.titleView}>
        <BackBtn btnSize={8} onPress={handleBackPress} />
      </View>
      <View style={CommonStyles.container.appWrapper}>
        <Text numberOfLines={1} style={styles.titleTxt}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {details?.genres?.map((item: any) => (
            <Text key={item?.id} style={styles.desc}>
              {item?.name + ' | '}
            </Text>
          ))}
        </View>
        <Text style={styles.desc}>{details?.overview}</Text>
        <CastView cast={cast} />
        {details?.poster_path ? (
          <Image
            style={styles.poster}
            source={{uri: IMG_BASE_URL + details?.poster_path}}
          />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
