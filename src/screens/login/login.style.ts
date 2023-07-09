import {PixelRatio, StyleSheet} from 'react-native';
import colors from '../../theme/colors';
import fontSize from '../../theme/fontSize';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    marginHorizontal: 20,
    flexGrow: 1,
  },
  loginText: {
    fontSize: 26,
    color: colors.charCoal,
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: 'bold',
    marginTop: 90,
  },
  button: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  formView: {
    flex: 1,
    marginTop: 30,
  },
  forgotPwd: {
    alignSelf: 'flex-end',
    paddingVertical: 10,
  },
  forgotPwdLabel: {
    fontSize: 14,
    color: colors.charCoal,
    lineHeight: 21,
  },
  socialView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  socialLogo: {
    marginHorizontal: 20,
  },
  signUpContainer: {
    marginVertical: 20,
  },
  signUpButtonLabel: {
    fontSize: 14,
    color: colors.charCoal,
    lineHeight: 21,
  },
  signUpButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
