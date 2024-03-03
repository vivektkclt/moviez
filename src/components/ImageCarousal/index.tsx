import {View, Image} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import Carousel from 'react-native-reanimated-carousel';
import Dimension from '../../utils/Dimension';
import {IMG_BASE_URL} from '../../constants/apiConstants';
interface ICarousal {
  images: any[];
}
const ImageCarousal: FC<ICarousal> = ({images = []}) => {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={Dimension.setWidth(100)}
        height={Dimension.setHeight(40)}
        autoPlay={images.length > 1}
        data={images}
        scrollAnimationDuration={3000}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({item}) => (
          <Image
            style={styles.img}
            source={{
              uri: IMG_BASE_URL + item?.file_path,
            }}
          />
        )}
      />
    </View>
  );
};

export default ImageCarousal;
