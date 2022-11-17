import { TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import tw from "twrnc";

const CameraButton = ({ onPress, icon, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw``}>
      <Entypo name={icon} size={28} color={color ? color : "#f1f1f1"} />
    </TouchableOpacity>
  );
};

export default CameraButton;
