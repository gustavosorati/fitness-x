import { StyleSheet, TouchableHighlightProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ButtonGradient, Container } from "./styles";
import IconsMaterial from "@expo/vector-icons/MaterialIcons"
import { useTheme } from "styled-components/native";
import SVG, { Circle } from "react-native-svg"
import Animated, { useAnimatedProps, useSharedValue, withSpring } from "react-native-reanimated"
import { useEffect } from "react";

interface Props extends TouchableOpacityProps {
  progress: number;
}

const RADIUS = 30;

export function ButtonCircle({
  progress,
  ...rest
}: Props) {
  const theme = useTheme();
  const progressIndicator = useSharedValue(0);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);

  const innerRadius = RADIUS - 4 / 2;
  const circumference = 2 * Math.PI * innerRadius;

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * progressIndicator.value, circumference]
  }))

  useEffect(() => {
    progressIndicator.value = withSpring(progress / 4);
  }, [progress])

  return (
    <Container
      {...rest}
    >
      <SVG style={{ position: "absolute" }}>
        <AnimatedCircle
          animatedProps={animatedProps}
          r={innerRadius}
          cx={30}
          cy={30}
          fill={"transparent"}
          strokeWidth={3}
          stroke={"#92A3FD"}
          strokeLinecap="round"
          rotation="-90"
          originX={30}
          originY={30}
        />
      </SVG>

      <ButtonGradient
        start={{ x: .1, y: 0 }}
        colors={['#92A3FD', '#9DCEFF']}
      >
        <IconsMaterial
          name="arrow-forward-ios"
          color={theme.colors.white}
          size={18}
        />
      </ButtonGradient>
    </Container>

  )
}

const styles = StyleSheet.create({
  innerCircle: {
    position: "absolute",
  }
})
