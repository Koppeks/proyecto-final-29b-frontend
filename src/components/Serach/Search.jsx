
import { View } from 'react-native'
import React from 'react'
import { Button, Input } from 'react-native-elements'
import tw from 'twrnc'



export default function () {

  function searchState(e){
    console.log(e.nativeEvent.text)
  }

  return (
    <View style={tw`flex-row items-baseline justify-between w-40 h-12`}>
      <Input 
      leftIcon={{name:"search"}}
      placeholder='Search...'
      onChange={(e) => searchState(e)}
      style={tw``}
      />
      <Button
      title="Search"/>
    </View>
  )
}