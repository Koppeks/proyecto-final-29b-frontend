import React from "react"
import { View, TextInput, Text, TouchableHighlight } from "react-native"


const Form = () =>
{
  return (
    <View>
      <Text>Ingrese sus datos aquí</Text>
      <View>
        <Text>Nombre:</Text>
        <TextInput />
      </View>
      <TouchableHighlight>
        <Text>Enviar</Text>
      </TouchableHighlight>
    </View>
  )
}

export default Form