import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { OnboardingInfo } from '../screens/Onboarding/Info';
import { GetStarted } from '../screens/Onboarding/GetStarted';
import { PersonalInformation } from '../screens/SignUp/components/PersonalInformation';
import { YourGoal } from '../screens/SignUp/components/YourGoal';
import { SuccessRegister } from '../screens/SignUp/components/SuccessRegister';
import { Home } from '../screens/Home';
import { BottomRoutes } from './bottom.routes';


type AuthParams = {
    SignIn: undefined;
    SignUp: undefined;
    PersonalInformation: undefined;
    YourGoal: undefined;
    SuccessRegister: undefined;

    Home: undefined;

    GetStarted: undefined;
    Onboarding: undefined;
}

const Stack = createStackNavigator<AuthParams>();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Onboarding" component={OnboardingInfo} />

      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
      <Stack.Screen name="YourGoal" component={YourGoal} />
      <Stack.Screen name="SuccessRegister" component={SuccessRegister} />

      <Stack.Screen name="SignIn" component={SignIn} />

      <Stack.Screen name="Home" component={BottomRoutes} />
    </Stack.Navigator>
  );
}
