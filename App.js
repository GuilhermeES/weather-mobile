import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cities from './src/pages/Cities/';
import Start from './src/pages/Start/';
import MyCity from './src/pages/MyCity/';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{headerShown:false}} />
        <Stack.Screen name="Minha cidade" component={MyCity} />
        <Stack.Screen name="Adicionar cidade" component={Cities} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

