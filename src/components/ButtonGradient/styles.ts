import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
`;

export const Gradient = styled(LinearGradient)`
  flex: 1;
  flex-direction: row;
  width: 100%;
  border-radius: 99px;
  gap: 12px;
  align-items: center;
  justify-content: center;
`;

export const Placeholder = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.white};
`;
