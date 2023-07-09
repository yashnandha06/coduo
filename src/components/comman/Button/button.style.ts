import {StyleSheet} from 'react-native';
import colors from '../../../theme/colors';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: colors.coral,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    fontSize: 16,
    color: colors.white,
    lineHeight: 21,
    // fontFamily: fontFamily.robotoBold,
  },
  indicatorStyle: {
    marginRight: 10,
  },
});
export default style;
