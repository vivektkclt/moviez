import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

//STYLES
import styles from './style';

//CONSTANTS
import strings from '../../constants/strings';

const MainHeader = () => {
  return (
    <View style={[styles.container]}>
      <SafeAreaView>
        <Text style={styles.titleTxt}>{strings.moviez}</Text>
      </SafeAreaView>
    </View>
  );
};

export default MainHeader;
