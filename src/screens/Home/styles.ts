import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.white};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 32px;
  gap: 30px;
`;

export const Section = styled.View`
  flex: 1;
  width: 100%;
  gap: 15px;
`;

export const SectionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const ChartContainer = styled.View`
  width: 100%;
  height: 150px;
  border-radius: 20px;
`;
