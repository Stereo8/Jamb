import { Stack } from "expo-router/stack";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DarkScheme, LightScheme } from "../utils/colors";

export default function Layout() {
  const theme = useColorScheme() === "dark" ? DarkScheme : LightScheme;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
