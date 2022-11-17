import React from 'react'
import { TouchableOpacity } from 'react-native'
import tw from "twrnc"
import filtro from '../../images/filtro.png'
import { Image } from 'react-native-elements'

export default function ButtonNav({ navigation })
{
  return (
    <TouchableOpacity
      style={tw`ml-10`}
      onPress={() =>
        navigation.navigate("Filtros", {
          name: "Filtros",
        })
      }
    >
      <Image source={filtro} style={tw`w-9 h-9`} />
    </TouchableOpacity>
  )
}