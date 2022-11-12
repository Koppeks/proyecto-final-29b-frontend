import React from "react";
import { View, Text, TextInput } from "react-native";
import tw from "twrnc"

const FormInput = props =>{
  const {placeholder, label, error} = props


  return(
      <View style={tw`mt-3 rounded-t-lg w-full`}>
        <View style={tw`flex-row w-full items-center justify-between`}>
            <Text style={tw`ml-2 mb-1 mt-1 text-sm font-medium text-gray-900`}>{label}</Text>
            {error ? (
            <Text style={tw`mr-2 text-red-600`}>{error}</Text>) : null
            }
        </View>
        <TextInput style={tw`border border-gray-400 rounded-lg text-gray-900 w-full p-2`} {...props} placeholder={placeholder} />
      </View>
  )
}

export default FormInput