import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 48px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(36)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.gray_100};
`;
