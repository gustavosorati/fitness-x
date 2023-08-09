import styled from "styled-components/native";


export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white};
  padding: 32px;
  padding-top: 0;
`;
