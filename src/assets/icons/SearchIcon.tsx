import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../../constants/colors';
import Dimension from '../../utils/Dimension';
const SearchIcon = ({
  size = Dimension.setWidth(5),
  fill = colors.iconColor.color1,
}) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Path
      d="M20.6679 18.6753L16.4338 14.4411C16.2256 14.2337 15.9438 14.1173 15.6499 14.1173C15.3561 14.1173 15.0742 14.2337 14.866 14.4411C13.7503 15.5199 12.3082 16.1981 10.7658 16.3695C9.22329 16.5409 7.66752 16.1958 6.34221 15.3882C5.0169 14.5806 3.99691 13.3562 3.44204 11.9068C2.88717 10.4574 2.82876 8.86494 3.27597 7.3788C3.72318 5.89265 4.65073 4.59683 5.91333 3.69435C7.17592 2.79186 8.70222 2.3337 10.2531 2.39162C11.804 2.44955 13.2919 3.02031 14.4836 4.01447C15.6754 5.00863 16.5037 6.37003 16.8388 7.88539C17.0789 8.98476 17.0541 10.1255 16.7666 11.2134C16.7326 11.3408 16.7241 11.4737 16.7415 11.6044C16.7589 11.7351 16.8018 11.8611 16.8679 11.9753C16.934 12.0894 17.0219 12.1894 17.1267 12.2695C17.2314 12.3496 17.3509 12.4084 17.4783 12.4423C17.7356 12.5109 18.0097 12.4745 18.2402 12.341C18.4706 12.2075 18.6387 11.988 18.7072 11.7306C19.2597 9.65435 19.0544 7.44919 18.1281 5.51059C17.2019 3.572 15.6153 2.02679 13.6529 1.15207C11.6905 0.277354 9.48071 0.130351 7.41975 0.737425C5.3588 1.3445 3.58152 2.66594 2.40666 4.46476C1.23179 6.26358 0.736188 8.42212 1.00873 10.5533C1.28127 12.6844 2.30412 14.6488 3.89385 16.094C5.48358 17.5393 7.5362 18.371 9.6836 18.4399C11.831 18.5088 13.9327 17.8104 15.6118 16.47L19.2485 20.1027C19.3417 20.1961 19.4523 20.2701 19.5741 20.3207C19.6958 20.3712 19.8264 20.3972 19.9582 20.3972C20.0901 20.3972 20.2207 20.3712 20.3424 20.3207C20.4642 20.2701 20.5748 20.1961 20.6679 20.1027C20.7625 20.0095 20.8376 19.8983 20.8888 19.7758C20.9401 19.6533 20.9665 19.5218 20.9665 19.389C20.9665 19.2562 20.9401 19.1247 20.8888 19.0022C20.8376 18.8797 20.7625 18.7685 20.6679 18.6753Z"
      fill={fill}
    />
    <Path
      d="M12.9935 12.4163C12.8334 12.2675 12.6283 12.1762 12.4106 12.1566C12.1929 12.137 11.9748 12.1903 11.7906 12.3081C11.2708 12.6288 10.6745 12.8043 10.0638 12.8163C9.45307 12.8283 8.85032 12.6763 8.3183 12.3762C8.13794 12.271 7.92835 12.227 7.7209 12.2508C7.51344 12.2747 7.3193 12.3651 7.16754 12.5085L7.10739 12.5647C6.99971 12.6673 6.91716 12.7933 6.86617 12.933C6.81519 13.0728 6.79714 13.2224 6.81344 13.3702C6.82973 13.518 6.87993 13.6601 6.96013 13.7854C7.04033 13.9106 7.14835 14.0157 7.2758 14.0923C8.133 14.5866 9.10889 14.8373 10.0982 14.8175C11.0874 14.7977 12.0525 14.5082 12.8893 13.9801C13.0115 13.9024 13.1148 13.7982 13.1913 13.6753C13.2679 13.5523 13.3158 13.4137 13.3316 13.2698C13.3474 13.1258 13.3306 12.9801 13.2825 12.8435C13.2344 12.7068 13.1562 12.5828 13.0537 12.4805L12.9935 12.4163Z"
      fill="#A5F53E"
    />
  </Svg>
);
export default SearchIcon;