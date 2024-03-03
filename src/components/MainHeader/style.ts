import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg.color1,
    width: '95%',
    alignSelf: 'center',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  titleTxt: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: fonts.antaRegular,
    color: colors.text.color1,
    paddingBottom: 10,
  },
});
export default styles;
