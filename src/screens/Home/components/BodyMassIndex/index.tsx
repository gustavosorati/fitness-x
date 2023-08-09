import { Image, StyleSheet, View } from "react-native";
import { Button, ButtonText, Percentage, Text, Title } from "./styles";
import SVG, { Circle as CircleSvg } from "react-native-svg"
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  percentage: string;
}

export function BodyMassIndex({ percentage }: Props) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      colors={["#9DCEFF", "#92A3FD"]}
      style={styles.container}
    >
      <Image
        source={require("../../../../assets/images/mas_01.png")}
        style={{ top: 20, position: "absolute" }} />

      {/* Message */}
      <View style={{ flex: 2, justifyContent: "center" }}>
        <Title>BMI (Body Mass Index)</Title>
        <Text>You have a normal weight</Text>

        <Button>
          <ButtonText>View more</ButtonText>
        </Button>
      </View>

      <View
        style={{
          position: "relative",
          width: 96,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Percentage>{percentage}%</Percentage>

        <SVG>
          <CircleSvg
            fill={"white"}
            r={radius}
            cx={radius}
            cy={radius}
            stroke={"pink"}
            strokeWidth={10}
            strokeDasharray={[circumference * .2, circumference]}
            rotation={"-90"}
            originX={50}
            originY={47}
          />
        </SVG>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    padding: 20,
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    position: "relative"
  }
})
