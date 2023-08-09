import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 150px;
  height: 315px;
  border-radius: 22px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 16px;
  flex-direction: row;
  gap: 16px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(11)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  font-size: ${RFValue(8)}px;
  color: ${({theme}) => theme.colors.gray_100};
`;

export const SplashText = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.blue_300};
  margin: 6px 0;
`;

export const Liters = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  font-size: ${RFValue(9)}px;
  color: ${({theme}) => theme.colors.pink_100};
`;

export const Bar = styled.View`
  width: 20px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.gray_50};
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;

export const Gradient = styled(LinearGradient)`
  width: 100%;
  height: 42%;
  position: absolute;
  bottom: 0;
`;

interface IndicatorProps {
  isMarked: boolean;
}

export const Indicator = styled.View<IndicatorProps>`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background-color: ${({isMarked, theme}) => isMarked ? theme.colors.blue_300 : "#EEA4CE" }
`;

export const IndicatorSeparator = styled.View`
  width: 1px;
  height: 30px;
  border-width: 1px;
  border-style: dashed;
  border-color: #EEA4CE;
`;
