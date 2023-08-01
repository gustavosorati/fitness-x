import "styled-components/native";
import { theme } from "../styles/global";

type ThemeInterface = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
