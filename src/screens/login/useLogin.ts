import React, {useState} from 'react';
import {useAuthNavigation} from '../../hooks/useAuthNavigation';
import {loginHookProps} from './login.props';

const LoginController = (props: loginHookProps) => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const navigation = useAuthNavigation();
  const onClickForgotPassword = () => {
    navigation.navigate('forgotPassword');
  };

  const onClickSignUp = () => {
    navigation.navigate('signUp');
  };
  return {
    onClickForgotPassword,
    onClickSignUp,
    secureTextEntry,
    setSecureTextEntry,
  };
};

export default LoginController;
