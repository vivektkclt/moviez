import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import Dimension from '../../utils/Dimension';

const styles = StyleSheet.create({
  cardView: {
    minHeight: Dimension.setHeight(20),
    backgroundColor: colors.bg.color1,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'white',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  imgStyle: {
    resizeMode: 'stretch',
    borderRadius: 12,
  },
  movieNameTxt: {
    color: colors.text.color1,
    fontSize: 25,
    fontWeight: '600',
  },
  dateText: {
    color: colors.text.color1,
    fontSize: 15,
    fontWeight: '600',
  },
});
export default styles;
