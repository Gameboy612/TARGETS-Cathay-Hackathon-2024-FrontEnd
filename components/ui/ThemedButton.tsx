import { type TouchableOpacityProps, View, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { forwardRef } from 'react';

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
};

export const ThemedButton = forwardRef(function ThemedButton({ children, style, lightColor, darkColor, ...otherProps }: ThemedButtonProps, ref: any) {
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'accent');

    return <TouchableOpacity style={[{
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: backgroundColor
    }, style]} {...otherProps} ref={ref}>
      {children}
    </TouchableOpacity>;
  }
)