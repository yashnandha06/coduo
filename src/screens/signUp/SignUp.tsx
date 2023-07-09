import {View, Text} from 'react-native';
import React from 'react';
import CustomStatusbar from '../../components/comman/customStatusbar/CustomStatusbar';
import {Style} from './signUp.style';

const SignUp = () => {
  return (
    <View style={Style.container}>
      <CustomStatusbar />
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
