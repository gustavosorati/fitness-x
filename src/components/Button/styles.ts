import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 48px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 99px;
  align-items: center;
  justify-content: center;
`;

export const Placeholder = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(16)}px;
  color: #92A3FD;
`;
