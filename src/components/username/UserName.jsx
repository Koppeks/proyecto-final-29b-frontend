import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getProPerfil } from './../../redux/actions/index';

const username = ({ navigation }) => {
  const dispatch = useDispatch();

  const { informationToken } = useSelector((state) => state.informationToken);
  const { professionalPerfil } = useSelector((state) => state.professional);


  const name = informationToken?.fullName;
  console.log("name", name);
  useEffect(() => {
    dispatch(getProPerfil(informationToken.id));
  
  }, [dispatch]);

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
        <Text style={tw`text-2xl font-bold`}>Hola {professionalPerfil.fullName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default username;
