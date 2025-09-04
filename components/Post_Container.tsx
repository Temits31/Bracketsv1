import { View, Text, Image, Pressable } from "react-native";
import React from "react";



type PostProps = {
    username: string;
    handle: string;
    content: string;
    avatar?: string;
    onLike?: () => void;
    onComment?: () => void;
    onShare?: () => void;
};

export default function Post_Container({
    username,
    handle,
    content,
    avatar,
    onLike = () => { },
    onComment = () => { },
    onShare = () => { },
}: PostProps) {
    return (
        <View className="flex-row p-4 border-b border-gray-200 bg-white">
            {/* Avatar */}
            <Image
                source={{ uri: avatar }}
                className="w-12 h-12 rounded-full mr-3"
            />

            {/* Post Content */}
            <View className="flex-1">
                {/* Username & Handle */}
                <View className="flex-row items-center space-x-2">
                    <Text className="font-semibold text-gray-900">{username}</Text>
                    <Text className="text-gray-500">{handle}</Text>
                </View>

                {/* Post Text */}
                <Text className="text-gray-800 mt-1">{content}</Text>

                {/* Action Buttons */}
                <View className="flex-row mt-3 justify-between w-3/4">
                    <Pressable onPress={onLike}>
                        <Text className="text-gray-500"> Like</Text>
                    </Pressable>
                    <Pressable onPress={onComment}>
                        <Text className="text-gray-500"> Comment</Text>
                    </Pressable>
                    <Pressable onPress={onShare}>
                        <Text className="text-gray-500"> Share</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}


