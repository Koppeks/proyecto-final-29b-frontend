import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Select from 'react-select'

export default function SelectFilter() {
    const options1 = [
        { value: 'menor precio', label: 'menor precio' },
        { value: 'mayor precio', label: 'mayor precio' },
      ]
      const options2 = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
       
      ]
  return (
    <View style={tw`z-40 flex-row mt-3`}>

    <View style={tw`ml-8 items-center flex-row`}>
    <Text>Precio/h </Text>

    <Select options={options1} />

    </View>
    <View style={tw`ml-8 items-center flex-row`}>
    <Text>Rating </Text>
    <Select options={options2} />
    </View>
    
    </View>
  )
}