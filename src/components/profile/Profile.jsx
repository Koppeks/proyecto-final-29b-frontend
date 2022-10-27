import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const Profile = ({ navigation }) => {
  return (
    <View style={tw`flex flex-row justify-center`}>
      <View style={tw`flex-1 items-center`}>
        <Text style={tw`p-2`}>Eres un empleador?</Text>
        <Text style={tw`p-2`}>Contrata a un experto</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Home Cards Professional", {
              name: "Prueba de navegacion",
            })
          }
          style={tw`bg-cyan-600 rounded-full p-2`}
        >
          <Text style={tw`text-white font-bold `}>Ver Expertos &gt;</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-1 items-center`}>
        <Text style={tw`p-2`}>Eres un experto?</Text>
        <Text style={tw`p-2`}>Postea una profesion</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Edit Professional Profile", {
              name: "Prueba de navegacion",
            })
          }
          style={tw`bg-cyan-600 rounded-full p-2`}
        >
          <Text style={tw`text-white font-bold`}>Edita Profesion &gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
