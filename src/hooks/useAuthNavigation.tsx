import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigation/stacks/rootStackParams';

export const useAuthNavigation = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): NativeStackNavigationProp<RootStackParams, T> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, T>>();
  return navigation;
};
