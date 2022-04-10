import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import Cities from './src/pages/Cities/';
import Start from './src/pages/Start/';
import MyCity from './src/pages/MyCity/';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function HomeTabs() {
  return (  
    <Tab.Navigator>
      <Tab.Screen name="Minha cidade" component={MyCity} />
      <Tab.Screen name="Adicionar cidade" component={Cities} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{headerShown:false}} />
        <Stack.Screen name="Minha cidade" component={HomeTabs}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

