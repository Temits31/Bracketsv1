import { TextInput, ImageBackground, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Post_Container from 'components/Post_Container';

export default function Home() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        
          <ScrollView>
            <Post_Container
              username="Kakay Dev"
              handle="@kakay"
              content="Building my app with NativeWind & Expo 🚀"
              onLike={() => console.log("Liked ❤️")}
            />
            <Post_Container
              username="Jane Doe"
              handle="@janedoe"
              content="This feels like Twitter but smoother 😎"
            />
          </ScrollView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
