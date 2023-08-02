import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ButtonGradient = styled(LinearGradient)`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
`;


