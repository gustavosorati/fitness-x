import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding: 32px;
  padding-top: 0;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray_100};
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  gap: 24px;
  margin-top: 30px;
`;

export const FormInputs = styled.View`
  width: 100%;
  gap: 16px;
`;

export const Unit = styled(LinearGradient)`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
`;

export const UnitText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(12)}px;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.white};
`;
