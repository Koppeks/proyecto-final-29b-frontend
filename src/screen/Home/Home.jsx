import { View } from "react-native";
import React from "react";
import ContainerHome from "../../containers/home/ContainerHome";

const Home = ({ navigation }) => {
  return (
    <View>
      <ContainerHome navigation={navigation} />
    </View>
  );
};

export default Home;
