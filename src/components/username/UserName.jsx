import { View, Text,TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const username = ({ navigation }) =>
{
  return (
    <View style={tw`m-5  items-center`}>
      <TouchableOpacity
          onPress={() =>
            navigation.navigate("Profile", {
              name: "Profile",
            })
          }
        >
          <Text style={tw`text-2xl font-bold`}>Hola userName!</Text>
        </TouchableOpacity>
     
    </View>
  );
};

export default username;
