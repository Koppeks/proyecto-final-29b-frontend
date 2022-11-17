import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";

const TakePhotoButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={tw`w-60 h-15 bg-blue-600 justify-center items-center rounded-md`}
        onPress={() => navigation.navigate("TakePhoto")}
      >
        <Text style={tw`font-bold text-white text-lg`}>Tomar Foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TakePhotoButton;
