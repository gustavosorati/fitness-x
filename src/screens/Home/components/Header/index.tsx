import { View } from "react-native";
import { ButtonNotification, Container, Subtitle, Title } from "./styles";
import IconMaterial from "@expo/vector-icons/MaterialIcons";

export function Header() {
  return (
    <Container>
      <View>
        <Subtitle>Welcome Back,</Subtitle>
        <Title>Stefani Wong</Title>
      </View>

      <ButtonNotification>
        <IconMaterial
          name="notifications-none"
          size={20}
        />
      </ButtonNotification>
    </Container>
  )
}
