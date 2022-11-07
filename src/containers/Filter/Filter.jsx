import { View } from "react-native";
import React from "react";
import CategoryItems from "../../components/CategoryItems/CategoryItems";
import SelectFilter from "../../components/SelectFilter/SelectFilter";

export default function Filter({ navigation }) {
  return (
    <View>
      <CategoryItems navigation={navigation} />
      <SelectFilter />
    </View>
  );
}
