import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
  padding-bottom: 64px;
  padding-top: 0;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 64px;
`;
