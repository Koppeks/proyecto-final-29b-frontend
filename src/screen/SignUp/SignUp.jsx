import React from "react"
import { ScrollView, Text, Button } from "react-native"
import tw from "twrnc"
import RegisterForm from "../../containers/RegisterForm/RegisterForm"


const SignUp = ({navigation}) =>
{
  return (
    <ScrollView style={tw`bg-gray-100 border`}>
    <Button 
      title="Vuelve al inicio"
      onPress={()=> navigation.goBack()}
      />
    <RegisterForm/>
  </ScrollView>
  )
}

export default SignUp