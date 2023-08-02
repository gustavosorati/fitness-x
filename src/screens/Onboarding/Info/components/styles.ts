import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 64px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(24)}px;
  margin-bottom: 16px;
`;

export const Message = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.gray_100};
`;
