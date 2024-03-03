import {StyleSheet} from 'react-native';
import Dimension from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(2, 0, 0, 0.5)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderStyle: {
    height: Dimension.setWidth(40),
    width: Dimension.setWidth(40),
  },
});

export default styles;
