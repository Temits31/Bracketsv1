import { TextInput, View, Button,  ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

export default function Home() {
  const [nameInput, setNameInput] = useState('');

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
              onChangeText={setNameInput}
              value={nameInput}
              placeholder="Enter name"
              className="border border-gray-400 p-2 rounded-md text-lg bg-white"
              style={{ width: 250 }}
            />
            <TextInput
              onChangeText={setNameInput}
              value={nameInput}
              placeholder="Password"
              className="border border-gray-400 p-2 rounded-md text-lg bg-white"
              style={{ width: 250 }}
            />

          </View>
          <Button
              title="Log in"
             
             
              onPress={() => console.log('aye')}
            />
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
