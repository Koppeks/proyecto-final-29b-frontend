import { View } from "react-native";
import React from "react";

import CategoryItems from '../../components/CategoryItems/CategoryItems'

const HomeCardsProfessional = ({navigation}) => {
  return (
    <View>
        <CategoryItems navigation={navigation}/>
      
    </View>
  );
};

export default HomeCardsProfessional;
