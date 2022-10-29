import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert';

const Featured = ({ navigation }) =>
{
  return (
    <View>
      <Text style={tw`mt-5 text-lg font-bold`}>Destacados</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    

        <CardServsExpert  navigation={navigation}/>
        <CardServsExpert  navigation={navigation}/>
        <CardServsExpert  navigation={navigation}/>
      </ScrollView>
    </View>
  );
};

export default Featured;
