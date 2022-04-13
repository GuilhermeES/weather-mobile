import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text , View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Cities from './src/pages/Cities/';
import Start from './src/pages/Start/';
import MyCity from './src/pages/MyCity/';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (  
    <Tab.Navigator
    screenOptions={{
      tabBarStyle: { 
        position:'absolute',
        bottom:18,
        right:18,
        left:18,
        marginTop: 70,
        borderRadius:15,
        backgroundColor: '#449BE4',
        height:60,
        elevation:0,
        ...style.shadow
      },
    }}
    >
      <Tab.Screen name="Minha cidade" component={MyCity} options={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarIcon : ({focused}) => {
          let iconStatus = focused
          ? '#ffffff99'
          : '#ffffff'
          return <Icon name="home" size={30} color={iconStatus}></Icon>
        },
      }} />
      <Tab.Screen name="Adicionar cidade" component={Cities} options={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarIcon : ({focused}) => {
          let iconStatus = focused
          ? '#ffffff99'
          : '#ffffff'
          return <Icon name="add-circle-outline" size={30} color={iconStatus}></Icon>
        },
      }} />
    </Tab.Navigator>
  );

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeTabs}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
    shadow:{
      shadowColor: '#7f5df0',
      shadowOffset:{
        width:0,
        height: 10
      },
      shadowOpacity:0.25,
      shadowRadius:3.5,
      elevation: 5
    }
})