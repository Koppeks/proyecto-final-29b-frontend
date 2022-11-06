import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function ButtonLogIn(props) {

    const {text,onPress}=props

  return (
    <TouchableOpacity
    style={tw`flex items-center w-full pt-7`}
    onPress={() => onPress()}
>
    <Text style={tw`text-center text-base text-white bg-gray-400 rounded-lg w-40 p-4`}>{ text }</Text>
    </TouchableOpacity>
  )
}

