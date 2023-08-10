import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.gray_200};
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.gray_50};
  align-items: center;
  justify-content: center;
`;
