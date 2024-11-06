import { Text, type TextInputProps, StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { GlobalTextStyles } from '@/assets/styles/GlobalStyles';
import { ColorTypeProp } from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef, useState } from 'react';

export type ThemedTextInputProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  colorName?: ColorTypeProp;
  placeholderColorName?: ColorTypeProp;
  textinputRef?: any;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  type = 'default',
  colorName = 'text',
  placeholderColorName = 'icon',
  textinputRef,
  ...rest
}: ThemedTextInputProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, colorName);
  const placeholder_color = useThemeColor({ light: lightColor, dark: darkColor }, placeholderColorName);

  const [hideCredentials, setHideCredentials] = useState(true);


  return (
    <View
      style={{ flexDirection: 'row', width: '100%' }}
      >
      <TextInput
        style={[
          { color },
          type === 'default' ? GlobalTextStyles.default : undefined,
          type === 'title' ? GlobalTextStyles.title : undefined,
          type === 'defaultSemiBold' ? GlobalTextStyles.defaultSemiBold : undefined,
          type === 'subtitle' ? GlobalTextStyles.subtitle : undefined,
          type === 'link' ? GlobalTextStyles.link : undefined,
          style,
        ]}
        placeholderTextColor={placeholder_color}
        ref={textinputRef}
        {...rest}
        secureTextEntry={rest.secureTextEntry ? hideCredentials : false}
      />
      {
        rest.secureTextEntry ?
        <TouchableOpacity
          style={{ alignItems: 'flex-end', width: 20, height: 20 }}
          onPress={() => setHideCredentials((val) => !val)}
        >
          <Ionicons name={hideCredentials ? "eye-off" : "eye"} size={20} color={color} />
      </TouchableOpacity> : <></>
      }
    </View>
    
  );
}
