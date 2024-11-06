
import { ThemedView } from "@/components/ui/ThemedView";
import { PlaneSeatsScreen } from "@/features/user/plane_seats/components/PlaneSeatsScreen";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
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
          <PlaneSeatsScreen />
      </ThemedView>
  );
}
