import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Categories = () => {
  return (
    <View>
      <Text style={tw`p-1 mt-5 font-bold text-lg`}>Categorías</Text>
      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity style={tw`flex items-center`}>
          <Entypo name="align-top" size={44} color="black" />
          <Text style={tw`font-bold mt-2`}>Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex items-center`}>
          <AntDesign name="pluscircleo" size={44} color="black" />
          <Text style={tw`font-bold mt-2`}>Max$</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex items-center`}>
          <AntDesign name="minuscircleo" size={44} color="black" />
          <Text style={tw`font-bold mt-2`}>Min$</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex items-center`}>
          <Entypo name="align-bottom" size={44} color="black" />
          <Text style={tw`font-bold mt-2`}>Rating</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
