import { View } from "react-native";
import OnboardingSvg from "../../../../assets/onboarding_01.svg"
import {Dimensions} from "react-native";
import { Content, Message, Title } from "./styles";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGE_PROPORTION = 0.923;

export function TrackOnGoal() {
  return (
    <Animated.View
      exiting={SlideOutLeft}
      style={{ alignItems: "center", }}
    >
      <OnboardingSvg
        width={DEVICE_WIDTH}
        height={DEVICE_WIDTH / IMAGE_PROPORTION}
      />

      <Content>
        <Title>Track Your Goal</Title>
        <Message>Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals</Message>
      </Content>
    </Animated.View>
  )
}
