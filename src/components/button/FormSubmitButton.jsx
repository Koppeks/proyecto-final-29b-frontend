import React from "react";
import { Text, TouchableOpacity } from "react-native";
import tw from "twrnc"

const FormSubmitButton = props =>
{
  const { title, onPress, submitting, error } = props
  return (
    <>
      {
        Object.keys(error).length > 0
          ?
          <TouchableOpacity disabled={true} onPress={submitting ? null : onPress} style={tw`flex items-center justify-center bg-gray-400 rounded-lg w-60 m-3`}>
            <Text style={tw`text-center text-base text-white p-4`}>{title}</Text>
          </TouchableOpacity>
          :
          submitting ?
            <TouchableOpacity disabled={true} style={tw`flex items-center justify-center bg-gray-400 rounded-lg w-60 m-3`}>
              <Text style={tw`text-center text-base text-white p-4`}>{title} ...</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={onPress} style={tw`flex items-center justify-center bg-blue-500 rounded-lg w-60 m-3`}>
              <Text style={tw`text-center text-base text-white p-4`}>{title}</Text>
            </TouchableOpacity>
      }
    </>
  )
}

export default FormSubmitButton