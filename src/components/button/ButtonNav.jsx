import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from "twrnc"
import filtro from '../../images/filtro.png'
import { Image } from 'react-native-elements'

export default function ButtonNav({ navigation })
{
  return (
    <TouchableOpacity
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