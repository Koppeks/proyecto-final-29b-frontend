import { View, Text, Image } from "react-native";
import React from "react";
import admin from "../../images/admin.jpg";
import tw from "twrnc";

const CardAdm = () => {
  return (
    <View
      style={tw`flex items-center w-40 m-4 border-4 border-indigo-500/50 rounded-lg`}
    >
      <Image style={tw`w-20 h-20  m-2 border-2 rounded-full`} source={admin} />
      <Text style={tw`m-2`}>Nombre del Admin</Text>
    </View>
  );
};

export default CardAdm;
