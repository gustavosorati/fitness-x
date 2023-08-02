import { View } from "react-native";
import {Dimensions} from "react-native";
import { useEffect, useState } from "react";
import { ButtonCircle } from "../../../components/ButtonCircle";
import { TrackOnGoal } from "./components/TrackOnGoal";
import { Container, Content } from "./styles";
import { GetBurn } from "./components/GetBurn";
import { EatWell } from "./components/EatWell";
import { SleepQuality } from "./components/SleepQuality";
import { useNavigation } from "@react-navigation/native";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGE_PROPORTION = 0.923;

export function OnboardingInfo() {
  const navigation = useNavigation();

  const [step, setStep] = useState(1);

  function handleNextStep() {
    if(step === 4) {
      navigation.navigate("SignUp");
    }

    setStep(step + 1);
  }

  return (
    <Container>
      {step === 1 && <TrackOnGoal />}
      {step === 2 && <GetBurn />}
      {step === 3 && <EatWell />}
      {step === 4 && <SleepQuality />}

      <View style={{ alignSelf: "flex-end" }}>
        <ButtonCircle onPress={handleNextStep} progress={step} />
      </View>
    </Container>
  )
}
