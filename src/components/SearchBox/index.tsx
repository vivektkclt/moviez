import {View, TextInput} from 'react-native';
import React, {FC} from 'react';
import styles from './style';
import {ISearch} from '../../types/ISearch';
import {SearchIcon} from '../../assets/icons';
import colors from '../../constants/colors';

const SearchBox: FC<ISearch> = ({
  placeholder = 'Search',
  onChangeText,
  value = '',
  onEndEditing,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <SearchIcon />
      </View>
      <TextInput
        value={value}
        style={styles.textBox}
        onChangeText={onChangeText}
        placeholderTextColor={colors.text.color1}
        placeholder={placeholder}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};

export default SearchBox;
