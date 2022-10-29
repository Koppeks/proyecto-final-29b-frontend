import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import tw from 'twrnc'


export function Buttons(props) {
  const{ image,onPress}=props
  
  return (
    <TouchableOpacity
     style={tw`shadow-lg w-16 h-16 items-center`}
      onPress={onPress}
      >
      <Image source={image} style={tw`mt-2 w-12 h-12`}/> 
    </TouchableOpacity>
  )
}
