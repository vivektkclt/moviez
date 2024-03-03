import {TouchableOpacity} from 'react-native';
import React, {FC} from 'react';

//styles
import styles from './style';

// assets

//constants
import colors from '../../constants/colors';
import Dimension from '../../utils/Dimension';
import {BackArrow} from '../../assets/icons';
import CommonStyles from '../../common/CommonStyles';
interface BackInterface {
  onPress: () => void;
  btnSize?: number;
}
const BackBtn: FC<BackInterface> = ({onPress, btnSize = 6}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {
          height: Dimension.setWidth(btnSize),
          width: Dimension.setWidth(btnSize),
        },
        CommonStyles.container.shadow,
      ]}>
      <BackArrow
        size={Dimension.setWidth(btnSize / 2)}
        fill={colors.iconColor.color2}
      />
    </TouchableOpacity>
  );
};

export default BackBtn;
