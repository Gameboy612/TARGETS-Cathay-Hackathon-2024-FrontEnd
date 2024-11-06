import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ui/ThemedView';
import { SignUpForm } from '@/features/auth/signup';

const RegisterPage = () => {
  const insets = useSafeAreaInsets();
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
        <SignUpForm />
    </ThemedView>
  )
}

export default RegisterPage