
import { ThemedView } from "@/components/ui/ThemedView";
import { SignInForm } from "@/features/auth/signin";
import { SettingsScreen } from "@/features/user/settings";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Settings() {
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
        <SettingsScreen />
      </ThemedView>
  );
}
