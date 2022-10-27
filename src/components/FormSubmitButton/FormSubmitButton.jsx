import React from "react";
import { Text, TouchableOpacity } from "react-native";

const FormSubmitButton = props =>{

  const {title, onPress, submitting, error} = props

  const backCol = submitting ? 'rgba:(27,27,51,0.4)' : 'rgba:(27,27,51,1)'
  return(
    <>
      {
        Object.keys(error).length > 0 
        ?
        <TouchableOpacity disabled={true} onPress={submitting ? null : onPress} style={{backCol}}>
          <Text>{title}</Text>
        </TouchableOpacity> 
        : 
        <TouchableOpacity onPress={submitting ? null : onPress} style={{backCol}}>
          <Text>{title}</Text>
        </TouchableOpacity>
      }
    </>
  )
}

export default FormSubmitButton