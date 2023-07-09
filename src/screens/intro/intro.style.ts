import {StyleSheet, Dimensions, PixelRatio} from 'react-native';
import colors from '../../theme/colors';
const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  introSlide: {
    width,
    height,
  },
  intoSlidesImage: {
    height: PixelRatio.getPixelSizeForLayoutSize(120),
    width: '100%',
  },
  paginationWrapper: {
    position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 10,
    width: 20,
    borderRadius: 10 / 2,
    backgroundColor: colors.trueBlue,
    marginLeft: 10,
  },
  contentContainer: {
    marginTop: 50,
    // alignItems: 'center',
  },
  introTitle: {
    fontSize: 24,
    color: colors.trueBlue,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  introDescription: {
    fontSize: 13,
    color: colors.neutralGray,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginHorizontal: 20,
    lineHeight: 18,
  },
  buttonContainer: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  loginButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default style;
