import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Subtitle, Title } from "./styles";
import { Button } from "../../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthParamsList } from "../../../routes/auth.routes";

export function GetStarted() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<AuthParamsList>();

  function handleInitOnboarding() {
    navigation.navigate("Onboarding");
  }

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

      <Button
        title="Get Started"
        onPress={handleInitOnboarding}
      />
    </Container>
  )
}
