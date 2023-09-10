import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import {Style} from '../signUp/signUp.style';
import CustomStatusbar from '../../components/comman/customStatusbar/CustomStatusbar';
import Header from '../../components/comman/header/Header';
import useForgotPassword from './useForgotPassword';
import {StyledProps} from 'nativewind';

const ForgotPassword = () => {
  const {} = useForgotPassword({});
  return (
    <View style={Style.container}>
      <CustomStatusbar />
      {/* <Header title="Forgot Password" /> */}
      <ScrollView contentContainerStyle={Style.contentContainer}>
        <View></View>
        <Text className="font-bold text-center top-10">
          Please enter you email address To{'\n'}receive a verification code
        </Text>
      </ScrollView>
    </View>
  );
};

export default ForgotPassword;
