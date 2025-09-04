import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <View className='flex justify-center items-center pt-8 pb-6 shadow-slate-500 border border-b-2 border-gray-300'>
        <Text className='text-bold font-light text-4xl text-gray-400'> Brackets</Text>
      </View>
    )
  }
}

