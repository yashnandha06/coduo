import {Dimensions, ScrollView} from 'react-native';
import {introHookProps} from './intro.props';
import {useRef, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/stacks/rootStackParams';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthNavigation} from '../../hooks/useAuthNavigation';

const useIntro = ({}: introHookProps) => {
  const navigation = useAuthNavigation();
  const scrollViewRef = useRef<ScrollView>();
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

  const setSliderPage = (event: any) => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const onPress = () => {
    navigation.navigate('login');
  };

  const onPressGetStart = () => {
    navigation.navigate('signUp');
  };

  const handleDotClick = (index: number) => {
    setSliderState({
      ...sliderState,
      currentPage: index,
    });

    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * width,
        animated: true,
      });
    }
  };
  return {
    sliderState,
    setSliderState,
    setSliderPage,
    onPress,
    scrollViewRef,
    handleDotClick,
    onPressGetStart,
  };
};

export default useIntro;
