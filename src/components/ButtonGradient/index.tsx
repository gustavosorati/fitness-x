import Icon from "@expo/vector-icons/Feather";
import { TouchableOpacityProps } from "react-native";
import { Container, Gradient, Placeholder } from "./styles";
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
  title: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
}

export function ButtonGradient({ title, iconName, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container
      style={{
        shadowColor: '#95ADFE',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.9,
        shadowRadius: 20,
      }}
      {...rest}
    >
      <Gradient
        start={{ x: 1, y: 0 }}
        colors={['#92A3FD', '#9DCEFF']}
      >
        {iconName &&
          <Icon
          	name={iconName}
          	size={22}
          	color={theme.colors.white}
          />
				}

        <Placeholder>{title}</Placeholder>
      </Gradient>
    </Container>
  )
}
