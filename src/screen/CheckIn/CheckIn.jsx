import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const CheckIn = ({ navigation }) => {
  return (
    <View style={tw`flex h-full justify-center items-center bg-violet-300`}>
      <Text style={tw`m-5 text-4xl`}>Registrate</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={tw`text-center text-2xl text-white bg-blue-500 rounded-lg w-30 p-2`}
        >
          Registro
        </Text>
      </TouchableOpacity>
      <Text>
        Me redirecciona al Home luego del registro del cliente correctamente
      </Text>
    </View>
  );
};

export default CheckIn;
