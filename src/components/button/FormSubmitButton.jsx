import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc"

const FormSubmitButton = props =>{
  const { title, onPress, submitting, error } = props
  return (
    <>
      {
        Object.keys(error).length > 0
          ?
          <TouchableOpacity disabled={true} onPress={submitting ? null : onPress} style={tw`flex items-center w-full pt-7`}>
            <Text style={tw`text-center text-base text-white bg-gray-400 rounded-lg w-40 p-4`}>{title}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={submitting ? null : onPress} style={tw`flex items-center w-full pt-7`}>
            <Text style={tw`text-center text-base text-white bg-blue-500 rounded-lg w-40 p-4`}>{title}</Text>
          </TouchableOpacity>
      }
    </>
  )
}

export default FormSubmitButton