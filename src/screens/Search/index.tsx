import { SafeAreaView, Text } from "react-native";
import { Container } from "./styles";
import { useTheme } from "styled-components/native";

export function Search() {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <Container>
        <Text>Search</Text>
      </Container>
    </SafeAreaView>
  )
}
