import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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
  gap: 32px;
`;

export const FormInputs = styled.View`
  flex: 1;
  width: 100%;
  gap: 15px;
`;


export const Separator = styled.View`
  width: 100%;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin: 32px 0;
`;

export const SeparatorText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
`;

export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: ${({theme}) => theme.colors.gray_300};
`;

export const Footer = styled.View`
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const RegisterMessage = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
`;

export const RegisterLink = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.pink_300};
`;
