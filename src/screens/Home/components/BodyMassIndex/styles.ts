import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const Text = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.pink_100};
  width: 96px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const Circle = styled.View`
  width: 96px;
  height: 96px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 99px;
  align-items: center;
  justify-content: center;
`;

export const Percentage = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.pink_100};
  position: absolute;
  top: 42px;
  left: 36px;
  z-index: 9;
`;


