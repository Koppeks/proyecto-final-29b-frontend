import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Profile = ({ navigation }) =>
{
  return (
    <View style={tw`flex flex-row justify-center`}>
      <View style={tw`flex-1 items-center bg-white rounded-md mr-2 `}>
        <Text style={tw`p-2 text-base`}>Eres empleador?</Text>
        <Text style={tw` font-bold text-xl text-center`}>Contrata a un experto</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Home Cards Professional", {
              name: "Prueba de navegacion",
            })
          }
          style={tw`bg-cyan-300 rounded-full p-2 mb-4 mt-2`}
        >
          <Text style={tw`text-black font-bold mx-1 `}>Ver Expertos &gt;</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1 items-center bg-white rounded-md  ml-2`}>
        <Text style={tw`p-2 text-base`}>Eres un experto?</Text>
        <Text style={tw`font-bold text-xl text-center`}>Postea una profesion</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit Professional Profile", {
              name: "Prueba de navegacion",
            })
          }
          style={tw`bg-cyan-300 rounded-full p-2 mt-2`}
        >
          <Text style={tw`text-black font-bold mx-1`}>Edita Profesion &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
