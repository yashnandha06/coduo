import {KeyboardType, GestureResponderEvent} from 'react-native';

export interface inputContainerProps {
  placeholder?: string | undefined;
  label?: string | undefined;
  autoCorrect?: boolean;
  enablesReturnKeyAutomatically?: boolean;
  keyboardType?: KeyboardType;
  secureTextEntry?: boolean;
  error?: string;
  rightIcon?: boolean;
  onRightIconPress?: (event: GestureResponderEvent) => void;
}
