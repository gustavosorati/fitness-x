import { Dimensions, Platform, View } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Container, Subtitle, Title } from "./styles";
import { ButtonGradient } from "../../../../components/ButtonGradient";
import Animated, { useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated";
import { GoalCard } from "../GoalCard/inde";
import { useNavigation } from "@react-navigation/native";
import { AuthParamsList } from "../../../../routes/auth.routes";

const SLIDES = [
  { id: 0, key: "left" },
  {
    id: 1,
    image: require("../../../../assets/goal_01.png")
  },
  {
    id: 2,
    image: require("../../../../assets/goal_02.png")
  },
  {
    id: 3,
    image: require("../../../../assets/goal_03.png")
  },
  { id: 4, key: "right" },
]

const CARD_SIZE = 275 + 32;
const SPACER_ITEM = (Dimensions.get("window").width - 275) / 2

export function YourGoal() {
  const insets = useSafeAreaInsets();
  const scrollX = useSharedValue(0);
  const navigation = useNavigation<AuthParamsList>();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  async function handleSubmit() {
    navigation.navigate("SuccessRegister")
  }

  return (
    <Container style={{ paddingTop: Platform.OS === "android" ? 24 : insets.top }}>

      <View style={{ alignItems: "center", paddingHorizontal: 32 }}>
        <Title>What is your goal ?</Title>
        <Subtitle>It will help us to choose a {"\n"} best program for you</Subtitle>
      </View>

      <Animated.FlatList
        data={SLIDES}
        keyExtractor={(item) => String(item.id)}
        horizontal
        contentContainerStyle={{
          marginTop: 24,
        }}
        renderItem={({item, index}) => {
          return (
            <GoalCard
              key={item.id}
              card_size={CARD_SIZE}
              imageRef={item.image}
              index={index}
              scrollX={scrollX}
              spacer={SPACER_ITEM}
            />
          )
        }}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_SIZE}
        decelerationRate={0}
        bounces={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      />

      <View style={{ flex: 1, width: "100%" }}>
        <ButtonGradient
          title="Confirm"
          onPress={handleSubmit}
          style={{ paddingHorizontal: 32 }}
        />
      </View>
    </Container>
  )
}
