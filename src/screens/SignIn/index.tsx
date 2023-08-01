import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Subtitle, Title } from "./styles";
import { Button } from "../../components/Button";

export function SignIn() {
  const insets = useSafeAreaInsets();

  return (
    <Container
      start={{ x: .1, y: 0 }}
      colors={['#92A3FD', '#9DCEFF']}
      style={{ paddingTop: insets.top }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Title>Fitness</Title>
        <Subtitle>Everybody Can Train</Subtitle>
      </View>

      <Button/>
    </Container>
  )
}
