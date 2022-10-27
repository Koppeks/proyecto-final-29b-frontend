import React from "react";
import { View, Text, TextInput } from "react-native";

const FormInput = props =>{
  const {placeholder, label, error} = props
  return(
      <>
        <View>
            <Text>{label}</Text>
            {error ? (
            <Text style={{color: "red", fontWeight: "bold"}}>{error}</Text>) : null
            }
        </View>
        <TextInput {...props} placeholder={placeholder} />
      </>
  )
}

export default FormInput