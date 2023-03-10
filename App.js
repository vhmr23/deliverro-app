import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import "react-native-url-polyfill/auto"
import HomeScreens from './screens/HomeScreens';
import DetailsScreens from './screens/DetailsScreens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreens} />
        <Stack.Screen name="Restaurant" component={DetailsScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
