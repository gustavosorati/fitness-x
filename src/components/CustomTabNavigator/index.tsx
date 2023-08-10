import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ButtonNavigation, Container, SearchButton, SearchButtonGradient } from "./styles";
import IconFeather from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components/native";
import { Keyboard, Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

type Props = BottomTabBarProps;

Charts: undefined;
  Search: undefined;
  Camera: undefined;
  Profile: undefined;
export function CustomTabNavigator({
  state: { routes },
  navigation,
  descriptors
}: Props) {
  const theme = useTheme();
  const [keyboardStatus, setKeyboardStatus] = useState<boolean>();

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <Container style={[
      { elevation: 24, shadowColor: "#000", shadowRadius: 10, shadowOpacity: .1, shadowOffset: {width: 0, height: 12}},
      keyboardStatus ? styles.hideTabNavigation : null,
    ]}>
      {routes.map(({name}) => {
        if(name === "Search")
          return (
            <SearchButton key={name} style={{
              left: (Dimensions.get("window").width / 2) - 30,
                shadowColor: '#95ADFE',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.9,
                shadowRadius: 20,
                elevation: 10
            }}>
              <SearchButtonGradient
                start={{ x: .1, y: 0 }}
                colors={['#92A3FD', '#9DCEFF']}
              >
                <IconFeather name="search" size={20} color={theme.colors.white}  />
              </SearchButtonGradient>
            </SearchButton>
          )

        return (
          <ButtonNavigation key={name}>
            <IconFeather
              size={20}
              name={name === "Index" ? "home"
                : name === "Charts" ? "bar-chart"
                : name === "Profile" ? "user"
                : "camera"
              }
              color={theme.colors.black} />
          </ButtonNavigation>
        )

      })}

    </Container>
  )
}

const styles = StyleSheet.create({
  hideTabNavigation: {
    display: "none"
  }
})
