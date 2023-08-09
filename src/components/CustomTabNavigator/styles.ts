import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 80px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonNavigation = styled.Pressable`
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.white};
`;

export const SearchButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 99px;
  position: absolute;
  top: -20%;
  z-index: 10;
`;

export const SearchButtonGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 99px;
  align-items: center;
  justify-content: center;
`;
