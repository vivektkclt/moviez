import {StyleSheet} from 'react-native';
import Dimension from '../../utils/Dimension';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: Dimension.setHeight(5),
    borderWidth: 1,
    borderColor: colors.borderColor.color1,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
  },
  iconView: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBox: {
    width: '85%',
    fontSize: 15,
    color: colors.text.color1,
  },
});
export default styles;
