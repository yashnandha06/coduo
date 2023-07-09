import React from 'react';
import {
  Image,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import style from './login.style';
import Animated from 'react-native-reanimated';
import CustomStatusbar from '../../components/comman/customStatusbar/CustomStatusbar';
import InputContainer from '../../components/comman/inputContainer/InputContainer';
import Button from '../../components/comman/Button/Button';
import OrLine from '../../components/comman/orLine/OrLine';
import LoginController from './useLogin';

const Login = () => {
  const {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
  } = LoginController({});
  return (
    <View style={style.container}>
      <CustomStatusbar translucent={false} />
      <ScrollView
        persistentScrollbar
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.contentContainerStyle}>
        <KeyboardAvoidingView
          style={style.container}
          behavior={Platform.OS == 'ios' ? 'padding' : undefined}>
          <Text style={style.loginText}>
            Welcome back you've{'\n'}been missed
          </Text>
          <View id="loginForm" style={style.formView}>
            <InputContainer
              key={'email'}
              label="Email"
              keyboardType="email-address"
              placeholder="CoduoEmail@gmail.com"
            />
            <InputContainer
              key={'password'}
              label="Password"
              placeholder="Your password"
              keyboardType="default"
              rightIcon
              secureTextEntry={secureTextEntry}
              onRightIconPress={() => setSecureTextEntry(!secureTextEntry)}
            />
            <TouchableOpacity
              style={style.forgotPwd}
              onPress={() => onClickForgotPassword()}>
              <Text style={style.forgotPwdLabel}>Forgot Password?</Text>
            </TouchableOpacity>
            <Button
              key={'loginButton'}
              label="Login"
              containerStyle={style.button}
            />
            <OrLine label="Or Login With" />
            {/* Social Logins */}
            <View style={style.socialView}>
              <TouchableOpacity style={style.socialLogo}>
                <Image
                  height={40}
                  width={40}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={style.socialLogo}>
                <Image
                  height={40}
                  width={40}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity style={style.socialLogo}>
                <Image
                  height={40}
                  width={40}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={style.signUpContainer}>
            <TouchableOpacity
              onPress={() => onClickSignUp()}
              style={style.signUpButton}>
              <Text style={style.signUpButtonLabel}>
                Don't have an account? signUp
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default Login;
