import { Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import SelectList from 'react-native-select-dropdown'

export default function SelectFilter()
{
  const RangoPrecio = ["Mayor Precio", "Menor precio"]
  const rating = [1, 2, 3, 4, 5]

  return (

    <View>

      <View style={tw`ml-8 items-center flex-row `}>
        <Text style={tw`font-bold`}> Precio h/ </Text>
        <SelectList
          buttonStyle={tw`font-bold bg-white rounded w-44 h-8 ml-2  border-2 border-indigo-300`}
          dropdownStyle={tw`font-bold bg-white rounded w-44 h-11 ml-2`}
          // buttonTextStyle={tw`font-bold `}
          data={RangoPrecio}
          onSelect={(selectedItem, index) =>
          {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) =>
          {
            return selectedItem
          }}
          rowTextForSelection={(item, index) =>
          {
            return item
          }}
        />
      </View>

      <View style={tw`ml-8 items-center flex-row mt-2`}>
        <Text style={tw`font-bold`}> Rating</Text>
        <SelectList
          buttonStyle={tw`font-bold bg-white rounded w-44 h-8 ml-6 border-2 border-indigo-300`}
          dropdownStyle={tw`font-bold bg-white rounded w-44 h-28 ml-2`}
          data={rating}
          onSelect={(selectedItem, index) =>
          {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) =>
          {
            return selectedItem
          }}
          rowTextForSelection={(item, index) =>
          {
            return item
          }}
        />
      </View>
    </View>
  )
}
