
import { ThemedView } from "@/components/ui/ThemedView";
import { SignInForm } from "@/features/auth/signin";
import useSignIn from "@/hooks/useSignIn";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignIn() {
  const insets = useSafeAreaInsets();
  useSignIn()
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
          <SignInForm />
      </ThemedView>
  );
}
