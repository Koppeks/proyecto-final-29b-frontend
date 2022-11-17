import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardAdm from "../../components/CardAdm/CardAdm";
import Search from "../../components/Search/Search";
import SelectFilter from "../../components/SelectFilter/SelectFilter";
import CardsUserAdmin from "../../components/CardAdm/CardsUserAdmin";
import { useIsFocused } from "@react-navigation/native";
import { getPro } from "../../redux/actions";
import { AntDesign } from "@expo/vector-icons";
import tw from "twrnc";

const HomeAdm = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) dispatch(getPro());
  }, [isFocused]);

  return (
    <View style={tw`mt-2`}>
      <View style={tw`flex items-center `}>
        <Text style={tw`text-2xl`}>Bienvenido Admin</Text>
      </View>
      <View style={tw`flex items-center `}>
        <CardAdm />
      </View>
      <View style={tw`flex items-center `}>
        <Search />
      </View>
      <CardsUserAdmin navigation={navigation} />
      <View style={tw`flex items-center`}>
        <AntDesign name="downcircleo" size={24} color="black" />
      </View>
    </View>
  );
};

export default HomeAdm;
