type fontSizeType = 'small' | 'regular' | 'medium' | 'large' | number;

const fontSize: {[key in fontSizeType]: number} = {
  small: 10,
  regular: 14,
  medium: 18,
  large: 20,
};

export default fontSize;
