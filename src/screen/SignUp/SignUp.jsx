import React from "react"
import { ScrollView, Text, Button } from "react-native"
import RegisterForm from "../../containers/RegisterForm/RegisterForm"
import tw from "twrnc"


const SignUp = ({ navigation }) =>
{
  return (
    <ScrollView style={tw`bg-gray-100 border`}>
    <Button 
      style={tw`w-10`}
      title="<<"
      onPress={()=> navigation.goBack()}
      />
    <RegisterForm/>
  </ScrollView>
  )
}

export default SignUp