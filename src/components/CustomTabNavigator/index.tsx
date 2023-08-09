import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ButtonNavigation, Container, SearchButton, SearchButtonGradient } from "./styles";
import IconFeather from "@expo/vector-icons/Feather";
import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

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

  return (
    <Container style={{ elevation: 10, shadowColor: "#000", shadowRadius: 10, shadowOpacity: .1 }}>
      {routes.map(({name}) => {
        if(name === "Search")
          return (
            <SearchButton key={name} style={{
              left: (Dimensions.get("window").width / 2) - 30
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
