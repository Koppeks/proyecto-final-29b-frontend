import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import logo from "../../images/logo.png";

const LandingPage = ({ navigation }) => {
  return (
    <View style={tw`flex h-full justify-center items-center bg-violet-300`}>
      <View style={tw`flex-row items-center justify-items-stretch`}>
        <Text style={tw`m-5 text-4xl`}>Vinculan</Text>
        <Image style={tw`h-8 w-8`} source={{ uri: logo }} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={tw`text-center text-2xl text-white bg-blue-500 rounded-lg w-30 p-2`}
        >
          Ingresa
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
        <Text style={tw`text-center text-base `}>¿Aun no tienes cuenta?</Text>
      </TouchableOpacity>
      <View
        style={tw`border-solid border-2 border-indigo-600 w-150 mt-5`}
      ></View>
    </View>
  );
};

export default LandingPage;
