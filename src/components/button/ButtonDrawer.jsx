import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function ButtonDrawer({text,onPress}) {
  return (
 <TouchableOpacity
 onPress={onPress}
 style={tw`p-5 bg-gray-200 mb-5 rounded-lg`}
 >
    <Text> {text} </Text>
 </TouchableOpacity>
  )
}