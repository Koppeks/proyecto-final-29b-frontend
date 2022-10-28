import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert';

const Featured = () =>
{
  return (
    <View>
      <Text style={tw`mt-5 text-lg font-bold`}>Destacados</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <CardServsExpert />
        <CardServsExpert />
        <CardServsExpert />
      </ScrollView>
    </View>
  );
};
export default Featured;
