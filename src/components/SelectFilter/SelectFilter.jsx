import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SelectList from 'react-native-select-dropdown'

export default function SelectFilter() {
  const RangoPrecio = ["Mayor Precio", "Menor precio"]
  const rating= [1,2,3,4,5]

  return (

  <View style={tw`z-40  mt-3`}>
    <View style={tw`ml-8 items-center flex-row`}>

    <Text> Precio h/ </Text>
    <SelectList
    
    data={RangoPrecio}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index)
    }}
    buttonTextAfterSelection={(selectedItem, index) => {
      return selectedItem
    }}
    rowTextForSelection={(item, index) => {
      return item
    }}
    />
    </View>
    <View style={tw`ml-8 items-center flex-row`}>
    <Text> Rating</Text>
    <SelectList
      data={rating}
      onSelect={(selectedItem, index) => {
        console.log(selectedItem, index)
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem
      }}
      rowTextForSelection={(item, index) => {
        return item
      }}
      />
       </View>
  </View>
  )
}