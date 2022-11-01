import { ScrollView } from "react-native";
import React from "react";
import UserName from "../../components/username/UserName";
import Profile from "../../components/profile/Profile";
import Categories from "../../components/categories/Categories";
import Featured from "../../components/featured/Featured";
import tw from "twrnc";

const ContainerHome = ({ navigation }) =>
{
  return (
    <ScrollView style={tw`flex m-2 p-4`}>
      <UserName />
      <Profile navigation={navigation} />
      <Categories  navigation={navigation} />
      <Featured  navigation={navigation} />
    </ScrollView>
  );
};

export default ContainerHome;
