import { Platform, ScrollView } from "react-native";
import { Header } from "../../components/Header";
import { useTheme } from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Notification() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        width: "100%",
        backgroundColor: theme.colors.white,
        padding: 32,
        paddingTop: Platform.OS === "ios" ? (24 + insets.top) : 32
      }}
    >
      <Header title="Notificações" />


    </ScrollView>
  )
}
