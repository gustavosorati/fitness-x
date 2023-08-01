import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignOut } from '../screens/SignOut';


type AuthParams = {
    SignIn: undefined;
    SignOut: undefined;
}

const Stack = createStackNavigator<AuthParams>();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignOut" component={SignOut} />
    </Stack.Navigator>
  );
}