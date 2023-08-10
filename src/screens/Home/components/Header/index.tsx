import { View } from "react-native";
import { ButtonNotification, Container, Subtitle, Title } from "./styles";
import IconMaterial from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { AuthParamsList } from "../../../../routes/auth.routes";

export function Header() {
  const navigation = useNavigation<AuthParamsList>();

  return (
    <Container>
      <View>
        <Subtitle>Welcome Back,</Subtitle>
        <Title>Stefani Wong</Title>
      </View>

      <ButtonNotification onPress={() => navigation.navigate("Notifications")}>
        <IconMaterial
          name="notifications-none"
          size={20}
        />
      </ButtonNotification>
    </Container>
  )
}
