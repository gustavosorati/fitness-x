import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 30px;
`;

export const FormInputs = styled.View`
  flex: 1;
  width: 100%;
  gap: 15px;
`;
