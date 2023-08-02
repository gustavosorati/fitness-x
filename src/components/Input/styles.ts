import { ColorValue, Text, TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface InputProps {
  isError?: boolean;
  isFocus?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 48px;
  gap: 8px;
  background-color: ${({theme}) => theme.colors.red_500};
  border-radius: 14px;
`;

export const Label = styled(Text)`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.gray_100};
`;

export const Content = styled.View<InputProps>`
  width: 100%;

  flex-direction: row;
  background-color: ${({theme, isError}) => isError ? theme.colors.red_100 : theme.colors.gray_50};
  height: 100%;
  padding: 0 16px;
  gap: 10px;
  align-items: center;
  border-radius: 14px;
`;

export const Input = styled(TextInput).attrs(({theme}) => ({
	placeholderTextColor: "#ADA4A5" as ColorValue,
}))<InputProps>`
  flex: 1;
  width: 100%;
  height: 100%;

  letter-spacing: 1px;
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme, isError}) => isError ? theme.colors.red_500 : theme.colors.gray_100 };
`;

export const ErrorText = styled(Text)`
  font-size: ${RFValue(10)}px;
  font-family: ${({theme}) => theme.fonts.primary_700};
  color: ${({theme}) => theme.colors.red_500}
`;
