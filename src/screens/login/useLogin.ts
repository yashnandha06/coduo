import React, {useState} from 'react';
import {useAuthNavigation} from '../../hooks/useAppNavigation';
import {loginHookProps} from './loginProps';

const useLogin = () => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const navigation = useAuthNavigation();
  const onClickForgotPassword = () => {
    navigation.navigate('forgotPassword', {
      type: 'ForgotPassword',
    });
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

export default useLogin;
