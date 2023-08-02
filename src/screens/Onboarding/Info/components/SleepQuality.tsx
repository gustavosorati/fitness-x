import { View } from "react-native";
import OnboardingSvg from "../../../../assets/onboarding_04.svg"
import {Dimensions} from "react-native";
import { Content, Message, Title } from "./styles";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGE_PROPORTION = 0.888;

export function SleepQuality() {
  return (
    <Animated.View
      entering={SlideInRight}
      exiting={SlideOutLeft}
      style={{ alignItems: "center", }}
    >
      <OnboardingSvg
        width={DEVICE_WIDTH}
        height={DEVICE_WIDTH / IMAGE_PROPORTION}
      />

      <Content>
        <Title>Improve Sleep  Quality</Title>
        <Message>Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning</Message>
      </Content>
    </Animated.View>
  )
}
