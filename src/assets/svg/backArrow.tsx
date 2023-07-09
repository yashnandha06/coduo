import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import colors from '../../theme/colors';
const backArrow = (props: SvgProps) => (
  <Svg
    viewBox="0 0 320 512"
    fill={colors.JetBlack}
    height={30}
    width={30}
    {...props}>
    <Path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
  </Svg>
);
export default backArrow;
