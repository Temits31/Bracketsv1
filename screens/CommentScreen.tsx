import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";

export default function CommentScreen() {
  return (
    <View className="flex justify-center w-full bg-white">
      <Text className="text-lg font-bold text-center h-10">Comment Section</Text>

        <View className="flex justify-center w-full bg-white p-5">
            <TextInput placeholder="{comment here}">

            </TextInput>
            <View className="flex justify-end items-end">
            <Pressable className="p-2 ">
                <Text>{"{\t\t\t Comment\t\t\t }"}</Text>
            </Pressable>
                
            </View>
        </View>
    </View>
  );
}
