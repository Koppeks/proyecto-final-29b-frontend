import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

const username = () =>
{
  return (
    <View style={tw`m-5  items-center`}>
      <Text style={tw`text-2xl font-bold`}>Hola userName!</Text>
    </View>
  );
};

export default username;
