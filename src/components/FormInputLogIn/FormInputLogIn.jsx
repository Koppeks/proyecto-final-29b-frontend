import {  Image, Text, TextInput, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'

export default function FormInputLogIn(props) {

const {placeholder, image, value, keyboard,secureTextEntry=true,onChangeText,property}=props

  return (
    <View 
            style={tw` w-70 flex-row mt-10`}
            >
                <Image source={image} style={tw`w-9 h-9`}/>
                <TextInput
                    style={tw` ml-4 border-b-2`}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    keyboardType={keyboard}
                    value={value}
                    onChangeText={text=>onChangeText(property,text)}
                />
                
    </View>
  )
}