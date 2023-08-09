import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  width: 150px;
  height: 150px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 20px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(11)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const SplashText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.blue_200};
`;
