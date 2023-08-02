import { View } from "react-native";
import OnboardingSvg from "../../../../assets/onboarding_02.svg"
import {Dimensions} from "react-native";
import { Content, Message, Title } from "./styles";
import Animated, { SlideInRight, SlideOutLeft } from "react-native-reanimated";

const DEVICE_WIDTH = Dimensions.get("window").width;
const IMAGE_PROPORTION = 0.923;

export function GetBurn() {
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
        <Title>Get Burn</Title>
        <Message>Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever</Message>
      </Content>
    </Animated.View>
  )
}
