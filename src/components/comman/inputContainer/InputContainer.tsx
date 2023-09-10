import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import React, {FC} from 'react';
import style from './inputContainer.style';
import {inputContainerProps} from './inputContainerProps';
import SvgIndex from '../../../assets/svgIndex';

const InputContainer: FC<inputContainerProps> = (
  props: inputContainerProps,
) => {
  return (
    <View style={style.container}>
      <Text style={style.labelStyle}>{props.label}</Text>
      <View style={style.inputContainer}>
        <TextInput
          style={style.inputStyle}
          autoCorrect={props.autoCorrect}
          enablesReturnKeyAutomatically={props.enablesReturnKeyAutomatically}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          autoCapitalize="none"
          {...props}
        />
        {props?.rightIcon && (
          <TouchableOpacity
            onPress={event => props?.onRightIconPress?.(event)}
            style={style.iconContainer}>
            {props.secureTextEntry ? (
              <SvgIndex.hideEye />
            ) : (
              <SvgIndex.showEye />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputContainer;
