import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const username = ({ navigation }) => {
  const { informationToken } = useSelector((state) => state.informationToken);
  console.log(informationToken);
  const name = informationToken?.fullName;
  console.log("name", name);

  if (informationToken.isProfessional === false) {
    console.log("Es cliente");
  } else {
    console.log("No");
  }
  return (
    <View style={tw`m-5  items-center`}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Profile", {
            name: "Profile",
          })
        }
      >
        <Text style={tw`text-2xl font-bold`}>Hola {name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default username;
