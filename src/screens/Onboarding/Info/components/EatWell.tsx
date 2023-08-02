import { View } from "react-native";
import OnboardingSvg from "../../../../assets/onboarding_03.svg"
import {Dimensions} from "react-native";
import { Content, Message, Title } from "./styles";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGE_PROPORTION = 0.854;

export function EatWell() {
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
        <Title>Eat Well</Title>
        <Message>Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun</Message>
      </Content>
    </Animated.View>
  )
}
