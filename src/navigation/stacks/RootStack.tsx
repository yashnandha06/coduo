import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams} from './rootStackParams';
import Login from '../../screens/login/Login';
import Intro from '../../screens/intro/Intro';
import ForgotPassword from '../../screens/forgotPassword/ForgotPassword';
import SignUp from '../../screens/signUp/SignUp';

const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="intro">
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen name="signUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default RootStack;
