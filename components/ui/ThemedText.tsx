import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { GlobalTextStyles } from '@/assets/styles/GlobalStyles';
import { ColorProp, ColorTypeProp } from '@/constants/Colors';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  colorName?: ColorTypeProp;
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  colorName = 'text',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, colorName);

  return (
    <Text
      style={[
        { color },
        type === 'default' ? GlobalTextStyles.default : undefined,
        type === 'title' ? GlobalTextStyles.title : undefined,
        type === 'defaultSemiBold' ? GlobalTextStyles.defaultSemiBold : undefined,
        type === 'subtitle' ? GlobalTextStyles.subtitle : undefined,
        type === 'link' ? GlobalTextStyles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}
