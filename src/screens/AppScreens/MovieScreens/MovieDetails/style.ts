import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import Dimension from '../../../../utils/Dimension';

const styles = StyleSheet.create({
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
  },
  titleTxt: {
    fontSize: 22,
    color: colors.text.color1,
    fontWeight: '600',
    marginBottom: 10,
  },
  desc: {
    color: colors.text.color1,
    fontSize: 15,
    marginBottom: 10,
  },
  poster: {
    height: Dimension.setHeight(64),
    width: '100%',
    resizeMode: 'contain',
  },
});
export default styles;
