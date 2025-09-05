import { View, Text, Image, TextInput } from "react-native";
import React from "react";



type CreatePostProps = {
    username: string;
    handle: string;
    content: string;
    
};

export default function CreatePost({
    username,
    handle,
    content,
   
}: CreatePostProps) {
    return (
        <View className="flex justify-center items-center w-full p-4 border-b-2 border-gray-200 bg-white">
            <TextInput placeholder="What would you like in your brackets">

            </TextInput>
        </View>
    );
}


