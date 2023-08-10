import { View } from "react-native";
import { ButtonContainer, Container, Subtitle, Title } from "./styles";
import IconMaterial from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}

export function Header({
  title
}: Props) {
  const navigation = useNavigation();


  return (
    <Container>
      <ButtonContainer onPress={() => navigation.goBack()}>
        <IconMaterial
          name="arrow-back"
          size={20}
        />
      </ButtonContainer>

      <Title>{title}</Title>

      <ButtonContainer>
        <IconMaterial
          name="more-horiz"
          size={20}
        />
      </ButtonContainer>
    </Container>
  )
}
