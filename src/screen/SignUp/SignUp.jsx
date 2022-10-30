import React from "react"
import { ScrollView, Text, Button } from "react-native"
import ProForm from "../../containers/ProForm/ProForm"
import tw from "twrnc"


const SignUp = () =>
{
  return (
    <ScrollView style={tw`bg-gray-100 border`}>
    <Text>EditProfession</Text>
    <Button 
      title="Vuelve al inicio"
      onPress={()=> navigation.goBack()}
      />
    <ProForm/>
  </ScrollView>
  )
}

export default SignUp