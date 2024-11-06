import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { ThemedView } from '../ui/ThemedView'
import Ionicons from '@expo/vector-icons/Ionicons'
import { ThemedTextInput, ThemedTextInputProps } from '../ui/ThemedTextInput'
import { ThemedText } from '../ui/ThemedText'
import { useThemeColors } from '@/hooks/useThemeColor'
import { ColorProp } from '@/constants/Colors'

export type TextInputWithIconProps = ThemedTextInputProps & {
  lightColor?: string;
  darkColor?: string;
  title?: string;
  icon?: any;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
};

export default function TextInputWithIcon({lightColor, darkColor, title, icon = null, value, onChangeText, secureTextEntry, ...others}: TextInputWithIconProps) {
  const theme_color: ColorProp = useThemeColors();

  const inputRef: any = useRef(null);

  const handleClick = () => {
    inputRef?.current.focus();
  }

  return (
        <TouchableOpacity
          style={[
            styles.box,
            {
              backgroundColor: theme_color.background
            }
          ]}
          activeOpacity={1}
          onPress={handleClick}
          >
          {/* Input Field */}
          <ThemedView style={styles.lateral}>
              {
                icon ? <Ionicons
                  {...icon}
                  color={theme_color.text}
                  style={{
                        alignSelf: 'flex-end',
                        width: icon.size ?? 24,
                        height: icon.size ?? 24,
                        marginRight: 12,
                        marginLeft: 4,
                        marginBottom: 1
                    }}
                  /> : <></>
              }
              <ThemedView style={styles.vertical}>
                  <ThemedText
                      style={styles.title}
                      colorName='icon'
                      >{title}</ThemedText>

                  <ThemedTextInput 
                      style={styles.textinput}
                      value={value}
                      autoCapitalize="none"
                      onChangeText={onChangeText}
                      secureTextEntry={secureTextEntry}
                      textinputRef={inputRef}
                      {...others}
                      />
              </ThemedView>
          </ThemedView>
          
      </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create(
  {
      box: {
          paddingTop: 8,
          paddingBottom: 8,
          paddingHorizontal: 10,
          width: "60%",
          margin: 5,
          borderColor: '#ccc',
          borderWidth: 1,
      },
      title: {
          fontWeight: '600',
          fontSize: 13
      },
      lateral: {
          flexDirection: 'row',
          width: '100%'
      },
      vertical: {
          flexDirection: 'column',
          flex: 1
      },
      textinput: {
          height: 24,
          fontSize: 15,
          flex: 1
      }
  }
)
