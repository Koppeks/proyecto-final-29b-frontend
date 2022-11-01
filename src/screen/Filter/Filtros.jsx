import { View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import Filter from '../../containers/Filter/Filter'



export default function Filtros({navigate}) { 
    return (
    <View style={tw`flex justify-items-center`}>
      <Filter/>
    </View>
  )
}

