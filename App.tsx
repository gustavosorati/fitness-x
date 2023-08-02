import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/global';
import { Routes } from './src/routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
