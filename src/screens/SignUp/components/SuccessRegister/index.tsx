import { Dimensions, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Form, FormInputs, Subtitle, Title } from "./styles";
import { ButtonGradient } from "../../../../components/ButtonGradient";
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import SuccessSvg from "../../../../assets/succes_register.svg"
import { useNavigation } from "@react-navigation/native";

export function SuccessRegister() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  async function handleSubmitSuccess() {
    navigation.navigate("SignIn")
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <SuccessSvg
        style={{ marginTop: 102 }}
      />

      <View style={{ alignItems: "center", paddingHorizontal: 32 }}>
        <Title>Welcome, Stefani</Title>
        <Subtitle>You are all set now, let’s reach your goals together with us</Subtitle>
      </View>

      <ButtonGradient
        title="Go To Home"
        onPress={handleSubmitSuccess}
        style={{ paddingHorizontal: 32 }}
      />
    </Container>
  )
}
