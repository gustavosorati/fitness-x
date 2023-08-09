import { View } from "react-native";
import { Bar, Container, Gradient, Indicator, IndicatorSeparator, Liters, SplashText, Subtitle, Title } from "./styles";

interface Props {
  water?: number;
}

export function WaterIntake({ water = 1000 }: Props) {
  const litersIndex = ["600ml", "500ml", "10000ml", "700ml", "900ml"]

  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowRadius: 50,
        shadowOpacity: .1,
        shadowOffset: {
          width: -10,
          height: 0,
        },
      }}
    >
      <Bar>
        <Gradient
          start={{ x: 1, y: 0 }}
          colors={['#92A3FD', '#9DCEFF']}
        />
      </Bar>

      <View>
        <Title>Water Intake</Title>
        <SplashText>4 Liters</SplashText>
        <Subtitle>Real time updates</Subtitle>

        <View style={{ flexDirection: "row", gap: 12, marginTop: 16 }}>
          <View style={{ alignItems: "center", gap: 6 }}>
            <Indicator isMarked={water === 600} />
            <IndicatorSeparator />
            <Indicator isMarked={water === 500} />
            <IndicatorSeparator />
            <Indicator isMarked={water === 1000} />
            <IndicatorSeparator />
            <Indicator isMarked={water === 700}  />
            <IndicatorSeparator />
            <Indicator isMarked={water === 900} />

          </View>

          <View>
            {litersIndex.map((liter) => (
              <View key={liter} style={{ height: 46 }}>
                <Liters>{liter}</Liters>
              </View>
            ))}
          </View>
        </View>

      </View>
    </Container>
  )
}
