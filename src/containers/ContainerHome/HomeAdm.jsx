import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardAdm from "../../components/CardAdm/CardAdm";
import Search from "../../components/Search/Search";
import SelectFilter from "../../components/SelectFilter/SelectFilter";
import CardsUserAdmin from "../../components/CardAdm/CardsUserAdmin";
import tw from "twrnc";

const HomeAdm = ({ navigation }) => {
  return (
    <View style={tw`mt-10`}>
      <View style={tw`flex items-center `}>
        <Text style={tw`text-2xl`}>Bienvenido Admin</Text>
      </View>
      <View style={tw`flex items-center `}>
        <CardAdm />
      </View>
      <View style={tw`flex items-center `}>
        <Search />
      </View>
      <SelectFilter />
      <CardsUserAdmin navigation={navigation} />
    </View>
  );
};

export default HomeAdm;
