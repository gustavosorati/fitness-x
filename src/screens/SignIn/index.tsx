import { TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import GoogleSvg from "../../assets/icons/google.svg"
import FacebookSvg from "../../assets/icons/facebook.svg"
import { Input } from "../../components/Input";
import { ButtonSocial } from "../../components/ButtonSocial";
import { InputPassword } from "../../components/InputPassword";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Container, Footer, Form, FormInputs, Line, RegisterLink, RegisterMessage, Separator, SeparatorText, Subtitle, Title } from "./styles";


export function SignIn() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  async function handleRegister() {
    navigation.navigate("SignUp")
  }

  return (
    <Container style={{ paddingTop: insets.top }}>
      <Subtitle>Hey there,</Subtitle>
      <Title>Create an Account</Title>

      <Form>
        <FormInputs>
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
          title="Login"
          iconName="log-in"
          onPress={() => navigation.navigate("Home")}
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
          <TouchableOpacity onPress={handleRegister}>
            <RegisterLink> Register</RegisterLink>
          </TouchableOpacity>
        </RegisterMessage>
      </Footer>
    </Container>
  )
}
