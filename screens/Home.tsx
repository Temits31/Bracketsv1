import { TextInput, ImageBackground, ScrollView, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Post_Container from 'components/Post_Container';
import CreatePost from 'components/CreatePost';
import CommentScreen from './CommentScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

export default function Home( { navigation }: any) {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
          <View>
            <CreatePost username='username'
                        handle='handle'
                        content=""></CreatePost>

          </View>
        
          <ScrollView>


            <Post_Container
              username="Kakay Dev"
              handle="@kakay"
              content="Building my app with NativeWind & Expo 🚀"
              onLike={() => console.log("Liked ❤️")}
              onComment={() => navigation.navigate('Comments')}
            />
           
          </ScrollView>
        
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
