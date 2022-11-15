import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import logo from "../../images/logo.png";
import google from "../../images/google-logo.png";

const LandingPage = ({ navigation }) =>
{
  return (
    <View style={tw`flex h-full justify-center items-center bg-white`}>
      <View style={tw`flex-row items-center mb-12`}>
        <Image style={tw`h-12 w-12`} source={logo} />
        <Text style={tw`m-5 font-bold text-4xl`}>Vinculando</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={tw`rounded mb-2 bg-blue-500 `}>
          <Text style={tw`text-center text-lg text-white  w-48 p-2`}>Ingresar con correo</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={tw`text-center text-base mb-6`}>¿Aun no tienes cuenta?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={tw` flex-row bg-white rounded w-72 p-2 mt-4 border-2 border-black`}>
          <Image style={tw`h-8 w-8 ml-2 mr-2`} source={google} />
          <Text style={tw`text-center text-lg text-black `}>Iniciar sesión con Google</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
};

export default LandingPage;
