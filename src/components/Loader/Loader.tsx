import {View} from 'react-native';
import React from 'react';

//STYLES
import styles from './style';

//LIBRARIES
import LottieView from 'lottie-react-native';

//ASSETS
import animations from '../../assets/animations';

//CENTER STATE
import useGlobalStore from '../../store/globalStore';

const Loader = () => {
  const globalState = useGlobalStore();
  return (
    <>
      {globalState.isLoading ? (
        <View style={styles.container}>
          <LottieView
            resizeMode="contain"
            autoPlay
            loop
            source={animations.reel}
            style={styles.loaderStyle}
          />
        </View>
      ) : null}
    </>
  );
};

export default Loader;
