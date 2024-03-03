import {StyleSheet} from 'react-native';
import Dimension from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    height: Dimension.setHeight(40),
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});
export default styles;
