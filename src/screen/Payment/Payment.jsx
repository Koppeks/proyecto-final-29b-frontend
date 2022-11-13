import {useStripe} from '@stripe/stripe-react-native'
import {  Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {CardField}from '@stripe/stripe-react-native'
import { Button } from 'react-native-elements'

export default function Payment() {
const [name, setName] = useState(" ")
const stripe= useStripe()
const handlePayPress= async()=>{
  
}

  return (
    <View>
      <Text>
        <TextInput 
        value={name}
        placeholder="name"
        onChangeText={text=>setName(text)}
        />

        <Button title="pay" 
        onPress={handlePayPress} />

        <CardField/>

      </Text>
    </View>
  )
}