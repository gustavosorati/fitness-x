import { Dimensions, SafeAreaView, View } from "react-native";
import { Header } from "./components/Header";
import { ChartContainer, Container, Content, Section, SectionTitle } from "./styles";
import { useTheme } from "styled-components/native";
import { LineChart } from "react-native-gifted-charts";
import { LinearGradient } from "expo-linear-gradient";
import { BodyMassIndex } from "./components/BodyMassIndex";
import { WaterIntake } from "./components/WaterIntake";
import { SleepIndicator } from "./components/SleepIndicator";
import SVG, { Circle, Path } from "react-native-svg"
import { Input } from "../../components/Input";

export function Home() {
  const theme = useTheme();
  const lineData = [
    {value: 0, label: "Sun"},
    {value: 20, label: "Mon"},
    {value: 18, label: "Tue"},
    {value: 40, label: "Wed"},
    {value: 36, label: "Thu"},
    {value: 60, label: "Fri"},
    {value: 54, label: "Sat"}
  ];

  const lineData2 = [
    {value: 40, label: "Sun"},
    {value: 18, label: "Mon"},
    {value: 24, label: "Tue"},
    {value: 15, label: "Wed"},
    {value: 34, label: "Thu"},
    {value: 11, label: "Fri"},
    {value: 12, label: "Sat"},
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.white }}>
      <Container
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 40,
          padding: 32,
          paddingTop: 16
        }}
      >
        <Header />

        <Content>
          <BodyMassIndex percentage="20" />

          {/* Gráfico 01 */}
          <Section>
            <SectionTitle>Activity Status</SectionTitle>

            <ChartContainer>
              <LinearGradient
                start={{ x: 0, y: 0.5 }}
                colors={[
                  "rgba(158, 146, 253, .2)",
                  "rgba(157, 206, 255, .3)"
                ]}
                style={{
                  width: "100%",
                  height: 150,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  opacity: .7,
                  overflow: "hidden"
                }}
              >
                <LineChart
                  areaChart
                  // curved
                  data={lineData as any}
                  data2={lineData2 as any}
                  hideDataPoints
                  thickness={2.2}
                  thickness2={1.2}
                  hideRules
                  hideYAxisText
                  yAxisLabelWidth={1}
                  yAxisColor="transparent"
                  // backgroundColor={"red"}
                  // showVerticalLines
                  // verticalLinesColor="transparent"
                  spacing={(Dimensions.get("window").width - 12) / 7}
                  // startOpacity={0.6}
                  xAxisColor="transparent"
                  textColor="transparent"
                  color="#93A7FE"
                  startFillColor={"rgba(147, 167, 254, .3)"}
                  startFillColor2={"rgba(197, 139, 242, .3)"}

                  endFillColor="#9DCEFF"
                  endFillColor2="#C58BF2"
                  endOpacity={0}
                  endOpacity2={0}
                  color2="#C58BF2"
                  width={Dimensions.get("screen").width}
                  // initialSpacing={20}
                  height={150}
                  // pointerConfig={{
                  //   pointerStripUptoDataPoint: true,
                  //   pointerStripColor: 'lightgray',
                  //   pointerStripWidth: 2,
                  //   strokeDashArray: [2, 5],
                  //   pointerColor: 'lightgray',
                  //   radius: 4,
                  //   pointerLabelWidth: 100,
                  //   pointerLabelHeight: 120,
                  //   pointerLabelComponent: (items: any) => {
                  //     return (
                  //       <View
                  //         style={{
                  //           height: 120,
                  //           width: 100,
                  //           backgroundColor: '#282C3E',
                  //           borderRadius: 4,
                  //           justifyContent:'center',
                  //           paddingLeft:16,
                  //         }}>
                  //         <Text style={{color: 'lightgray',fontSize:12}}>{2018}</Text>
                  //         <Text style={{color: 'white', fontWeight:'bold'}}>{items[0].value}</Text>
                  //         <Text style={{color: 'lightgray',fontSize:12,marginTop:12}}>{2019}</Text>
                  //         <Text style={{color: 'white', fontWeight:'bold'}}>{items[1].value}</Text>
                  //       </View>
                  //     );
                  //   },
                  // }}
                />
              </LinearGradient>
            </ChartContainer>
          </Section>

          <Section style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <WaterIntake />

            <View style={{ height: "100%", justifyContent: "space-between" }}>
              <SleepIndicator />
            </View>
          </Section>
        </Content>
      </Container>
    </SafeAreaView>
  )
}
