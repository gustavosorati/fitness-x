import { View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Form, FormInputs, Subtitle, Title } from "./styles";
import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { InputPassword } from "../../../../components/InputPassword";
import { ButtonGradient } from "../../../../components/ButtonGradient";

export function CreateAccount() {
  const insets = useSafeAreaInsets();

  return (
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

      <ButtonGradient title="Register" />
    </Form>
  )
}
