import { TouchableHighlightProps } from "react-native";
import { Container, Placeholder } from "./styles";

interface Props extends TouchableHighlightProps {}

export function Button({ ...rest }: Props) {
  return (
    <Container onPress={() => null} {...rest}>
      <Placeholder>Get started</Placeholder>
    </Container>
  )
}
