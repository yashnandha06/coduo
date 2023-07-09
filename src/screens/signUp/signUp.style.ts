import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';
export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  detailsLabel: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.charCoal,
    lineHeight: 25,
    marginTop: 40,
  },
});
