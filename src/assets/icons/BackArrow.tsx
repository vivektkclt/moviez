import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackArrow = ({size = 20, fill = 'white'}) => (
  <Svg width={size} height={size} viewBox="0 0 17 16" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.36834 2.07396L4.49451 6.94779H16.7627V8.89732H4.49451L9.36834 13.7711L7.98981 15.1497L0.762695 7.92255L7.98981 0.695435L9.36834 2.07396Z"
      fill={fill}
    />
  </Svg>
);
export default BackArrow;
