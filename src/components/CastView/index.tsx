import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './style';
import {IMG_BASE_URL, PRO_PIC_PLACEHOLDER} from '../../constants/apiConstants';

const CastView = ({cast = []}) => {
  const renderCast = ({item}: any) => {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: item?.profile_path
              ? IMG_BASE_URL + item?.profile_path
              : PRO_PIC_PLACEHOLDER,
          }}
          style={styles.img}
        />
        <Text style={styles.txt}>{item.character}</Text>
        <Text style={styles.txt}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={styles.title}>Cast</Text>
      <FlatList
        horizontal={false}
        data={cast || []}
        renderItem={renderCast}
        numColumns={3}
      />
    </View>
  );
};

export default CastView;
