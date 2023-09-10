import {View, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Styles} from './header.style';
import {headerProps} from './headerProps';
import SvgIndex from '../../../assets/svgIndex';

const Header: FC<headerProps> = ({title, leftIcon, rightIcon}: headerProps) => {
  return (
    <View style={Styles.container}>
      {/* <TouchableOpacity style={Styles.leftIco}>
        {leftIcon ? leftIcon : <SvgIndex.backArrow />}
      </TouchableOpacity> */}
      <View style={Styles.labelContainer}>
        <Text>{title}</Text>
      </View>
      {/* <TouchableOpacity style={Styles.rightIco}>
        {rightIcon ? rightIcon : <SvgIndex.backArrow />}
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;
