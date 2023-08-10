import { View } from "react-native";
import { Container, SplashText, Title } from "./styles";
import { LineChart } from "react-native-gifted-charts";

export function SleepIndicator() {
  const lineData = [{ value: 0 }, { value: 5 }, { value: 0 }, { value: 5 }]
  const lineData2 = [{ value: 0 }, { value: 4.6 }, { value: 0 }, { value: 4.6 }]
  const lineData3 = [{ value: 0 }, { value: 5.4 }, { value: 0 }, { value: 5.4 }]
  const lineData4 = [{ value: 5 }, { value: 0 }, { value: 5 }, { value: 0 }]
  const lineData5 = [{ value: 4.6 }, { value: 0 }, { value: 4.6 }, { value: 0 }]

  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowRadius: 50,
        shadowOpacity: .1,
        shadowOffset: { width: -10, height: 0 },
        elevation: 10
      }}
    >
      <Title>Sleep</Title>
      <SplashText>8h 20m</SplashText>

      <View
        style={{
          width: "100%",
          height: 80,
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <LineChart
          curved
          data={lineData as any}
          data2={lineData2 as any}
          data3={lineData3 as any}
          data4={lineData4 as any}
          data5={lineData5 as any}
          hideDataPoints
          thickness={1.4}
          thickness2={1.4}
          thickness3={1.4}
          thickness4={1.4}
          thickness5={1.4}
          hideRules
          hideYAxisText
          yAxisLabelWidth={1}
          yAxisColor="transparent"
          xAxisColor="transparent"
          textColor="transparent"
          color="#93A7FE"
          color2="#93A7FE"
          color3="#93A7FE"
          color4="#C58BF2"
          color5="#C58BF2"
          width={110}
          height={80}
        />
      </View>
    </Container>
  )
}
