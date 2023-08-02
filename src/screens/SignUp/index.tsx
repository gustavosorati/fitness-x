import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Footer, Form, FormInputs, Line, RegisterLink, RegisterMessage, Separator, SeparatorText, Subtitle, Title } from "./styles";
import GoogleSvg from "../../assets/icons/google.svg"
import FacebookSvg from "../../assets/icons/facebook.svg"
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { ButtonGradient } from "../../components/ButtonGradient";
import { useNavigation } from "@react-navigation/native";
import { ButtonSocial } from "../../components/ButtonSocial";
import { TouchableOpacity } from "react-native-gesture-handler";

export function SignUp() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  async function handleRegister() {
    navigation.navigate("PersonalInformation");
  }

  async function handleLogin() {
    navigation.navigate("SignIn");
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Subtitle>Hey there,</Subtitle>
      <Title>Create an Account</Title>

      <Form>
        <FormInputs>
          <Input
            iconName="user"
            placeholder="First Name"
          />

          <Input
            iconName="user"
            placeholder="Last Name"
          />

          <Input
            iconName="mail"
            placeholder="Email"
          />

          <InputPassword
            iconName="lock"
            placeholder="Password"
            isPassword
          />
        </FormInputs>

        <ButtonGradient
          title="Register"
          onPress={handleRegister}
        />
      </Form>

      <Separator>
        <Line />
        <SeparatorText>Or</SeparatorText>
        <Line />
      </Separator>

      <Footer>
        <View style={{ flexDirection: "row", gap: 32, alignItems: "center", justifyContent: "center" }}>
          <ButtonSocial icon={GoogleSvg} />
          <ButtonSocial icon={FacebookSvg} />
        </View>

        <RegisterMessage>
          Don’t have an account yet?
          <TouchableOpacity onPress={handleLogin}>
            <RegisterLink> Login</RegisterLink>
          </TouchableOpacity>
        </RegisterMessage>
      </Footer>
    </Container>
  )
}
