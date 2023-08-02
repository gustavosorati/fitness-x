import { TouchableOpacityProps } from "react-native";
import { Container } from "./styles";
import IconsMaterial from "@expo/vector-icons/MaterialIcons"
import { useTheme } from "styled-components/native";

interface Props extends TouchableOpacityProps {
  icon: any
}
// interface SVGComponentProps extends SVGProps<SVGSVGElement>

export function ButtonSocial({
  icon: Icon,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container {...rest}>
      <Icon />
    </Container>

  )
}
