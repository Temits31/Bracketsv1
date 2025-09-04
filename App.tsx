import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Pressable } from 'react-native';
import Header  from 'components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import './global.css';
import Home from 'screens/Home';
import Login from 'screens/Login';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <>
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
      
    </>
  );
}
