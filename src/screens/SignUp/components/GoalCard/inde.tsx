import { useEffect } from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import Animated, { Extrapolate, SharedValue, interpolate, useAnimatedStyle } from "react-native-reanimated";

interface Props {
  index: number;
  card_size: number;
  scrollX: SharedValue<number>;
  imageRef: ImageSourcePropType;
  spacer: number;
}

export function GoalCard({
  index,
  card_size,
  scrollX,
  imageRef,
  spacer
}: Props) {
  const range = [
    (index - 2) * card_size,
    (index - 1) * card_size,
    index * card_size
  ]

  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(scrollX.value, range, [50, 0, 50], Extrapolate.CLAMP);
    const opacity = interpolate(scrollX.value, range, [.2, 1, .2], Extrapolate.CLAMP);

    return {
      transform: [{ translateY : translateY }],
      opacity: opacity
    };
  }, [scrollX.value]);

  if(!imageRef) return <View style={{ width: spacer }}/>

  return (
    <Animated.View
      style={[
        {
          width: card_size,
        },
        animatedStyles]}
    >
      <Image
        source={imageRef}
      />
    </Animated.View>
  )
}
