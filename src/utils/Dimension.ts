import {Dimensions} from 'react-native';

let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
class Dimension {
  setHeight(percentage: number) {
    return deviceHeight * (percentage / 100);
  }
  setWidth(percentage: number) {
    return deviceWidth * (percentage / 100);
  }
}
export default new Dimension();
