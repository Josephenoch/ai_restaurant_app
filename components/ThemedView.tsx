import { View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { FC } from 'react';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedView:FC<ThemedViewProps> = ({ style, lightColor, darkColor, ...otherProps })  =>{
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor:"#F9F9F9" }, style]} {...otherProps} />;
}

export default ThemedView