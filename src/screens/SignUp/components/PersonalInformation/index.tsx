import { Dimensions, View } from "react-native";
import { Container, Form, FormInputs, Subtitle, Title, Unit, UnitText } from "./styles";
import { Input } from "../../../../components/Input";
import { InputPassword } from "../../../../components/InputPassword";
import { ButtonGradient } from "../../../../components/ButtonGradient";
import RegisterSvg from "../../../../assets/register_01.svg";
import { useNavigation } from "@react-navigation/native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGE_PROPORTION = 1.071;

export function PersonalInformation() {
  const navigation = useNavigation();

  async function handleRegister() {
    navigation.navigate("YourGoal")
  }

  return (
    <Container>
      <RegisterSvg
        width="100%"
        height={DEVICE_WIDTH / IMAGE_PROPORTION}
      />

      <Title>Let’s complete your profile</Title>
      <Subtitle>It will help us to know more about you!</Subtitle>

      <Form>
        <FormInputs>
          <Input
            iconName="users"
            placeholder="Change Gender"
          />

          <Input
            iconName="calendar"
            placeholder="Date of Birth"
          />

          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Input
                iconName="divide-square"
                placeholder="Your Weight"
              />
            </View>

            <Unit
              start={{ x: .1, y: .2 }}
              colors={["#C58BF2", "#EEA4CE"]}
            >
              <UnitText>kg</UnitText>
            </Unit>
          </View>

          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <Input
                iconName="repeat"
                placeholder="Your Height"
              />
            </View>

            <Unit
              start={{ x: .1, y: .2 }}
              colors={["#C58BF2", "#EEA4CE"]}
            >
              <UnitText>kg</UnitText>
            </Unit>
          </View>
        </FormInputs>

        <ButtonGradient title="Next" onPress={handleRegister} />
      </Form>
    </Container>
  )
}
