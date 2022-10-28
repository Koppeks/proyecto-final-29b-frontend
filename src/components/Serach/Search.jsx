import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import tw from 'twrnc'



export default function () {
  return (
    <View style={tw`flex-row items-center w-75 pl-2 pr-20`}>
    <Input 
    leftIcon={{type:"feather",name:"search"}}
    placeholder='Search...'
    />
    <Button
    style={tw`w-16 h-10`}
    title="Search"/>

  </View>
  )
}