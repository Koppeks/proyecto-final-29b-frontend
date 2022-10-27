import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert';

const Featured = () =>
{
  return (
    <View>
      <Text style={tw`mt-5`}>Destacados</Text>
      <ScrollView horizontal={true}>
        <CardServsExpert />
        <CardServsExpert />
        <CardServsExpert />
      </ScrollView>
    </View>
  );
};

export default Featured;
