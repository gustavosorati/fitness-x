import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: ${({theme}) => theme.colors.white};
  padding-bottom: 48px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
  margin-bottom: 6px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.gray_100};
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
