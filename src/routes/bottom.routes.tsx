import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { CustomTabNavigator } from '../components/CustomTabNavigator';
import { Charts } from '../screens/Charts';
import { Search } from '../screens/Search';
import { Camera } from '../screens/Camera';
import { Profile } from '../screens/Profile';


type TabParams = {
  Index: undefined;
  Charts: undefined;
  Search: undefined;
  Camera: undefined;
  Profile: undefined;
}

const Tab = createBottomTabNavigator<TabParams>();

export function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabNavigator {...props} />}>
      <Tab.Screen name="Index" component={Home} />
      <Tab.Screen name="Charts" component={Charts} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
