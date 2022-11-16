import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { FcBullish, FcBearish, FcCurrencyExchange } from "react-icons/fc";

const Categories = () => {
  return (
    <View>
      <Text style={tw`p-1 mt-5 font-bold text-lg`}>Categorías</Text>
      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity style={tw`flex items-center`}>
          <FcBullish style={tw`w-15 h-15`} />
          <Text style={tw`font-bold mt-2`}>Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex items-center`}>
          <FcCurrencyExchange style={tw`w-15 h-15`} />
          <Text style={tw`font-bold mt-2`}>Max</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex items-center`}>
          <FcCurrencyExchange style={tw`w-15 h-15`} />
          <Text style={tw`font-bold mt-2`}>Min</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex items-center`}>
          <FcBearish style={tw`w-15 h-15`} />
          <Text style={tw`font-bold mt-2`}>Rating</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
