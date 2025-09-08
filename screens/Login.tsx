import { View, TextInput, Button, Text, Alert, ImageBackground } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';
import { useState } from 'react';

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace("Home"); // go to home after login
    } catch (err: any) {
      Alert.alert("Login Error", err.message);
    }
  };

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigation.replace("Home");
    } catch (err: any) {
      Alert.alert("Signup Error", err.message);
    }
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <ImageBackground
          source={require('../assets/bracketsLogo.png')}
          resizeMode="cover"
          className="flex-1 justify-center items-center"
        >
          <View className='flex justify-center items-center p-16 '>
            <TextInput
              value={email}
              placeholder="Enter email"
              className="border border-gray-400 p-2 rounded-md text-lg bg-white"
              style={{ width: 250 }}
              onChangeText={setEmail}
            />
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Password"
              className="border border-gray-400 p-2 rounded-md text-lg bg-white"
              style={{ width: 250 }}
            />

          </View>
          <Button title="Login" onPress={login} />
      <Button title="Signup" onPress={signup} />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
