import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
import fonts from '../../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg.color1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: '35%',
    width: '35%',
    resizeMode: 'contain',
  },
  titleTxt: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 45,
    fontFamily: fonts.antaRegular,
    color: colors.text.color1,
    top: -70,
  },
});

export default styles;
