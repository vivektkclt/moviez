import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import Dimension from '../../utils/Dimension';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '35%',
    borderWidth: 1,
    minHeight: Dimension.setHeight(20),
  },
  title: {
    color: colors.text.color1,
    fontSize: 22,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    width: '90%',
    height: Dimension.setHeight(15),
    borderRadius: 8,
    resizeMode: 'cover',
  },
  txt: {
    color: colors.text.color1,
  },
});
export default styles;
