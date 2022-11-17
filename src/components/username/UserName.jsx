import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { Image } from "react-native";

const username = ({ navigation }) => {
  const dispatch = useDispatch();

  const { informationToken } = useSelector((state) => state.informationToken);
  // console.log(informationToken);
  const name = informationToken?.fullName;
  // console.log("name", name);
  // const image= informationToken?.image;

  // if (informationToken.isProfessional === false) {
  //   console.log("Es cliente");
  // } else {
  //   console.log("No");
  // }
  return (
    <View style={tw`mb-7  items-center`}>
      <TouchableOpacity
      style={tw`flex-row`}
        onPress={() =>
          navigation.navigate("Profile", {
            name: "Profile",
          })
        }
      >
        <Text style={tw`text-2xl font-bold`}>Hola {name}</Text>
        <Image style={tw`  rounded-full w-9 h-9 ml-3`} source={{uri: informationToken?.image}} />

      </TouchableOpacity>
    </View>
  );
};

export default username;
