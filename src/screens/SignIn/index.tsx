import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";
import GoogleSvg from "../../assets/icons/google.svg"
import FacebookSvg from "../../assets/icons/facebook.svg"
import { Input } from "../../components/Input";
import { ButtonSocial } from "../../components/ButtonSocial";
import { InputPassword } from "../../components/InputPassword";
import { ButtonGradient } from "../../components/ButtonGradient";
import { Container, Footer, Form, FormInputs, Line, RegisterLink, RegisterMessage, Separator, SeparatorText, Subtitle, Title } from "./styles";
import { AuthParamsList } from "../../routes/auth.routes";


export function SignIn() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<AuthParamsList>();

  async function handleRegister() {
    navigation.navigate("SignUp")
  }

  return (
    <Container
      contentContainerStyle={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        paddingBottom: 48,
        paddingTop: Platform.OS === "ios" ? insets.top : 24,
      }}
    >
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

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <RegisterMessage>Don’t have an account yet?</RegisterMessage>
          <TouchableOpacity onPress={handleRegister}>
              <RegisterLink> Register</RegisterLink>
            </TouchableOpacity>
        </View>

      </Footer>
    </Container>
  )
}
