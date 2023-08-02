import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.gray_300};
  align-items: center;
  justify-content: center;
  position: relative;
`;


