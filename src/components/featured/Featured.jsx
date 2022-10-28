import { View, Text, Image, ScrollView,TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import CardServsExpert from '../CardServsExpert/CardServsExpert';
import CardServsExpert from '../CardServsExpert/CardServsExpert';

const Featured = ({navigation} ) =>
{
  return (
    <View>


      <Text style={tw`mt-5`}>Destacados</Text>
      <ScrollView horizontal={true}>
 
        <CardServsExpert navigation={navigation}  />
        <CardServsExpert navigation={navigation} />
        <CardServsExpert navigation={navigation}  />
      </ScrollView>
    </View>
  );
};

export default Featured;
