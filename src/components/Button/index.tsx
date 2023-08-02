import { TouchableHighlightProps } from "react-native";
import { Container, Placeholder } from "./styles";

interface Props extends TouchableHighlightProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Placeholder>{title}</Placeholder>
    </Container>
  )
}
