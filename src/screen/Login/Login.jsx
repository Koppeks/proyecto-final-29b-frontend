import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Login = ({ navigation }) => {
  return (
    <View style={tw`flex h-full justify-center items-center bg-violet-300`}>
      <View style={tw`flex justify-items-center items-center`}>
        <Text style={tw`m-5 text-4xl`}>Login</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
          <Text
            style={tw`text-center text-2xl text-white bg-blue-500 rounded-lg w-30 p-2`}
          >
            Ingresar
          </Text>
        </TouchableOpacity>
        <Text>
          Me redirecciona al Home luego del logeo del cliente correctamente
        </Text>
      </View>
      <View style={tw`flex justify-items-center items-center`}>
        <TouchableOpacity onPress={() => navigation.navigate("Registro")}>
          <Text style={tw`text-center text-base `}>¿Aun no tienes cuenta?</Text>
        </TouchableOpacity>
        <Text>Me redirecciona al formulario de registro</Text>
      </View>
    </View>
  );
};

export default Login;
